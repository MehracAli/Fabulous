$(document).ready(function(){
    AOS.init();
    // service
    $(".service").on("mouseover", function(){
       let image = $(`${this} .image`)
       image.attr("data-aos","flip-right")
       setTimeout(() => {
           image.attr("data-aos","flip-right")
           image.removeAttr("data-aos","flip-right")
       }, 1000);
    })
    // $(".service").on("mouseleave", ()=>{
    //     let image = $(".service .image")
    //     image.removeAttr("data-aos","flip-right")
    //     image.attr("data-aos","flip-left")
    //     setTimeout(() => {
    //         image.removeAttr("data-aos","flip-left")
    //     }, 1000);
    //  })
})