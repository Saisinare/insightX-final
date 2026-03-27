# ✅ Image Copy Checklist

## 5 REQUIRED Images (Copy These First!)

### Copy these files from Django to React:

```
FROM: PredictX/static/web/img/
TO: InsightX-Final/frontend/public/images/
```

### 1️⃣ Machine Photo
```
machine.jpg  →  home/machine.jpg
```

### 2️⃣ Prediction Icon
```
prediction.png  →  features/prediction.png
```

### 3️⃣ Monitoring Icon
```
monitoring.png  →  features/monitoring.png
```

### 4️⃣ Interface Preview (Features)
```
addonBackground.JPG  →  features/interface-preview.jpg
```

### 5️⃣ Interface Preview (Auth)
```
addonBackground.JPG  →  auth/interface-preview.jpg
```

---

## Quick Copy (PowerShell)

Run these commands from project root:

```powershell
Copy-Item "PredictX\static\web\img\machine.jpg" "InsightX-Final\frontend\public\images\home\machine.jpg"

Copy-Item "PredictX\static\web\img\prediction.png" "InsightX-Final\frontend\public\images\features\prediction.png"

Copy-Item "PredictX\static\web\img\monitoring.png" "InsightX-Final\frontend\public\images\features\monitoring.png"

Copy-Item "PredictX\static\web\img\addonBackground.JPG" "InsightX-Final\frontend\public\images\features\interface-preview.jpg"

Copy-Item "PredictX\static\web\img\addonBackground.JPG" "InsightX-Final\frontend\public\images\auth\interface-preview.jpg"
```

---

## Optional Icons (5 images)

If you want to add icons for future use:

```powershell
Copy-Item "PredictX\static\web\img\magic.png" "InsightX-Final\frontend\public\images\icons\magic.png"
Copy-Item "PredictX\static\web\img\right-arrow.png" "InsightX-Final\frontend\public\images\icons\right-arrow.png"
Copy-Item "PredictX\static\web\img\search-interface-symbol.png" "InsightX-Final\frontend\public\images\icons\search.png"
Copy-Item "PredictX\static\web\img\email.png" "InsightX-Final\frontend\public\images\icons\email.png"
Copy-Item "PredictX\static\web\img\phone.png" "InsightX-Final\frontend\public\images\icons\phone.png"
```

---

## Verify Files Exist:

After copying, check that these exist:

- [ ] `public/images/home/machine.jpg`
- [ ] `public/images/features/prediction.png`
- [ ] `public/images/features/monitoring.png`
- [ ] `public/images/features/interface-preview.jpg`
- [ ] `public/images/auth/interface-preview.jpg`

---

## Then Run:

```bash
npm run dev
```

And verify all images load on the home page!

---

📖 **See `IMAGE_MAPPING_COMPLETE.md` for full details**
