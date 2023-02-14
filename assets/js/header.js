$(document).ready(function () {
    // nav-bar
    $(".accesories").on("mouseover",()=>{
        let drop = $(".accesories-drop")
        drop.slideDown("fast")
    })
    $(".accesories").on("mouseleave",()=>{
        let drop = $(".accesories-drop")
        drop.slideToggle(50)
    })
    $(".drone").on("mouseover",()=>{
        let drop = $(".drone-drop")
        drop.slideDown("fast")
    })
    $(".drone").on("mouseleave",()=>{
        let drop = $(".drone-drop")
        drop.slideToggle(50)
    })

    // search
    $(".search svg").on("click", ()=>{
        let drop = $(".search input")
        drop.slideToggle(600)
    })
    // login
    $(".login svg").on("click", ()=>{
        let drop = $(".login-drop")
        drop.slideToggle()
    })
    // cart
    $("#lg-head .cart-icon").on("click", function(){
        let cartDrop = $("#lg-head .cart-drop")
        cartDrop.addClass("active")
        document.querySelector("body").style.overflowY = "hidden"
        document.querySelector(".cart .wrap").style.display = "block"
    })
    $("#lg-head .cart .cart-drop .cd-top svg").on("click", function(){
        let cartDrop = $("#lg-head .cart-drop")
        cartDrop.removeClass("active")
        document.querySelector("body").style.overflowY = "scroll"
        document.querySelector(".cart .wrap").style.display = "none"
    })
    // scroll
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 100){
            let scroll = $('header').addClass('scroll-header')
            scroll.slideDown("slow")
        }
        else{
            let scroll =  $('header').removeClass('scroll-header')
        }
    })
    
    // mini-nav
    $("div#mini-head .open-nav .sect").on("click", function () {
        let next = $(this).next();
        let icon = $(this).find("i");
    
        next.slideToggle();
        icon.toggleClass("active-i");
    
        $("#faq .sect-p").not(next).slideUp();
        $("#faq .sect i").not(icon).removeClass("active-i");
    });
})