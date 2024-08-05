document.getElementById("menu-button").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

document.getElementById("close-button").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
