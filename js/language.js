// 獲取用戶瀏覽器語言設置
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    const shortLang = lang.split('-')[0];
    return translations[shortLang] ? shortLang : 'zh';
}

// 初始化當前語言（從 localStorage 獲取，如果沒有則默認為中文）
let currentLanguage = localStorage.getItem('selectedLanguage') || getBrowserLanguage();

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

// 切換語言選項的顯示
function toggleLanguageOptions(event) {
    event.preventDefault();
    const selector = event.currentTarget.closest('.language-selector');
    const options = selector.querySelector('.language-options');
    const arrow = selector.querySelector('.arrow');
    
    options.classList.toggle('show');
    selector.classList.toggle('active');
}

// 切換語言
function changeLanguage(lang) {
    currentLanguage = lang;
    // 保存到 localStorage
    localStorage.setItem('selectedLanguage', lang);
    // 執行翻譯
    translatePage();
    // 觸發語言改變事件
    document.dispatchEvent(new Event('languageChanged'));
    // 關閉語言選單
    const options = document.querySelector('.language-options');
    const selector = document.querySelector('.language-selector');
    if (options && selector) {
        options.classList.remove('show');
        selector.classList.remove('active');
    }
    // 關閉導航菜單
    const myNav = document.getElementById("myNav");
    if (myNav) {
        myNav.classList.remove("menu_width");
        document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
    }
    updateImages();
}

// 點擊外部關閉語言選單
document.addEventListener('click', function(event) {
    if (!event.target.closest('.language-selector')) {
        const options = document.querySelector('.language-options');
        const selector = document.querySelector('.language-selector');
        if (options && selector) {
            options.classList.remove('show');
            selector.classList.remove('active');
        }
    }
});

// 當 DOM 加載完成時自動翻譯
document.addEventListener('DOMContentLoaded', function() {
    // 先設置語言
    currentLanguage = localStorage.getItem('selectedLanguage') || getBrowserLanguage();
    // 保存到 localStorage
    localStorage.setItem('selectedLanguage', currentLanguage);
    // 執行翻譯和更新圖片
    translatePage();
    updateImages();
});

// 當導航加載完成時也執行翻譯
function updateContent() {
    translatePage();
}

// 導出當前語言變量，讓其他文件可以訪問
window.currentLanguage = currentLanguage;

// 在現有的語言切換函數中添加圖片更新邏輯
function updateImages() {
    const currentLang = currentLanguage;
    const images = document.querySelectorAll('.reward-image');
    const links = document.querySelectorAll('.reward-image-link');
    
    images.forEach((img, index) => {
        const newSrc = currentLang === 'zh' ? img.dataset.cnSrc : img.dataset.enSrc;
        img.src = newSrc;
        if (links[index]) {
            links[index].href = newSrc;
        }
    });
} 