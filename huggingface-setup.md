# 🤗 Hướng dẫn setup Hugging Face API cho APIC

## 🚀 Bước 1: Tạo tài khoản và API Token

### 1.1 Đăng ký tài khoản
1. Vào https://huggingface.co/
2. Click "Sign Up" 
3. Đăng ký với email hoặc GitHub

### 1.2 Tạo API Token
1. Sau khi đăng nhập, vào: https://huggingface.co/settings/tokens
2. Click "New token"
3. Đặt tên: `APIC-Enhancement`
4. Chọn role: `Read`
5. Click "Generate a token"
6. **Copy token** (dạng: `hf_xxxxxxxxxxxxxxxxxxxxxxxxx`)

## 🔧 Bước 2: Cấu hình trong APIC

### 2.1 Mở file `script.js`
Tìm dòng:
```javascript
'Authorization': 'Bearer YOUR_HF_TOKEN',
```

### 2.2 Thay thế token
```javascript
'Authorization': 'Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxx', // Token của bạn
```

## 🎯 Bước 3: Test API

### 3.1 Mở Developer Tools (F12)
1. Mở trang web APIC
2. Nhấn F12 để mở Console
3. Upload một ảnh test
4. Click "Làm nét bằng AI"
5. Xem log trong Console

### 3.2 Kiểm tra kết quả
- Nếu thành công: Sẽ thấy "Thử API 2..." trong console
- Nếu lỗi: Sẽ fallback sang API khác

## 📊 Models có sẵn trên Hugging Face

### Super Resolution Models (khuyên dùng):

1. **caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr** ⭐⭐⭐⭐⭐
   - Tốt nhất cho ảnh thật
   - Upscale 4x
   - Đã tích hợp trong APIC

2. **microsoft/swin2sr-lightweight-x2-64** ⭐⭐⭐⭐
   - Nhanh hơn, upscale 2x
   - Tốt cho ảnh nhỏ

3. **caidas/swin2SR-classical-sr-x4-64** ⭐⭐⭐
   - Tốt cho ảnh anime/artwork

## 🔄 Thay đổi model (nâng cao)

Để dùng model khác, sửa trong `script.js`:

```javascript
const apiResponse = await fetch('https://api-inference.huggingface.co/models/MODEL_NAME_HERE', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_HF_TOKEN',
        'Content-Type': 'application/octet-stream'
    },
    body: blob
});
```

## ⚡ Tối ưu hóa

### Giảm kích thước ảnh trước khi gửi:
```javascript
// Resize ảnh xuống 512px trước khi enhance
const maxSize = 512;
if (img.width > maxSize || img.height > maxSize) {
    const ratio = Math.min(maxSize / img.width, maxSize / img.height);
    canvas.width = img.width * ratio;
    canvas.height = img.height * ratio;
}
```

## 🐛 Troubleshooting

### Lỗi 401 Unauthorized
- Kiểm tra token có đúng không
- Token phải bắt đầu bằng `hf_`
- Đảm bảo token có quyền `Read`

### Lỗi 503 Service Unavailable  
- Model đang loading, thử lại sau 30s
- Hoặc model quá tải, thử model khác

### Lỗi CORS
- Hugging Face hỗ trợ CORS, không có vấn đề này
- Nếu vẫn lỗi, kiểm tra browser có block không

## 💡 Tips

1. **Token bảo mật**: Không share token công khai
2. **Rate limit**: HF có giới hạn, nhưng rất cao cho free tier
3. **Model loading**: Lần đầu dùng model có thể chậm (30s)
4. **Kích thước**: Ảnh quá lớn (>5MB) có thể timeout

## 🎉 Kết quả mong đợi

- **Input**: Ảnh mờ, độ phân giải thấp
- **Output**: Ảnh sắc nét, upscale 4x, chất lượng cao
- **Thời gian**: 5-15 giây tùy kích thước ảnh
- **Miễn phí**: Không giới hạn với tài khoản free

## 🔗 Links hữu ích

- **Hugging Face Models**: https://huggingface.co/models?pipeline_tag=image-to-image
- **API Docs**: https://huggingface.co/docs/api-inference/index
- **Super Resolution Models**: https://huggingface.co/models?search=super%20resolution