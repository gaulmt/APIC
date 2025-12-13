// 🚀 Vercel API Function cho Hugging Face
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { image, token } = req.body;

        if (!token) {
            return res.status(400).json({ error: 'Missing Hugging Face token' });
        }

        if (!image) {
            return res.status(400).json({ error: 'Missing image data' });
        }

        console.log('🤗 Processing image with Hugging Face...');

        // Convert base64 to buffer
        const imageBuffer = Buffer.from(image.split(',')[1], 'base64');

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

        const resultBuffer = await response.arrayBuffer();
        const base64Result = Buffer.from(resultBuffer).toString('base64');

        res.status(200).json({
            success: true,
            image: `data:image/jpeg;base64,${base64Result}`
        });

    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: error.message });
    }
}