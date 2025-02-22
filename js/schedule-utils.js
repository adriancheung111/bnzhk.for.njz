// 當前顯示的年月
let currentYear = 2025;
let currentMonth = 2; // 2月

// 日程表數據
const scheduleData = {
    '2025-02-02': [{
        type: 'TV',
        title: 'MBS/TBS系「星期日的初耳學」金言&未公開特別節目',
        description: '金言&未公開特別節目將於本週日播出，敬請期待！',
        time: '21:00'
    }],
    '2025-02-03': [{
        type: 'RADIO',
        title: 'JFN「SCHOOL OF LOCK!」太太LOCKS!',
        description: '成員們將在電台節目中分享近況和有趣的故事。',
        time: '22:00'
    }],
    '2025-02-07': [{
        type: 'TV',
        title: '朝日電視台「M:ZINE」(Hiloto Wakai)',
        description: 'M:ZINE特別企劃，將為大家帶來精彩的表演。',
        time: '20:00'
    }],
    // ... 添加更多數據
};

// 生成月曆
function generateCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const startingDay = firstDay.getDay() || 7; // 將週日從0改為7
    const monthLength = lastDay.getDate();

    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;

    let html = '';
    let day = 1;
    let totalCells = Math.ceil((startingDay - 1 + monthLength) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
        if (i < startingDay - 1 || day > monthLength) {
            html += '<div class="calendar-day"></div>';
        } else {
            const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const events = scheduleData[currentDate] || [];
            
            html += `
                <div class="calendar-day">
                    <div class="calendar-date">${day}</div>
                    <div class="calendar-events">
                        ${events.map(event => `
                            <div class="event-item event-${event.type}" 
                                 title="${event.title}"
                                 onclick="openEventModal('${currentDate}', ${JSON.stringify(event).replace(/"/g, '&quot;')})">
                                ${event.title}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            day++;
        }
    }

    calendarGrid.innerHTML = html;
    document.querySelector('.current-month').textContent = `${String(month).padStart(2, '0')} / ${year}`;
}

// 生成列表視圖
function generateScheduleList(year, month, filterType = 'ALL') {
    const listContainer = document.getElementById('schedule-list');
    if (!listContainer) return;

    const days = [];
    const lastDay = new Date(year, month, 0).getDate();

    // 收集所有有事件的日期
    for (let day = 1; day <= lastDay; day++) {
        const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const events = scheduleData[date];
        if (events && events.length > 0) {
            // 根據篩選類型過濾事件
            const filteredEvents = filterType === 'ALL' 
                ? events 
                : events.filter(event => event.type === filterType);
            
            // 只有當有符合篩選條件的事件時才添加該日期
            if (filteredEvents.length > 0) {
                const fullDate = new Date(date);
                const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][fullDate.getDay()];
                days.push({ date, day, weekday, events: filteredEvents });
            }
        }
    }

    // 生成列表 HTML
    const html = days.map(({ date, day, weekday, events }) => `
        <div class="schedule-list-item">
            <div class="schedule-list-date">
                ${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}
                <span class="schedule-list-weekday">${weekday}</span>
            </div>
            <div class="schedule-list-events">
                ${events.map(event => `
                    <div class="list-event-item" onclick="openEventModal('${date}', ${JSON.stringify(event).replace(/"/g, '&quot;')})">
                        <div class="list-event-type event-${event.type}">${event.type}</div>
                        <div class="list-event-content">
                            <div class="list-event-time">${event.time}</div>
                            <div class="list-event-title">${event.title}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    listContainer.innerHTML = html || `<div class="no-events">本月暫無${filterType === 'ALL' ? '' : filterType + ' '}活動</div>`;
}

// 切換月份
function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
    } else if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
    generateScheduleList(currentYear, currentMonth);
}

// 篩選事件類型
function filterEvents(type) {
    // 桌面版日曆視圖的篩選
    const calendarEvents = document.querySelectorAll('.calendar-container .event-item');
    calendarEvents.forEach(event => {
        if (type === 'ALL' || event.classList.contains(`event-${type}`)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });

    // 重新生成列表視圖
    generateScheduleList(currentYear, currentMonth, type);
}

// 打開事件 Modal
function openEventModal(date, event) {
    const modal = document.getElementById('eventModal');
    const eventDate = new Date(date);
    
    modal.querySelector('.event-date').textContent = 
        `${eventDate.getFullYear()}年${eventDate.getMonth() + 1}月${eventDate.getDate()}日 ${event.time}`;
    
    modal.querySelector('.event-type').textContent = event.type;
    modal.querySelector('.event-type').className = `event-type event-${event.type}`;
    
    modal.querySelector('.event-title').textContent = event.title;
    modal.querySelector('.event-description').textContent = event.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 關閉事件 Modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    generateCalendar(currentYear, currentMonth);
    generateScheduleList(currentYear, currentMonth);

    // 綁定月份切換按鈕
    document.querySelector('.month-nav.prev').addEventListener('click', () => changeMonth(-1));
    document.querySelector('.month-nav.next').addEventListener('click', () => changeMonth(1));

    // 綁定類型篩選按鈕
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterEvents(this.dataset.type);
        });
    });

    // 添加 Modal 關閉事件
    const modal = document.getElementById('eventModal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', closeEventModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeEventModal();
        }
    });
}); 