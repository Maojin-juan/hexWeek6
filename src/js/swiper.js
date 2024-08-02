// main.js
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// 初始化 Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
