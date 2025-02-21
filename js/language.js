// 獲取用戶瀏覽器語言設置
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    const shortLang = lang.split('-')[0];
    return translations[shortLang] ? shortLang : 'zh';
}

// 設置初始語言
let currentLanguage = localStorage.getItem('preferred_language') || getBrowserLanguage();

// 添加語言選單切換功能
function toggleLanguageOptions(event) {
    event.preventDefault();
    event.stopPropagation();
    const languageSelector = event.currentTarget.parentElement;
    const languageOptions = languageSelector.querySelector('.language-options');
    
    // 切換 active 類
    languageSelector.classList.toggle('active');
    languageOptions.classList.toggle('show');
}

// 修改切換語言函數
function changeLanguage(lang) {
    event.preventDefault();
    event.stopPropagation();
    
    currentLanguage = lang;
    localStorage.setItem('preferred_language', lang);
    updateContent();
    
    // 關閉語言選單
    const languageSelector = document.querySelector('.language-selector');
    languageSelector.classList.remove('active');
    languageSelector.querySelector('.language-options').classList.remove('show');
    
    // 關閉導航菜單
    document.getElementById("myNav").classList.remove("menu_width");
    document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
}

// 更新頁面內容
function updateContent() {
    document.querySelectorAll('.translate').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
        }
    });
}

// 頁面加載時初始化
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});

// 更新點擊外部關閉選單的邏輯
document.addEventListener('click', function(event) {
    // 如果點擊的是導航按鈕或其子元素，不執行關閉操作
    if (event.target.closest('.custom_menu-btn') || event.target.closest('#myNav')) {
        return;
    }
    
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !languageSelector.contains(event.target)) {
        languageSelector.classList.remove('active');
        languageSelector.querySelector('.language-options').classList.remove('show');
    }
}); 