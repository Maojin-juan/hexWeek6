import Swiper from "swiper";
import { Navigation, History, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const swiper1 = new Swiper(".swiper1", {
  modules: [Navigation, History, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      autoplay: false,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  modules: [Navigation, History, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  modules: [Navigation, History, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
