# 📋 Copy Images - CMD Commands

## For Windows Command Prompt (cmd)

Run these commands from project root: `C:\Myfiles\Course Project\InsightX-Web`

### Copy Required Images (5 files):

```cmd
copy "PredictX\static\web\img\machine.jpg" "InsightX-Final\frontend\public\images\home\machine.jpg"

copy "PredictX\static\web\img\prediction.png" "InsightX-Final\frontend\public\images\features\prediction.png"

copy "PredictX\static\web\img\monitoring.png" "InsightX-Final\frontend\public\images\features\monitoring.png"

copy "PredictX\static\web\img\addonBackground.JPG" "InsightX-Final\frontend\public\images\features\interface-preview.jpg"

copy "PredictX\static\web\img\addonBackground.JPG" "InsightX-Final\frontend\public\images\auth\interface-preview.jpg"
```

---

## Or Copy All Images at Once:

```cmd
xcopy "PredictX\static\web\img\*.*" "InsightX-Final\frontend\public\images\" /Y
```

Then manually organize them into subdirectories.

---

## Optional Icons:

```cmd
copy "PredictX\static\web\img\magic.png" "InsightX-Final\frontend\public\images\icons\magic.png"

copy "PredictX\static\web\img\right-arrow.png" "InsightX-Final\frontend\public\images\icons\right-arrow.png"

copy "PredictX\static\web\img\search-interface-symbol.png" "InsightX-Final\frontend\public\images\icons\search.png"

copy "PredictX\static\web\img\email.png" "InsightX-Final\frontend\public\images\icons\email.png"

copy "PredictX\static\web\img\phone.png" "InsightX-Final\frontend\public\images\icons\phone.png"
```

---

## Alternative: Use File Explorer (Easiest!)

1. Open File Explorer
2. Navigate to: `C:\Myfiles\Course Project\InsightX-Web\PredictX\static\web\img`
3. Select these files:
   - machine.jpg
   - prediction.png
   - monitoring.png
   - addonBackground.JPG (will copy twice)
4. Copy them (Ctrl+C)
5. Navigate to: `C:\Myfiles\Course Project\InsightX-Web\InsightX-Final\frontend\public\images`
6. Paste and organize into subdirectories:
   - machine.jpg → `home/`
   - prediction.png → `features/`
   - monitoring.png → `features/`
   - addonBackground.JPG → `features/` (rename to interface-preview.jpg)
   - addonBackground.JPG → `auth/` (rename to interface-preview.jpg)

---

## Verify Files Exist:

```cmd
dir "InsightX-Final\frontend\public\images\home\machine.jpg"
dir "InsightX-Final\frontend\public\images\features\prediction.png"
dir "InsightX-Final\frontend\public\images\features\monitoring.png"
dir "InsightX-Final\frontend\public\images\features\interface-preview.jpg"
dir "InsightX-Final\frontend\public\images\auth\interface-preview.jpg"
```

---

## 🎯 Quick Summary

**For CMD terminal, use `copy` instead of `Copy-Item`**

**For PowerShell terminal, use `Copy-Item`**

**For easiest method, use File Explorer!**
