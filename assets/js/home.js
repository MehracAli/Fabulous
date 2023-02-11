$(document).ready(function () {
  //slider
  $('#slider .owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

$("#slider").on("mouseenter", function(){
  let next = $(".owl-carousel .owl-nav button.owl-next span")
  let nec = next[0]
  nec.innerText = ">"
})
$("#slider").on("mouseenter", function(){
  let next = $(".owl-carousel .owl-nav button.owl-prev span")
  let nec = next[0]
  nec.innerText = "<"
})
  // service
  $(".service").on("mouseenter", function () {
    let image = $(this).find("img");
    image.removeClass("service-rotate")
    setTimeout(() => {
      image.addClass("service-rotate")
    }, 200);
  });
  $(".service").on("mouseleave", function () {
    let image = $(this).find("img");
    image.removeClass("service-rotate")
    setTimeout(() => {
      image.addClass("service-rotate")
    }, 200);
  });

  //customers
  $('#customers .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        821:{
            items:2
        },
    }
})
AddArrowToSlideDot()
function AddArrowToSlideDot() {
  let dot = document.querySelector("#customers .owl-dots")
  dot.children[0].firstChild.innerText = "<"
  dot.children[0].firstChild.style.color = "white"
  dot.children[0].firstChild.style.fontSize = "25px"
  dot.children[1].firstChild.innerText = ">"
  dot.children[1].firstChild.style.color = "white"
  dot.children[1].firstChild.style.fontSize = "25px"
}
  //faq
  $(".sect").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $(".sect-p").not(next).slideUp()
    $(".sect i").not(icon).removeClass("active-i")
  });

  //brands
  $('#brands .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  $("#brands .item img").on("click", function(){
    let img = $(this).find("img")
    img.addClass("img-rotate")
  })
});
