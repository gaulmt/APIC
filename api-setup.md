# 🔧 API miễn phí tốt nhất cho APIC

## 🏆 Top APIs miễn phí chất lượng cao

### 1. 🥇 ClipDrop (Stability AI) - TỐT NHẤT
- **Website**: https://clipdrop.co/apis
- **Miễn phí**: 100 calls/tháng
- **Chất lượng**: Xuất sắc (từ Stability AI)
- **Model**: Real-ESRGAN + proprietary
- **Thay thế**: `YOUR_CLIPDROP_API_KEY` trong script.js

### 2. 🥈 Hugging Face - MIỄN PHÍ HOÀN TOÀN
- **Website**: https://huggingface.co/
- **Miễn phí**: Không giới hạn
- **Model**: Swin2SR-realworld-sr-x4-64-bsrgan-psnr
- **Chất lượng**: Rất tốt
- **Thay thế**: `YOUR_HF_TOKEN` trong script.js

### 3. 🥉 PicWish - MIỄN PHÍ CÓ HẠN
- **Website**: https://picwish.com/
- **Miễn phí**: 10 ảnh/ngày
- **Chất lượng**: Tốt
- **Thay thế**: `YOUR_PICWISH_KEY` trong script.js

### 4. 🎯 UpscalerJS - CLIENT-SIDE AI
- **Hoàn toàn miễn phí**: Không cần API key
- **Chạy offline**: Tải model về browser
- **Model**: ESRGAN Legacy
- **Chất lượng**: Khá tốt, không cần internet

## 🛠️ Cách setup

### Bước 1: Đăng ký API Keys
1. Tạo tài khoản tại các website trên
2. Lấy API keys/tokens
3. Thay thế trong `script.js`

### Bước 2: Test API
```javascript
// Test DeepAI
const testDeepAI = async () => {
    const formData = new FormData();
    formData.append('image', yourImageFile);
    
    const response = await fetch('https://api.deepai.org/api/torch-srgan', {
        method: 'POST',
        headers: { 'Api-Key': 'YOUR_DEEPAI_API_KEY' },
        body: formData
    });
    
    const result = await response.json();
    console.log(result.output_url);
};
```

## 🎯 Fallback Strategy

Hiện tại APIC sử dụng strategy:
1. **Thử DeepAI** (nhanh, miễn phí)
2. **Fallback Replicate** (chất lượng cao)
3. **Fallback Advanced Simulation** (offline, không cần API)

## 💡 Lưu ý

- **DeepAI**: 5 requests/month miễn phí
- **Replicate**: ~$0.01-0.05/image
- **Imgur**: Miễn phí cho upload tạm thời
- **Advanced Simulation**: Hoạt động offline, chất lượng tốt

## 🔒 Bảo mật

Để production:
- Tạo backend proxy để ẩn API keys
- Không expose keys trực tiếp trong frontend
- Sử dụng environment variables

## 📈 Nâng cấp

Có thể thêm:
- **Waifu2x**: Cho anime/artwork
- **ESRGAN**: Custom models
- **Adobe API**: Chất lượng enterprise
- **Custom AI**: Deploy model riêng

## 🚀 Hướng dẫn setup nhanh

### ClipDrop (Khuyên dùng)
1. Vào https://clipdrop.co/apis
2. Đăng ký tài khoản miễn phí
3. Tạo API key
4. Thay `YOUR_CLIPDROP_API_KEY` trong script.js
5. **100 calls/tháng miễn phí** - chất lượng xuất sắc!

### Hugging Face (Backup tốt)
1. Vào https://huggingface.co/settings/tokens
2. Tạo token miễn phí
3. Thay `YOUR_HF_TOKEN` trong script.js
4. **Không giới hạn** - model Swin2SR rất mạnh!

### UpscalerJS (Offline)
- Không cần setup gì
- Tự động tải model khi dùng lần đầu
- Hoạt động hoàn toàn offline

## 📊 So sánh chất lượng

| API | Chất lượng | Tốc độ | Miễn phí | Khuyên dùng |
|-----|------------|--------|----------|-------------|
| ClipDrop | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 100/tháng | ✅ Tốt nhất |
| Hugging Face | ⭐⭐⭐⭐ | ⭐⭐⭐ | Không hạn | ✅ Backup |
| PicWish | ⭐⭐⭐ | ⭐⭐⭐⭐ | 10/ngày | ⚠️ Hạn chế |
| UpscalerJS | ⭐⭐⭐ | ⭐⭐ | Không hạn | ✅ Offline |

## 🎯 Strategy hiện tại

APIC sẽ thử theo thứ tự:
1. **ClipDrop** (chất lượng cao nhất)
2. **Hugging Face** (backup mạnh)
3. **PicWish** (nếu 2 cái trên fail)
4. **UpscalerJS** (client-side AI)
5. **Advanced Simulation** (fallback cuối)

## 💡 Tips

- **ClipDrop**: Tốt nhất cho ảnh thật
- **Hugging Face**: Tốt cho mọi loại ảnh
- **UpscalerJS**: Tốt khi không có internet
- **Simulation**: Luôn hoạt động, chất lượng khá

## 🔒 Bảo mật Production

```javascript
// Tạo backend proxy để ẩn API keys
const response = await fetch('/api/enhance', {
    method: 'POST',
    body: formData
});
```

Không bao giờ expose API keys trực tiếp trong frontend!