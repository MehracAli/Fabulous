//nav
$(".nav-icon").on("click", function(){
    $(".open-nav")[0].style.display = "block"
})
$(".open-nav .top i").on("click", function(){
    $(".open-nav")[0].style.display = "none"
})

$("div#mini-head .open-nav .sect").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $("#faq .sect-p").not(next).slideUp();
    $("#faq .sect i").not(icon).removeClass("active-i");
});
//cart
$("#mini-head .cart svg").on("click", function(){
    $(".mini-cart-drop")[0].style.display = "block"
    document.querySelector("body").style.overflowY = "hidden"
    document.querySelector(".wrap").style.display = "block"
})
$(".mini-cart-drop .top i").on("click", function(){
    $(".mini-cart-drop")[0].style.display = "none"
    document.querySelector("body").style.overflowY = "scroll"
    document.querySelector(".cart .wrap").style.display = "none"
})
//login
$("#mini-head .login svg.icon").on("click", function(){
    $("#mini-head .login .mini-login-drop").slideToggle()
})