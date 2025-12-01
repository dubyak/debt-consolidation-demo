# Debt Consolidation Demo

This is a **separate demo** from the main business partner demo. It's a standalone debt consolidation loan advisor chatbot featuring Maya from Tala.

## 📁 Structure

```
debt-consolidation-demo/
├── README.md                      ← This file
├── debt-consolidation-demo.html   ← Local version (uses backend)
└── docs/
    ├── debt-consolidation-demo.html  ← GitHub Pages version (uses OpenAI directly)
    ├── GITHUB_PAGES_DEPLOY.md       ← Deployment guide
    └── .nojekyll                     ← GitHub Pages config
```

## 🚀 Two Versions Available

### Version 1: Local Version (`debt-consolidation-demo.html`)
- Uses your backend server (requires backend running)
- API keys handled server-side
- Good for local development

### Version 2: GitHub Pages Version (`docs/debt-consolidation-demo.html`)
- Uses OpenAI API directly from browser
- No backend required
- Perfect for static hosting
- See `docs/GITHUB_PAGES_DEPLOY.md` for deployment

## ✨ Features

- ✅ **Bilingual Support**: Toggle between English and Spanish
- ✅ **Image Upload**: Upload loan screenshots to simulate the consolidation flow
- ✅ **Editable Customer Profile**: Adjust customer name, limit, rate, and term
- ✅ **Full Conversation Flow**: Complete interaction with Maya, the Tala loan advisor
- ✅ **No Build Tools**: Pure HTML/CSS/JavaScript

## 🎯 Quick Start

### For Local Development (with backend):
1. Start your backend server
2. Open `debt-consolidation-demo.html` in your browser

### For GitHub Pages (no backend):
1. See `docs/GITHUB_PAGES_DEPLOY.md` for full instructions
2. Enter your OpenAI API key when prompted
3. Deploy to GitHub Pages

## 📝 Notes

- This demo is **separate** from the main business partner demo
- It's organized in its own subdirectory to keep things clean
- You can deploy it independently or keep it local

## 🔗 Related Files

- Original React component: `/Users/wkendall/Downloads/debt-consolidation-demo.jsx`
- Deployment guide: `docs/GITHUB_PAGES_DEPLOY.md`
