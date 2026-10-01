import os
import time
import random
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# ============================================================
# ★★★ 只需要改這三個地方 ★★★
# ============================================================

# 1️⃣ 總列表頁網址（你要從哪一頁抓出所有系列連結）
LIST_URL = "http://www.p-memories.com/card_product_list_page"

# 2️⃣ 總列表頁中，包住所有系列連結的那個 <ul> 的 selector
#    例如 id="foo" 就寫 "#foo"；class="bar" 就寫 ".bar"
#    若不知道，可先印出所有 <ul> 的 id/class 來找
UL_SELECTOR = "ul.productlist"   # ← 改成你實際的那個 ul

# 3️⃣ 圖片要存到哪個母資料夾（每個系列會在其中建立子資料夾）
SAVE_ROOT = "爬蟲(未分類)"

# 圖片網址的來源網站（通常不用改）
BASE_URL = "http://www.p-memories.com"

# ============================================================

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


def sanitize_folder_name(name):
    """清掉 Windows 不允許的資料夾字元"""
    for ch in '\\/:*?"<>|':
        name = name.replace(ch, "_")
    return name.strip() or "untitled"


def download_image(img_url, folder_path):
    """下載單張圖片，回傳 True/False"""
    filename = os.path.basename(img_url.split("?")[0])
    file_path = os.path.join(folder_path, filename)

    if os.path.exists(file_path):
        print(f"  ⏭️  已存在，跳過：{filename}")
        return False

    try:
        res = requests.get(img_url, headers=HEADERS, timeout=10)
        if res.status_code == 200:
            with open(file_path, "wb") as f:
                f.write(res.content)
            return True
        else:
            print(f"  ❌ HTTP {res.status_code} - {img_url}")
    except Exception as e:
        print(f"  ❌ 下載失敗 ({filename}): {e}")
    return False


def is_card_preview(tag):
    """判斷 <a> 的 class 是否以 cardPreview 開頭"""
    classes = tag.get("class")
    if not classes:
        return False
    if isinstance(classes, str):
        classes = [classes]
    return any(cls.startswith("cardPreview") for cls in classes)


def get_series_links(list_url, ul_selector):
    """從總列表頁抓出 (系列名稱, 完整網址) 的清單，自動去重"""
    print(f"🚀 讀取總列表頁：{list_url}")
    res = requests.get(list_url, headers=HEADERS, timeout=15)
    res.encoding = res.apparent_encoding

    if res.status_code != 200:
        print(f"❌ 總列表頁連線失敗，狀態碼：{res.status_code}")
        return []

    soup = BeautifulSoup(res.text, "lxml")

    ul = soup.select_one(ul_selector)
    if ul is None:
        print(f"⚠️ 找不到 selector：{ul_selector}")
        print("   以下是頁面上所有 <ul> 的 id / class，請從中挑選正確的：")
        for i, u in enumerate(soup.find_all("ul"), 1):
            print(f"   [{i}] id={u.get('id')!r} class={u.get('class')!r}")
        return []

    series = []
    seen_urls = set()

    for a in ul.find_all("a", href=True):
        href = a["href"]
        title = a.get_text(strip=True)
        if not title or not href:
            continue

        full_url = urljoin(BASE_URL, href)

        if full_url in seen_urls:
            continue
        seen_urls.add(full_url)

        series.append((title, full_url))

    print(f"🎯 共找到 {len(series)} 個不重複的系列\n")
    return series


def crawl_series(series_name, series_url):
    """進入單一系列頁，下載所有 cardPreview 圖片到以系列名命名的資料夾"""
    folder_name = sanitize_folder_name(series_name)
    folder_path = os.path.join(SAVE_ROOT, folder_name)
    os.makedirs(folder_path, exist_ok=True)

    print(f"📂 [{folder_name}] 進入：{series_url}")

    try:
        res = requests.get(series_url, headers=HEADERS, timeout=15)
        res.encoding = res.apparent_encoding
    except Exception as e:
        print(f"   ❌ 連線失敗：{e}")
        return

    if res.status_code != 200:
        print(f"   ❌ HTTP {res.status_code}")
        return

    soup = BeautifulSoup(res.text, "lxml")
    previews = [a for a in soup.find_all("a") if is_card_preview(a)]
    print(f"   🎯 找到 {len(previews)} 個 cardPreview")

    if not previews:
        print("   ⚠️ 找不到 cardPreview，這一頁可能是 JS 動態產生。")
        return

    success = 0
    seen_src = set()

    for i, a in enumerate(previews, 1):
        src = a.get("src")
        if not src:
            continue

        full_url = urljoin(BASE_URL, src)

        if full_url in seen_src:
            continue
        seen_src.add(full_url)

        print(f"   [{i}/{len(previews)}] {full_url}")
        if download_image(full_url, folder_path):
            success += 1

        time.sleep(random.uniform(0.1, 0.3))

    print(f"   ✅ [{folder_name}] 本次成功下載 {success} 張\n")


def main():
    os.makedirs(SAVE_ROOT, exist_ok=True)

    series_list = get_series_links(LIST_URL, UL_SELECTOR)
    if not series_list:
        print("⚠️ 沒有取得任何系列連結，程式結束。")
        return

    for idx, (name, url) in enumerate(series_list, 1):
        print(f"▓▒░ ({idx}/{len(series_list)}) 系列：{name}")
        crawl_series(name, url)

    print("🎉 全部完成！")


if __name__ == "__main__":
    main()