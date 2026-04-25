// ========== 数据 ==========

const meals = {
    breakfast: [
        { name: "中式早餐", items: "小米粥 + 鸡蛋 + 小菜 + 馒头", note: "清淡养胃，适合忙碌的早晨" },
        { name: "能量早餐", items: "全麦面包 + 牛奶 + 香蕉 + 坚果", note: "高蛋白高纤维，提供持久能量" },
        { name: "暖胃粥品", items: "皮蛋瘦肉粥 + 油条 + 凉拌黄瓜", note: "经典搭配，饱腹感强" },
        { name: "西式简餐", items: "燕麦片 + 酸奶 + 蓝莓 + 蜂蜜", note: "快速制作，抗氧化丰富" },
        { name: "汤面时光", items: "阳春面 + 煎蛋 + 葱花 + 榨菜", note: "5分钟搞定，暖身又暖心" },
        { name: "蒸点组合", items: "豆浆 + 包子 + 玉米 + 煮鸡蛋", note: "传统营养，蒸煮更健康" },
        { name: "轻食早餐", items: "牛油果吐司 + 黑咖啡 + 橙子", note: "低脂高纤，适合控制体重" },
        { name: "粗粮早餐", items: "紫薯粥 + 茶叶蛋 + 蒸南瓜 + 苹果", note: "粗粮细作，膳食纤维丰富" },
    ],
    lunch: [
        { name: "经典工作餐", items: "米饭 + 宫保鸡丁 + 清炒时蔬 + 番茄蛋汤", note: "荤素搭配均衡，营养全面" },
        { name: "面食时光", items: "牛肉拉面 + 凉菜拼盘 + 冰镇酸梅汤", note: "面条扛饿，下午精力充沛" },
        { name: "轻食优选", items: "鸡胸肉沙拉 + 全麦面包 + 果蔬汁", note: "低卡健康，避免午后犯困" },
        { name: "盖浇饭系列", items: "鱼香肉丝盖饭 + 紫菜蛋花汤 + 凉拌木耳", note: "下饭神器，满足感满满" },
        { name: "煲仔饭", items: "腊味煲仔饭 + 青菜 + 例汤", note: "焦香煲仔饭，广东经典" },
        { name: "饺子宴", items: "猪肉白菜水饺 + 醋 + 蒜泥 + 凉拌黄瓜", note: "手工饺子，温暖和满足" },
        { name: "牛排轻食", items: "煎牛排 + 烤时蔬 + 糙米饭 + 沙拉", note: "优质蛋白，健身人士首选" },
        { name: "川菜风味", items: "麻婆豆腐 + 回锅肉 + 米饭 + 绿豆汤", note: "酸辣开胃，适合雨天" },
    ],
    dinner: [
        { name: "家常菜", items: "清蒸鱼 + 蒜蓉西兰花 + 米饭 + 豆腐汤", note: "清淡为主，减轻肠胃负担" },
        { name: "火锅之夜", items: "番茄锅 + 肥牛 + 各种蔬菜 + 豆制品", note: "温暖聚会，适合周末放松" },
        { name: "煲汤养生", items: "排骨莲藕汤 + 清炒菜心 + 杂粮饭", note: "秋冬暖身，滋补佳品" },
        { name: "寿司简餐", items: "三文鱼寿司拼盘 + 味噌汤 + 海藻沙拉", note: "日式轻食，低脂无负担" },
        { name: "烤禽盛宴", items: "窑鸡 + 烤土豆 + 蔬菜沙拉 + 水果拼盘", note: "周末犒劳自己，丰盛满足" },
        { name: "素食主义", items: "松仁玉米 + 蚝油生菜 + 南瓜粥 + 馒头", note: "清淡素雅，给肠胃放个假" },
        { name: "地中海风味", items: "橄榄油煎虾 + 意面 + 凯撒沙拉 + 法棍", note: "地中海饮食，健康又美味" },
        { name: "煲仔暖胃", items: "砂锅粥 + 卤味拼盘 + 凉拌三丝", note: "暖胃暖身，适合夜晚" },
    ]
};

const weatherTypes = [
    { icon: "☀️", status: "晴天", desc: "阳光明媚，万里无云" },
    { icon: "⛅", status: "多云", desc: "云层较厚，阳光隐约" },
    { icon: "☁️", status: "阴天", desc: "天色灰暗，无阳光" },
    { icon: "🌧️", status: "小雨", desc: "细雨蒙蒙，记得带伞" },
    { icon: "🌧️", status: "中雨", desc: "雨势明显，出门带伞" },
    { icon: "⛈️", status: "雷阵雨", desc: "雷电交加，注意安全" },
    { icon: "❄️", status: "小雪", desc: "雪花飘飘，注意保暖" },
    { icon: "🌫️", status: "雾", desc: "能见度低，出行小心" },
    { icon: "💨", status: "大风", desc: "风力较大，注意防风" },
];

// ========== 工具函数 ==========

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getNow() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return { now, year, month, day, hours, minutes };
}

function isWorkDay(now) {
    const dow = now.getDay();
    return dow >= 1 && dow <= 5;
}

function isWorkTime(now) {
    const h = now.getHours();
    const m = now.getMinutes();
    const total = h * 60 + m;
    return total >= 570 && total < 1080; // 9:30 = 570min, 18:00 = 1080min
}

