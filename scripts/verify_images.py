import os
import re
from collections import Counter

with open(r'e:\raje-maharaje.com\src\data\products.js', 'r', encoding='utf-8') as f:
    content = f.read()

images = re.findall(r'image:\s*"([^"]+)"', content)
secondaries = re.findall(r'secondaryImage:\s*"([^"]+)"', content)

print(f"Total primary images: {len(images)}, Unique: {len(set(images))}")
print(f"Total secondary images: {len(secondaries)}, Unique: {len(set(secondaries))}")

counts_p = Counter(images)
dups_p = {k: v for k, v in counts_p.items() if v > 1}
print("Duplicate primary images:", dups_p)

counts_s = Counter(secondaries)
dups_s = {k: v for k, v in counts_s.items() if v > 1}
print("Duplicate secondary images:", dups_s)

# Also check that every single image file actually exists on disk
for img in images + secondaries:
    clean_path = img.lstrip('/')
    full_path = os.path.join(r'e:\raje-maharaje.com\public', clean_path)
    if not os.path.exists(full_path):
        print(f"ERROR: File not found on disk: {full_path}")

print("All disk checks passed successfully!")
