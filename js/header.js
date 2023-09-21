// Hamburger Menu

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector('.caixa-direita');
const main = document.querySelector('main');

hamburgerIcon.addEventListener("click", () => {
    menuItems.classList.toggle("show-menu");
    main.classList.toggle('main-down');

});

window.addEventListener("scroll", function() {
    var menu = document.querySelector("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add("scrolled");
        menuItems.classList.add("scrolled")
    } else {
        menu.classList.remove("scrolled");
        menuItems.classList.remove("scrolled")
    }


});
