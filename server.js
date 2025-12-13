// 🚀 Simple CORS Proxy Server cho Hugging Face API
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer();

// Enable CORS cho tất cả origins
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Proxy endpoint cho Hugging Face
app.post('/api/huggingface', upload.single('image'), async (req, res) => {
    try {
        const { token } = req.body;
        const imageBuffer = req.file.buffer;

        console.log('🤗 Proxying request to Hugging Face...');

        const response = await fetch('https://api-inference.huggingface.co/models/caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/octet-stream'
            },
            body: imageBuffer
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
        }

        const resultBuffer = await response.buffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(resultBuffer);

    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'CORS Proxy Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 CORS Proxy Server running on http://localhost:${PORT}`);
    console.log('✅ Hugging Face API sẵn sàng sử dụng!');
});

module.exports = app;