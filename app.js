// ==========================================
// 1. БАЗА ДАННЫХ (Взято из вашего TML_datebase.js)
// ==========================================
const Data_news = [
    { id: 1, Headers: "У сайта появился новостной сервис!", text: `<p>Теперь вы можете узнать всю нужную информацию об новых версиях и продуктах.</p>`, image: "source/images/TOS News Preview 1.png", data: "08.05.2026" },
    {
        id: 2, Headers: "Выборы главы корпорации", text: `<p>В корпорации TSD Corporation проходили выборы нового главы корпорации. 
    В результате 1, 2 части выборов в финальной части оказались два кандидата - Нестор Ващенко и Кузьма Кузьмин (а по простому *Кузя*).
    </p> 
    <p>В результате проверок, многие пришли к выводу что выборы могли быть сфальсифицированы: 
    голоса у одного из кандидатов - Нестора Ващенко, могли быть накручены. 
    Однако есть и те кто защищают Нестора и опровергают накрутку и считают, что Кузя обиделся на Нестора и на результаты финальной части из-за того, 
    что разница в процентах между его голосами и его главного оппонента очень большая.</p> 
    <p>Действия остнователя TSD Corporation были направлены на полное онуление очков Нестора и назначение на должность главы компании Кузьмы Кузьмина.</p> 
    <p>На данный момент мы ждем реакции от других компаний, таких как Smartford Corporation и Vanko Corporation</p>`, image: "source/images/TOS News Preview 2 - выборы.png", data: "21.06.2026"
    },
    {
        id: 3, Headers: "Новые возможности новостей", text:
            `<p>Добавлены новые элементы: код, фреймы и эмодзи.</p>
         <p>Редакторам страницы новостей на нажем сайте теперь можно будет использовать несколько новых элементов, 
        которые могут значительно улучшить качество статьи и её дизайн. Для этого были добавлены такие элементы как: 
        ссылки на ресурсы (соцсети, мессенджеры и прочие сайты), код, фреймы (можно в него добавить html содержимое, 
        или взять ссылку на внешний сайт) и эмодзи (из любого изображения).</p>
        <p>Также была добавлена страница для разработчиков, на которой можно создать внешний вид своей страницы новости, 
        а потом скопировать или сохранить её код. Все примеры вложений можно посмотреть на этой странице</p>
        <div class="ref-item mb-true">
        <img src="source/files/TSD Corporation logo.png" class="ref-resource-image">
        </img><h6 class="ref-resource-name">TML Official</h6>
        <a class="ref-link" target="_blank" href="https://t.me/TSD_TML_OFFICIAL">Присоединиться</a>
        </div>
        <div class="code-item mb-true" id="JS-code">
        <div class="head-code-item"><h5 class="code-name">Мой код</h5></div>
        <code id="my-code">console.log("Hello World")</code><div class="foot-code-item"><button id="copy-button" class="code-copy-button">Скопировать код</button></div>
        </div>
        <div class="frame-item mb-true">
        <h3>Название сайта</h3>
        <iframe class="frame-main" srcdoc="<h1>Текст внутри фрейма</h1>">
        </iframe></div>
        <p>И эмодзи конечно<span class="emoji-item"><img src="source/files/TSD Corporation logo.png" class="emoji-img"></img></span></p>
        <h3>Обновление 04.10.2026 - добавлены формулы LaTex!</h3>
        <p class="latex-formulas-frame">1-я Формула из базы данных: \\( x^{i\\pi} + 1 = 0 \\)</p>
        <p class="latex-formulas-frame">2-я Формула из базы данных: \\( y^{i\\pi} + 2 = 0 \\)</p>
        `, image: "source/images/TOS News Preview 3.png", data: "26.07.2026"
    },
    {
        id: 4,
        Headers: "Новый редактор кода TSD Corporation",
        text: `<p>Абсолютно новый редактор кода от <b>TSD Corporation</b></p>
              <p>Попробывать новый редактор кода можно <a href="Редактор кода tsd/index.html">здесь</a></p>`,
        image: "source/images/TOS News Preview 2 - выборы.png",
        data: "21.06.2026", updated: "false"
    },
    {
        id: 5,
        Headers: "TSD Corporation и Vanko Corporation обьединились",
        text: `<p>5 Ноября 2026 года две известные корпорации - TSD Corporation и Vanko Corporation обьеденились в двойной корпоративный союз "TSD-Vanko"</p>
            <p>Новая реформа подразумевает не насильное подчинение одной корпорации другой, а равноправное обьединение, созданное с целью сотрудничества и анти-монопольной борьбы</p>
            <p><b>Новая реформа подразумевает:</b></p>
            <p>
              <ul>
                <li><code>1. Структура Vanko Corp никак не затронута.</code></li>
                <li><code>2. В совет глав TSD входит глава Vanko, как особый человек.</code></li>
                <li><code>3. У обьединения есть собственный логотип (в будущем будет создан флаг). Данный логотип будет использоваться только как общий бренд.</code></li>
              </ul>
            </p>
            <p>Подписывайтесь на Vanko Corporation и TSD Corporation в Telegram!</p>
            <p>
             <div class="ref-item mb-true">
               <img src="source/files/TSD Corporation logo.png" class="ref-resource-image">
               </img><h6 class="ref-resource-name">TML Official</h6>
               <a class="ref-link" target="_blank" href="https://t.me/TSD_TML_OFFICIAL">Присоединиться</a>
             </div>
             <div class="ref-item mb-true">
               <img src="https://yt3.ggpht.com/GcmZj-06jdNDEu0kVzANRTuw5e_rseXpUzS3oadrARdbky2y_oP58bm-Xo4xPV6x6EmQ_uVoZQ=s176-c-k-c0x00ffffff-no-rj-mo" class="ref-resource-image">
               </img><h6 class="ref-resource-name">Vanko Corporation</h6>
               <a class="ref-link" target="_blank" href="https://t.me/+_KuIVRr0exBmNmIy">Присоединиться</a>
             </div>
             </p>`,
        image: "source/files/TSD-Vanko Union logo.jpg",
        data: "06.11.2026", updated: "false"
    }
];

