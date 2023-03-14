const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggelMenuMobile);
carritoIcon.addEventListener("click", toggelCarritoAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggelMenuMobile() {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle('inactive');
}

function toggelCarritoAside() {
    mobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}