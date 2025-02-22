const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date(2025, 2, 1); // 從2025年3月開始

function updateCalendar() {
  // 更新月份顯示
  document.querySelector('.current-month').textContent = 
    `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  // 獲取當月第一天和最後一天
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // 獲取上個月的天數用於填充
  const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  
  let calendarHTML = '';
  let dayCount = 1;
  let nextMonthDay = 1;

  // 生成日曆HTML
  for (let i = 0; i < 6; i++) {
    calendarHTML += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        // 上個月的日期
        const prevMonthDate = prevMonthLastDay.getDate() - firstDay.getDay() + j + 1;
        calendarHTML += `
          <td class="other-month">
            <div class="date-number">${prevMonthDate}</div>
          </td>`;
      } else if (dayCount > lastDay.getDate()) {
        // 下個月的日期
        calendarHTML += `
          <td class="other-month">
            <div class="date-number">${nextMonthDay}</div>
          </td>`;
        nextMonthDay++;
      } else {
        // 當月的日期
        const isComplexConDay = dayCount === 23 && currentDate.getMonth() === 2 && currentDate.getFullYear() === 2025;
        const isComplexConDay2 = dayCount === 23 && currentDate.getMonth() === 2 && currentDate.getFullYear() === 2025;
        const isNJZDay = dayCount === 7 && currentDate.getMonth() === 1 && currentDate.getFullYear() === 2025;
        const todayClass = isComplexConDay ? 'today' : '';
        
        calendarHTML += `
          <td class="${todayClass}">
            <div class="date-number">${dayCount}</div>
            ${isComplexConDay ? `
              <div class="event translate" data-key="complexcon_event" 
                   onclick="showEventDetails('ComplexCon Hong Kong 2025', '2025-03-23', 'complexcon_event', 
                   'ComplexCon Hong Kong 2025 是一個集合潮流、藝術、音樂的大型活動。')">
                ComplexCon Hong Kong 2025
              </div>
            ` : ''}
            ${isNJZDay ? `
              <div class="event translate" data-key="njz_day_event"
                   onclick="showEventDetails('NJZ Day', '2025-07-22', 'njz_day_event',
                   'NJZ Day 是粉絲為 NJZ 準備的特別活動日。')">
                NJZ Day
              </div>
            ` : ''}
          </td>`;
        dayCount++;
      }
    }
    calendarHTML += '</tr>';
    if (dayCount > lastDay.getDate() && i !== 5) break;
  }

  document.querySelector('.calendar-grid tbody').innerHTML = calendarHTML;
  updateContent(); // 更新翻譯
}

// 月份切換功能
function changeMonth(delta) {
  currentDate.setMonth(currentDate.getMonth() + delta);
  updateCalendar();
}

// 返回活動日期
function goToToday() {
  // 檢查當前是在哪個活動日期之前
  const now = new Date();
  const complexConDate = new Date(2025, 2, 23); // 3月23日
  const njzDayDate = new Date(2025, 6, 22);     // 7月22日

  // 如果當前日期在 ComplexCon 之前或當月，顯示 ComplexCon 月份
  if (now <= complexConDate || currentDate.getMonth() === 2) {
    currentDate = new Date(2025, 2, 1); // 顯示 3 月
  }
  // 如果當前日期在 NJZ Day 之前或當月，顯示 NJZ Day 月份
  else if (now <= njzDayDate || currentDate.getMonth() === 6) {
    currentDate = new Date(2025, 6, 1); // 顯示 7 月
  }
  // 如果都過了，顯示最近的活動（7月）
  else {
    currentDate = new Date(2025, 6, 1); // 顯示 7 月
  }
  
  updateCalendar();
}

// 在頁面加載完成後自動初始化日曆
document.addEventListener('DOMContentLoaded', function() {
  updateCalendar();
});

// 確保在 nav 加載完成後也更新日曆
$(document).ready(function() {
  $('#nav-container').on('load', function() {
    updateCalendar();
  });
});

// 添加彈出視窗相關函數
function showEventDetails(title, date, translationKey, description) {
  document.getElementById('popupTitle').textContent = translations[currentLanguage][translationKey] || title;
  document.getElementById('popupDate').textContent = new Date(date).toLocaleDateString();
  document.getElementById('popupDescription').textContent = description;
  
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('eventPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('eventPopup').style.display = 'none';
}

// 點擊背景關閉彈出視窗
document.getElementById('overlay').addEventListener('click', closePopup); 