let buttons = document.querySelectorAll(".prdct .to-cart");
let basketList = document.querySelector(".basket-list");

document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);

  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  
  basket.forEach(product => {
    BasketList(product)
  })

});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let product = GetProductDatas(this);
    console.log(product);
    // let basketStr = localStorage.getItem("basket");
    // let basket = JSON.parse(basketStr);

    // if (!basket) {
    //   localStorage.setItem("basket", JSON.stringify([]));
    //   basketStr = localStorage.getItem("basket");
    //   basket = JSON.parse(basketStr);
    // }
    // let existedProduct = basket.find((pro) => {
    //   return pro.id == product.id;
    // });
    // if (!existedProduct) {
    //   basket.push(product);
    //   BasketList(product);
    // } else {
    //   existedProduct.count++;
    // }
    // ProductCount(basket);
    // TotalPrice(basket)
    // basketStr = JSON.stringify(basket);
    // localStorage.setItem("basket", basketStr);
  });
});

function GetProductDatas(button) {
  let parent = button.parentElement.parentElement;
  let src = parent.querySelector("img").src;
  let title = parent.querySelector(".title").innerText;
  let price = parent.querySelector(".price").innerText;
  let id = parent.getAttribute("data-id");
  let product = { src, title, price, id, count: 1 };
  return product;
}

// function BasketList(product) {
//   const productHtml = `
//   <li class="text" id="parent">
//     <div class="image">
//       <img src="${product.src}"></img>
//     </div>
//     <div class="describtion">
//       <span class="drop-title">${product.count}x${product.title}</span>
//       <span class="drop-price">$${product.price}</span>
//     </div>
//     <div class="delete">
//       <i class="fa-solid fa-circle-minus delete-product"></i>
//     </div>
//   </li>
// `;
// basketList.innerHTML += productHtml;
// }

// function ProductCount(basket) {
//   let basketCount = document.querySelector(".product-count");
//   basketCount.innerText = basket.reduce((total, product) => {
//     return (total += product.count);
//   },0);
// }

// function TotalPrice(basket) {
//   let totalPrice = document.querySelector(".total");
//   totalPrice.innerHTML = basket.reduce((total, product) => {
//     return (total += parseInt(product.price));
//   },0);
// }

  