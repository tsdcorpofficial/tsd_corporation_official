// ==========================================
// 1. Все основные переменные 
// ==========================================
const code_text_input = document.getElementById('code-text-input');
const code_output_console = document.getElementById('code-output-console');
const code_run_button = document.getElementById('code-run-button');
const code_run_button_b_console_mode = document.getElementById('code-run-button-b-console-mode');
const code_clear_button = document.getElementById('code-clear-button');
const code_save_button = document.getElementById('code-save-button');
const code_run_button_errors_console_mode = document.getElementById('code-run-button-errors-console-mode');

// ==========================================
// 2. Функции редактора (нахождение id страницы, вывод в iframe-блок консоли) 
// и обработчики событий (для поля ввода и окна при загрузке страницы)
// ==========================================

// Вспомогательная функция для получения текущего id вкладки из query параметров
function getCurrentTabId() {
    const search = new URLSearchParams(window.location.search);
    return Number(search.get('id')) || 1;
}

// Вспомогательная функция для вывода в iframe
function renderOutput(text, isError = false) {
    const isDark = localStorage.getItem('theme') === 'dark';
    const color = isError ? '#ff5555' : (isDark ? 'white' : 'black');
    const safeText = String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    code_output_console.setAttribute(
        'srcdoc',
        `<pre style="color: ${color}; font-family: monospace; margin: 0; white-space: pre-wrap;">${safeText}</pre>`
    );
}

// Ввод текста и автосохранение
code_text_input.addEventListener('input', () => {
    const num_id = getCurrentTabId();
    const blank_list = JSON.parse(localStorage.getItem('blank-list')) || [];
    const blank_list_item = blank_list.find(item => item.id === num_id);

    // Автозакрытие скобок по позиции курсора
    const pos = code_text_input.selectionStart;
    const lastChar = code_text_input.value[pos - 1];
    const pairs = { '{': '}', '[': ']', '(': ')' };

    if (pairs[lastChar]) {
        const val = code_text_input.value;
        code_text_input.value = val.slice(0, pos) + pairs[lastChar] + val.slice(pos);
        code_text_input.selectionStart = code_text_input.selectionEnd = pos;
    }

    if (blank_list_item) {
        blank_list_item.text = code_text_input.value;
        localStorage.setItem('blank-list', JSON.stringify(blank_list));
    }
});

// Инициализация при загрузке
window.addEventListener('load', () => {
    const search = new URLSearchParams(window.location.search);
    if (!search.get('id')) {
        window.location.search = '?id=1';
        return;
    }

    const num_id = getCurrentTabId();
    let blank_list = JSON.parse(localStorage.getItem('blank-list'));

    // Если хранилище пустое — инициализируем корректно
    if (!Array.isArray(blank_list) || blank_list.length === 0) {
        blank_list = [{ id: 1, text: '' }];
        localStorage.setItem('blank-list', JSON.stringify(blank_list));
    }

    if (num_id <= 0) {
        window.location.search = '?id=1';
        return;
    }

    let blank_list_item = blank_list.find(item => item.id === num_id);

    if (!blank_list_item) {
        if (num_id === blank_list.length + 1) {
            blank_list_item = { id: num_id, text: '' };
            blank_list.push(blank_list_item);
            localStorage.setItem('blank-list', JSON.stringify(blank_list));
        } else {
            // Перенаправляем на последнюю существующую вкладку
            window.location.search = `?id=${blank_list[blank_list.length - 1].id}`;
            return;
        }
    }

    // Отрисовка вкладок
    const blankItemsContainer = document.getElementById('blank-items');
    blankItemsContainer.innerHTML = '';

    blank_list.forEach(blank => {
        const isActive = blank.id === num_id;
        blankItemsContainer.innerHTML += `
            <div class="blank-item ${isActive ? 'active' : ''}">
                <button class="blank-button" onclick="open_query_link(${blank.id})">
                    Вкладка ${blank.id} ${isActive ? '(текущая)' : ''}
                </button>
            </div>`;
    });

    code_text_input.value = blank_list_item.text || '';

    // Кнопки управления
    blankItemsContainer.innerHTML += `
        <div class="blank-item add-new-blanc">
            <button class="blank-button" id="add-blank-button" onclick="open_query_link(${blank_list.length + 1})">
                <b>+</b> Новая вкладка
            </button>
        </div>
        <div class="blank-item">
            <button id="ThemeToggleButton" onclick="ThemeToggle()">Поменять тему на ☀️</button>
        </div>`;
});

// ==========================================
// 3. Обработчики событий для кнопок 
// ==========================================


// Обычный запуск (через return)
code_run_button.addEventListener('click', () => {
    try {
        const outputText = new Function(code_text_input.value)();
        renderOutput(outputText !== undefined ? outputText : 'Код выполнен (нет return)');
    } catch (err) {
        renderOutput(`Ошибка: ${err.message}`, true);
    }
});

// Запуск в режиме консоли (перехват console.log)
code_run_button_b_console_mode.addEventListener('click', () => {
    const originalLog = console.log;
    const logs = [];

    console.log = function (...args) {
        originalLog.apply(console, args);
        const message = args
            .map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)))
            .join(' ');
        logs.push(message);
    };

    try {
        new Function(code_text_input.value)();
        renderOutput(logs.length > 0 ? logs.join('\n') : 'Консоль пуста');
    } catch (err) {
        renderOutput(`Ошибка: ${err.message}`, true);
    } finally {
        // Обязательно возвращаем стандартный console.log обратно
        console.log = originalLog;
    }
});

// Очистка
code_clear_button.addEventListener('click', () => {
    code_text_input.value = '';
    renderOutput('Вывод кода');

    const num_id = getCurrentTabId();
    const blank_list = JSON.parse(localStorage.getItem('blank-list')) || [];
    const blank_list_item = blank_list.find(item => item.id === num_id);

    if (blank_list_item) {
        blank_list_item.text = '';
        localStorage.setItem('blank-list', JSON.stringify(blank_list));
    }
});

// Сохранение в файл
code_save_button.addEventListener('click', () => {
    const blob = new Blob([code_text_input.value], { type: 'text/plain;charset=utf-8' });
    const download_link = URL.createObjectURL(blob);
    const link_element = document.createElement('a');
    link_element.href = download_link;
    link_element.download = 'tml_code.js';
    link_element.click();
    URL.revokeObjectURL(download_link);
});

// Консоль вывода ошибок (не особо нужная, но она есть!)

code_run_button_errors_console_mode.addEventListener('click', () => { 
    let countErrors = 0
    try {
        const outputText = new Function(code_text_input.value)();
        renderOutput(`Ошибок не обнаружено!`);
    } catch (err) {
        countErrors += 1
        renderOutput(`Есть Ошибки. Счетчик ошибок - ${countErrors}. Конкретно: ${err.message}`, true);
    }
})