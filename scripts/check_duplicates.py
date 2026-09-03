import os
import re

with open(r'e:\raje-maharaje.com\src\data\products.js', 'r', encoding='utf-8') as f:
    content = f.read()

pids = set(re.findall(r'\{\s*id:\s*"([^"]+)"', content))
files = os.listdir(r'e:\raje-maharaje.com\public\images\products')

used = set()
for p in pids:
    used.add(f"{p}_primary.png")
    used.add(f"{p}_detail.png")

unused = [f for f in files if f not in used]
print(f"Total files in public/images/products: {len(files)}")
print(f"Unused files in public/images/products: {len(unused)}")
for f in sorted(unused):
    print("  ", f)
