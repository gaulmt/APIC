// 🔐 API Configuration Template
// Copy file này thành config.js và thay thế bằng API keys thật của bạn

const API_CONFIG = {
    // Hugging Face - MIỄN PHÍ hoàn toàn, không giới hạn
    // Lấy token tại: https://huggingface.co/settings/tokens
    HUGGING_FACE_TOKEN: 'YOUR_HF_TOKEN_HERE', // Thay bằng token thật: hf_xxxxxxxxx

    // ClipDrop - 100 calls/tháng miễn phí
    // Đăng ký tại: https://clipdrop.co/apis
    CLIPDROP_API_KEY: 'YOUR_CLIPDROP_KEY_HERE', // Thay bằng key thật

    // PicWish - 10 ảnh/ngày miễn phí  
    PICWISH_API_KEY: 'YOUR_PICWISH_KEY_HERE' // Thay bằng key thật
};

// Export để sử dụng trong script.js
window.API_CONFIG = API_CONFIG;