$(document).ready(function () {
    $('.header-button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-login__login').toggleClass('popup-login_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.blackout').click(function () {
        $('body').css('overflowY', 'auto');
        $('.blackout').removeClass('blackout-active');
        $('.popup-login__login').removeClass('popup-login_active');
        $('.popup-signup').removeClass('popup-signup_active');
    });
    $('.popup-close').click(function () {
        $('body').css('overflowY', 'auto');
        $('.blackout').removeClass('blackout-active');
        $('.popup-login__login').removeClass('popup-login_active');
        $('.popup-signup').removeClass('popup-signup_active');
    });
    $('.footer-button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-login__login').toggleClass('popup-login_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.main-text__button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-signup').toggleClass('popup-signup_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.steps-button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-signup').toggleClass('popup-signup_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.plans-signup__button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-signup').toggleClass('popup-signup_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.time-text-button').click(function () {
        $('body').css('overflowY', 'hidden');
        $('.popup-signup').toggleClass('popup-signup_active');
        $('.blackout').toggleClass('blackout-active');
    });
    $('.popup-login__signup').click(function () {
        $('.popup-signup').toggleClass('popup-signup_active');
        $('.popup-login__login').removeClass('popup-login_active');
    });
    $('#copy_btn').click(function () {
        var el = ($(this).html()).trim();
        new ClipboardJS('#copy_btn');
    });

});
