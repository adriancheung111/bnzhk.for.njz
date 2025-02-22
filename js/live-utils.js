// 演出數據
const liveData = [
    {
        id: 'live1',
        titleKey: 'live1_title',
        contentKey: 'live1_content',
        dateKey: 'live1_date',
        timeKey: 'live1_time',
        venueKey: 'live1_venue',
        ticketKey: 'live1_ticket'
    },
    {
        id: 'live2',
        titleKey: 'live1_title',
        contentKey: 'live1_content',
        dateKey: 'live1_date',
        timeKey: 'live1_time',
        venueKey: 'live1_venue',
        ticketKey: 'live1_ticket'
    },
    {
        id: 'live3',
        titleKey: 'live1_title',
        contentKey: 'live1_content',
        dateKey: 'live1_date',
        timeKey: 'live1_time',
        venueKey: 'live1_venue',
        ticketKey: 'live1_ticket'
    }
];

// 渲染完整的演出列表（用於 live.html）
function renderAllLive() {
    const container = document.getElementById('live-container');
    if (!container) return;

    try {
        const liveItems = liveData.map(live => `
            <div class="news_item" onclick="openLiveModal('${live.id}')">
                <div class="news_date">${translations[currentLanguage][live.dateKey]}</div>
                <div class="news_title">${translations[currentLanguage][live.titleKey]}</div>
            </div>
        `).join('');

        container.innerHTML = liveItems;
    } catch (error) {
        console.error('Error rendering live events:', error);
    }
}

// 渲染首頁的演出列表（用於 index.html）
function renderIndexLive() {
    const container = document.getElementById('live-container');
    if (!container) return;

    try {
        const liveItems = liveData.slice(0, 3).map(live => `
            <div class="news_item" onclick="openLiveModal('${live.id}')">
                <div class="news_date">${translations[currentLanguage][live.dateKey]}</div>
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
        <div class="modal-date">${translations[currentLanguage][live.dateKey]}</div>
        <div class="modal-title">${translations[currentLanguage][live.titleKey]}</div>
        <div class="modal-info">
            <p><strong class="translate" data-key="time_label">時間：</strong>${translations[currentLanguage][live.timeKey]}</p>
            <p><strong class="translate" data-key="venue_label">地點：</strong>${translations[currentLanguage][live.venueKey]}</p>
            <p><strong class="translate" data-key="ticket_label">票務：</strong>${translations[currentLanguage][live.ticketKey]}</p>
        </div>
        <div class="modal-body">
            ${translations[currentLanguage][live.contentKey]}
        </div>
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