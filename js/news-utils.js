// 新聞數據
const newsData = [
    {
        id: 'news1',
        date: '2025.02.21',
        titleKey: 'news1_title',
        contentKey: 'news1_content'
    },
    {
        id: 'news2',
        date: '2025.02.13',
        titleKey: 'news2_title',
        contentKey: 'news2_content'
    },
    {
        id: 'news3',
        date: '2025.02.12',
        titleKey: 'news3_title',
        contentKey: 'news3_content'
    }
];

// 渲染新聞列表（用於首頁）
function renderIndexNews() {
    const container = document.getElementById('news-container');
    if (!container) {
        console.error('News container not found');
        return;
    }

    try {
        // 只顯示最新的3條新聞
        const newsItems = newsData.slice(0, 3).map(news => {
            const title = translations[currentLanguage || 'zh'][news.titleKey] || news.titleKey;
            return `
                <div class="news_item" onclick="openModal('${news.id}')">
                    <div class="news_date">${news.date}</div>
                    <div class="news_title">${title}</div>
                </div>
            `;
        }).join('');

        container.innerHTML = newsItems;
    } catch (error) {
        console.error('Error rendering index news:', error);
    }
}

// 打開 Modal
function openModal(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (!news) return;

    const modal = document.getElementById('newsModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <span class="close-modal" onclick="closeModal()">&times;</span>
        <div class="modal-date">${news.date}</div>
        <div class="modal-title">${translations[currentLanguage || 'zh'][news.titleKey]}</div>
        <div class="modal-body">${translations[currentLanguage || 'zh'][news.contentKey]}</div>
    `;
    
    // 計算滾動條寬度
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // 添加 modal-open 類並設置 padding-right
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.classList.add('modal-open');
    
    modal.style.display = 'block';
}

// 關閉 Modal
function closeModal() {
    const modal = document.getElementById('newsModal');
    
    // 移除 modal-open 類和 padding-right
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    
    modal.style.display = 'none';
}

// 初始化函數
function initIndexNews() {
    if (document.readyState === 'complete') {
        renderIndexNews();
        // 添加語言切換事件監聽
        document.addEventListener('languageChanged', renderIndexNews);
        
        // 添加點擊 Modal 外部關閉功能
        const modal = document.getElementById('newsModal');
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeModal();
                }
            });
        }
    } else {
        setTimeout(initIndexNews, 100);
    }
} 