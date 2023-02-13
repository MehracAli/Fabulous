$(document).ready(function () {
  //slider
  $("#slider .owl-carousel").owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $("#slider").on("mouseenter", function () {
    let next = $(".owl-carousel .owl-nav button.owl-next span");
    let nec = next[0];
    nec.innerText = ">";
  });
  $("#slider").on("mouseenter", function () {
    let next = $(".owl-carousel .owl-nav button.owl-prev span");
    let nec = next[0];
    nec.innerText = "<";
  });
  // service
  $(".service").on("mouseenter", function () {
    let image = $(this).find("img");
    image.removeClass("service-rotate");
    setTimeout(() => {
      image.addClass("service-rotate");
    }, 200);
  });
  $(".service").on("mouseleave", function () {
    let image = $(this).find("img");
    image.removeClass("service-rotate");
    setTimeout(() => {
      image.addClass("service-rotate");
    }, 200);
  });

  //customers
  $("#customers .owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav:true,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
      821: {
        items: 2,
      },
    },
  });
  //latest
  $("#latest .owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".prdct").on("mouseenter", function(){
    let button = $(this).find("button")
    button.slideDown()
  })
  $(".prdct").on("mouseleave", function(){
    let button = $(this).find("button")
    button.slideToggle()
  })
  //faq
  $("#faq .sect").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $("#faq .sect-p").not(next).slideUp();
    $("#faq .sect i").not(icon).removeClass("active-i");
  });

  //brands
  $("#brands .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $("#brands .item img").on("click", function () {
    let img = $(this).find("img");
    img.addClass("img-rotate");
  });
});
