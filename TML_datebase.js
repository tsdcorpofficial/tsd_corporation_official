const Data_news = [
  {
    id: 1,
    Headers: "У официального сайта TML Official появился свой новостной сервис!",
    text: "У официального сайта TML Official появилась страница с новостями и обновлениями. Теперь вы можете узнать всю нужную информацию об новых версиях и продуктах нашей компании и об их обновлениях",
    image: "source/images/TOS News Preview 1.png",
    data: "08.05.2026"
  },
  {
    id: 2,
    Headers: "В корпорации TSD Corporation прошли последние выборы!",
    text: `<p>В корпорации TSD Corporation проходили выборы нового главы корпорации. В результате 1, 2 части выборов в финальной части оказались два кандидата - Нестор Ващенко и Кузьма Кузьмин (а по простому *Кузя*).</p> <p>В результате проверок, многие пришли к выводу что выборы могли быть сфальсифицированы: голоса у одного из кандидатов - Нестора Ващенко, могли быть накручены. Однако есть и те кто защищают Нестора и опровергают накрутку и считают, что Кузя обиделся на Нестора и на результаты финальной части из-за того, что разница в процентах между его голосами и его главного оппонента очень большая.</p> <p>Действия остнователя TSD Corporation были направлены на полное онуление очков Нестора и назначение на должность главы компании Кузьмы Кузьмина.</p> <p>На данный момент мы ждем реакции от других компаний, таких как Smartford Corporation и Vanko Corporation</p>`,
    image: "source/images/TOS News Preview 2 - выборы.png",
    data: "21.06.2026"
  },
  {
    id: 3,
    Headers: "Новые возможности написания новостей на сайте",
    text: `
        <p>Редакторам страницы новостей на нажем сайте теперь можно будет использовать несколько новых элементов, которые могут значительно улучшить качество статьи и её дизайн. Для этого были добавлены такие элементы как: ссылки на ресурсы (соцсети, мессенджеры и прочие сайты), код, фреймы (можно в него добавить html содержимое, или взять ссылку на внешний сайт) и эмодзи (из любого изображения).</p>
        <p>Также была добавлена страница для разработчиков, на которой можно создать внешний вид своей страницы новости, а потом скопировать или сохранить её код. Все примеры вложений можно посмотреть на этой странице</p>
        <p><div class="ref-item"><img src="source/files/TSD Corporation logo.png" class="ref-resource-image"></img><h6 class="ref-resource-name">TML Official</h6><a class="ref-link" target="_blank" href="https://t.me/TSD_TML_OFFICIAL">Присоединиться</a></div></p>
        <p><div class="code-item" id="JS-code"><div class="head-code-item"><h5 class="code-name">Мой код</h5></div><code id="my-code">console.log("Hello World")</code><div class="foot-code-item"><button id="copy-button" class="code-copy-button">Скопировать код</button></div></div></p>
        <p><div class="frame-item"><h3>Название сайта</h3>
        <iframe class="frame-main" srcdoc="<h1>Текст внутри фрейма</h1>"></iframe></div></p>
        <p>И эмодзи конечно<span class="emoji-item"><img src="source/files/TSD Corporation logo.png" class="emoji-img"></img></span></p>`,
    image: "source/images/TOS News Preview 3.png",
    data: "26.07.2026"
  },
]

const Data_product = [
  {
    id: 1, name: "TOS", version: [
      { name: "TriadeOS 15", download_link: "https://t.me/c/3771689083/17" },
      { name: "TriadeOS 14", download_link: "https://t.me/c/3771689083/4" },
      { name: "TriadeOS 13", download_link: "https://t.me/c/3771689083/5" },
      { name: "TriadeOS 12", download_link: "https://t.me/c/3771689083/6" },
    ], logo: "source/files/TSD Corporation logo.png"
  },

  {
    id: 2, name: "SMOS", version: [
      { name: "SmartfordOS 2", download_link: "https://t.me/c/3771689083/14" },
      { name: "SmartfordOS 1", download_link: "https://t.me/c/3771689083/13" },
      { name: "SmartfordOS beta 1", download_link: "" },
    ], logo: "source/files/SmartfordOS logo.png"
  },

  {
    id: 3, name: "GameSoft", version: [
      { name: "GameSoft 3", download_link: "https://t.me/c/3771689083/10" },
      { name: "GameSoft 2", download_link: "https://t.me/c/3771689083/9" },
      { name: "GameSoft 1", download_link: "https://t.me/c/3771689083/8" },
    ], logo: "source/files/GameSoft logo.png"
  },

  {
    id: 4, name: "TriadeX", version: [
      { name: "TriadeX 1", download_link: "https://t.me/c/3771689083/11" },
    ], logo: "source/files/TriadeX logo.png"
  },

  {
    id: 5, name: "Trinux", version: [
      { name: "TriadeOS 15", download_link: "https://t.me/c/3771689083/12" },
    ], logo: "source/files/Trinux logo.png"
  },

  {
    id: 6, name: "TRcode", version: [
      { name: "TR code pack 5, 6, 7", download_link: "https://t.me/c/3236619733/106" },
      { name: "TRcode fullpack", download_link: "https://t.me/c/3771689083/16" },
      { name: "TRcode v1", download_link: "https://t.me/c/3771689083/16" },
    ], logo: "source/files/TSD Corporation logo.png"
  },
  {
    id: 7, name: "TRASM", version: [
      { name: "TRASM beta", download_link: "https://t.me/c/3771689083/17" },
    ], logo: "source/files/TSD Corporation logo.png"
  },

]