const Data_product = [
    { id: 1, name: "TriadeOS", version: [{ name: "TriadeOS 15", download_link: "https://t.me/c/3771689083/17" }, { name: "TriadeOS 14", download_link: "https://t.me/c/3771689083/4" }], logo: "source/files/TSD Corporation logo.png" },
    { id: 2, name: "SmartfordOS", version: [{ name: "SmartfordOS 2", download_link: "https://t.me/c/3771689083/14" }], logo: "source/files/SmartfordOS logo.png" },
    { id: 3, name: "GameSoft", version: [{ name: "GameSoft 3", download_link: "https://t.me/c/3771689083/10" }], logo: "source/files/GameSoft logo.png" },
    { id: 4, name: "TriadeX", version: [{ name: "TriadeX 1", download_link: "https://t.me/c/3771689083/11" }], logo: "source/files/TriadeX logo.png" },
    { id: 5, name: "Trinux", version: [{ name: "Trinux 1", download_link: "https://t.me/c/3771689083/12" }], logo: "source/files/Trinux logo.png" }
];

// ==========================================
// 2. ШАБЛОНЫ СТРАНИЦ (HTML внутри JavaScript)
// ==========================================

// Список всех ссылок на верхней панели
let navLinks = document.querySelectorAll('.nav-link');
document.addEventListener("DOMContentLoaded", () => {
    navLinks = document.querySelectorAll('.nav-link');
})

// Главная
function renderHome() {
    app.innerHTML = `
        <div class="text-center py-5">
            <h1 class="hero-title">TSD Corporation</h1>
            <p class="mb-5 fs-5">Создаем операционные системы нового поколения на базе Scratch. Инновации с 1982 года.</p>
            <div class="mb-5">
                <img src="source/images/TOS Preview.png" class="img-fluid carousel-preview" style="max-height: 400px;" alt="TriadeOS">
            </div>
            <a href="#" class="btn-primary-custom" onclick="navigate('download')">Скачать TriadeOS</a>
        </div>
    `;
}

// Продукты
function renderProducts() {
    let cards = '';
    Data_product.forEach(p => {
        cards += `
            <div class="card-custom product-card">
                <img src="${p.logo}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="mt-2">Операционная система</p>
            </div>
        `;
    });
    app.innerHTML = `<h1 class="text-center mb-5">Наши продукты</h1><div class="product-grid">${cards}</div>`;
}

// Скачать (Список)
function renderDownload() {
    let list = '';
    Data_product.forEach(p => {
        list += `
            <a href="#" class="download-item" onclick="openPage('product_detail', ${p.id}); return false;">
                <img src="${p.logo}" alt="">
                <p>Скачать ${p.name}</p>
            </a>
        `;
    });
    app.innerHTML = `
        <h1 class="text-center mb-4">Выберите систему</h1>
        <p class="text-center mb-5">Перед скачиванием подключитесь к <a href="#">TSD Store</a></p>
        <div class="download-list">${list}</div>
    `;
}