function getWorkStatus(now) {
    const workday = isWorkDay(now);
    if (!workday) return { type: 'rest', label: '周末休息日' };
    if (isWorkTime(now)) return { type: 'work', label: '工作中 (9:30 - 18:00)' };
    return { type: 'rest', label: '休息中 (9:30 - 18:00)' };
}

function getChineseDay(d) {
    const units = ['日', '一', '二', '三', '四', '五', '六'];
    return '星期' + units[d];
}

function getSeason(temp) {
    if (temp >= 30) return { clothes: "天气炎热，建议穿短袖、短裤、短裙等清凉服饰。注意防晒，携带太阳帽和太阳镜。", tip: "记得多喝水防暑降温" };
    if (temp >= 24) return { clothes: "天气温暖舒适，短袖 T 恤或薄衬衫即可。早晚可加一件薄外套。", tip: "适当增减衣物" };
    if (temp >= 16) return { clothes: "气温偏凉，建议穿长袖衬衫、薄毛衣或卫衣。外搭夹克或风衣。", tip: "早晚注意添衣保暖" };
    if (temp >= 8) return { clothes: "天气较冷，建议穿毛衣、厚外套或棉服。内搭保暖内衣效果更佳。", tip: "注意颈部和手脚保暖" };
    return { clothes: "天气寒冷，请穿羽绒服、厚棉服等保暖服饰。搭配围巾、手套和帽子。", tip: "做好全面防寒措施" };
}

// ========== 渲染函数 ==========

function renderDatetime() {
    const { now, year, month, day, hours, minutes } = getNow();
    const dateStr = `${year}年${month}月${day}日`;
    const timeStr = `${hours}:${minutes}`;
    const weekStr = getChineseDay(now.getDay());
    const status = getWorkStatus(now);
    const typeClass = status.type;

    document.getElementById('datetime').innerHTML = `${dateStr} ${timeStr} ${weekStr}`;

    const statusEl = document.getElementById('workday-status');
    statusEl.className = typeClass;
    statusEl.textContent = status.label;
}

function renderWeather() {
    // 模拟随机天气 (实际可对接天气 API)
    const weather = randomPick(weatherTypes);
    const temp = Math.floor(Math.random() * 35) + 2; // 2~36°C

    document.getElementById('weather-icon').textContent = weather.icon;
    document.getElementById('weather-status').textContent = weather.status;
    document.getElementById('weather-temp').textContent = `${temp}°C`;
    document.getElementById('weather-desc').textContent = weather.desc;

    const season = getSeason(temp);
    document.getElementById('clothes-text').innerHTML = `${season.clothes}<br><small>💡 ${season.tip}</small>`;
}

function renderMeals() {
    const b = randomPick(meals.breakfast);
    const l = randomPick(meals.lunch);
    const d = randomPick(meals.dinner);

    ['breakfast', 'lunch', 'dinner'].forEach((key, i) => {
        const meal = [b, l, d][i];
        document.getElementById(key).innerHTML = `
            <h4>${meal.name}</h4>
            <p>${meal.items}</p>
            <p style="margin-top:6px;color:#94a3b8;font-size:12px;">${meal.note}</p>
        `;
    });
}

function renderStatusTable() {
    const { now } = getNow();
    const workday = isWorkDay(now);
    const workTime = isWorkTime(now);

    const periods = [
        { label: '早晨', start: '06:00', end: '09:30', type: workday ? 'rest' : 'rest' },
        { label: '上午工作', start: '09:30', end: '12:00', type: workTime ? 'work' : '' },
        { label: '午休', start: '12:00', end: '14:00', type: 'rest' },
        { label: '下午工作', start: '14:00', end: '18:00', type: workTime ? 'work' : '' },
        { label: '晚间', start: '18:00', end: '22:00', type: 'rest' },
        { label: '睡前', start: '22:00', end: '06:00', type: 'rest' },
    ];

    // 加载之前保存的备注
    const saved = JSON.parse(localStorage.getItem('wl_notes') || '{}');

    const tbody = document.getElementById('status-tbody');
    tbody.innerHTML = '';

    periods.forEach((p, i) => {
        const typeLabel = p.type === 'work' ? '工作时间' : '休息时间';
        const typeClass = p.type === 'work' ? 'work' : 'rest';
        const noteKey = `period_${i}`;
        const savedNote = saved[noteKey] || '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.label}</td>
            <td>${p.start} - ${p.end}</td>
            <td><span class="type-badge ${typeClass}">${typeLabel}</span></td>
            <td><textarea data-key="${noteKey}" placeholder="记录今日状态...">${savedNote}</textarea></td>
        `;
        tbody.appendChild(tr);
    });

    // 绑定输入事件，自动保存
    tbody.querySelectorAll('textarea').forEach(ta => {
        ta.addEventListener('input', () => {
            const key = ta.getAttribute('data-key');
            const notes = JSON.parse(localStorage.getItem('wl_notes') || '{}');
            notes[key] = ta.value;
            localStorage.setItem('wl_notes', JSON.stringify(notes));
        });
    });
}

// ========== 初始化 ==========

function init() {
    renderDatetime();
    renderWeather();
    renderMeals();
    renderStatusTable();

    // 每秒更新时间
    setInterval(renderDatetime, 1000);

    // 重新生成餐单
    document.getElementById('reload-meal').addEventListener('click', () => {
        renderMeals();
    });
}

document.addEventListener('DOMContentLoaded', init);
