// NAVBAR // 
document.addEventListener('DOMContentLoaded', function () {
    const navLink = document.querySelectorAll('.nav-link ul li a');
    const navLinksContainer = document.querySelector('.nav-link');
    const menuHamburger = document.querySelector('.menu-hamburger');

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 900) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    menuHamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
});