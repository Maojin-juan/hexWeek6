document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu"),
    closeButton = document.getElementById("close-button"),
    menuButton = document.getElementById("menu-button"),
    toggleMenu = (open) => {
      mobileMenu.classList.toggle("-translate-x-full", !open);
      mobileMenu.classList.toggle("translate-x-0", open);
      if (open) mobileMenu.classList.add("transition-all");
      document.body.classList.toggle("overflow-hidden", open);
    };
  menuButton.addEventListener("click", () => toggleMenu(true));
  closeButton.addEventListener("click", () => toggleMenu(false));
  window.addEventListener(
    "resize",
    () => window.innerWidth > 959.5 && toggleMenu(false),
  );
});
