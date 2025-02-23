// to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();
$(document).ready(function () {
  // 先加載必要的 JS 文件
  $.when(
    $.getScript("js/translations.js")
  ).then(function() {
    // 加載完成後再加載導航和頁腳
    $("#nav-container").load("nav.html", function() {
      // 導航加載完成後初始化語言
      $.getScript("js/language.js").then(function() {
        translatePage();
      });
    });
    $("#footer-container").load("footer.html");
  });
});

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// 關閉導航菜單
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector('.custom_menu-btn').classList.remove('menu_btn-style');
}

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

function toggleNewsDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.nav-dropdown');
    dropdown.classList.toggle('active');
}

// 添加更新圖片的函數
function updateImages() {
    const imgBoxes = document.querySelectorAll('.img-box-test img');
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'zh';

    imgBoxes.forEach((img, index) => {
        const imgNumber = index + 1;
        img.src = `images/index${imgNumber}_${currentLanguage === 'zh' ? 'cn' : 'en'}.jpg`;
    });
}

// 在語言變更時更新圖片
document.addEventListener('languageChanged', updateImages);

// 在頁面加載時也更新圖片
document.addEventListener('DOMContentLoaded', updateImages);
