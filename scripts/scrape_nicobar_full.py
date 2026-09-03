import os
import json
import re
import urllib.parse
import requests
from bs4 import BeautifulSoup

SDO_TOKEN = "b5551041c48741c6980d315936804ee69367194d405"
FC_KEY = "fc-455de8c10c4d4f4da285ed450b093955"
FC_HEADERS = {"Authorization": f"Bearer {FC_KEY}", "Content-Type": "application/json"}

PROD_IMG_DIR = os.path.join("public", "images", "nicobar", "products")
EDITORIAL_IMG_DIR = os.path.join("public", "images", "nicobar", "editorial")
os.makedirs(PROD_IMG_DIR, exist_ok=True)
os.makedirs(EDITORIAL_IMG_DIR, exist_ok=True)
DATA_DIR = os.path.join("src", "data")
os.makedirs(DATA_DIR, exist_ok=True)

def fetch_sdo(url):
    target = f"https://api.scrape.do?token={SDO_TOKEN}&url={urllib.parse.quote(url)}"
    try:
        r = requests.get(target, timeout=30)
        if r.status_code == 200:
            return r
    except Exception as e:
        print(f"Scrape.do error for {url}: {e}")
    return None

def fetch_firecrawl(url):
    try:
        r = requests.post("https://api.firecrawl.dev/v1/scrape", json={"url": url, "formats": ["markdown"]}, headers=FC_HEADERS, timeout=40)
        d = r.json()
        if d.get("success"):
            return d.get("data", {}).get("markdown", "")
    except Exception as e:
        print(f"Firecrawl error for {url}: {e}")
    return ""

def download_img(url, folder, filename):
    if not url:
        return ""
    if url.startswith("//"):
        url = "https:" + url
    dest = os.path.join(folder, filename)
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        return "/" + dest.replace("\\", "/")
    try:
        r = requests.get(url, timeout=20)
        if r.status_code == 200:
            with open(dest, "wb") as f:
                f.write(r.content)
            return "/" + dest.replace("\\", "/")
    except Exception as e:
        print(f"Failed to download image {url}: {e}")
    return url

def clean_html(raw_html):
    if not raw_html:
        return ""
    soup = BeautifulSoup(raw_html, "html.parser")
    return soup.get_text(" ", strip=True)

def scrape_collections():
    print("\n--- SCRAPING NICOBAR COLLECTIONS ---")
    categories = [
        {"id": "women", "name": "Women", "url": "https://www.nicobar.com/collections/all-women/products.json?limit=30"},
        {"id": "men", "name": "Men", "url": "https://www.nicobar.com/collections/all-men/products.json?limit=30"},
        {"id": "living", "name": "Living", "url": "https://www.nicobar.com/collections/all-home/products.json?limit=30"},
        {"id": "gifting", "name": "Gifting", "url": "https://www.nicobar.com/collections/best-of-nicobar-gifts/products.json?limit=30"}
    ]

    all_products = []
    seen_ids = set()

    for cat in categories:
        print(f"Scraping category: {cat['name']}...")
        resp = fetch_sdo(cat["url"])
        if not resp:
            print(f"Failed to fetch {cat['name']}")
            continue
        try:
            data = resp.json()
            prods = data.get("products", [])
            print(f"Found {len(prods)} products in {cat['name']}")

            for idx, p in enumerate(prods):
                p_id = str(p.get("id"))
                if p_id in seen_ids:
                    continue
                seen_ids.add(p_id)

                title = p.get("title", "")
                handle = p.get("handle", "")
                product_type = p.get("product_type", cat["name"])
                tags = p.get("tags", [])
                if isinstance(tags, str):
                    tags = [t.strip() for t in tags.split(",")]

                variants = p.get("variants", [])
                first_var = variants[0] if variants else {}
                price_str = first_var.get("price", "0")
                compare_str = first_var.get("compare_at_price")
                try:
                    price = float(price_str)
                except:
                    price = 0.0
                try:
                    compare_price = float(compare_str) if compare_str else None
                except:
                    compare_price = None

                images = p.get("images", [])
                local_images = []
                for i_idx, img_obj in enumerate(images[:2]):
                    src = img_obj.get("src", "")
                    if src:
                        fname = f"{handle}_{i_idx}.jpg"
                        local_path = download_img(src, PROD_IMG_DIR, fname)
                        local_images.append(local_path)

                primary_img = local_images[0] if local_images else ""
                hover_img = local_images[1] if len(local_images) > 1 else primary_img
                desc = clean_html(p.get("body_html", ""))

                all_products.append({
                    "id": p_id,
                    "handle": handle,
                    "title": title,
                    "category": cat["id"],
                    "department": cat["id"],
                    "product_type": product_type,
                    "priceINR": price,
                    "originalPriceINR": compare_price,
                    "image": primary_img,
                    "hoverImage": hover_img,
                    "gallery": local_images,
                    "description": desc,
                    "tags": tags,
                    "variants": [{"id": v.get("id"), "title": v.get("title"), "price": v.get("price"), "available": v.get("available")} for v in variants],
                    "inStock": any(v.get("available", True) for v in variants) if variants else True
                })
        except Exception as e:
            print(f"Error parsing {cat['name']}: {e}")

    output_path = os.path.join(DATA_DIR, "nicobar_catalog.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(all_products, f, indent=2)
    print(f"Successfully saved {len(all_products)} products to {output_path}")
    return all_products

def scrape_editorial():
    print("\n--- SCRAPING NICOBAR EDITORIAL PAGES WITH FIRECRAWL ---")
    pages = {
        "about_us": "https://www.nicobar.com/pages/about-us",
        "in_the_press": "https://www.nicobar.com/pages/in-the-press",
        "stores": "https://www.nicobar.com/pages/stores",
        "gifting_concierge": "https://www.nicobar.com/pages/gifting-concierge",
        "shipping_returns": "https://www.nicobar.com/pages/shipping-returns",
        "contact_us": "https://www.nicobar.com/pages/contact-us"
    }

    results = {}
    for key, url in pages.items():
        print(f"Fetching {key} via Firecrawl...")
        md = fetch_firecrawl(url)
        results[key] = {
            "url": url,
            "markdown": md
        }

    output_path = os.path.join(DATA_DIR, "nicobar_editorial.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print(f"Saved editorial pages to {output_path}")

if __name__ == "__main__":
    scrape_collections()
    scrape_editorial()
