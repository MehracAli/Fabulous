let buttons = document.querySelectorAll(".prdct .to-cart");
let basketList = document.querySelector("header .cd-mid .basket-list");
let cartBasketList
document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);
  
  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  else{
    basket.forEach(product => {
      BasketList(product)
    })
    TotalPrice(basket)
    EcoTax(basket)
    ProductCount(basket)
  }

});

buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let product = GetProductDatas(this);
      let basketStr = localStorage.getItem("basket");
      let basket = JSON.parse(basketStr);
      basketList.querySelector(".when-empty").style.opacity = "0"
      if (!basket) {
        localStorage.setItem("basket", JSON.stringify([]));
        basketStr = localStorage.getItem("basket");
        basket = JSON.parse(basketStr);
      }
  
      let existedProduct = basket.find((pro) => {
        return pro.id == product.id;
      });
  
      if(!existedProduct){
          basket.push(product);
          BasketList(product)
      }else{
            existedProduct.count++;
      }
      
      ProductCount(basket)
      TotalPrice(basket)
      EcoTax(basket)

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
  <li class="text" data-id="${product.id}">
    <div class="image">
      <img src="${product.src}"></img>
    </div>
    <div class="describtion" style="width: 50%;">
      <span class="drop-title" style="color: #232323;font-size: 14px;font-weight: 400;">${product.count} x ${product.title}</span><br>
      <span class="drop-price" style="color: #232323;font-size: 16px;">$${product.price}</span>
    </div>
    <div class="delete">
    <i class="bi bi-trash3" id = "${product.count}"></i>
    </div>
  </li>
`;
  basketList.innerHTML += productHtml;
  let trash = basketList.querySelectorAll(".delete i")
  console.log(trash);
  trash.forEach(Element => {
    Element.addEventListener("click", function () {

      let basket = JSON.parse(localStorage.getItem("basket"));
  
      if (!basket) {
        localStorage.setItem("basket", JSON.stringify([]));
        basket = JSON.parse(localStorage.getItem("basket"));
      }
      console.log(this);
      let id = this.parentElement.parentElement.getAttribute("data-id");
      console.log(id);
      let index = basket.findIndex((element) => {
        return element.id == id;
      });
      console.log(index);
  
      delete basket[index];
      basket = basket.filter(Object);
      ProductCount(basket);
      TotalPrice(basket);
      let basketStr = JSON.stringify(basket);
      localStorage.setItem("basket", basketStr);
      this.parentElement.parentElement.remove();
    });
  })
  
}


function ProductCount(basket) {
  let basketCount = document.querySelector(".product-count");
  basketCount.innerText = basket.reduce((total, product) => {
    return (total += product.count);
  },0);
}

function SubTotal(totalPrice, vat, ecoTax) {
  let subTotal = document.querySelector(".cd-btm .sub-total")
  subTotal.innerHTML = totalPrice - vat
}

function EcoTax(basket) {
  let EcoTax = document.querySelector(".cd-btm .eco-tax")
  EcoTax.innerHTML = basket.reduce((total, product) => {
    return (total += parseInt(2*product.count));
  },0);
  return EcoTax.innerHTML
}

function VAT(totalPrice, ecoTax) {
  totalPrice-ecoTax
  let percent = 20/100
  let vat = document.querySelector(".cd-btm .vat");
  vat.innerHTML = basket.reduce((total, product) => {
    return (total += parseInt(product.price*product.count));
  },0);
}

function TotalPrice(basket) {
  let totalPrice = document.querySelector(".cd-btm .total");
  totalPrice.innerHTML = basket.reduce((total, product) => {
    return (total += parseInt(product.price*product.count));
  },0);
  return totalPrice.innerHTML
}