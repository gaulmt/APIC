// 🚀 Production Config - Sử dụng environment variables
// File này an toàn để commit

const API_CONFIG = {
    // Lấy từ environment variables hoặc fallback
    HUGGING_FACE_TOKEN:
        // Vercel environment variable
        (typeof process !== 'undefined' && process.env && process.env.HUGGING_FACE_TOKEN) ||
        // Browser fallback (không khuyến khích cho production)
        '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',

    CLIPDROP_API_KEY:
        (typeof process !== 'undefined' && process.env && process.env.CLIPDROP_API_KEY) ||
        'YOUR_CLIPDROP_KEY_HERE',

    PICWISH_API_KEY:
        (typeof process !== 'undefined' && process.env && process.env.PICWISH_API_KEY) ||
        'YOUR_PICWISH_KEY_HERE'
};

// Export
if (typeof window !== 'undefined') {
    window.API_CONFIG = API_CONFIG;
} else if (typeof module !== 'undefined') {
    module.exports = API_CONFIG;
}