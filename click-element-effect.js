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

