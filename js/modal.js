// 創建模態框 HTML
let modalHTML = `
<div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="" id="modalImage" class="img-fluid" alt="Large Image">
      </div>
    </div>
  </div>
</div>
`;

// 當文檔加載完成時
document.addEventListener('DOMContentLoaded', function() {
  // 將模態框添加到 body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // 初始化模態框
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
  const modalImage = document.getElementById('modalImage');
  
  // 圖片點擊處理函數
  window.openImageModal = function(imgElement) {
    modalImage.src = imgElement.src;
    imageModal.show();
  };
});

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
