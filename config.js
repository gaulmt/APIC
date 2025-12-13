// 🔐 API Configuration - File này chứa API keys riêng tư
// KHÔNG commit file này lên GitHub!

const API_CONFIG = {
    // Hugging Face - MIỄN PHÍ hoàn toàn, không giới hạn
    // Lấy token tại: https://huggingface.co/settings/tokens
    HUGGING_FACE_TOKEN: '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',

    // ClipDrop - 100 calls/tháng miễn phí (tùy chọn)
    // Đăng ký tại: https://clipdrop.co/apis
    CLIPDROP_API_KEY: 'YOUR_CLIPDROP_KEY_HERE', // Thay bằng key thật (tùy chọn)

    // PicWish - 10 ảnh/ngày miễn phí (tùy chọn)
    PICWISH_API_KEY: 'YOUR_PICWISH_KEY_HERE' // Thay bằng key thật (tùy chọn)
};

// Export để sử dụng trong script.js
window.API_CONFIG = API_CONFIG;