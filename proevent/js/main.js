$(document).ready(function() {
    $('.clients-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true,
        appendDots: $('.clients-slider__dots'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.offer-sliderFor').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.offer-text__slider'
    });

    $('.offer-text__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.offer-sliderFor',
        dots: true,
        arrows: false,
        appendDots: $('.offer-text__dots')
    });

    $('.range-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<div class="range-slider__arrow range-slider__arrow_left"><< Влево</div>',
        nextArrow: '<div class="range-slider__arrow range-slider__arrow_right">Вправо >></div>',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.feedback-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: $('.feedback-slider__nav-dots'),
        appendArrows: $('.feedback-slider__nav'),
        prevArrow: `
            <div class="feedback-slider__nav-arrow feedback-slider__nav-arrow_left">
                <svg viewBox="0 0 17 12">
                    <g>
                        <path
                            d="M16.99991,4.99954v0h-13.38272v0l3.38585,-3.5849v0l-1.33644,-1.41503v0l-5.66666,6.00006v0l5.66666,6.00006v0l1.33644,-1.4154v0l-3.38585,-3.5849v0h13.38272v0z">
                        </path>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <div class="feedback-slider__nav-arrow feedback-slider__nav-arrow_right">
                <svg viewBox="0 0 17 12">
                    <g>
                        <path
                            d="M-0.00001,4.99954v0h13.38272v0l-3.38585,-3.5849v0l1.33644,-1.41503v0l5.66666,6.00006v0l-5.66666,6.00006v0l-1.33644,-1.4154v0l3.38585,-3.5849v0h-13.38272v0z">
                        </path>
                    </g>
                </svg>
            </div>
        `
    });

    let speed2 = document.querySelector('.add-sliderFor').dataset.speed;

    $('.add-sliderFor').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: speed2,
        asNavFor: '.add-slider'
    });

    $('.add-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.add-sliderFor',
        dots: true,
        arrows: false,
        appendDots: $('.add-slider__dots')
    });
    
    $(window).scroll( function() {
        $('.about-img__serpentine_1').css({'left': -($('.about-img__wrapper').width() * 0.07) + ($(window).scrollTop() / 15)});
        $('.about-img__serpentine_2').css({'left': ($('.about-img__wrapper').width() * 0.05) - ($(window).scrollTop() / 12)});
        $('.about-img__serpentine_3').css({'right': ($('.about-img__wrapper').width() * 0.1) + ($(window).scrollTop() / 20)});
        $('.rentHero-dots_1').css({'bottom': -400 + ($(window).scrollTop() / 2)});
        $('.rentHero-dots_2').css({'bottom': 0 - ($(window).scrollTop() / 2)});
        $('.saleHero-dots').css({'bottom': 50 - ($(window).scrollTop() / 4)});
    });

    $(document).on( 'click', function(event) {
        const {target} = event;
        const menu = $('.menu');
        if (target.closest('.header-burger')) {
            document.querySelector('body').scrollIntoView({block: "start", behavior: "smooth"});
            menu.addClass('active');
            $('body').css({'overflow' : 'hidden'});
        }
        if (menu.hasClass('active') && !target.closest('.menu') && !target.matches('.menu-content__item') && !target.closest('.menu-content') && !target.closest('.header-burger')) {
            menu.removeClass('active');
            $('body').css({'overflow' : 'auto'});
        }
        if (target.matches('.menu-content__item-link') || target.closest('.menu-content__close')) {
            menu.removeClass('active');
            $('body').css({'overflow' : 'auto'});
        }
        if (target.matches('.price-list__item-content__btn')) {
            target = target.closest('.price-list__item-content');
            document.querySelector('#productName').value = target.querySelector('.price-list__item-content__top-title').textContent;
            document.querySelector('#productPrice').value = target.querySelector('.price-list__item-content__price-new').textContent;
        }
        if (target.closest('.software-item__bottom-buttons__item_left')) {
            document.querySelector('#productNameTwo').value = target.closest('.software-item__bottom').querySelector('.software-item__bottom-text__title').textContent;
        }
        if (target.closest('.soft-item__buttons-item_left')) {
            document.querySelector('#productNameTwo').value = target.closest('.soft-item__top').querySelector('.soft-item__top-title').textContent;
        }
    });

    $('input[type=tel]').mask("+7 ( 999 ) 999-99-99");

    try {
        if ($('div').is("#map")) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [51.689934572284685,39.15748249999989],
                    zoom: 16
                });
                
                var myPlacemark = new ymaps.Placemark([51.689934572284685,39.15748249999989], {
                    hintContent: 'Воронеж, ул. Донская, 1/1',
                    balloonContent: 'Воронеж, ул. Донская, 1/1'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/contacts/mark.png',
                    iconImageSize: [41, 59],
                    iconImageOffset: [-19, -52]
                });

                myMap.geoObjects.add(myPlacemark);

                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('rulerControl')
                    .remove('zoomControl');

                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }
    } catch {
        console.log('yandex maps');
    }

    try {
        AOS.init();
    } catch {
        console.log('aos');
    }
});

$(window).on('load', function() {
    let arrayRangeHeights = [],
        rangeItems = $('.software-item'),
        rangeItemMaxHeight = 0;

    for (let i = 0; i < rangeItems.length; i++) {
        arrayRangeHeights.push(rangeItems.eq(i).outerHeight());
    }

    rangeItemMaxHeight = Math.max.apply(null, arrayRangeHeights);

    rangeItems.css({
        "min-height": rangeItemMaxHeight
    });

    let arraySoftHeights = [],
        softItems = $('.soft-item'),
        softItemMaxHeight = 0;

    for (let i = 0; i < softItems.length; i++) {
        arraySoftHeights.push(softItems.eq(i).outerHeight());
    }

    softItemMaxHeight = Math.max.apply(null, arraySoftHeights);

    softItems.css({
        "min-height": softItemMaxHeight
    });

    
    let arrayClientsHeights = [],
        clientsItems = $('.clients-slider__item'),
        clientsItemMaxHeight = 0;

    for (let i = 0; i < clientsItems.length; i++) {
        arrayClientsHeights.push(clientsItems.eq(i).outerHeight());
    }

    clientsItemMaxHeight = Math.max.apply(null, arrayClientsHeights);

    clientsItems.css({
        "min-height": clientsItemMaxHeight
    });
});