import cv2
import numpy as np

img = cv2.imread('public/images/hero_chikankari_4k.png')
h, w, c = img.shape
print(f"Loaded image: {w}x{h}")

# Convert to HSV
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Blue pocket square detection:
# Hue for cyan/light blue is roughly 85-130
# Saturation > 30
lower_blue = np.array([80, 40, 60])
upper_blue = np.array([135, 255, 255])

mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Clean mask with morphological operations
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

# Find bounding box of pocket square
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    largest_cnt = max(contours, key=cv2.contourArea)
    x, y, bw, bh = cv2.boundingRect(largest_cnt)
    print(f"Pocket square bounding box: x={x}, y={y}, w={bw}, h={bh} (area={cv2.contourArea(largest_cnt)})")
    
    # Save a small preview of the mask and the segmented pocket square
    preview_img = img.copy()
    cv2.drawContours(preview_img, [largest_cnt], -1, (0, 255, 0), 5)
    cv2.rectangle(preview_img, (x, y), (x+bw, y+bh), (0, 0, 255), 5)
    
    small_prev = cv2.resize(preview_img, (800, int(800 * h / w)))
    cv2.imwrite('scripts/mask_preview.jpg', small_prev)
    print("Saved scripts/mask_preview.jpg")
else:
    print("No pocket square detected with initial threshold")
