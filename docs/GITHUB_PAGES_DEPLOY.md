# Deploy Debt Consolidation Demo to GitHub Pages

This guide will help you deploy the debt consolidation demo to GitHub Pages using OpenAI API.

## Quick Start

### Step 1: Push to GitHub

```bash
# Make sure you're in the project root
cd /Users/wkendall/Documents/GitHub/business-partner-demo

# Add the debt consolidation demo folder
git add debt-consolidation-demo/

# Commit
git commit -m "Add debt consolidation demo for GitHub Pages (OpenAI)"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

**Option A: Deploy from subdirectory (Recommended)**

Since the demo is in a subdirectory, you have two options:

1. **Use GitHub Pages with custom path**: 
   - Go to your GitHub repository: `https://github.com/YOUR_USERNAME/business-partner-demo`
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/debt-consolidation-demo/docs`
   - Click **Save**

   Your demo will be live at:
   ```
   https://YOUR_USERNAME.github.io/business-partner-demo/debt-consolidation-demo.html
   ```

2. **Or create a separate repository** (cleanest option):
   ```bash
   # Create a new repo just for the debt consolidation demo
   cd debt-consolidation-demo
   git init
   git add .
   git commit -m "Initial commit: Debt consolidation demo"
   # Then push to a new GitHub repo
   ```

### Step 3: Test It

1. Visit your GitHub Pages URL
2. Enter your OpenAI API key when prompted
3. Start chatting with Maya!

## How It Works

- **No Backend Required**: The demo runs entirely in the browser
- **OpenAI API**: Calls OpenAI's API directly from the frontend
- **API Key Storage**: Your API key is stored locally in your browser (localStorage)
- **Static Hosting**: Perfect for GitHub Pages - no server needed!

## Features

✅ **Bilingual Support**: Toggle between English and Spanish  
✅ **Image Upload**: Upload loan screenshots to simulate the flow  
✅ **Editable Profile**: Adjust customer name, limit, rate, and term  
✅ **Full Conversation**: Complete interaction with Maya, the Tala advisor  
✅ **Client-Side Only**: Works entirely in the browser  

## API Key Setup

1. Get your OpenAI API key from: https://platform.openai.com/api-keys
2. When you first open the demo, you'll be prompted to enter your API key
3. The key is stored in your browser's localStorage (never sent to our servers)
4. You can change it anytime using the "Change" button in the settings

## Security Notes

- ⚠️ **API Key Exposure**: The API key is stored in localStorage, which means:
  - It's only accessible from your browser
  - It's not shared with anyone else
  - If someone has access to your browser, they can see it
  - For production use, consider using a backend proxy

- ✅ **Safe for Demos**: Perfect for demos and testing
- ✅ **No Server Costs**: No backend infrastructure needed
- ✅ **Easy Sharing**: Just share the GitHub Pages URL

## Troubleshooting

### Demo doesn't load
- Check that GitHub Pages is enabled for the `/debt-consolidation-demo/docs` folder
- Verify the file is at `debt-consolidation-demo/docs/debt-consolidation-demo.html`
- Check browser console for errors

### API errors
- Verify your OpenAI API key is correct (starts with `sk-`)
- Check that you have credits in your OpenAI account
- Make sure the API key has access to `gpt-4o` model

### CORS errors
- OpenAI API supports CORS from browsers
- If you see CORS errors, check your API key permissions

## Customization

### Change the Model

To use a different OpenAI model, edit `docs/debt-consolidation-demo.html` and find:

```javascript
model: 'gpt-4o',
```

Replace with:
- `gpt-4-turbo` - Faster, cheaper
- `gpt-3.5-turbo` - Most affordable
- `gpt-4` - Most capable

### Update the URL

After deployment, your demo URL will be:
```
https://YOUR_USERNAME.github.io/business-partner-demo/debt-consolidation-demo.html
```

Replace `YOUR_USERNAME` with your GitHub username.

## File Structure

```
business-partner-demo/
├── debt-consolidation-demo/           ← Dedicated folder
│   ├── README.md                      ← Demo documentation
│   ├── debt-consolidation-demo.html   ← Local version
│   └── docs/
│       ├── debt-consolidation-demo.html  ← GitHub Pages version
│       ├── GITHUB_PAGES_DEPLOY.md        ← This guide
│       └── .nojekyll                     ← GitHub Pages config
└── ... (other business partner demo files)
```

## Next Steps

1. ✅ Deploy to GitHub Pages (follow steps above)
2. ✅ Test the demo
3. ✅ Share the URL with others
4. ✅ Customize as needed

Enjoy your demo! 🎉

