import re
import json

with open(r'e:\raje-maharaje.com\src\data\products.js', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = re.findall(r'\{\s*id:\s*"([^"]+)",(.*?)\n  \},?', content, re.DOTALL)

for i, (pid, body) in enumerate(blocks, 1):
    title_m = re.search(r'title:\s*"([^"]+)"', body)
    cat_m = re.search(r'category:\s*"([^"]+)"', body)
    col_m = re.search(r'colors:\s*\[\{\s*name:\s*"([^"]+)"', body)
    img_m = re.search(r'image:\s*"([^"]+)"', body)
    sec_m = re.search(r'secondaryImage:\s*"([^"]+)"', body)
    badge_m = re.search(r'badge:\s*"([^"]+)"', body)
    
    title = title_m.group(1) if title_m else ""
    cat = cat_m.group(1) if cat_m else ""
    col = col_m.group(1) if col_m else ""
    img = img_m.group(1) if img_m else ""
    sec = sec_m.group(1) if sec_m else ""
    badge = badge_m.group(1) if badge_m else ""
    
    print(f"{i}. [{pid}]")
    print(f"   Title: {title} | Color: {col} | Cat: {cat} | Badge: {badge}")
    print(f"   Image: {img}")
    print(f"   Sec:   {sec}")
