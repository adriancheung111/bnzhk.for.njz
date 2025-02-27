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

// 檢查是否需要顯示彈窗
function checkAndShowModal() {
    const lastShownTime = localStorage.getItem('njzModalLastShown');
    const now = new Date().getTime();
    
    // 如果從未顯示過或者已經過了10秒
    if (!lastShownTime || (now - parseInt(lastShownTime)) > 24 * 60 * 60 * 1000) {
        showModal();
    }
}

// 定義全局函數
window.njzCloseModal = function() {
    console.log('Closing modal...');
    const modal = document.getElementById('njzModal');
    if (modal) {
        modal.remove();
    }
};

window.njzCloseModalByBackground = function(event) {
    console.log('Background click detected...');
    if (event.target.id === 'njzModal') {
        window.njzCloseModal();
    }
};

// 顯示彈窗
function showModal() {
    const modalHtml = `
        <div id="njzModal" style="position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); backdrop-filter: blur(5px); transition: all 0.3s ease-in-out; overflow-y: auto;" onclick="njzCloseModalByBackground(event)">
            <div style="background-color: white; margin: 5% auto; padding: 30px; width: 90%; max-width: 500px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transform: translateY(0); transition: all 0.3s ease-out; animation: modalSlideIn 0.5s ease-out; position: relative;" onclick="event.stopPropagation();">
                <div style="position: relative;">
                    <h2 style="text-align: center; margin-bottom: 25px; font-size: 28px; color: #333; font-weight: 600;">Message For NJZ</h2>
                    <p style="text-align: center; margin-bottom: 25px; color: #666; font-size: 16px; white-space: pre-wrap; line-height: 1.6; max-height: 50vh; overflow-y: auto; padding: 0 10px;">為了給NJZ 在 2025 年 3 月 23 日 ComplexCon Hong Kong 2025 上的首秀準備一個大驚喜和大力支持，來自香港的 BNZHK 正在與 TokkiMap 合作，收集來自世界各地的 Bunnies 的信息，製作成一本留言簿成員， NJZ 送給成員！

留言收集將於 2025 年 3 月 9 日結束。請盡量使用英文或韓文留言，否則成員未必能看懂喔！

To prepare a big surprise and show great support to our girls NJZ for their debut show at ComplexCon Hong Kong 2025 on March 23, 2025, BNZHK from Hong Kong is collaborating with TokkiMap to gather messages from Bunnies around the world to make it a message book to be delivered to NJZ members!

The message collection will end on March 9, 2025.</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px; margin: 30px 0;">
                        <a href="https://forms.gle/oyqdVoKCmJuMTcJ47" target="_blank" 
                           style="display: block; padding: 15px 25px; background: linear-gradient(135deg, #4CAF50, #45a049); 
                                  color: white; text-decoration: none; border-radius: 10px; text-align: center; 
                                  font-weight: 500; transition: transform 0.2s, box-shadow 0.2s; 
                                  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);"
                           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(76, 175, 80, 0.3)'"
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(76, 175, 80, 0.2)'">
                            Hong Kong & OverSeas
                        </a>
                        
                        <a href="https://j5q9wmp3v62.sg.larksuite.com/share/base/form/shrlg2Q5EZQ3TFrWwpuy5AKnxge" target="_blank"
                           style="display: block; padding: 15px 25px; background: linear-gradient(135deg, #0099cc, #008CBA);
                                  color: white; text-decoration: none; border-radius: 10px; text-align: center;
                                  font-weight: 500; transition: transform 0.2s, box-shadow 0.2s;
                                  box-shadow: 0 4px 15px rgba(0, 140, 186, 0.2);"
                           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 140, 186, 0.3)'"
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 140, 186, 0.2)'">
                            内地用户
                        </a>
                    </div>

                    <button onclick="njzCloseModal()" 
                            style="display: block; width: 100%; padding: 15px 25px; margin-top: 20px;
                                   background: linear-gradient(135deg, #ff4444, #f44336);
                                   color: white; border: none; border-radius: 10px; cursor: pointer;
                                   font-weight: 500; transition: transform 0.2s, box-shadow 0.2s;
                                   box-shadow: 0 4px 15px rgba(244, 67, 54, 0.2);"
                            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(244, 67, 54, 0.3)'"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(244, 67, 54, 0.2)'">
                        關閉
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // 插入彈窗 HTML
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // 記錄顯示時間
    localStorage.setItem('njzModalLastShown', new Date().getTime());
}

// 當 DOM 加載完成後執行
document.addEventListener('DOMContentLoaded', checkAndShowModal);
