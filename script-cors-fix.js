// 🤗 Alternative Hugging Face API - Không có CORS issues
async function enhanceWithHuggingFaceAlt(imageData) {
    console.log('🤗 Thử alternative AI API...');

    // Sử dụng Replicate API thay thế (public, không cần auth)
    const response = await fetch(imageData);
    const blob = await response.blob();

    // Convert to base64
    const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });

    try {
        // Thử API public không cần CORS
        const apiResponse = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                version: "9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
                input: {
                    image: base64,
                    scale: 4
                }
            })
        });

        if (!apiResponse.ok) {
            throw new Error('Replicate API failed');
        }

        const result = await apiResponse.json();
        console.log('✅ Alternative AI thành công!');
        return result.output;

    } catch (error) {
        console.log('⚠️ Alternative API cũng thất bại:', error.message);
        throw error;
    }
}