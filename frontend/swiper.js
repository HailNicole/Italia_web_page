var swiper = new Swiper(".mySwiper",{
    slidesPerView:2,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,
    grabCursor:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 2
        }
    }
});

// Cambiar los estilos después de la inicialización de Swiper
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.swiper-slide').forEach(function(slide) {
        slide.style.width = '453px';
        slide.style.height = '350px'; // Corregido el nombre de la propiedad 'height'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.style.transform = 'translate3d(-453px, 5px, 0)'; // Ajusta los valores según tus necesidades
});