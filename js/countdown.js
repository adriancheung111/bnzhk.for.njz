// 倒數計時器
function updateCountdown() {
    const targetDate = new Date('2025-03-23T00:00:00+08:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        // 如果已經到達目標日期
        document.getElementById('countdown_days').textContent = '00';
        document.getElementById('countdown_hours').textContent = '00';
        document.getElementById('countdown_minutes').textContent = '00';
        document.getElementById('countdown_seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown_days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown_hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown_minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown_seconds').textContent = String(seconds).padStart(2, '0');
}

// 每秒更新一次倒數計時
setInterval(updateCountdown, 1000);
updateCountdown(); // 初始化顯示 