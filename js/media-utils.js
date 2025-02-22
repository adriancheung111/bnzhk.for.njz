// 媒體數據
const mediaData = [
    {
        id: 'media1',
        date: '2025.01.27 — 2025.02.26',
        title: 'MG NO.27 (1月27日發售)',
        content: '詳細內容...',
        image: 'images/media1.jpg'
    },
    {
        id: 'media2',
        date: '2025.02.19 — 2025.03.18',
        title: 'CUT3月號 (2月19日發售)',
        content: '詳細內容...',
        image: 'images/media2.jpg'
    },
    {
        id: 'media3',
        date: '2025.02.21 — 2025.04.20',
        title: 'SCREEN 2025年4月號 (2月21日發售)',
        content: '詳細內容...',
        image: 'images/media3.jpg'
    }
];

// 渲染媒體列表（用於首頁）
function renderIndexMedia() {
    const container = document.getElementById('media-container');
    if (!container) {
        console.error('Media container not found');
        return;
    }

    try {
        const mediaItems = mediaData.slice(0, 3).map(media => `
            <div class="news_item" onclick="openMediaModal('${media.id}')">
                <div class="news_date">${media.date}</div>
                <div class="news_title">${media.title}</div>
            </div>
        `).join('');

        container.innerHTML = mediaItems;
    } catch (error) {
        console.error('Error rendering media:', error);
    }
}

// 打開 Media Modal
function openMediaModal(mediaId) {
    const media = mediaData.find(item => item.id === mediaId);
    if (!media) return;

    const modal = document.getElementById('mediaModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <span class="close-modal" onclick="closeMediaModal()">&times;</span>
        <div class="modal-date">${media.date}</div>
        <div class="modal-title">${media.title}</div>
        <img src="${media.image}" class="modal-image" alt="${media.title}">
        <div class="modal-body">${media.content}</div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 關閉 Media Modal
function closeMediaModal() {
    const modal = document.getElementById('mediaModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 初始化函數
function initIndexMedia() {
    if (document.readyState === 'complete') {
        renderIndexMedia();
        
        const modal = document.getElementById('mediaModal');
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeMediaModal();
                }
            });
        }
    } else {
        setTimeout(initIndexMedia, 100);
    }
} 