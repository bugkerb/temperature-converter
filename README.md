# Temperature Converter

## 🌡️ Convert Temperatures Instantly

One-Page Website that converts temperatures between Celsius, Fahrenheit, and Kelvin with real-time updates.

## ✨ Features

- ✅ **Real-time Conversion** - Instant conversion as you type
- ✅ **Three Units** - Celsius, Fahrenheit, and Kelvin
- ✅ **Quick Reference** - Common temperature points
- ✅ **Fast Loading** - Loads in under 2 seconds
- ✅ **Mobile-Friendly** - Responsive design for all devices
- ✅ **No Registration** - Instant use, no signup required

## 🔄 Supported Conversions

| From | To | Formula |
|------|-----|---------|
| Celsius | Fahrenheit | (°C × 9/5) + 32 |
| Celsius | Kelvin | °C + 273.15 |
| Fahrenheit | Celsius | (°F - 32) × 5/9 |
| Fahrenheit | Kelvin | (°F - 32) × 5/9 + 273.15 |
| Kelvin | Celsius | K - 273.15 |
| Kelvin | Fahrenheit | (K - 273.15) × 9/5 + 32 |

## 📌 Quick Reference

| Point | Celsius | Fahrenheit | Kelvin |
|-------|---------|-------------|--------|
| Water Freezes | 0°C | 32°F | 273.15K |
| Room Temp | 20°C | 68°F | 293.15K |
| Body Temp | 37°C | 98.6°F | 310.15K |
| Water Boils | 100°C | 212°F | 373.15K |

## 🚀 Tech Stack

- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript
- **Hosting:** Vercel (Free)
- **Deployment:** Git push → Vercel auto-deploy

## 📦 Project Structure

```
temperature-converter/
├── index.html      # Main HTML structure
├── app.js          # JavaScript logic
├── vercel.json     # Vercel configuration
├── package.json    # Project metadata
└── README.md       # This file
```

## 🛠️ Local Development

1. Clone repository
```bash
git clone <repo-url>
cd temperature-converter
```

2. Run local server
```bash
python3 -m http.server 8000
# or
npm run dev
```

3. Open browser
```
http://localhost:8000
```

## 🌐 Deployment (Vercel)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Temperature Converter MVP"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and login
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel will detect it as a static site automatically
5. Click "Deploy"

Done! Your website is live on Vercel Free Plan.

## 🔍 SEO Strategy

- **Keywords:** temperature converter, celsius to fahrenheit, fahrenheit to celsius, kelvin converter
- **Meta Tags:** Optimized for search intent
- **Performance:** < 2s load time, mobile-friendly

## 💰 Monetization Plan (Phase 2+)

- Google AdSense (placeholder ready)
- Affiliate links to weather stations/thermometers

## 📝 License

MIT

---

**Status:** Phase 1 - Complete ✅
