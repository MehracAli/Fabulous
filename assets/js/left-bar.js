$("#register .left-bar .head").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $("#faq .sect-p").not(next).slideUp();
    $("#faq .sect i").not(icon).removeClass("active-i");
  });
  
  $("#login-page .left-bar .head").on("click", function () {
    let next = $(this).next();
    console.log(next);
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $("#faq .sect-p").not(next).slideUp();
    $("#faq .sect i").not(icon).removeClass("active-i");
  });

  $("#collection .left-bar .head").on("click", function () {
    let next = $(this).next();
    console.log(next);
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active-i");

    $("#faq .sect-p").not(next).slideUp();
    $("#faq .sect i").not(icon).removeClass("active-i");
  });