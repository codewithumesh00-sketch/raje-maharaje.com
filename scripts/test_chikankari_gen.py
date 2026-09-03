import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

# Load master hero chikankari image
base_bgr = cv2.imread('public/images/hero_chikankari_4k.png')
h, w, c = base_bgr.shape

# Precise pocket square mask detection
# In hero_chikankari_4k, the pocket square is the light cyan/blue silk inside breast pocket
hsv = cv2.cvtColor(base_bgr, cv2.COLOR_BGR2HSV)
lower_blue = np.array([80, 35, 60])
upper_blue = np.array([135, 255, 255])
mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Clean mask
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

# Smooth edges for seamless blend
mask_float = cv2.GaussianBlur(mask.astype(np.float32) / 255.0, (15, 15), 0)
mask_3d = np.repeat(mask_float[:, :, np.newaxis], 3, axis=2)

# Suit jacket mask (everything outside the pocket square)
jacket_mask_3d = 1.0 - mask_3d

# Extract luminance/shading of pocket square
gray_square = cv2.cvtColor(base_bgr, cv2.COLOR_BGR2GRAY).astype(np.float32) / 255.0
# Normalize pocket square luminance so shadows and highlights are rich
min_val, max_val = gray_square[mask > 128].min(), gray_square[mask > 128].max()
norm_square = np.clip((gray_square - min_val) / (max_val - min_val + 1e-5), 0, 1)

# Suit variations: (BGR jacket tint factor, jacket brightness factor)
suit_styles = {
    'grey':    {'jacket_tint': (1.0, 1.0, 1.0), 'jacket_bright': 0.95, 'square_rgb': (210, 215, 220), 'sq_sat': 0.15, 'contrast': 1.15},
    'green':   {'jacket_tint': (1.15, 0.95, 0.85), 'jacket_bright': 0.85, 'square_rgb': (28, 125, 75), 'sq_sat': 0.85, 'contrast': 1.25}, # Navy jacket, emerald square
    'white':   {'jacket_tint': (0.75, 0.75, 0.75), 'jacket_bright': 0.55, 'square_rgb': (250, 250, 248), 'sq_sat': 0.05, 'contrast': 1.1},  # Tuxedo black jacket, pristine white square
    'pink':    {'jacket_tint': (1.1, 0.95, 0.9), 'jacket_bright': 0.9, 'square_rgb': (235, 110, 155), 'sq_sat': 0.8, 'contrast': 1.2},     # Midnight navy jacket, rose pink square
    'blue':    {'jacket_tint': (0.95, 0.98, 1.0), 'jacket_bright': 1.0, 'square_rgb': (45, 130, 215), 'sq_sat': 0.85, 'contrast': 1.2},    # Slate grey jacket, sky blue square
    'orange':  {'jacket_tint': (0.85, 0.98, 1.12), 'jacket_bright': 1.05, 'square_rgb': (235, 115, 30), 'sq_sat': 0.9, 'contrast': 1.25},  # Warm tan/camel jacket, tangerine square
    'red':     {'jacket_tint': (0.7, 0.7, 0.7), 'jacket_bright': 0.6, 'square_rgb': (195, 25, 45), 'sq_sat': 0.9, 'contrast': 1.3}          # Formal black tuxedo jacket, crimson red square
}

print("Testing Chikankari variations...")
for name, style in suit_styles.items():
    # 1. Modify suit jacket
    b_fac, g_fac, r_fac = style['jacket_tint']
    j_bright = style['jacket_bright']
    jacket = base_bgr.astype(np.float32)
    jacket[:, :, 0] *= (b_fac * j_bright)
    jacket[:, :, 1] *= (g_fac * j_bright)
    jacket[:, :, 2] *= (r_fac * j_bright)
    jacket = np.clip(jacket, 0, 255)
    
    # 2. Recolor pocket square
    s_r, s_g, s_b = style['square_rgb']
    sq_bgr = np.zeros_like(base_bgr, dtype=np.float32)
    
    # Base shaded silk
    lum_curve = norm_square ** (1.0 / style['contrast'])
    sq_bgr[:, :, 0] = np.clip(lum_curve * s_b, 0, 255)
    sq_bgr[:, :, 1] = np.clip(lum_curve * s_g, 0, 255)
    sq_bgr[:, :, 2] = np.clip(lum_curve * s_r, 0, 255)
    
    # 3. Composite
    comp = jacket * jacket_mask_3d + sq_bgr * mask_3d
    comp = np.clip(comp, 0, 255).astype(np.uint8)
    
    # Crop to 4:5 portrait (Nicobar aspect ratio) centered on pocket square
    # Pocket square center: x=1666, y=1200
    crop_w = 2000
    crop_h = int(crop_w * 5 / 4) # 2500 -> since h=2160, max crop_h is 2160, crop_w = 1728
    ch = 2160
    cw = int(ch * 4 / 5) # 1728
    cx = 1660
    x1 = max(0, cx - cw // 2)
    x2 = x1 + cw
    cropped = comp[0:ch, x1:x2]
    
    # Resize to crisp 1600 x 2000
    final_img = cv2.resize(cropped, (1600, 2000), interpolation=cv2.INTER_LANCZOS4)
    cv2.imwrite(f'scripts/test_chikan_{name}.jpg', final_img, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print(f"Generated test_chikan_{name}.jpg")

print("Chikankari test generation completed!")
