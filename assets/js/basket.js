let buttons = document.querySelectorAll(".to-cart");
let cartIcon = document.querySelector(".cart-icon");
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
  TotalPrice(basket)
  ProductCount(basket)
});

cartIcon.addEventListener("mouseover", () => {
  let cartDrop = document.querySelector(".cart-drop");
  cartDrop.style.display = "block";
  cartDrop.addEventListener("mouseover", () => {
    cartDrop.style.display = "block";
  });
  setTimeout(() => {
    cartDrop.style.display = "none";
  }, 2000);
});


buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let product = GetProductDatas(this);
    let basketStr = localStorage.getItem("basket");
    let basket = JSON.parse(basketStr);

    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basketStr = localStorage.getItem("basket");
      basket = JSON.parse(basketStr);
    }
    let existedProduct = basket.find((pro) => {
      return pro.id == product.id;
    });
    if (!existedProduct) {
      basket.push(product);
      BasketList(product);
    } else {
      existedProduct.count++;
    }
    ProductCount(basket);
    TotalPrice(basket)
    basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
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

function BasketList(product) {
  const productHtml = `
  <li class="text" id="parent">
    <div class="image">
      <img src="${product.src}"></img>
    </div>
    <div class="describtion">
      <p class="drop-title"><b>Model:</b> ${product.title}</p>
      <p class="drop-price"><b>Price: ${product.price}AZN</b></p>
    </div>
    <div class="delete">
      <i class="fa-solid fa-circle-minus delete-product"></i>
    </div>
  </li>
`;
basketList.innerHTML += productHtml;

let deleteProduct = []
deleteProduct = document.querySelectorAll(".delete-product")
deleteProduct.forEach(Element =>{
  Element.addEventListener("click", ()=>{
    let parent = Element.parentElement.parentElement
    console.log(parent);
  })
})
}

function ProductCount(basket) {
  let basketCount = document.querySelector(".product-count");
  basketCount.innerText = basket.reduce((total, product) => {
    return (total += product.count);
  },0);
}

function TotalPrice(basket) {
  let totalPrice = document.querySelector(".total");
  totalPrice.innerHTML = basket.reduce((total, product) => {
    return (total += parseInt(product.price));
  },0);
}
  