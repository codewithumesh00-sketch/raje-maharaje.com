import re
import shutil

backup_path = r'e:\raje-maharaje.com\src\data\products.js.backup'
file_path = r'e:\raje-maharaje.com\src\data\products.js'

shutil.copyfile(file_path, backup_path)
print(f"Backed up to {backup_path}")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find product blocks and replace image and secondaryImage
def replace_product_images(match):
    block = match.group(0)
    pid_m = re.search(r'id:\s*"([^"]+)"', block)
    if not pid_m:
        return block
    pid = pid_m.group(1)
    
    # Replace image
    block = re.sub(r'image:\s*"[^"]+"', f'image: "/images/products/{pid}_primary.png"', block)
    # Replace secondaryImage
    block = re.sub(r'secondaryImage:\s*"[^"]+"', f'secondaryImage: "/images/products/{pid}_detail.png"', block)
    return block

# Match each object { id: ..., ... }
# Note each product starts with id:
updated_content = re.sub(r'\{\s*id:\s*"[^"]+",.*?\n  \},?', replace_product_images, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Successfully updated src/data/products.js!")
