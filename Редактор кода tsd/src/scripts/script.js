const code_text_input = document.getElementById("code-text-input")
const code_output_console = document.getElementById("code-output-console")
const code_run_button = document.getElementById("code-run-button")
const code_run_button_b_console_mode = document.getElementById("code-run-button-b-console-mode")
const code_clear_button = document.getElementById("code-clear-button")
const code_save_button = document.getElementById("code-save-button")
code_text_input.addEventListener('input', async () => {
  const text_array = code_text_input.value.split('')
  if (text_array[text_array.length - 1] === "\n") {
    text_array.pop()
    code_text_input.value = ""
    text_array.forEach(symbol => {
      code_text_input.value += symbol
    });
  }
  console.log('Текущий текст - ', text_array)
  const blank_list_update  = () => {
  //Для проверки наличия query параметров и массива с вкладками(и его конкретного элемента по q параметру)
    const search = new URLSearchParams(window.location.search)
   const id = search.get("id")
   const num_id = Number(id)
  console.log("Последний элемент в коде - ",text_array[text_array.length - 1])
   const black_list = JSON.parse(localStorage.getItem("blank-list"))
    console.log(black_list)
    console.log("Получены данные из массива с вкладками кода",)
    const black_list_item = black_list[num_id - 1]
      console.log(black_list_item," - страница в массиве вкладок, с которой вы работаете!")
      // Для проверки наличия левой скобки (чтобы поставить правую, так удобнее)
      switch (text_array[text_array.length - 1]) {
      case "{": code_text_input.value += "}" 
      break;
      case "[": code_text_input.value += "]" 
      break;
      case "(": code_text_input.value += ")" 
      break;
      default: console.log("Скобок и тире не обнаружено!")
      break;
    }
     black_list_item.text = code_text_input.value
      localStorage.setItem("blank-list", JSON.stringify(black_list))
    }
    blank_list_update()
   })
window.addEventListener("load", () => {
  const search = new URLSearchParams(window.location.search)
  const id = search.get("id")
  const num_id = Number(id)
  if (id === null) {
        const link = document.createElement("a")
        link.href = String(`?id=1`)
        link.click()
  }
  //Проверка наличия массива с вкладками (страницами с кодом)
  if (!!localStorage.getItem("blank-list")) {
    // Выполняется, если массив с вкладками найден!
    const black_list = JSON.parse(localStorage.getItem("blank-list"))
    console.log(black_list)
    black_list.forEach(blank => {
    
    if (blank.id === num_id)  {
      //Выполняется если одна из вкладок в массиве соответствует номеру (id) вкладки в query-параметрах
      document.getElementById("blank-items").innerHTML += `
      <div class="blank-item active">
       <button class="blank-button" id="blank-button" onclick="open_query_link(${blank.id})">
         Вкладка ${blank.id} (текущая)
       </button>
      </div>`
     }
    
    if (blank.id !== num_id)  {
      //Выполняется если одна из вкладок в массиве не соответствует номеру вкладки в query-параметрах
      document.getElementById("blank-items").innerHTML += `
      <div class="blank-item">
       <button class="blank-button" id="blank-button" onclick="open_query_link(${blank.id})">
         Вкладка ${blank.id}
       </button>
      </div>`
     }
    
   })
   // Код для вывода информации с активной вкладки в поле ввода  
   console.log("Получены данные из массива с вкладками кода",)
    const black_list_item = black_list[num_id - 1]
      console.log(black_list_item," - страница в массиве вкладок, с которой вы работаете!")  
    if(!black_list_item) {
      // Выполняется если нашей вкладки ещё не существует!
      if(num_id - black_list.length > 1) {
      // Выполняется, если номер новой вкладки больше числа вкладок на значение > 1
        const link = document.createElement("a")
        link.href = String(`?id=${black_list[black_list.lentgh]}`)
        link.click()
      }
      if(num_id - black_list.length === 1) {
      // Выполняется, если номер новой вкладки больше числа вкладок в массиве на 1
        black_list.push({id:num_id,text:""})
      localStorage.setItem("blank-list", JSON.stringify(black_list))
     }
     if(num_id === 0 || num_id < 0) {
      // Выполняется, если номер новой вкладки равен нулю или меньше нуля
      const link = document.createElement("a")
        link.href = String(`?id=1`)
        link.click()
     }
    }
    else {
      // Выполняется, если вкладка уже существует
      console.log("текст текущей вкладки - ", black_list_item.text)
      code_text_input.value = black_list_item.text || ""
    }
  }
  else {
    //Выполняется если массив с вкладками не найден 
    const black_list = JSON.parse(localStorage.getItem("blank-list"))
    console.log("Массив со страницами не найден")
    setInterval(() => {console.log("Подождите чуть")}, 50000)
      console.log("Мы создаем сам массив и новый элемент (страницу) внутри него!")
      localStorage.setItem("blank-list", JSON.stringify([{id:id, text:""}]))
      black_list.forEach(blank => {
    
      document.getElementById("blank-items").innerHTML += `
      <div class="blank-item">
       <button class="blank-button" id="blank-button" onclick="open_query_link(${blank.id})">
         Вкладка ${blank.id} (текущая)
       </button>
      </div>`
      })
    
    }
})
code_run_button.addEventListener('click', () => {
 console.log("Запуск вашего кода>>")
 const outputText = new Function(code_text_input.value)()
 code_output_console.setAttribute("srcdoc",`<p style="color: white; font-family: monospace ;">${outputText}</p>`)
 console.log("Код выполнен!") 
})

code_run_button_b_console_mode.addEventListener('click', () => {
  // Вывод при нажатии на эту кнопку принимает код в формате "console.log(передаваемое значение)"  
  const log_data = console.log
    console.log = function(...args) {
    log_data.apply(console, args); 
    const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ');
    code_output_console.setAttribute("srcdoc",`<code style="color: white; font-family: monospace ;">${message + '\n'}</code>`);
  };
  console.log(code_text_input.value)
})


code_clear_button.addEventListener("click", () => {
 console.log("Удаление кода и очистка консоли!>>")
 code_text_input.value = ''
 localStorage.removeItem("code-text")
 code_output_console.setAttribute("srcdoc",`<p style="color: white; font-family: monospace ;">Вывод кода</p>`)
})

code_save_button.addEventListener("click", () => {
  // Нажатие на кнопку сохраняет код в виде файла с расширением *.js*
  const blob = new Blob([code_text_input.value],  { type: 'text/plain;charset=utf-8' }) 
  console.log("Сохраняем данные кода")
  const download_link = URL.createObjectURL(blob)
  const link_element = document.createElement("a")
  console.log("Создаем ссылку на скачивание файла")
  link_element.href = download_link
  link_element.download = "tml code.js"
  link_element.click()
  console.log("Скачивание файла")
  URL.revokeObjectURL(blob)
})
