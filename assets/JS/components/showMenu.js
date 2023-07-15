function showMenu () {
    const nav = document.querySelector(".nav")
    const menu = document.querySelector(".nav__menu")

    nav.addEventListener("click", function (ev) {
        if (ev.target.closest(".btn--menu")) {
            menu.classList.toggle("show--menu")
        }

        if (ev.target.closest(".btn--close")) {
            menu.classList.remove("show--menu")
        }

        if (ev.target.closest(".nav__link")) {
            menu.classList.remove("show--menu")
        }
    })
}

export default showMenu