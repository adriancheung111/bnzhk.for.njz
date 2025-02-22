// 演出數據
const liveData = [
    {
        id: 'live1',
        titleKey: 'live1_title',
        contentKey: 'live1_content',
        date: translations[currentLanguage]['live1_date'],
        time: translations[currentLanguage]['live1_time'],
        venueKey: 'live1_venue',
        ticketKey: 'live1_ticket'
    },
    {
        id: 'live2',
        date: '2025.04.13',
        title: 'AIMYON TOUR 2025 "Dolphin Apartment"',
        content: '演出詳情...',
        venue: '場地信息',
        time: '19:00',
        ticketInfo: '票務信息'
    },
    {
        id: 'live3',
        date: '2025.04.19',
        title: 'AIMYON TOUR 2025 "Dolphin Apartment"',
        content: '演出詳情...',
        venue: '場地信息',
        time: '19:00',
        ticketInfo: '票務信息'
    }
];

// 渲染演出列表（用於首頁）
function renderIndexLive() {
    const container = document.getElementById('live-container');
    if (!container) {
        console.error('Live container not found');
        return;
    }

    try {
        const liveItems = liveData.slice(0, 3).map(live => `
            <div class="news_item" onclick="openLiveModal('${live.id}')">
                <div class="news_date">${translations[currentLanguage][live.date]}</div>
                <div class="news_title">${translations[currentLanguage][live.titleKey]}</div>
            </div>
        `).join('');

        container.innerHTML = liveItems;
    } catch (error) {
        console.error('Error rendering live events:', error);
    }
}

// 打開 Live Modal
function openLiveModal(liveId) {
    const live = liveData.find(item => item.id === liveId);
    if (!live) return;

    const modal = document.getElementById('liveModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <span class="close-modal" onclick="closeLiveModal()">&times;</span>
        <div class="modal-date">${translations[currentLanguage][live.date]}</div>
        <div class="modal-title">${translations[currentLanguage][live.titleKey]}</div>
        <div class="modal-info">
            <p><strong>${translations[currentLanguage].time_label}：</strong>${translations[currentLanguage][live.time]}</p>
            <p><strong>${translations[currentLanguage].venue_label}：</strong>${translations[currentLanguage][live.venueKey]}</p>
            <p><strong>${translations[currentLanguage].ticket_label}：</strong>${translations[currentLanguage][live.ticketKey]}</p>
        </div>
        <div class="modal-body">${translations[currentLanguage][live.contentKey]}</div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 關閉 Live Modal
function closeLiveModal() {
    const modal = document.getElementById('liveModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 初始化函數
function initIndexLive() {
    if (document.readyState === 'complete') {
        renderIndexLive();
        
        // 添加語言變更監聽器
        document.addEventListener('languageChanged', renderIndexLive);
        
        const modal = document.getElementById('liveModal');
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeLiveModal();
                }
            });
        }
    } else {
        setTimeout(initIndexLive, 100);
    }
} 