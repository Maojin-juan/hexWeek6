$(document).ready(function () {
  let currentIndex = 0;
  const items = $(".carousel ul li");
  const itemCount = items.length;

  function showItem(index) {
    const newTransform = -index * 100 + "%";
    $(".carousel ul").css("transform", "translateX(" + newTransform + ")");
  }

  // 使用事件委派來處理按鈕點擊事件
  $(document).on("click", "#next", function () {
    currentIndex = (currentIndex + 1) % itemCount;
    showItem(currentIndex);
  });

  $(document).on("click", "#prev", function () {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    showItem(currentIndex);
  });

  // 自動輪播
  setInterval(function () {
    $("#next").click();
  }, 5000); // 每5秒切換一次
});
