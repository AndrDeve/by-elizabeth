let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); /* activa la x */
    navbar.classList.toggle('active');
}

/* desaparece el menú responsivo al darle click en un link */
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//lo más vendido
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
