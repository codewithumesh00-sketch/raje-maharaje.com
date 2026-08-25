import os
import cv2
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw, ImageOps

os.makedirs('public/images/products', exist_ok=True)

# Load master images
fan_img = Image.open('public/images/craft_fan_squares_4k.png').convert('RGB')
ikat_img = Image.open('public/images/craft_ikat_layers_4k.png').convert('RGB')
raw_img = Image.open('public/images/craft_raw_silks_4k.png').convert('RGB')
rosette_img = Image.open('public/images/craft_rolled_rosettes_4k.png').convert('RGB')
chikankari_img = Image.open('public/images/hero_chikankari_4k.png').convert('RGB')
boxes_img = Image.open('public/images/hero_boxes_4k.png').convert('RGB')
boxes_duo = Image.open('public/images/regal_gift_boxes_1787645456584.jpg').convert('RGB')

TARGET_SIZE = (2400, 2400)

def crop_and_scale(im, crop_box, size=TARGET_SIZE):
    cropped = im.crop(crop_box)
    return cropped.resize(size, Image.Resampling.LANCZOS)

def color_grade_silk(base_crop, tint_rgb, intensity=0.75, contrast=1.1, brightness=1.05):
    arr = np.array(base_crop, dtype=np.float32)
    gray = 0.299 * arr[:, :, 0] + 0.587 * arr[:, :, 1] + 0.114 * arr[:, :, 2]
    
    t_r, t_g, t_b = tint_rgb
    out = np.zeros_like(arr)
    norm_gray = (gray / 255.0) ** 0.95
    out[:, :, 0] = norm_gray * t_r
    out[:, :, 1] = norm_gray * t_g
    out[:, :, 2] = norm_gray * t_b
    
    blended = (1.0 - intensity) * arr + intensity * out
    img = Image.fromarray(np.clip(blended, 0, 255).astype(np.uint8))
    
    if contrast != 1.0:
        img = ImageEnhance.Contrast(img).enhance(contrast)
    if brightness != 1.0:
        img = ImageEnhance.Brightness(img).enhance(brightness)
    
    # Hand-rolled French silk hem border
    draw = ImageDraw.Draw(img)
    w, h = img.size
    hem_color = (int(t_r * 0.9), int(t_g * 0.9), int(t_b * 0.9))
    gold_stitch = (220, 185, 120)
    for i in range(12):
        draw.rectangle([i, i, w-1-i, h-1-i], outline=gold_stitch if i in [2, 3] else hem_color, width=1)
    
    return img

def create_macro_secondary(primary_img):
    w, h = primary_img.size
    # Center-diagonal zoom macro crop
    cx, cy = int(w * 0.5), int(h * 0.5)
    r = int(w * 0.35)
    macro = primary_img.crop((cx - r, cy - r, cx + r, cy + r)).resize((w, h), Image.Resampling.LANCZOS)
    macro = ImageEnhance.Sharpness(macro).enhance(1.2)
    return macro

fw, fh = fan_img.size
iw, ih = ikat_img.size
rw, rh = raw_img.size
cw, ch = chikankari_img.size
row, roh = rosette_img.size
bw, bh = boxes_img.size

