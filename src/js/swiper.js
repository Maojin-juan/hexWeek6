import Swiper from "swiper";
import { Navigation, History, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const swiper1 = new Swiper(".swiper1", {
  modules: [Navigation, History, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
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
      loop: false,
      slidesPerView: 2,
      autoplay: false,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  modules: [Autoplay],
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
  modules: [Grid, History, Autoplay],
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grid: {
    rows: 3,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    960: {
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    },
  },
});

const swiper4 = new Swiper(".swiper4", {
  modules: [Grid, History, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: false,
    },
  },
});
