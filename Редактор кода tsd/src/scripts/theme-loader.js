const ThemeList = ['light', 'dark']

// Функция задающая тему редактора
const SetTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem("theme", theme)
    setCodeConsoleTheme()
}

// Функция для переключения темы   
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

// Функция для загрузки темы при загрузке страницы редактора

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
// Функция для загрузки темы для консоли редактора
const setCodeConsoleTheme = () => {
        const code_output_console =  document.getElementById("code-output-console")
        code_output_console.setAttribute("srcdoc",`
                <p code-output-item style='color:${localStorage.getItem("theme") === 'dark' ? 'white' : 'black'}; font-family: monospace;'>Вывод кода</p>`)
    }

// Обработчик события, загружающий тему сайта

document.addEventListener('DOMContentLoaded', InitTheme)
window.addEventListener("load", () => {
    /// Добавляет кнопку-переключатель темы
    const addThemeToggleButton = () => {
        const TTB_ITEM = document.getElementById("navbarTogglerDemo03")
        const TTB_VALUE = document.documentElement.getAttribute("data-theme") === "dark" ? `
    <ul class="navbar-nav" id="nav-bar_list">
      <button id="ThemeToggleButton" onClick="ThemeToggle()">Поменять тему на ☀️</button>
    </ul>` : `
    <ul class="navbar-nav" id="nav-bar_list">
      <button id="ThemeToggleButton" onClick="ThemeToggle()">Поменять тему на 🌙</button>
    </ul>`
        if (TTB_ITEM) {
            TTB_ITEM.innerHTML += TTB_VALUE
        }
    }
    addThemeToggleButton()
    setCodeConsoleTheme()
    if (document.getElementById("editor-logo-img")) {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo.png"
        }
        if (document.documentElement.getAttribute("data-theme") === "light") {
            document.getElementById("editor-logo-img").src = "src/files/TSD Corporation logo (dark).png"
        }
    }

    console.log(localStorage.getItem("theme") + " " + window.matchMedia('(prefers-color-scheme: dark)').matches)
})
