$(document).ready(function() {
    $('.main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      });
    $('.ham').click(function() {
        $(this).toggleClass('ham-active');
        $('.menu').toggleClass('menu-active');
        $('.wrapper_left-socials').toggleClass('wrapper_left-socials_active');
    })
})