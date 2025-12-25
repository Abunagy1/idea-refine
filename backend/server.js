require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { enhancePrompt } = require('./utils/promptEnhancer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'IdeaRefine API is running' });
});

// Main endpoint for enhancing ideas
app.post('/api/enhance-idea', async (req, res) => {
    try {
        const { idea } = req.body;

        if (!idea || idea.trim().length < 3) {
            return res.status(400).json({
                error: 'Please provide an idea with at least 3 characters'
            });
        }

        // Simulate processing delay (like a real API)
        await new Promise(resolve => setTimeout(resolve, 800));

        const enhanced = enhancePrompt(idea);

        res.json({
            original: idea,
            enhanced: enhanced,
            timestamp: new Date().toISOString(),
            tips: [
                "Add specific goals",
                "Include target audience",
                "Specify key features"
            ]
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});