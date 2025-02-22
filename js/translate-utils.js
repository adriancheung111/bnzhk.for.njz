// 初始化當前語言（從 localStorage 獲取，如果沒有則默認為中文）
let currentLanguage = localStorage.getItem('selectedLanguage') || 'zh';

// 更新所有需要翻譯的內容
function translatePage() {
    const elements = document.querySelectorAll('.translate');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
            // 如果內容包含 HTML 標籤，使用 innerHTML
            if (translations[currentLanguage][key].includes('<br')) {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// 當 DOM 加載完成時自動翻譯
document.addEventListener('DOMContentLoaded', function() {
    translatePage();
});

// 當導航加載完成時也執行翻譯
function updateContent() {
    translatePage();
}

// 導出當前語言變量，讓其他文件可以訪問
window.currentLanguage = currentLanguage;

// 切換語言
function switchLanguage(lang) {
    currentLanguage = lang;
    translatePage();
    // 觸發語言改變事件
    document.dispatchEvent(new Event('languageChanged'));
} 