// Детали продукта (Скачивание версий)
function renderProductDetail(id) {
    const product = Data_product.find(p => String(p.id) === id);
    if (!product) return;

    let list = '';
    product.version.forEach(v => {
        list += `
            <a href="${v.download_link}" target="_blank" class="download-item">
                <img src="${product.logo}" alt="">
                <p>${v.name}</p>
            </a>
        `;
    });
    app.innerHTML = `
        <button class="btn btn-outline-light mb-4" style="border-radius:100px;" onclick="openPage('download')">← Назад</button>
        <h1 class="text-center mb-4">Скачать ${product.name}</h1>
        <div class="download-list">${list}</div>
    `;
}

// Новости (Сетка)
function renderNews() {
    let cards = '';
    Data_news.forEach(n => {
        cards += `
            <a href="#" class="card-custom news-card" onclick="openPage('news_detail',${n.id}); return false;">
                <img src="${n.image}" alt="">
                <div class="news-content">
                    <h4>${n.Headers}</h4>
                    <p>${n.data}</p>
                </div>
            </a>
        `;
    });
    app.innerHTML = `<h1 class="text-center mb-2">Новости</h1><p class="text-center mb-5">Последние обновления</p><div class="news-grid">${cards}</div>`;
}

// Детали новости (Полный текст)
function renderNewsDetail(id) {
    const news = Data_news.find(n => String(n.id) === id);
    if (!news) return;

    app.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto;">
            <button class="btn btn-outline-light mb-4" style="border-radius:100px;" onclick="openPage('news')">← Все новости</button>
            <h1>${news.Headers}</h1>
            <p class="text-primary mb-4">${news.data}</p>
            <img src="${news.image}" class="img-fluid rounded mb-4" style="border: 1px solid var(--border-color);">
            <div class="about-text">${news.text}</div>
        </div>
    `;
}

// О нас
function renderAbout() {
    app.innerHTML = `
        <h1 class="text-center mb-5">О компании</h1>
        <div class="card-custom about-text">
            <h2 class="text-primary mb-4">История TriadeOS</h2>
            <p>TriadeOS — один из первых успешных проектов нашей компании, который привел компанию к успеху.</p>
            <p>История системы начинается с 1982 года, когда руководство решило создать современную ОС, удобную для всех.</p>
            <p>Сегодня мы активно дорабатываем и обновляем нашу ОС, делая её максимально удобной для пользователей.</p>
        </div>
    `;
}

// Контакты
function renderContact() {
    app.innerHTML = `
        <h1 class="text-center mb-5">Связаться с нами</h1>
        <div class="contact-grid">
            <a href="https://t.me/TSD_TML_OFFICIAL" target="_blank" class="card-custom contact-card">
                <img src="source/files/TG logo.png" alt="TG">
                <p>Telegram</p>
            </a>
            <a href="https://youtube.com/@tsd_corporation" target="_blank" class="card-custom contact-card">
                <img src="source/files/YT logo.png" alt="YT">
                <p>YouTube</p>
            </a>
            <a href="https://vk.com/im/channels/-236683512" target="_blank" class="card-custom contact-card">
                <img src="source/files/VK logo.png" alt="VK">
                <p>ВКонтакте</p>
            </a>
        </div>
    `;
}

// Страница редактора кода TSD-Code
function renderTsdCode() {
    app.innerHTML = `
        <div class="text-center py-5">
            <h1 class="hero-title">TSD Code</h1>
            <p class="mb-5 fs-5">Совершенно новый редактор кода от нас.</p>
            <div class="mb-5">
                <img src="source/images/TOS Preview.png" class="img-fluid carousel-preview" style="max-height: 400px;" alt="TriadeOS">
            </div>
            <p class="mb-5 fs-5"><span class="fw-bold fst-italic">TSD Code</span> <span class="fst-italic"> - редактор кода от TSD Corporation</span>(т.е нашей компании), позволяющий писать код на языке программирования JavaScript и сохранять написанный вами код в формате <span class="">.js</span></p>
             <p class="mb-5 fs-5">Опробывать новый редактор кода можно по <a href="Редактор кода tsd/index.html">ссылке</a></p>
            </div>
    `;
}

// ==========================================
// 3. РОУТЕР (Переключение страниц)
// ==========================================
const app = document.getElementById('app-content');

// Функция для открытия конкретной страницы
const openPage = (page, id = null) => {
    if (id) {
        open(`index.html?page_name=${page}&id=${id}`, "_self")
    }
    else {
        open(`index.html?page_name=${page}`, "_self")
    }
}

function navigate(page, navLinksList, param = null) {
    // Обновляем активную ссылку в меню
    navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            console.log(`${link.dataset.page} = ${page}`)
            link.classList.add('active');
        }
        else {
            if ((page === 'product_detail' && link.dataset.page === 'download') || (page === 'news_detail' && link.dataset.page === 'news')) {
                link.classList.add('active')
            }
        }
    });

    // Рендерим нужную страницу
    window.scrollTo(0, 0); // Скролл наверх

    if (page === 'home') renderHome();
    if (page === 'products') renderProducts();
    if (page === 'download') renderDownload();
    if (page === 'news') renderNews();
    if (page === 'about') renderAbout();
    if (page === 'contact') renderContact();
    if (page === 'product_detail') {
        console.log("Открываю новость")
        renderProductDetail(param);
    }
    if (page === 'news_detail') renderNewsDetail(param);
    if (page === 'tsdcode') renderTsdCode()
    console.log("Открыта страница>>", page, param ? param : "")
}

function loadMathJex() {
    const data_array = document.querySelectorAll(".latex-formulas-frame")
    console.log(`Количество формул LaTex - ${data_array.length}`)
    if (data_array.length > 0) {
        let number_formule = 0
        data_array.forEach(math_formules_item => {
            data_array[number_formule].innerText = math_formules_item.innerText
            number_formule += 1
        })
        if (window.MathJax && window.MathJax.typeset) {
            window.MathJax.typeset();
            console.log("Обработка формул LaTex")
        }
    }
    else {
        console.log('Формулы LaTex не обнаружены')
    }
}


// ==========================================
// 4. ФУНКЦИИ ДЛЯ РАБОТЫ ЦВЕТОВЫХ ТЕМ САЙТА
// ==========================================



// Массив с темами
const ThemeList = ['light', 'dark']

// Функция для применения темы (принимает параметр в виде названия цвета темы)
const SetTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem("theme", theme)
}


const ThemeToggle = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    if (document.getElementById("editor-logo-img")) {
        if (newTheme === "dark") {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo.png"
        }
        else {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo (dark).png"
        }
    }
    SetTheme(newTheme)
    document.getElementById('ThemeToggleButton').innerHTML = `Поменять тему на ${newTheme === 'dark' ? '☀️' : '🌙'}`
    console.log("New theme>>", newTheme)
}

// Функция для применения темы, название которой взято из localStorage

const InitTheme = () => {
    const currentTheme = localStorage.getItem("theme")
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme)
    }
    else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        SetTheme(prefersDark === true ? "dark" : "light")
    }
}

// Функция, загружающая тему при загрузке страницы
const addThemeAndTTB = () => {
    const addThemeToggleButton = () => {
        const TTB_ITEM = document.getElementById("nav-bar_list")
        const TTB_VALUE = document.documentElement.getAttribute("data-theme") === "dark" ?
            `
     <li class="nav-item"><button id="ThemeToggleButton" class="btn-primary-custom" onClick="ThemeToggle()">Поменять тему на ☀️</button></li>
    ` :
            `
     <li class="nav-item"><button id="ThemeToggleButton" class="btn-primary-custom" onClick="ThemeToggle()">Поменять тему на 🌙</button></li>
    `
        if (TTB_ITEM) {
            TTB_ITEM.innerHTML += TTB_VALUE
        }
    }
    addThemeToggleButton()
    if (document.getElementById("editor-logo-img")) {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo.png"
        }
        if (document.documentElement.getAttribute("data-theme") === "light") {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo (dark).png"
        }
    }
    else {
        return
    }

    console.log(localStorage.getItem("theme") + " " + window.matchMedia('(prefers-color-scheme: dark)').matches)
}

// Дополнительный сет - функции для лонгрид-элементах в новостях 

// Обработчик кнопки-копирайтера 

function copyButtonCodeLoad() {
    window.copy_button = document.getElementById("copy-button")
    copy_button.addEventListener("click", () => {
        navigator.clipboard.writeText(document.getElementById("my-code").innerText)
        copy_button.innerHTML = `Код скопирован!`
    })
}

// ==========================================
// 5. ЗАГРУЗКА САЙТА (финал)
// ==========================================


// Запуск при загрузке
window.onload = () => {
    const page_params = new URLSearchParams(window.location.search)
    const page_name = page_params.get("page_name") || 'home'
    const page_id = page_params.get("id")
    console.log("id страницы >>>", page_id)
    navigate(page_name, navLinks, page_id);
    InitTheme();
    addThemeAndTTB();
    if (page_name === "news_detail") {
        loadMathJex()
        copyButtonCodeLoad()
    };
};