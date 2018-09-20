$(document).ready( () => {
    $(window).scroll( () => {
        $('.cross1').css({'left': 177 + ($(window).scrollTop() / 15)});
        $('.cross2').css({'right': 670 + ($(window).scrollTop() / 15)});
        $('.cross3').css({'left': 170 + ($(window).scrollTop() / 15)});
        $('.cross3').css({'bottom': 139 + ($(window).scrollTop() / 15)});
        $('.cross4').css({'right': 200 + ($(window).scrollTop() / 15)});
        $('.cross5').css({'right': ($(window).scrollTop()) / 6});
        $('.cross5').css({'bottom': -80 + ($(window).scrollTop()) / 6});
        $('.cross6').css({'right': 1290 + ($(window).scrollTop()) / 15});
        $('.cross7').css({'right': 400 - ($(window).scrollTop()) / 15});
        $('.cross8').css({'left': -300 + ($(window).scrollTop()) / 6});
        $('.cross8').css({'bottom': -650 + ($(window).scrollTop()) / 6});
    });

    $('.arrow').click( () => {
        $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
        return false;
    });

    $('.main-button').click( () => {
        $('html, body').animate({scrollTop: $('#about').offset().top}, 550);
        return false;
    });

    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.forgot').click( () => {
        $('.modalForgot').addClass('modalForgot_active');
        $('.modalSignUp').removeClass('modalSignUp_active');
        $('.modalLogIn').removeClass('modalLogIn_active');
    });
    $('.Login').click( () => {
        $('.modalLogIn').addClass('modalLogIn_active');
        $('.modalSignUp').removeClass('modalSignUp_active');
        $('.modalForgot').removeClass('modalForgot_active');
    });
    $('.SignUp').click( () => {
        $('.modalSignUp').addClass('modalSignUp_active');
        $('.modalForgot').removeClass('modalForgot_active');
        $('.modalLogIn').removeClass('modalLogIn_active');
    });

    $('.header-logIn').click( () => {
        $('body,html').animate({scrollTop: 0}, 400);
        $('.modalLogIn').addClass('modalLogIn_active');
        $('.blackout').addClass('blackout-active');
        $('body').css('overflowY', 'hidden');
    });
    $('.footer-logIn').click( () => {
        $('body,html').animate({scrollTop: 0}, 400);
        $('.modalLogIn').addClass('modalLogIn_active');
        $('.blackout').addClass('blackout-active');
        $('body').css('overflowY', 'hidden');
    });
    $('.blackout').click( () => {
        $('.blackout').removeClass('blackout-active');
        $('.modalForgot').removeClass('modalForgot_active');
        $('.modalSignUp').removeClass('modalSignUp_active');
        $('.modalLogIn').removeClass('modalLogIn_active');
        $('body').css('overflowY', 'auto');
    });
    $('.popup-close').click( () => {
        $('.blackout').removeClass('blackout-active');
        $('.modalForgot').removeClass('modalForgot_active');
        $('.modalSignUp').removeClass('modalSignUp_active');
        $('.modalLogIn').removeClass('modalLogIn_active');
        $('body').css('overflowY', 'auto');
    });
    $('.header-signUp').click( () => {
        $('body,html').animate({scrollTop: 0}, 400);
        $('.modalSignUp').addClass('modalSignUp_active');
        $('.blackout').addClass('blackout-active');
        $('body').css('overflowY', 'hidden');
    });
    $('.sub-btn').click( () => {
        $('body,html').animate({scrollTop: 0}, 400);
        $('.modalSignUp').addClass('modalSignUp_active');
        $('.blackout').addClass('blackout-active');
        $('body').css('overflowY', 'hidden');
    });
    $('.footer-signUp').click( () => {
        $('body,html').animate({scrollTop: 0}, 400);
        $('.modalSignUp').addClass('modalSignUp_active');
        $('.blackout').addClass('blackout-active');
        $('body').css('overflowY', 'hidden');
    });
});