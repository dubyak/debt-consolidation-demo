const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Debt Consolidation API is running' });
});

// Chat endpoint - proxies to OpenAI
app.post('/api/chat', async (req, res) => {
    try {
        const { model, max_tokens, system, messages, sessionId, userId } = req.body;

        // Validate request
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid request: messages array required' });
        }

        // Check for API key
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Server configuration error: OPENAI_API_KEY not set' });
        }

        // Build OpenAI messages format
        const openaiMessages = [
            { role: 'system', content: system },
            ...messages
        ];

        // Call OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model || 'gpt-4o',
                max_tokens: max_tokens || 500,
                messages: openaiMessages
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('OpenAI API error:', response.status, errorData);
            return res.status(response.status).json({ 
                error: 'API request failed', 
                details: errorData.error?.message || 'Unknown error'
            });
        }

        const data = await response.json();
        
        // Normalize response format to match Anthropic format
        const normalizedData = {
            content: data.choices?.[0]?.message?.content ? [{ text: data.choices[0].message.content }] : [],
            usage: data.usage,
            stop_reason: data.choices?.[0]?.finish_reason
        };

        res.json(normalizedData);

    } catch (error) {
        console.error('Error in /api/chat:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Debt Consolidation Backend running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});

