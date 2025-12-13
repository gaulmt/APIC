# 🚀 APIC - AI Picture Enhancement

Ứng dụng làm nét ảnh bằng AI với Hugging Face API, giao diện đẹp và hiệu suất cao.

## ✨ Tính năng

- 🤖 **AI thật**: Hugging Face Swin2SR model
- 📈 **Upscale 4x**: Tăng độ phân giải lên 4 lần
- 🎯 **Chất lượng cao**: Super resolution với deep learning
- 🚀 **Nhanh chóng**: Xử lý trong 5-15 giây
- 💰 **Miễn phí**: Sử dụng Hugging Face API miễn phí
- 📱 **Responsive**: Hoạt động trên mọi thiết bị

## 🌐 Demo

**Live Demo**: [Sẽ có sau khi deploy lên Vercel]

## 🛠️ Deploy lên Vercel

### Bước 1: Fork/Clone repo này

### Bước 2: Lấy Hugging Face Token
1. Vào https://huggingface.co/settings/tokens
2. Tạo token mới với quyền "Read"
3. Copy token (dạng: `hf_xxxxxxxxx`)

### Bước 3: Deploy lên Vercel
1. Vào https://vercel.com/
2. Import repo này
3. Thêm Environment Variable:
   - Name: `HUGGING_FACE_TOKEN`
   - Value: `hf_xxxxxxxxx` (token của bạn)
4. Deploy!

### Bước 4: Sử dụng
- Upload ảnh
- Click "Làm nét bằng AI"
- Tải ảnh đã được enhance

## 🔧 Chạy local (tùy chọn)

```bash
# Cài dependencies
npm install

# Chạy server
npm start

# Mở http://localhost:3000
```

## 📊 So sánh chất lượng

| Method | Chất lượng | Upscale | Thời gian |
|--------|------------|---------|-----------|
| **Hugging Face AI** | ⭐⭐⭐⭐⭐ | 4x | 5-15s |
| **AI Simulation** | ⭐⭐⭐⭐ | 4x | 3s |

## 🤖 AI Model

Sử dụng **Swin2SR-realworld-sr-x4-64-bsrgan-psnr**:
- Model state-of-the-art cho super resolution
- Được train trên real-world images
- Upscale 4x với chất lượng xuất sắc
- Phục hồi chi tiết và texture hoàn hảo

## 📁 Cấu trúc dự án

```
APIC/
├── index.html          # Giao diện chính
├── style.css           # Styling và animations
├── script.js           # Logic xử lý ảnh
├── api/
│   └── huggingface.js  # Vercel API function
├── vercel.json         # Vercel config
└── README.md           # Tài liệu
```

## 🔧 Tính năng

- **Drag & Drop**: Kéo thả ảnh để upload
- **Preview**: Xem trước ảnh gốc và ảnh đã enhance
- **Download**: Tải xuống ảnh chất lượng cao
- **Responsive**: Giao diện đẹp trên mọi thiết bị
- **Fast**: Xử lý nhanh với AI optimization

## 📝 License

MIT License - Sử dụng tự do cho mọi mục đích.

---

**Được tạo với ❤️ và AI** 🤖