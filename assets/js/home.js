$(document).ready(function () {
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
        600:{
            items:2
        },
    }
})

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
