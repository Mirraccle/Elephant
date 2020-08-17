import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

var mainSlider = new Swiper('.main-slider', {
    speed: 1000,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});