# 🚀 Hướng dẫn setup AI thật cho APIC

## 🎯 Hiện tại: Chỉ dùng AI Simulation

Web của bạn hiện đang hoạt động với **AI Simulation** (chất lượng khá tốt) vì chưa có API keys.

Để dùng **AI thật** (chất lượng xuất sắc), làm theo hướng dẫn dưới:

## 🤗 Option 1: Hugging Face (KHUYÊN DÙNG - MIỄN PHÍ 100%)

### Bước 1: Lấy token miễn phí
1. Vào https://huggingface.co/join
2. Đăng ký tài khoản miễn phí
3. Vào https://huggingface.co/settings/tokens
4. Tạo token mới với quyền "Read"
5. Copy token (dạng: `hf_xxxxxxxxxxxxxxxxx`)

### Bước 2: Tạo file config
1. Copy file `config-example.js` thành `config.js`
2. Mở file `config.js`
3. Tìm dòng: `HUGGING_FACE_TOKEN: 'YOUR_HF_TOKEN_HERE'`
4. Thay thế bằng: `HUGGING_FACE_TOKEN: 'hf_xxxxxxxxxxxxxxxxx'` (token thật của bạn)
5. Lưu file `config.js`

### Bước 3: Test
1. Refresh trang web
2. Upload ảnh và click "Làm nét bằng AI"
3. Xem console (F12) - sẽ thấy "🤗 Đang gửi ảnh lên Hugging Face..."

## 🎨 Option 2: ClipDrop (100 calls/tháng miễn phí)

### Bước 1: Lấy API key
1. Vào https://clipdrop.co/apis
2. Đăng ký tài khoản
3. Tạo API key miễn phí
4. Copy API key

### Bước 2: Thêm vào config
1. Mở file `config.js` (tạo từ config-example.js)
2. Tìm dòng: `CLIPDROP_API_KEY: 'YOUR_CLIPDROP_KEY_HERE'`
3. Thay thế bằng API key thật
4. Lưu file `config.js`

## 🔧 Kiểm tra hoạt động

Mở Developer Tools (F12) và xem Console:

### Nếu thành công:
```
🤗 Đang gửi ảnh lên Hugging Face...
✅ Hugging Face thành công!
```

### Nếu chưa setup:
```
⚠️ AI services không khả dụng, dùng simulation mạnh...
💡 Để dùng AI thật, xem hướng dẫn trong api-setup.md
```

## 📊 So sánh chất lượng

| Method | Chất lượng | Tốc độ | Chi phí |
|--------|------------|--------|---------|
| **Hugging Face** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Miễn phí 100% |
| **ClipDrop** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 100 calls/tháng |
| **AI Simulation** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Miễn phí 100% |

## 💡 Tips

- **Hugging Face**: Tốt nhất, miễn phí hoàn toàn
- **ClipDrop**: Nhanh nhất, có giới hạn
- **Simulation**: Luôn hoạt động, chất lượng khá

## 🔒 Bảo mật

- API keys chỉ hoạt động trên domain của bạn
- Không share keys công khai
- Có thể tạo backend proxy để ẩn keys

## 🎉 Kết quả mong đợi

Với AI thật:
- **Chất lượng**: Xuất sắc, upscale 4x
- **Thời gian**: 5-15 giây
- **Độ sắc nét**: Rất cao
- **Chi tiết**: Được phục hồi hoàn hảo

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra Console (F12) để xem lỗi
2. Đảm bảo API key/token đúng format
3. Thử refresh trang và test lại

## 🔐 Bảo mật API Keys

### ✅ Đã được bảo vệ:
- File `config.js` chứa API keys được thêm vào `.gitignore`
- API keys không được commit lên GitHub
- Sử dụng file template `config-example.js` để hướng dẫn

### 📁 Cấu trúc files:
```
├── config-example.js    # Template (an toàn commit)
├── config.js           # API keys thật (KHÔNG commit)
├── .gitignore          # Bảo vệ config.js
└── script.js           # Code chính (không chứa keys)
```

### 🚨 Lưu ý quan trọng:
- **KHÔNG BAO GIỜ** commit file `config.js` lên GitHub
- File `.gitignore` đã được tạo để bảo vệ
- Nếu cần share code, chỉ share `config-example.js`

### 🔄 Khi clone project:
1. Copy `config-example.js` thành `config.js`
2. Thêm API keys thật vào `config.js`
3. File `config.js` sẽ tự động bị ignore bởi git