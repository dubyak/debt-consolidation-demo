# Debt Consolidation Demo Backend

Simple Express.js backend that proxies OpenAI API calls for the debt consolidation demo.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables:
   ```
   OPENAI_API_KEY=sk-your-key-here
   PORT=3000
   ```

3. Start server:
   ```bash
   npm start
   ```

## Deploy to Railway

1. Connect this repo to Railway
2. Railway will auto-detect Node.js
3. Set root directory to `backend`
4. Add `OPENAI_API_KEY` environment variable
5. Deploy!

## Endpoints

- `GET /health` - Health check
- `POST /api/chat` - Chat endpoint (proxies to OpenAI)

