import "./assets/style/tailwind.css";
import "./js/swiper";
import "./js/hamburger";
import "./js/navbar-placeholder";

const element = document.getElementById("element");
const mediaQuery = window.matchMedia("(min-width: 1140px)");

function handleScroll() {
  const scrollY = window.scrollY;
  if (scrollY < 100)
    element.style.transform = `translateY(${scrollY * 2 + 10}px)`;
}
function checkMediaQuery() {
  if (mediaQuery.matches) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
  }
}
checkMediaQuery();
mediaQuery.addEventListener("change", checkMediaQuery);
