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

  $(".owl-carousel .owl-nav button").on("click", function(){
    $("#slider .item .animate__animated").addClass("animate__slideInDown")
    setTimeout(() => {
    $("#slider .item .animate__animated").removeClass("animate__slideInDown")
    }, 1000);
  })
  $(document).ready(function(){
    $("#slider .item .animate__animated").addClass("animate__slideInDown")
    setTimeout(() => {
      $("#slider .item .animate__animated").removeClass("animate__slideInDown")
    }, 1000);
  })

  $("#slider").on("mouseenter", function () {
    let next = $(".owl-carousel .owl-nav button.owl-next span");
    let nex = next[0];
    nex.innerText = ">";
  });
  $("#slider").on("mouseenter", function () {
    let next = $(".owl-carousel .owl-nav button.owl-prev span");
    let nex = next[0];
    nex.innerText = "<";
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
    nav: true,
    dots:false,
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

  $(".prdct").on("mouseenter", function(){console.log("ok");
    let button = $(this).find("button.to-cart")
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
