import os
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

TARGET_URL = "http://www.p-memories.com/card_product_list_page?field_title_nid=935073-%E3%81%8B%E3%81%90%E3%82%84%E6%A7%98%E3%81%AF%E5%91%8A%E3%82%89%E3%81%9B%E3%81%9F%E3%81%84%EF%BD%9E%E5%A4%A9%E6%89%8D%E3%81%9F%E3%81%A1%E3%81%AE%E6%81%8B%E6%84%9B%E9%A0%AD%E8%84%B3%E6%88%A6%EF%BD%9E&s_flg=on"

SAVE_DIR = "爬蟲(未分類)"

BASE_URL = "http://www.p-memories.com"

# ============================================================

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


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
    """判斷 <a> 的 class 是否以 cardPreview 開頭（同時支援 cardPreview 與 cardPreviewRotate）"""
    classes = tag.get("class")
    if not classes:
        return False
    if isinstance(classes, str):
        classes = [classes]
    return any(cls.startswith("cardPreview") for cls in classes)


def main():
    
    os.makedirs(SAVE_DIR, exist_ok=True)

    print(f"🚀 正在連線至：{TARGET_URL}")
    res = requests.get(TARGET_URL, headers=HEADERS, timeout=15)
    res.encoding = res.apparent_encoding

    if res.status_code != 200:
        print(f"❌ 連線失敗，狀態碼：{res.status_code}")
        return

    soup = BeautifulSoup(res.text, "lxml")

    previews = [a for a in soup.find_all("a") if is_card_preview(a)]
    print(f"🎯 共找到 {len(previews)} 個 cardPreview 標籤\n")

    if not previews:
        print("⚠️ 找不到 cardPreview，可能這一頁是 JavaScript 動態產生的。")
        print("   請在 DevTools → Network → Doc 中查看哪個請求回傳了含 cardPreview 的 HTML。")
        return

    success = 0
    for i, a in enumerate(previews, 1):
        src = a.get("src")
        if not src:
            continue

        full_url = urljoin(BASE_URL, src)

        print(f"[{i}/{len(previews)}] {full_url}")
        if download_image(full_url, SAVE_DIR):
            success += 1

        time.sleep(0.05)  

    print(f"\n🎉 完成！本次成功下載 {success} 張圖片，存放於：{SAVE_DIR}")


if __name__ == "__main__":
    main()