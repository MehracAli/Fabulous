$(document).ready(function(){
    $('.mini-photos .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $("#product-detail .sect").on("click", function () {
        let next = $(this).next();
        let icon = $(this).find("i");
    
        next.slideToggle();
        icon.toggleClass("active-i");
    
        $(".footer-mid-sm .ul").not(next).slideUp()
        $(".footer-mid-sm .sect i").not(icon).removeClass("active-i")
      });
})
  $("#product-slide .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".prdct").on("mouseenter", function(){console.log("ok");
    let button = $(this).find("button.to-cart")
    button.slideDown()
  })
  $(".prdct").on("mouseleave", function(){
    let button = $(this).find("button")
    button.slideToggle()
  })