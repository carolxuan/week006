"use strict";

$(document).ready(function () {
  console.log("Hello Bootstrap4");
}); // 漢堡

function openNav() {
  document.getElementById("mm-navbar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mm-navbar").style.width = "0";
} // 收合


$(document).ready(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}); // 輪播

(function () {
  var slider = document.querySelector(".slider");
  var productCards = document.querySelectorAll(".product-card");
  var startX = 0;
  /**
   * 開始拖曳事件
   * @param {object} e event
   */

  function startDragHandler(e) {
    slider.classList.add("slider-active");
    startX = e.pageX;
  }
  /**
   * 拖曳事件
   * @param {object} e event
   */


  function dragHandler(e) {
    if (slider.classList.contains("slider-active")) {
      e.preventDefault(); // 假設按下去 pageX 100，即 startX 100
      // 往左移動，pageX 會不斷減少，即 pageX - startX 為負

      slider.scrollLeft -= (e.pageX - startX) * 3;
      startX = e.pageX;
    }
  }
  /**
   * 停止拖曳事件
   * @param {object} e event
   */


  function stopDragHandler(e) {
    slider.classList.remove("slider-active");
  }
  /**
   * 查看商品明細
   * @param {object} e 點擊事件的物件
   */
  // function viewProductDetail(e) {
  //   location.href = "detail.html";
  // }
  // 加入滑動的偵聽事件


  if (slider) {
    slider.addEventListener("mousedown", startDragHandler);
    slider.addEventListener("mousemove", dragHandler);
    slider.addEventListener("mouseup", stopDragHandler);
    slider.addEventListener("mouseleave", stopDragHandler);
  } // 加入 product card 的偵聽事件


  if (productCards.length) {
    productCards.forEach(function (item) {
      item.addEventListener("click", viewProductDetail);
    });
  }
})(); // menuContent


function openClass(evt, cityName) {
  var i, menuContent, menuLink;
  menuContent = document.getElementsByClassName("menuContent");

  for (i = 0; i < menuContent.length; i++) {
    menuContent[i].style.display = "none";
  }

  menuLink = document.getElementsByClassName("menuLink");

  for (i = 0; i < menuLink.length; i++) {
    menuLink[i].className = menuLink[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} // Get the element with id="defaultOpen" and click on it


document.getElementById("defaultOpen").click();
//# sourceMappingURL=all.js.map
