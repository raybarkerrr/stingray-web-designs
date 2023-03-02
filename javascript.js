function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

let changeIcon = function(icon) {
    icon.classList.toggle("fa-times")
}

let mobileMenu = document.querySelector('.mobileMenu');
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}