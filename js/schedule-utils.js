// 當前顯示的年月
let currentYear = 2025;
let currentMonth = 2; // 2月

// 多語言日程表數據
const scheduleData = {
    '2025-02-07': [{
        type: 'OTHER',
        title: {
            'zh': 'NewJeans 正式宣佈更名為全新團體「NJZ」',
            'en': 'NewJeans Officially Announces Rebranding as "NJZ"',
            'ko': 'NewJeans, 새로운 그룹 "NJZ"로 공식 변경 발표',
            'ja': 'NewJeans、新グループ「NJZ」として正式に改名を発表'
        },
        description: {
            'zh': `NewJeans 在去年發佈記者會正式宣布與娛樂公司 HYBE 旗下子品牌 ADOR 解除合約後，NewJeans 
            五位成員也很快展開下一步行動，首先創立了全新 Instagram 帳號與原先的帳號切割，而今回則是再有更明確的動作。
            帳號名從原先的 @jeanzforfree 更改為 @njz_official，確認團體以「NJZ」的名字重新出發，Minji、Hanni、Danielle、
            Haerin 與 Hyein 等 5 位成員依舊留在團體內，並且也率先釋出了一系列形象照，宣告即將展開新團體的演藝活動。
            在經過多番波折後，幾人總算重回正軌，Bunnies 可以暫時放下懸著的心了。`,
            'en': `Following NewJeans' official announcement last year to terminate their contract with HYBE's subsidiary ADOR, 
            the five members quickly took their next steps. They first established a new Instagram account, separating from their 
            previous one, and now they've made an even more definitive move. The account name has been changed from @jeanzforfree 
            to @njz_official, confirming the group's fresh start as "NJZ". All five members - Minji, Hanni, Danielle, Haerin, 
            and Hyein - remain in the group and have already released a series of new profile photos, announcing the beginning 
            of their new group activities. After various challenges, they're finally back on track, allowing Bunnies to breathe 
            a sigh of relief.`,
            'ko': `NewJeans는 작년 HYBE 산하 레이블 ADOR와의 계약 해지를 공식 발표한 후, 5명의 멤버들이 빠르게 다음 
            행보를 시작했습니다. 먼저 기존 계정과 분리된 새로운 Instagram 계정을 만들었고, 이번에는 더욱 확실한 
            변화를 보여주었습니다. 계정명을 @jeanzforfree에서 @njz_official로 변경하여 'NJZ'라는 이름으로 새출발을 
            확인했으며, Minji, Hanni, Danielle, Haerin, Hyein 5명의 멤버 모두가 그룹에 남아 새로운 프로필 사진을 
            공개하며 새로운 그룹 활동의 시작을 알렸습니다. 여러 우여곡절 끝에 마침내 정상 궤도에 올랐고, 
            버니즈들은 이제 한시름 놓을 수 있게 되었습니다.`,
            'ja': `NewJeansは昨年、HYBEの子会社ADORとの契約解除を正式に発表した後、5人のメンバーは素早く次のステップを
            踏み出しました。まず、既存のアカウントと分離した新しいInstagramアカウントを作成し、今回はさらに明確な
            動きを見せました。アカウント名を@jeanzforfreeから@njz_officialに変更し、グループが「NJZ」という名前で
            新たなスタートを切ることを確認。Minji、Hanni、Danielle、Haerin、Hyeinの5人のメンバーは全員グループに
            残り、新しいプロフィール写真を公開して新グループとしての活動開始を告知しました。様々な波乱を経て、
            ついに軌道に乗り、Bunniesもひとまず安心できることとなりました。`
        },
        time: ''
    }],
    '2025-03-23': [{
        type: 'LIVE',
        title: {
            'zh': 'ComplexCon 香港 2025 Complex Live',
            'en': 'ComplexCon Hong Kong 2025 Complex Live',
            'ko': 'ComplexCon 홍콩 2025 Complex Live',
            'ja': 'ComplexCon 香港 2025 Complex Live'
        },
        description: {
            'zh': 'NJZ 正式加入！ComplexCon 香港 2025 Complex Live! 音樂會演出嘉賓來襲！',
            'en': 'NJZ officially joins! ComplexCon Hong Kong 2025 Complex Live! Concert guest lineup announced!',
            'ko': 'NJZ 공식 합류! ComplexCon 홍콩 2025 Complex Live! 콘서트 게스트 라인업 공개!',
            'ja': 'NJZ正式参加！ComplexCon香港2025 Complex Live! コンサートゲストラインナップ発表！'
        },
        time: '22:00'
    }]
};
// const scheduleData = {
//     '2025-02-03': [{
//         type: 'RADIO',
//         title: 'JFN「SCHOOL OF LOCK!」太太LOCKS!',
//         description: '成員們將在電台節目中分享近況和有趣的故事。',
//         time: '22:00'
//     }],
//     '2025-02-07': [
//         {
//             type: 'TV',
//             title: '朝日電視台「M:ZINE」(Hiloto Wakai)',
//             description: 'M:ZINE特別企劃，將為大家帶來精彩的表演。',
//             time: '20:00'
//         },
//         {
//             type: 'RADIO',
//             title: 'JFN「SCHOOL OF LOCK!」太太LOCKS!',
//             description: '成員們將在電台節目中分享近況和有趣的故事。',
//             time: '22:00'
//         }
//     ],
//     '2025-02-08': [
//         {
//             type: 'TV',
//             title: '朝日電視台「M:ZINE」(Hiloto Wakai)',
//             description: 'M:ZINE特別企劃，將為大家帶來精彩的表演。',
//             time: '20:00'
//         },
//         {
//             type: 'RADIO',
//             title: 'JFN「SCHOOL OF LOCK!」太太LOCKS!',
//             description: '成員們將在電台節目中分享近況和有趣的故事。',
//             time: '22:00'
//         }
//     ],    
//     '2025-02-02': [{
//         type: 'RADIO',
//         title: 'JFN「SCHOOL OF LOCK!」太太LOCKS!',
//         description: '成員們將在電台節目中分享近況和有趣的故事。',
//         time: '22:00'
//     }],
// };

