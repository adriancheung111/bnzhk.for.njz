
// 打開圖片 Modal
function openImageModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden';
}

// 關閉圖片 Modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
    document.body.style.overflow = '';
}

// 點擊 Modal 背景關閉
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeImageModal();
        }
    });
});
