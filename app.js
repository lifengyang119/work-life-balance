// ========== Gallery 图片 ==========
const galleryImages = [
    "./photo/image.jpg",
    "./photo/image (1).jpg",
    "./photo/image (2).jpg",
    "./photo/image (3).jpg",
    "./photo/image (4).jpg",
    "./photo/image (5).jpg",
];

// ========== 食物卡路里数据库 ==========
const foodDatabase = {
    breakfast: [
        { keywords: ["小米粥", "粥"], cal: 150 },
        { keywords: ["鸡蛋"], cal: 70 },
        { keywords: ["小菜"], cal: 30 },
        { keywords: ["馒头"], cal: 220 },
        { keywords: ["全麦面包", "面包"], cal: 130 },
        { keywords: ["牛奶"], cal: 120 },
        { keywords: ["香蕉"], cal: 90 },
        { keywords: ["坚果"], cal: 180 },
        { keywords: ["皮蛋瘦肉粥"], cal: 200 },
        { keywords: ["油条"], cal: 250 },
        { keywords: ["凉拌黄瓜"], cal: 25 },
        { keywords: ["燕麦片", "燕麦"], cal: 150 },
        { keywords: ["酸奶"], cal: 100 },
        { keywords: ["蓝莓"], cal: 35 },
        { keywords: ["蜂蜜"], cal: 60 },
        { keywords: ["阳春面", "面"], cal: 300 },
        { keywords: ["煎蛋"], cal: 120 },
        { keywords: ["葱花"], cal: 10 },
        { keywords: ["榨菜"], cal: 15 },
        { keywords: ["豆浆"], cal: 80 },
        { keywords: ["包子"], cal: 180 },
        { keywords: ["玉米"], cal: 110 },
        { keywords: ["煮鸡蛋"], cal: 75 },
        { keywords: ["牛油果吐司"], cal: 200 },
        { keywords: ["黑咖啡", "咖啡"], cal: 5 },
        { keywords: ["橙子"], cal: 60 },
        { keywords: ["紫薯粥"], cal: 160 },
        { keywords: ["茶叶蛋"], cal: 80 },
        { keywords: ["蒸南瓜"], cal: 70 },
        { keywords: ["苹果"], cal: 95 },
    ],
    lunch: [
        { keywords: ["米饭"], cal: 230 },
        { keywords: ["宫保鸡丁"], cal: 350 },
        { keywords: ["清炒时蔬", "时蔬"], cal: 80 },
        { keywords: ["番茄蛋汤"], cal: 100 },
        { keywords: ["牛肉拉面"], cal: 400 },
        { keywords: ["凉菜"], cal: 60 },
        { keywords: ["酸梅汤"], cal: 120 },
        { keywords: ["鸡胸肉沙拉", "沙拉"], cal: 250 },
        { keywords: ["果蔬汁"], cal: 80 },
        { keywords: ["鱼香肉丝"], cal: 320 },
        { keywords: ["紫菜蛋花汤"], cal: 80 },
        { keywords: ["凉拌木耳"], cal: 40 },
        { keywords: ["腊味煲仔饭", "煲仔饭"], cal: 450 },
        { keywords: ["青菜"], cal: 50 },
        { keywords: ["例汤"], cal: 60 },
        { keywords: ["猪肉白菜水饺", "水饺", "饺子"], cal: 350 },
        { keywords: ["醋"], cal: 5 },
        { keywords: ["蒜泥"], cal: 20 },
        { keywords: ["牛排"], cal: 380 },
        { keywords: ["烤时蔬"], cal: 100 },
        { keywords: ["糙米饭"], cal: 200 },
        { keywords: ["麻婆豆腐"], cal: 280 },
        { keywords: ["回锅肉"], cal: 360 },
        { keywords: ["绿豆汤"], cal: 90 },
    ],
    dinner: [
        { keywords: ["清蒸鱼"], cal: 250 },
        { keywords: ["蒜蓉西兰花"], cal: 100 },
        { keywords: ["豆腐汤"], cal: 80 },
        { keywords: ["火锅"], cal: 500 },
        { keywords: ["肥牛"], cal: 300 },
        { keywords: ["豆制品"], cal: 120 },
        { keywords: ["排骨莲藕汤"], cal: 350 },
        { keywords: ["清炒菜心"], cal: 60 },
        { keywords: ["杂粮饭"], cal: 200 },
        { keywords: ["三文鱼寿司", "寿司"], cal: 300 },
        { keywords: ["味噌汤"], cal: 60 },
        { keywords: ["海藻沙拉"], cal: 50 },
        { keywords: ["窑鸡"], cal: 400 },
        { keywords: ["烤土豆"], cal: 180 },
        { keywords: ["蔬菜沙拉"], cal: 80 },
        { keywords: ["水果拼盘"], cal: 120 },
        { keywords: ["松仁玉米"], cal: 200 },
        { keywords: ["蚝油生菜"], cal: 80 },
        { keywords: ["南瓜粥"], cal: 120 },
        { keywords: ["馒头"], cal: 220 },
        { keywords: ["橄榄油煎虾"], cal: 280 },
        { keywords: ["意面"], cal: 350 },
        { keywords: ["凯撒沙拉"], cal: 180 },
        { keywords: ["法棍"], cal: 200 },
        { keywords: ["砂锅粥"], cal: 180 },
        { keywords: ["卤味"], cal: 250 },
        { keywords: ["凉拌三丝"], cal: 60 },
    ],
    general: [
        // 通用食物 - 按关键词匹配
        { keywords: ["水"], cal: 0 },
        { keywords: ["茶"], cal: 2 },
        { keywords: ["可乐"], cal: 140 },
        { keywords: ["啤酒"], cal: 150 },
        { keywords: ["方便面"], cal: 450 },
        { keywords: ["汉堡"], cal: 400 },
        { keywords: ["披萨"], cal: 300 },
        { keywords: ["炸鸡"], cal: 350 },
        { keywords: ["薯条"], cal: 320 },
        { keywords: ["蛋糕"], cal: 280 },
        { keywords: ["巧克力"], cal: 230 },
        { keywords: ["冰淇淋"], cal: 200 },
        { keywords: ["坚果"], cal: 180 },
        { keywords: ["沙拉"], cal: 150 },
        { keywords: ["汤"], cal: 80 },
        { keywords: ["炒"], cal: 200 },
        { keywords: ["蒸"], cal: 180 },
        { keywords: ["烤"], cal: 250 },
        { keywords: ["煮"], cal: 150 },
    ]
};

