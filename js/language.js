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
    const arrow = event.currentTarget.querySelector('.arrow');
    
    if (languageOptions.classList.contains('show')) {
        languageOptions.classList.remove('show');
        languageSelector.classList.remove('active');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        languageOptions.classList.add('show');
        languageSelector.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
    }
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

// 點擊其他地方關閉語言選單
document.addEventListener('click', function(event) {
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.querySelector('.language-options');
    
    if (languageSelector && !languageSelector.contains(event.target)) {
        languageOptions.classList.remove('show');
        languageSelector.classList.remove('active');
    }
}); 