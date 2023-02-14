let buttons = document.querySelectorAll(".prdct .to-cart");
let basketList = document.querySelector(".basket-list");

document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);

  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
});

buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let product = GetProductDatas(this);
      console.log(product);
    });
});

function GetProductDatas(button) {
  let parent = button.parentElement.parentElement;
  let src = parent.querySelector("img").src;
  let title = parent.querySelector(".title").innerText;
  let price = parent.querySelector(".price").innerText;
  let id = parent.getAttribute("data-id");
  let product = { src, title, price, id, count: 1++ };
  return product;
}