// ========== 餐单数据 ==========

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
    return total >= 570 && total < 1080;
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

// 卡路里计算 - 根据食物文本匹配数据库
function calculateCalories(text) {
    if (!text || !text.trim()) return 0;
    let total = 0;
    const matched = new Set();

    // 先匹配长关键词（优先匹配多字词）
    const allFoodList = [...foodDatabase.breakfast, ...foodDatabase.lunch, ...foodDatabase.dinner, ...foodDatabase.general];
    const sorted = allFoodList.sort((a, b) => {
        const aLen = Math.max(...a.keywords.map(k => k.length));
        const bLen = Math.max(...b.keywords.map(k => k.length));
        return bLen - aLen;
    });

    for (const food of sorted) {
        for (const kw of food.keywords) {
            if (text.includes(kw) && !matched.has(kw)) {
                total += food.cal;
                matched.add(kw);
                break;
            }
        }
    }

    // 如果完全没匹配到，返回估算值
    if (total === 0) {
        // 估算：每10个字约 150-250 卡路里
        const charCount = text.replace(/\s+/g, '').length;
        total = Math.round(charCount * 20);
    }

    return total;
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
    const weather = randomPick(weatherTypes);
    const temp = Math.floor(Math.random() * 35) + 2;

    document.getElementById('weather-icon').textContent = weather.icon;
    document.getElementById('weather-status').textContent = weather.status;
    document.getElementById('weather-temp').textContent = `${temp}°C`;
    document.getElementById('weather-desc').textContent = weather.desc;

    const season = getSeason(temp);
    document.getElementById('clothes-text').innerHTML = `${season.clothes}<br><small>💡 ${season.tip}</small>`;
}

function renderGallery() {
    const track = document.getElementById('gallery-track');
    // 复制两组图片实现无缝循环
    const images = [...galleryImages, ...galleryImages];
    track.innerHTML = images.map(src =>
        `<img src="${src}" alt="Gallery" loading="lazy">`
    ).join('');
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

function renderUserMealEditor() {
    const saved = JSON.parse(localStorage.getItem('wl_usermeals') || '{}');
    const tbody = document.getElementById('user-meal-tbody');
    tbody.innerHTML = '';

    const mealKeys = [
        { key: 'breakfast', label: '早餐' },
        { key: 'lunch', label: '午餐' },
        { key: 'dinner', label: '晚餐' },
    ];

    mealKeys.forEach((m) => {
        const savedText = saved[m.key] || '';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${m.label}</strong></td>
            <td><input type="text" data-meal="${m.key}" placeholder="输入今天${m.label}吃了什么..." value="${savedText}"></td>
            <td class="cal-cell" id="cal-${m.key}">0</td>
        `;
        tbody.appendChild(tr);
    });

    // 绑定输入事件
    tbody.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const mealKey = input.getAttribute('data-meal');
            const text = input.value.trim();

            // 保存
            const notes = JSON.parse(localStorage.getItem('wl_usermeals') || '{}');
            notes[mealKey] = text;
            localStorage.setItem('wl_usermeals', JSON.stringify(notes));

            // 计算卡路里
            const cal = calculateCalories(text);
            document.getElementById(`cal-${mealKey}`).textContent = cal;

            // 总计
            let total = 0;
            tbody.querySelectorAll('input').forEach(inp => {
                total += calculateCalories(inp.value.trim());
            });
            document.getElementById('total-calories').textContent = total;
        });
    });

    // 初始化已有数据
    mealKeys.forEach(m => {
        const input = tbody.querySelector(`[data-meal="${m.key}"]`);
        if (input && saved[m.key]) {
            const cal = calculateCalories(saved[m.key]);
            document.getElementById(`cal-${m.key}`).textContent = cal;
        }
    });

    // 计算总计
    let total = 0;
    tbody.querySelectorAll('input').forEach(inp => {
        total += calculateCalories(inp.value.trim());
    });
    document.getElementById('total-calories').textContent = total;
}

function renderStatusTable() {
    const { now } = getNow();
    const workday = isWorkDay(now);
    const workTime = isWorkTime(now);

    const periods = [
        { label: '早晨', start: '06:00', end: '09:30', type: 'rest' },
        { label: '上午工作', start: '09:30', end: '12:00', type: isWorkTime(now) ? 'work' : '' },
        { label: '午休', start: '12:00', end: '14:00', type: 'rest' },
        { label: '下午工作', start: '14:00', end: '18:00', type: isWorkTime(now) ? 'work' : '' },
        { label: '晚间', start: '18:00', end: '22:00', type: 'rest' },
        { label: '睡前', start: '22:00', end: '06:00', type: 'rest' },
    ];

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
    renderGallery();
    renderMeals();
    renderUserMealEditor();
    renderStatusTable();

    // 每秒更新时间
    setInterval(renderDatetime, 1000);

    // 重新生成餐单
    document.getElementById('reload-meal').addEventListener('click', () => {
        renderMeals();
    });
}

document.addEventListener('DOMContentLoaded', init);
