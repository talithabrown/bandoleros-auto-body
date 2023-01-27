function openNav() {
    sideNav.style.width = "250px";
    document.addEventListener('click', closeNavOnOutsideClick)
}
  
function closeNav() {
    sideNav.style.width = "0";
}

function closeNavOnOutsideClick (event) {
     if (event.target != mobileMenuButton && event.target != sideNav && event.target.parentNode != sideNav && event.target != navCloseButton) {
        closeNav();
        document.removeEventListener('click', closeNavOnOutsideClick)
    }

}

let sideNav = document.getElementById("side-nav-div")

let mobileMenuButton = document.getElementById('menu-button')
mobileMenuButton.addEventListener('click', openNav)

let navCloseButton = document.getElementById('nav-close-btn')
navCloseButton.addEventListener('click', closeNav)
