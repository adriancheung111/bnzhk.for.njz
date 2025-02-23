document.addEventListener('DOMContentLoaded', function() {
    // 處理圖片點擊事件
    const modalImage = document.getElementById('modalImage');
    const imageModal = document.getElementById('imageModal');
    
    imageModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const imgSrc = button.getAttribute('src');
        modalImage.src = imgSrc;
    });

    // 添加鍵盤事件支持
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = bootstrap.Modal.getInstance(imageModal);
            if (modal) modal.hide();
        }
    });
}); 