window.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var placeholder = document.getElementById("navbar-placeholder");

  function updatePlaceholderHeight() {
    placeholder.style.height = navbar.offsetHeight + "px";
  }

  // 初始設置占位元素的高度
  updatePlaceholderHeight();

  // 當視窗大小改變時更新占位元素的高度
  window.addEventListener("resize", updatePlaceholderHeight);
});