# Catalog definitions
product_specs = [
    # Gift sets
    {
        'id': 'maharaje-grand-gift-chest',
        'type': 'box_grand',
        'crop': (0, 0, bw, bh),
        'src': boxes_img
    },
    {
        'id': 'raje-duo-keepsake-box',
        'type': 'box_duo',
        'crop': (0, 0, boxes_duo.size[0], boxes_duo.size[1]),
        'src': boxes_duo
    },
    {
        'id': 'imperial-quad-celebration-suite',
        'type': 'box_quad',
        'crop': (int(bw*0.1), int(bh*0.05), int(bw*0.95), int(bh*0.95)),
        'src': boxes_img
    },
    # Tanchoi brocades
    {
        'id': 'tanchoi-brocade-pocket-square-blue',
        'tint': (20, 75, 175), # Royal Sapphire
        'src': fan_img,
        'crop': (int(fw*0.02), int(fh*0.05), int(fw*0.52), int(fh*0.55)),
        'intensity': 0.7
    },
    {
        'id': 'tanchoi-brocade-pocket-square-crimson',
        'tint': (185, 20, 45), # Crimson Ruby Zari
        'src': fan_img,
        'crop': (int(fw*0.48), int(fh*0.05), int(fw*0.98), int(fh*0.55)),
        'intensity': 0.75
    },
    {
        'id': 'brocade-pocket-squares-assorted-pack',
        'tint': (190, 150, 70), # Imperial Gold Brocade
        'src': fan_img,
        'crop': (int(fw*0.1), int(fh*0.1), int(fw*0.9), int(fh*0.9)),
        'intensity': 0.6
    },
    # Chikankari embroidery
    {
        'id': 'chikankari-embroidered-pocket-square-grey',
        'tint': (140, 150, 160), # Slate Silver Grey
        'src': chikankari_img,
        'crop': (int(cw*0.1), int(ch*0.05), int(cw*0.7), int(ch*0.95)),
        'intensity': 0.8
    },
    {
        'id': 'chikankari-embroidered-pocket-square-green',
        'tint': (35, 125, 80), # Emerald Sage
        'src': chikankari_img,
        'crop': (int(cw*0.2), int(ch*0.05), int(cw*0.8), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'chikankari-embroidered-pocket-square-white',
        'tint': (248, 245, 238), # Pure Pearl Ivory
        'src': chikankari_img,
        'crop': (int(cw*0.15), int(ch*0.05), int(cw*0.75), int(ch*0.95)),
        'intensity': 0.5
    },
    {
        'id': 'chikankari-embroidered-pocket-square-pink',
        'tint': (225, 90, 140), # Rose Petal
        'src': chikankari_img,
        'crop': (int(cw*0.25), int(ch*0.05), int(cw*0.85), int(ch*0.95)),
        'intensity': 0.8
    },
    {
        'id': 'chikankari-embroidered-pocket-square-blue',
        'tint': (30, 95, 185), # Royal Azure
        'src': chikankari_img,
        'crop': (int(cw*0.05), int(ch*0.05), int(cw*0.65), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'chikankari-embroidered-pocket-square-orange',
        'tint': (220, 110, 40), # Festive Saffron
        'src': chikankari_img,
        'crop': (int(cw*0.3), int(ch*0.05), int(cw*0.9), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'chikankari-embroidered-pocket-square-red',
        'tint': (190, 25, 45), # Awadhi Vermilion
        'src': chikankari_img,
        'crop': (int(cw*0.18), int(ch*0.05), int(cw*0.78), int(ch*0.95)),
        'intensity': 0.85
    },
    # Tussar & Raw Silks
    {
        'id': 'raw-silk-pocket-square-white',
        'tint': (245, 240, 230), # Crisp Ivory Raw Silk
        'src': raw_img,
        'crop': (int(rw*0.05), int(rh*0.05), int(rw*0.6), int(rh*0.6)),
        'intensity': 0.6
    },
    {
        'id': 'raw-silk-pocket-square-rani-pink',
        'tint': (220, 30, 115), # Rani Pink
        'src': raw_img,
        'crop': (int(rw*0.2), int(rh*0.2), int(rw*0.75), int(rh*0.75)),
        'intensity': 0.85
    },
    {
        'id': 'raw-silk-pocket-square-maroon',
        'tint': (140, 20, 40), # Deep Royal Maroon
        'src': raw_img,
        'crop': (int(rw*0.3), int(rh*0.3), int(rw*0.85), int(rh*0.85)),
        'intensity': 0.85
    },
    {
        'id': 'raw-silk-pocket-square-blue',
        'tint': (25, 60, 140), # Midnight Indigo Raw Silk
        'src': raw_img,
        'crop': (int(rw*0.1), int(rh*0.4), int(rw*0.65), int(rh*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'raw-silk-pocket-square-orange',
        'tint': (215, 100, 30), # Terracotta Amber Raw Silk
        'src': raw_img,
        'crop': (int(rw*0.35), int(rh*0.1), int(rw*0.9), int(rh*0.65)),
        'intensity': 0.85
    },
    {
        'id': 'raw-silk-pocket-square-silver-grey',
        'tint': (160, 170, 180), # Platinum Silver Slub
        'src': raw_img,
        'crop': (int(rw*0.05), int(rh*0.3), int(rw*0.6), int(rh*0.85)),
        'intensity': 0.75
    },
    # Ajrakh & Ikat
    {
        'id': 'ajrakh-pocket-square-desert-night',
        'tint': (20, 35, 75), # Desert Night Indigo & Madder
        'src': ikat_img,
        'crop': (int(iw*0.05), int(ih*0.05), int(iw*0.65), int(ih*0.65)),
        'intensity': 0.5
    },
    {
        'id': 'ajrakh-pocket-square-indigo-classic',
        'tint': (15, 45, 110), # Classic Kutch Indigo
        'src': ikat_img,
        'crop': (int(iw*0.35), int(ih*0.35), int(iw*0.95), int(ih*0.95)),
        'intensity': 0.5
    },
    # Poly-Satin Line
    {
        'id': 'poly-satin-pocket-square-pink',
        'tint': (240, 120, 160),
        'src': rosette_img,
        'crop': (int(row*0.1), int(roh*0.1), int(row*0.65), int(roh*0.65)),
        'intensity': 0.85
    },
    {
        'id': 'poly-satin-pocket-square-red',
        'tint': (210, 25, 45),
        'src': rosette_img,
        'crop': (int(row*0.35), int(roh*0.1), int(row*0.9), int(roh*0.65)),
        'intensity': 0.85
    },
    {
        'id': 'poly-satin-pocket-square-blue',
        'tint': (20, 90, 200),
        'src': rosette_img,
        'crop': (int(row*0.1), int(roh*0.35), int(row*0.65), int(roh*0.9)),
        'intensity': 0.85
    },
    {
        'id': 'poly-satin-pocket-square-yellow',
        'tint': (235, 185, 30),
        'src': rosette_img,
        'crop': (int(row*0.35), int(roh*0.35), int(row*0.9), int(roh*0.9)),
        'intensity': 0.85
    },
    {
        'id': 'poly-satin-pocket-square-teal',
        'tint': (15, 150, 155),
        'src': rosette_img,
        'crop': (int(row*0.2), int(roh*0.2), int(row*0.75), int(roh*0.75)),
        'intensity': 0.85
    },
    {
        'id': 'poly-satin-pocket-square-green',
        'tint': (25, 135, 75),
        'src': rosette_img,
        'crop': (int(row*0.25), int(roh*0.25), int(row*0.8), int(roh*0.8)),
        'intensity': 0.85
    },
    # Linen Line
    {
        'id': 'linen-pocket-squares-pink',
        'tint': (235, 140, 165),
        'src': raw_img,
        'crop': (int(rw*0.15), int(rh*0.15), int(rw*0.7), int(rh*0.7)),
        'intensity': 0.8
    },
    {
        'id': 'linen-pocket-squares-blue',
        'tint': (70, 120, 185),
        'src': raw_img,
        'crop': (int(rw*0.25), int(rh*0.25), int(rw*0.8), int(rh*0.8)),
        'intensity': 0.8
    },
    {
        'id': 'linen-pocket-squares-green',
        'tint': (80, 140, 95),
        'src': raw_img,
        'crop': (int(rw*0.05), int(rh*0.25), int(rw*0.6), int(rh*0.8)),
        'intensity': 0.8
    },
    {
        'id': 'linen-pocket-squares-yellow',
        'tint': (230, 200, 90),
        'src': raw_img,
        'crop': (int(rw*0.3), int(rh*0.05), int(rw*0.85), int(rh*0.6)),
        'intensity': 0.8
    },
    {
        'id': 'linen-pocket-squares-orange',
        'tint': (225, 125, 60),
        'src': raw_img,
        'crop': (int(rw*0.35), int(rh*0.35), int(rw*0.9), int(rh*0.9)),
        'intensity': 0.8
    },
    # Hakoba Line
    {
        'id': 'hakoba-pocket-squares-yellow',
        'tint': (240, 190, 40),
        'src': chikankari_img,
        'crop': (int(cw*0.15), int(ch*0.05), int(cw*0.75), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'hakoba-pocket-squares-blue',
        'tint': (45, 110, 190),
        'src': chikankari_img,
        'crop': (int(cw*0.25), int(ch*0.05), int(cw*0.85), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'hakoba-pocket-squares-mauve',
        'tint': (175, 110, 170),
        'src': chikankari_img,
        'crop': (int(cw*0.1), int(ch*0.05), int(cw*0.7), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'hakoba-pocket-squares-mustard',
        'tint': (215, 155, 35),
        'src': chikankari_img,
        'crop': (int(cw*0.2), int(ch*0.05), int(cw*0.8), int(ch*0.95)),
        'intensity': 0.85
    },
    {
        'id': 'hakoba-pocket-squares-teal',
        'tint': (20, 140, 145),
        'src': chikankari_img,
        'crop': (int(cw*0.05), int(ch*0.05), int(cw*0.65), int(ch*0.95)),
        'intensity': 0.85
    }
]

print(f'Starting generation of {len(product_specs)} 4K product image suites...')

for spec in product_specs:
    pid = spec['id']
    primary_path = f'public/images/products/{pid}_primary.png'
    secondary_path = f'public/images/products/{pid}_detail.png'
    
    src = spec['src']
    crop_box = spec['crop']
    
    base = crop_and_scale(src, crop_box, TARGET_SIZE)
    
    if 'tint' in spec:
        primary = color_grade_silk(base, spec['tint'], intensity=spec.get('intensity', 0.8))
    else:
        # Box products
        primary = base
        # Add subtle gold edge polish
        draw = ImageDraw.Draw(primary)
        w, h = primary.size
        for i in range(6):
            draw.rectangle([i, i, w-1-i, h-1-i], outline=(200, 170, 110), width=1)
    
    secondary = create_macro_secondary(primary)
    
    # Save crisp 4K PNGs quickly
    primary.save(primary_path, 'PNG', compress_level=1)
    secondary.save(secondary_path, 'PNG', compress_level=1)
    print(f'Generated 4K suite for: {pid}')

print('All 4K product photos generated successfully!')
