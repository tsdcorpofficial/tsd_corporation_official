const contact_item = document.querySelectorAll('.contact-item-link')
const footer_text = document.querySelectorAll('.footer-text-item')

contact_item.forEach(element => {
    element.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        element.classList.toggle("contextmenu")
    })
    document.addEventListener("contextmenu", (e) => {
        element.classList.remove("contextmunu")
    })
})
footer_text.forEach(element => {
    element.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        element.classList.toggle("contextmenu")
    })
    document.addEventListener("contextmenu", (e) => {
        element.classList.remove("contextmunu")
    })
})
window.addEventListener("load", function () {
 window.copy_button = document.getElementById("copy-button")
 copy_button.addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("my-code").innerText)
    copy_button.innerHTML = `Код скопирован!`
})
})






