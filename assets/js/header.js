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
    })
    $("#lg-head .cart .cart-drop .cd-top svg").on("click", function(){
        let cartDrop = $("#lg-head .cart-drop")
        cartDrop.removeClass("active")
    })
    // scroll
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 100){
            let scroll = $('header').addClass('scroll-header')
            scroll.addClass("animate__slideInDown")
        }
        else{
            let scroll =  $('header').removeClass('scroll-header')
        }
    })
})