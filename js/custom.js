// to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();
$(document).ready(function () {
  // 使用 jQuery 的 load 方法來加載 footer.html 並將其插入到頁面
  $("#footer-container").load("footer.html");
});

$(document).ready(function () {
  // 使用 jQuery 的 load 方法來加載 nav.html 並將其插入到頁面
  $("#nav-container").load("nav.html", function() {
    // nav 加載完成後執行翻譯更新
    updateContent();
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
    imgBoxes.forEach((img, index) => {
        const imgNumber = index + 1;
        img.src = `images/index${imgNumber}_${currentLanguage === 'zh' ? 'cn' : 'en'}.jpg`;
    });
}

// 在語言變更時更新圖片
document.addEventListener('languageChanged', updateImages);

// 在頁面加載時也更新圖片
document.addEventListener('DOMContentLoaded', updateImages);

// 打開圖片 Modal
function openImageModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden';
}

// 關閉圖片 Modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
    document.body.style.overflow = '';
}

// 點擊 Modal 背景關閉
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeImageModal();
        }
    });
});
