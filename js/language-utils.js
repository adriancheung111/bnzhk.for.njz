// 初始化當前語言（從 localStorage 獲取，如果沒有則默認為中文）
let currentLanguage = localStorage.getItem('selectedLanguage') || 'zh';

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
    // 更新全局語言設置
    window.currentLanguage = lang;
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
}

// 在頁面加載時同步語言設置
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        translatePage();
    }
});

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

// 打開導航菜單
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector('.custom_menu-btn').classList.add('menu_btn-style');
}

// 關閉導航菜單
function closeNav() {
    const myNav = document.getElementById("myNav");
    if (myNav) {
        myNav.style.width = "0%";
        document.querySelector('.custom_menu-btn').classList.remove('menu_btn-style');
        
        // 確保內容在動畫完成後仍然存在
        myNav.addEventListener('transitionend', function() {
            if (myNav.style.width === "0%") {
                // 重新加載導航內容
                const navContainer = document.getElementById('nav-container');
                if (navContainer) {
                    fetch('nav.html')
                        .then(response => response.text())
                        .then(data => {
                            navContainer.innerHTML = data;
                            translatePage(); // 重新翻譯
                        });
                }
            }
        }, { once: true }); // 只執行一次
    }
}

// 切換導航菜單
function toggleNav() {
    const myNav = document.getElementById("myNav");
    if (myNav.style.width === "100%") {
        closeNav();
    } else {
        openNav();
    }
} 