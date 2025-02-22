// 媒體數據
const mediaData = [
    {
        id: 'media1',
        titleKey: 'media1_title',
        contentKey: 'media1_content',
        dateKey: 'media1_date',
        image: 'images/media1.jpg'
    },
    {
        id: 'media2',
        titleKey: 'media2_title',
        contentKey: 'media2_content',
        dateKey: 'media2_date',
        image: 'images/media2.jpg'
    },
    {
        id: 'media3',
        titleKey: 'media3_title',
        contentKey: 'media3_content',
        dateKey: 'media3_date',
        image: 'images/media3.jpg'
    }
];

// 渲染完整的媒體列表（用於 media.html）
function renderAllMedia() {
    const container = document.getElementById('media-container');
    if (!container) return;

    try {
        const mediaItems = mediaData.map(media => `
            <div class="news_item" onclick="openMediaModal('${media.id}')">
                <div class="news_date">${translations[currentLanguage][media.dateKey]}</div>
                <div class="news_title">${translations[currentLanguage][media.titleKey]}</div>
            </div>
        `).join('');

        container.innerHTML = mediaItems;
    } catch (error) {
        console.error('Error rendering media:', error);
    }
}

// 渲染首頁的媒體列表（用於 index.html）
function renderIndexMedia() {
    const container = document.getElementById('media-container');
    if (!container) return;

    try {
        const mediaItems = mediaData.slice(0, 3).map(media => `
            <div class="news_item" onclick="openMediaModal('${media.id}')">
                <div class="news_date">${translations[currentLanguage][media.dateKey]}</div>
                <div class="news_title">${translations[currentLanguage][media.titleKey]}</div>
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
        <div class="modal-date">${translations[currentLanguage][media.dateKey]}</div>
        <div class="modal-title">${translations[currentLanguage][media.titleKey]}</div>
        <div class="modal-body">${translations[currentLanguage][media.contentKey]}</div>
    `;
    //<img src="${media.image}" class="modal-image" alt="${translations[currentLanguage][media.titleKey]}">

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
        // 添加語言變更監聽器
        document.addEventListener('languageChanged', renderIndexMedia);
        
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