// 生成月曆
function generateCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const startingDay = firstDay.getDay() || 7; // 將週日從0改為7
    const monthLength = lastDay.getDate();
    const lang = window.currentLanguage || 'zh'; // 獲取當前語言

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
                                 title="${typeof event.title === 'object' ? event.title[lang] : event.title}"
                                 onclick="openEventModal('${currentDate}', ${JSON.stringify(event).replace(/"/g, '&quot;')})">
                                ${typeof event.title === 'object' ? event.title[lang] : event.title}
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
    const lang = window.currentLanguage || 'zh'; // 獲取當前語言

    const days = [];
    const lastDay = new Date(year, month, 0).getDate();

    // 收集所有有事件的日期
    for (let day = 1; day <= lastDay; day++) {
        const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const events = scheduleData[date];
        if (events && events.length > 0) {
            const filteredEvents = filterType === 'ALL' 
                ? events 
                : events.filter(event => event.type === filterType);
            
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
                            <div class="list-event-title">${typeof event.title === 'object' ? event.title[lang] : event.title}</div>
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
    const lang = window.currentLanguage || 'zh'; // 獲取當前語言
    
    modal.querySelector('.event-date').textContent = 
        `${eventDate.getFullYear()}年${eventDate.getMonth() + 1}月${eventDate.getDate()}日 ${event.time}`;
    
    modal.querySelector('.event-type').textContent = event.type;
    modal.querySelector('.event-type').className = `event-type event-${event.type}`;
    
    // 根據當前語言顯示標題和描述
    modal.querySelector('.event-title').textContent = 
        typeof event.title === 'object' ? event.title[lang] : event.title;
    modal.querySelector('.event-description').textContent = 
        typeof event.description === 'object' ? event.description[lang] : event.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 關閉事件 Modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 監聽語言變化
document.addEventListener('languageChanged', function() {
    generateCalendar(currentYear, currentMonth);
    generateScheduleList(currentYear, currentMonth);
});

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