$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
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