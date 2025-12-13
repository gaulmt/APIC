# 🤖 Cách sử dụng AI thật thay vì Simulation

## 🎯 Hiện tại: Demo Mode

Web đang chạy ở **Demo Mode** với AI Simulation (vẫn rất tốt!) vì chưa có API keys.

## 🚀 Để dùng AI thật (Hugging Face - MIỄN PHÍ 100%):

### Bước 1: Lấy Hugging Face Token (2 phút)
1. Vào https://huggingface.co/join - đăng ký miễn phí
2. Vào https://huggingface.co/settings/tokens
3. Click "New token" → Đặt tên "APIC" → Role: "Read" → Create
4. Copy token (dạng: `hf_xxxxxxxxxxxxxxxxx`)

### Bước 2: Tạo file config (1 phút)
1. Copy file `config-example.js` thành `config.js`
2. Mở `config.js` 
3. Thay `YOUR_HF_TOKEN_HERE` bằng token thật
4. Lưu file

### Bước 3: Test (30 giây)
1. Refresh trang web
2. Upload ảnh → Click "Làm nét bằng AI"
3. Xem Console (F12) - sẽ thấy "🤗 Đang gửi ảnh lên Hugging Face..."

## 📊 So sánh chất lượng:

| Method | Chất lượng | Tốc độ | Upscale | Chi phí |
|--------|------------|--------|---------|---------|
| **Hugging Face AI** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 4x | Miễn phí 100% |
| **AI Simulation** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 2x | Miễn phí 100% |

## 🎉 Kết quả với AI thật:

- **Model**: Swin2SR-realworld-sr-x4-64-bsrgan-psnr
- **Upscale**: 4x (thay vì 2x)
- **Chất lượng**: Xuất sắc, phục hồi chi tiết hoàn hảo
- **Thời gian**: 5-15 giây
- **Không giới hạn**: Dùng bao nhiêu cũng được

## 💡 Lưu ý:

- **Local**: Tạo config.js để dùng AI thật
- **Vercel/Production**: Tự động dùng Simulation (vẫn tốt!)
- **Bảo mật**: config.js không được commit lên GitHub

## 🔧 Troubleshooting:

### Nếu vẫn thấy "Demo mode":
1. Kiểm tra file `config.js` có tồn tại không
2. Kiểm tra token có đúng format `hf_xxxxxxxxx`
3. Refresh trang và thử lại

### Nếu lỗi 401:
- Token sai hoặc hết hạn
- Tạo token mới tại Hugging Face

### Nếu lỗi 503:
- Model đang loading, đợi 30s và thử lại
- Hoặc dùng Simulation trong lúc chờ

## 🎯 Kết luận:

- **Simulation**: Tốt, nhanh, luôn hoạt động
- **AI thật**: Xuất sắc, chậm hơn một chút, cần setup

Cả hai đều cho kết quả tuyệt vời! 🚀