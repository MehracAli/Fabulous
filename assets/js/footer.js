$(document).ready(function(){
    const btn = $('.go-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 50);
    });
    //footer-mid
    $(".footer-mid-sm .sect").on("click", function () {
        let next = $(this).next();
        let icon = $(this).find("i");
    
        next.slideToggle();
        icon.toggleClass("active-i");
    
        $(".footer-mid-sm .ul").not(next).slideUp()
        $(".footer-mid-sm .sect i").not(icon).removeClass("active-i")
      });
})