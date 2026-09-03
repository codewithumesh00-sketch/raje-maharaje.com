import os
from PIL import Image
import numpy as np

images = [
    'public/images/hero_chikankari_4k.png',
    'public/images/royal_bandhgala_pink_4k.png',
    'public/images/craft_fan_squares_4k.png',
    'public/images/craft_ikat_layers_4k.png',
    'public/images/craft_raw_silks_4k.png',
    'public/images/craft_rolled_rosettes_4k.png',
    'public/images/hero_boxes_4k.png',
    'public/images/regal_gift_boxes_1787645456584.jpg',
    'public/images/sartorial_essentials_product_4k.jpg',
    'public/images/rajemaharaje_hero_craft_4k.jpg',
    'public/images/ChatGPT Image Aug 25, 2026, 02_50_00 PM-Photoroom.png',
    'public/images/ChatGPT Image Aug 25, 2026, 02_57_46 PM-Photoroom.png',
    'public/images/ChatGPT Image Aug 25, 2026, 03_00_18 PM-Photoroom.png',
]

for p in images:
    if os.path.exists(p):
        im = Image.open(p).convert('RGB')
        # save a small 200x200 thumb in a temp directory or scripts
        os.makedirs('scripts/thumbs', exist_ok=True)
        fname = os.path.basename(p).replace(' ', '_').replace(',', '')
        thumb_name = f"scripts/thumbs/{fname}.jpg"
        im.resize((200, int(200 * im.size[1] / im.size[0]))).save(thumb_name)
        arr = np.array(im)
        print(f"{fname}: {im.size} -> mean RGB: {arr.mean(axis=(0,1)).astype(int)}")

print("Done creating thumbs")
