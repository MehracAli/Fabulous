$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
  // service
  $(".service").on("mouseover", function () {
    let image = $(`${this} .image`);
    image.attr("data-aos", "flip-right");
    setTimeout(() => {
      image.attr("data-aos", "flip-right");
      image.removeAttr("data-aos", "flip-right");
    }, 1000);
  });
  // $(".service").on("mouseleave", ()=>{
  //     let image = $(".service .image")
  //     image.removeAttr("data-aos","flip-right")
  //     image.attr("data-aos","flip-left")
  //     setTimeout(() => {
  //         image.removeAttr("data-aos","flip-left")
  //     }, 1000);
  //  })

  //FAQ's
  $(".sect").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $(".sect-p").not(next).slideUp()
    $(".sect i").not(icon).removeClass("active-i")
  });
});
