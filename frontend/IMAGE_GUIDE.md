# 📸 Image Management Guide

## Where to Put Images in Your Vite React App

### ✅ Recommended: Use the `public` folder

Images in the `public` folder are served as static assets and can be referenced directly in your code.

## Folder Structure Created

```
public/
├── images/
│   ├── home/          # Home page images (hero, features, etc.)
│   ├── icons/         # Icons and small graphics
│   └── [other]/       # You can create more folders as needed
└── vite.svg           # Default Vite logo
```

## How to Copy Images

### Copy from Django Static Folder

Copy these images from `PredictX/static/web/img/` to your React public folder:

```bash
# Copy all images to public/images/
cp "c:\Myfiles\Course Project\InsightX-Web\PredictX\static\web\img\*" "c:\Myfiles\Course Project\InsightX-Web\InsightX-Final\frontend\public\images\"
```

Or manually copy these key images:

**Home Page Images:**
- `machine.jpg` → `public/images/home/machine.jpg`
- `addonBackground.JPG` → `public/images/home/addonBackground.jpg`
- `prediction.png` → `public/images/home/prediction.png`
- `monitoring.png` → `public/images/home/monitoring.png`
- `wave.png` → `public/images/home/wave.png`

**Icons:**
- `right-arrow.png` → `public/images/icons/right-arrow.png`
- `magic.png` → `public/images/icons/magic.png`
- `search-interface-symbol.png` → `public/images/icons/search.png`
- `email.png` → `public/images/icons/email.png`
- `phone.png` → `public/images/icons/phone.png`
- `delete.png` → `public/images/icons/delete.png`
- `down-filled-triangular-arrow.png` → `public/images/icons/arrow-down.png`
- `arrow-up.png` → `public/images/icons/arrow-up.png`

**Feature Images:**
- `data-analytics.png` → `public/images/data-analytics.png`
- `iteration.png` → `public/images/iteration.png`
- `maps-and-flags.png` → `public/images/maps-and-flags.png`
- `presentation.png` → `public/images/presentation.png`
- `presentationrobots.png` → `public/images/presentationrobots.png`
- `proactive.png` → `public/images/proactive.png`
- `recent.png` → `public/images/recent.png`

## How to Reference Images in React

### Method 1: Direct Path (Recommended for public folder)

```jsx
// In your JSX
<img src="/images/home/machine.jpg" alt="Machine" />
<img src="/images/icons/magic.png" alt="Magic" />
```

### Method 2: Using Variables

```jsx
const machineImage = "/images/home/machine.jpg";
<img src={machineImage} alt="Machine" />
```

### Method 3: Import (for src/assets folder - see below)

```jsx
import machineImage from './assets/machine.jpg';
<img src={machineImage} alt="Machine" />
```

## Update Your Components

### Home.jsx - Update Image Paths

```jsx
// Before
<img src="/machine.jpg" alt="Machine" />

// After
<img src="/images/home/machine.jpg" alt="Machine" />
```

### Login.jsx - Update Image Paths

```jsx
// Before
<img src="/wave.png" id="wave" />

// After
<img src="/images/home/wave.png" id="wave" />
```

## Alternative: src/assets Folder (For Imported Images)

You can also put images in `src/assets/` for images you want to import:

```
src/
└── assets/
    ├── images/
    │   ├── logo.png
    │   └── hero.jpg
    └── icons/
        └── icon.svg
```

**Usage:**
```jsx
import logo from './assets/images/logo.png';
<img src={logo} alt="Logo" />
```

## When to Use Each Approach

### Use `public/` folder when:
✅ Image URLs won't change
✅ Referenced in multiple places
✅ Large images
✅ Need direct URL access
✅ Third-party scripts need access

### Use `src/assets/` when:
✅ Small images
✅ Component-specific images
✅ Want webpack optimization
✅ Need dynamic imports

## Recommended Structure for Your Project

```
public/
└── images/
    ├── home/
    │   ├── machine.jpg
    │   ├── addonBackground.jpg
    │   ├── prediction.png
    │   ├── monitoring.png
    │   └── wave.png
    ├── icons/
    │   ├── right-arrow.png
    │   ├── magic.png
    │   ├── search.png
    │   ├── email.png
    │   └── phone.png
    └── features/
        ├── data-analytics.png
        ├── presentation.png
        └── proactive.png
```

## Quick Copy Commands

### PowerShell (from project root):

```powershell
# Copy all images at once
Copy-Item "PredictX\static\web\img\*" "InsightX-Final\frontend\public\images\" -Recurse
```

### Or use File Explorer:

1. Navigate to: `PredictX\static\web\img\`
2. Select all images (Ctrl+A)
3. Copy (Ctrl+C)
4. Navigate to: `InsightX-Final\frontend\public\images\`
5. Paste (Ctrl+V)

## Update Image References in Your Code

After copying images, update these files:

### 1. Home.jsx
```jsx
// Line ~36 (predict card)
<img src="/images/home/machine.jpg" alt="Machine" />

// Line ~55 (prediction feature)
<img src="/images/home/prediction.png" alt="Prediction" />

// Line ~66 (monitoring feature)
<img src="/images/home/monitoring.png" alt="Monitoring" />

// Line ~78 (UI feature)
<img src="/images/home/addonBackground.jpg" className="ui-img" alt="Interface" />
```

### 2. Login.jsx & Signup.jsx
```jsx
// In addon section
<img src="/images/home/wave.png" id="wave" />
<img src="/images/home/addonBackground.jpg" alt="" id="bg" />
```

## Image Optimization Tips

### 1. Compress Images
- Use tools like TinyPNG or ImageOptim
- Recommended: JPG for photos, PNG for graphics with transparency

### 2. Use Appropriate Sizes
- Don't use huge images if you only display them small
- Consider providing multiple sizes for responsive design

### 3. Lazy Loading
```jsx
<img src="/images/home/machine.jpg" alt="Machine" loading="lazy" />
```

### 4. Use WebP Format (Modern browsers)
```jsx
<picture>
  <source srcSet="/images/home/machine.webp" type="image/webp" />
  <img src="/images/home/machine.jpg" alt="Machine" />
</picture>
```

## Font Files

Similarly, you can store custom fonts:

```
public/
└── fonts/
    └── GTWalsheimPro-Medium.ttf
```

Or in `src/assets/fonts/` if you prefer to import them.

## Summary

✅ **Created** organized folder structure in `public/images/`
✅ **Use** direct paths like `/images/home/machine.jpg`
✅ **Copy** images from Django static folder
✅ **Update** component imports to use new paths
✅ **Optimize** images before copying

## Next Steps

1. Copy images from `PredictX/static/web/img/` to `public/images/`
2. Organize them into subdirectories (home, icons, features)
3. Update image paths in your React components
4. Test that all images load correctly

---

**Your images are ready to use! 📸**
