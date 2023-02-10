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
    $(".cart svg").on("click",()=>{
        let drop = $(".cart-drop")
        drop.removeClass("d-none")
        setTimeout(
            drop.addClass("animate__slideInRight")
        ,1000)
    })
    $(".cart-drop svg").on("click",()=>{
        let drop = $(".cart-drop")
        drop.addClass("d-none")
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