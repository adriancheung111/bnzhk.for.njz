let currentLanguage = 'zh'; // 默認語言為中文

// 切換語言
function switchLanguage(lang) {
    currentLanguage = lang;
    translatePage();
    // 觸發語言改變事件
    document.dispatchEvent(new Event('languageChanged'));
}

// 翻譯頁面
function translatePage() {
    const elements = document.getElementsByClassName('translate');
    for (let element of elements) {
        const key = element.getAttribute('data-key');
        if (key && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    }
}

// 頁面加載完成後執行翻譯
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
}); 