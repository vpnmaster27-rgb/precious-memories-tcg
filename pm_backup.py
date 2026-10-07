import os
import time
import random
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

LIST_URL = "http://www.p-memories.com/card_product_list_page"

UL_SELECTOR = "ul.productlist"

SAVE_ROOT = "效果"

BASE_URL = "http://www.p-memories.com"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


def sanitize_filename(name):
    """清掉 Windows 不允許的檔名字元"""
    for ch in '\\/:*?"<>|':
        name = name.replace(ch, "_")
    return name.strip() or "untitled"


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


def crawl_series_text(series_name, series_url):
    """
    進入單一系列頁，對每一列 <tr> 產生兩個檔案：
    1. {卡號}-{卡名}.txt   → 內容是テキスト（最右邊的 <td>）
    2. {卡號}-info.txt     → 內容是其他所有 <td>，用空格分隔
    """
    folder_name = sanitize_filename(series_name)
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

    trs = soup.find_all("tr")
    saved = 0

    for tr in trs:
        tds = tr.find_all("td")
        if not tds:
            continue

        # 最右邊的 <td>（テキスト）
        last_text = tds[-1].get_text(strip=True)

        # 至少要有 6 欄才足以取到卡號與卡名
        if len(tds) < 6:
            continue

        card_no = tds[1].get_text(strip=True)    # 卡號
        card_name = tds[5].get_text(strip=True)  # 卡名

        if not card_no:
            continue

        # ---------- 檔案 1：卡號-卡名.txt（內容＝テキスト） ----------
        stem1 = f"{card_no}-{card_name}" if card_name else card_no
        safe1 = sanitize_filename(stem1)
        path1 = os.path.join(folder_path, f"{safe1}.txt")
        with open(path1, "w", encoding="utf-8") as f:
            f.write(last_text)

        # ---------- 檔案 2：卡號-info.txt（內容＝其他所有 td，用空格分隔） ----------
        info_parts = []
        for i, td in enumerate(tds):
            if i == len(tds) - 1:   # 跳過最右邊的テキスト
                continue
            text = td.get_text(strip=True)
            info_parts.append(text if text else "-")   # 空的用 "-" 佔位

        info_content = " ".join(info_parts)

        stem2 = f"{card_no}-info"
        safe2 = sanitize_filename(stem2)
        path2 = os.path.join(folder_path, f"{safe2}.txt")
        with open(path2, "w", encoding="utf-8") as f:
            f.write(info_content)

        saved += 1

    if saved == 0:
        print("   ⚠️ 沒有抓到任何 <td> 文字，這一頁可能是 JS 動態產生。")
    else:
        print(f"   📝 已寫入 {saved * 2} 個 txt 檔（{saved} 張卡 × 2） → {folder_path}\n")


def main():
    os.makedirs(SAVE_ROOT, exist_ok=True)

    series_list = get_series_links(LIST_URL, UL_SELECTOR)
    if not series_list:
        print("⚠️ 沒有取得任何系列連結，程式結束。")
        return

    for idx, (name, url) in enumerate(series_list, 1):
        print(f"▓▒░ ({idx}/{len(series_list)}) 系列：{name}")
        crawl_series_text(name, url)

    print("🎉 全部完成！")


if __name__ == "__main__":
    main()