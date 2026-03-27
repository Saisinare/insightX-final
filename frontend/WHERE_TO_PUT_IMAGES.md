# 🎯 Quick Answer: Where to Put Images

## Put Images Here:

```
InsightX-Final/frontend/public/images/
```

## Full Structure:

```
InsightX-Final/
└── frontend/
    ├── public/                          ← Static files served directly
    │   ├── images/                      ← ✅ PUT IMAGES HERE
    │   │   ├── home/                    ← Hero, backgrounds
    │   │   │   ├── machine.jpg
    │   │   │   ├── addonBackground.jpg
    │   │   │   ├── prediction.png
    │   │   │   ├── monitoring.png
    │   │   │   └── wave.png
    │   │   └── icons/                   ← Icons, small graphics
    │   │       ├── magic.png
    │   │       ├── right-arrow.png
    │   │       └── ...
    │   └── vite.svg
    └── src/
        ├── assets/                      ← Alternative for imported assets
        │   └── fonts/                   ← ✅ PUT FONTS HERE
        │       └── GTWalsheimPro-Medium.ttf
        ├── components/
        └── pages/
```

## How to Use:

```jsx
// In any React component:
<img src="/images/home/machine.jpg" alt="Machine" />
<img src="/images/icons/magic.png" alt="Magic" />
```

## Copy From Django Project:

```
FROM: PredictX/static/web/img/*
  ↓
TO:   InsightX-Final/frontend/public/images/
```

That's it! 🎉
