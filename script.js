$(function(){
    $(".faq-item").click(function(){
        $(this).toggleClass("active");
        $(this).next(".answer").slideToggle(300);
    });

    // Hamburger menu
    $(".menu-toggle").click(function(){
        $("nav").toggleClass("open");
    });
});