function removeActiveTable() {
    document.querySelectorAll('.table-item').forEach(function(item) {
        item.classList.remove('active');
    });
}

$(document).ready(function() {
    $('.slider-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true,
        appendDots: $('.slider-nav__dots'),
        appendArrows: $('.slider-nav__arrows'),
        prevArrow: '\
            <div class="slider-nav__arrows-arrow slider-nav__arrows-arrow_left">\
                <svg viewBox="0 0 11 20" class="slider-nav__arrows-arrow__image">\
                    <g>\
                        <path d="M0.80743,10.70645l-0.70702,-0.70781l0.70702,-0.70704l0.00002,0.00002l9.19245,-9.19234l0.70702,0.70704l-9.1921,9.19271l9.1921,9.19271l-0.70702,0.70704l-9.19209,-9.1927z"></path>\
                    </g>\
                </svg>\
            </div>\
        ',
        nextArrow: '\
            <div class="slider-nav__arrows-arrow slider-nav__arrows-arrow_right">\
                <svg viewBox="0 0 11 20" class="slider-nav__arrows-arrow__image">\
                    <g>\
                        <path d="M0.29272,0.80632l0.70713,-0.70704l9.89948,9.89936l-0.70713,0.70781l-0.00032,-0.00032l-9.19203,9.19264l-0.70713,-0.70704l9.1921,-9.19271z"></path>\
                    </g>\
                </svg>\
            </div>\
        '
    });
    $('.table-top__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendArrows: $('.table-top__slider-nav'),
        prevArrow: '\
            <div class="table-top__slider-nav__arrow table-top__slider-nav__arrow_left">\
                <svg viewBox="0 0 8 16" class="table-top__slider-nav__arrow-content">\
                    <g>\
                        <path d="M0.35452,8.28744l-0.546,-0.54649l0.546,-0.54649l0.00024,0.00024l7.09899,-7.09922l0.54611,0.54572l-7.09891,7.09975l7.09891,7.09975l-0.54611,0.54572l-7.09899,-7.09922z"></path>\
                    </g>\
                </svg>\
            </div>\
        ',
        nextArrow: '\
            <div class="table-top__slider-nav__arrow table-top__slider-nav__arrow_left">\
                <svg viewBox="0 0 8 16" class="table-top__slider-nav__arrow-content">\
                    <g>\
                        <path d="M-0.12107,0.6412l0.54611,-0.54572l7.09893,7.09916l0.00018,-0.00018l0.54611,0.54649l-0.54611,0.54649l-0.00018,-0.00018l-7.09893,7.09916l-0.54611,-0.54572l7.09881,-7.09975z"></path>\
                    </g>\
                </svg>\
            </div>\
        '
    });

    $('.table-top__slider').on('afterChange', function(){
        let index = document.querySelector('.slick-slide.slick-current').dataset.slickIndex;
        document.querySelectorAll('.table-item').forEach(function(item) {
            if (item.dataset.index == index) {
                removeActiveTable();
                item.classList.add('active');
            }
        })
    });

    alertify.set('notifier', 'position', 'bottom-right');
    alertify.set('notifier', 'delay', 10);

    document.addEventListener('wpcf7mailsent', function( event ) {

        if (event.detail.contactFormId == '244' || event.detail.contactFormId == '247') {
    
            alertify.success(event.detail.apiResponse.message);
            
        }
        
        if (document.querySelector('.fancybox-is-open .modal-success')) {
            document.querySelector('.fancybox-is-open .modal-success').classList.add('active');
        }

    }, false);

    document.addEventListener('wpcf7invalid', function( event ) {
        alertify.warning(event.detail.apiResponse.message);
    }, false);

    document.addEventListener('wpcf7mailfailed', function( event ) {
        alertify.error(event.detail.apiResponse.message);
    }, false);

    $(document).on('click', '.wpcf7-submit', function(e){
        if( $('.ajax-loader').hasClass('is-active') ) {
            e.preventDefault();
            return false;
        }
    });

    $(document).on('afterClose.fb', function() {
        document.querySelectorAll('.modal-success').forEach(function(item) {
            item.classList.remove('active');
        })
    });

    AOS.init();

    let barWidth = 100;

    if ($(window).width() >= 1210) {
        barWidth = 1180;
    } else {
        barWidth = $(window).width() - 60;
    }

    $('.quiz-content__item-slider__input').jRange({
        from: 10000,
        to: 250000,
        step: 100,
        scale: [10000, 250000],
        format: '%s руб',
        width: barWidth,
        showLabels: true,
        snap: true,
        onstatechange: function wheel() {

            let selectedWidth = $('.quiz-content__item-slider .selected-bar').width();

            let value = selectedWidth * 1.5;

            $('div.pointer').css({
                '-webkit-transform' : 'rotate(' + value + 'deg)',
                '-moz-transform'    : 'rotate(' + value + 'deg)',
                '-ms-transform'     : 'rotate(' + value + 'deg)',
                '-o-transform'      : 'rotate(' + value + 'deg)',
                'transform'         : 'rotate(' + value + 'deg)'
            })
        },
        onbarclicked: function() {
            $('div.pointer').css({
                'transition': '.3s transform'
            })
        }
    });

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {

        let coord, hint, ballon;
        
        if (document.body.clientWidth >= 457) {
            coord = [57.125227764922755,65.56116947749322];
            hint = '';
            ballon = '';
        } else {
            coord = [57.124119055171285,65.56374439814752];
            hint = 'г. Тюмень, ул. Валерии Гнаровской, д. 12, к. 6';
            ballon = 'г. Тюмень, ул. Валерии Гнаровской, д. 12, к. 6';
        }
        
        // Карта
        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: coord,
                    zoom: 14
                });
                
                var myPlacemark = new ymaps.Placemark([57.124119055171285,65.56374439814752], {
                    hintContent: hint,
                    balloonContent: ballon
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/map/mark.png',
                    iconImageSize: [41, 59],
                    iconImageOffset: [-19, -52]
                });

                if (document.body.clientWidth >= 457) {
                    myMap.balloon.open([57.119119055171285, 65.57174439814752], "г. Тюмень, ул. Валерии Гнаровской, <br> д. 12, к. 6", {
                        closeButton: false
                    });
                }
    
                myMap.geoObjects.add(myPlacemark);
    
                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('zoomControl')
                    .remove('rulerControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }

        // Паралакс коробок

        function isScrolledIntoView(el) {
            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
            return elemTop < window.innerHeight && elemBottom >= 0;
        }

        const sendSection = document.querySelector('section.send');
        const sendBox1 = document.querySelector('.send-box_1');
        const sendBox2 = document.querySelector('.send-box_2');
        const sendBox3 = document.querySelector('.send-box_3');

        // TODO: Переписать на массив

        function sendBoxThing(el, num, action, elCssProperty) {
            elValue = parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
            (action) ? elValue += num : elValue -= num;
            el.style[elCssProperty] = elValue + 'px';
        }

        function getInitial(el, elCssProperty) {
            return parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
        }

        let initialsendBox1 = getInitial(sendBox1, 'bottom');
        let initialsendBox2 = getInitial(sendBox2, 'top');
        let initialsendBox3 = getInitial(sendBox3, 'top');

        let windowHeight = window.pageYOffset;

        window.addEventListener('scroll', function() {
            if (isScrolledIntoView(sendSection)) {
                if (windowHeight < window.pageYOffset) {
                    sendBoxThing(sendBox1, 2, true, 'bottom');
                    sendBoxThing(sendBox2, 3, false, 'top');
                    sendBoxThing(sendBox3, 2, true, 'top');
                } else {
                    sendBoxThing(sendBox1, 2, false, 'bottom');
                    sendBoxThing(sendBox2, 3, true, 'top');
                    sendBoxThing(sendBox3, 2, false, 'top');
                }
                windowHeight = window.pageYOffset;
            } else {
                sendBox1.style.bottom = initialsendBox1 + 'px';
                sendBox2.style.top = initialsendBox2 + 'px';
                sendBox3.style.top = initialsendBox3 + 'px';
            }
        });

        // Drag n Drop

        let stuff = document.querySelector('.adv-content__stuff-content'),
            stuffWrapper = document.querySelector('.adv-content__stuff'),
            advContent = document.querySelector('.adv-content'),
            advImage = document.querySelector('.adv-content__img_1');

        stuff.onmousedown = function(event) {
            event.preventDefault();

            let shiftX = event.clientX - stuffWrapper.getBoundingClientRect().left;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {
                let newLeft = event.clientX - shiftX - advContent.getBoundingClientRect().left;

                if (newLeft < 0) {
                    newLeft = 0;
                }

                let rightEdge = advContent.offsetWidth - stuffWrapper.offsetWidth;

                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }

                stuffWrapper.style.left = newLeft + 'px';
                advImage.style.width = newLeft + 'px';
            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }

        };

        stuff.ondragstart = function() {
            return false;
        };

        OverlayScrollbars(document.querySelectorAll('.calc-content__main-top__item-input_special__inner'), {});

        // Селекты в "Рассчитать стоимость"

        let calcData = {}

        function removeClassOpen() {
            document.querySelectorAll('.calc-content__main-top__item-input_special__wrapper.open').forEach(function(item) {
                item.classList.remove('open');
            });
        }

        function removeClassActive(wrapper) {
            wrapper.querySelectorAll('.calc-content__main-top__item-input_special-item.active').forEach(function(item) {
                item.classList.remove('active');
            });
        }

        document.addEventListener('input', function(event) {
            let target = event.target;
            if (target.matches('.calc-content__main-top__item-input')) {
                calcData[target.dataset.name] = target.value;
                document.getElementById(target.dataset.name).value = target.value;
            }
        });

        // quiz

        let quizData = {};

        const quizItems = document.querySelectorAll('.quiz-content__item');
        const quizBarItems = document.querySelectorAll('.quiz-bar__item');
        const quizItemsChildren = document.querySelectorAll('.quiz-content__item-list__item');

        let quizIndex = 0;

        function resetQuiz() {

            quizItems.forEach(function(item) {
                item.classList.remove('active');
            });
        
            quizBarItems.forEach(function(item) {
                item.classList.remove('active');
            });
        
            quizItemsChildren.forEach(function(item) {
                item.classList.remove('active');
            });
        
            $('.quiz-content__item-slider__input').jRange('setValue', '10000');
        
            quizData = {};
        
            quizIndex = 0;
        
            moveQuizItems();
        
        }
        
        function hideQuiz () {
            quizItems.forEach(function(item) {
                item.classList.remove('active');
            });
            quizBarItems.forEach(function(item) {
                item.classList.remove('active');
            });
        }

        function moveQuizItems () {
            hideQuiz();
            if (quizIndex === 0) {
                document.querySelector('.quiz-content__nav-prev').style.display = 'none';
                document.querySelector('.quiz-content__nav-next').style.display = 'flex';
            } else if (quizIndex === quizItems.length - 1) {
                document.querySelector('.quiz-content__nav-prev').style.display = 'none';
                document.querySelector('.quiz-content__nav-next').style.display = 'none';
            } else {
                document.querySelector('.quiz-content__nav-prev').style.display = 'block';
                document.querySelector('.quiz-content__nav-next').style.display = 'flex';
            }
            quizItems[quizIndex].classList.add('active');
            quizBarItems[quizBarItems.length - (quizIndex + 1)].classList.add('active');
        }

        document.addEventListener('wpcf7mailsent', function( event ) {
    
            if (event.detail.contactFormId == '245') {
    
                hideQuiz();
    
                document.querySelector('.quiz-content__nav').style.display = 'none';
                document.querySelector('.quiz-content__final').classList.add('active');
                
            }

            if (event.detail.contactFormId == '247') {
    
                document.querySelectorAll('.calc-content__main-bottom__content-item input').forEach(function(item) {
                    item.checked = false;
                });

                calcData.options = '';
                
            }
    
        }, false);


        moveQuizItems();

        document.addEventListener('click', function(event) {
            let target = event.target;

            if (target.closest('.calc-content__main-top__item-input_special__wrapper')) {
                removeClassOpen();
                if (target.closest('.calc-content__main-top__item-input_special__wrapper').classList.contains('open')) {
                    target.closest('.calc-content__main-top__item-input_special__wrapper').classList.remove('open');
                } else {
                    target.closest('.calc-content__main-top__item-input_special__wrapper').classList.add('open');
                }
            }

            if (target.closest('.calc-content__main-top__item-input_special-item')) {

                target = target.closest('.calc-content__main-top__item-input_special-item');
                removeClassActive(target.closest('.calc-content__main-top__item-input_special__inner'));
                target.classList.add('active');
                let text = target.querySelector('.calc-content__main-top__item-input_special-item__text').textContent;
                target.closest('.calc-content__main-top__item-input_special__wrapper').querySelector('.calc-content__main-top__item-input_special__content-text').textContent = text;
                removeClassOpen();

                let datasetName = target.closest('.calc-content__main-top__item').dataset.name;

                calcData[datasetName] = text;
                document.getElementById(datasetName).value = text;

            }

            if (!target.closest('.calc-content__main-top__item-input_special__wrapper')) {
                removeClassOpen();
            }

            if (target.closest('.calc-content__main-bottom__content-item')) {
                let string = [];
                document.querySelectorAll('.calc-content__main-bottom__content-item input').forEach(function(item) {
                    if (item.checked) {
                        string.push(item.value);
                    }
                });
                calcData.options = string.join(', ');
                document.getElementById('options').value = calcData.options;
            }

            if (target.closest('.quiz-content__nav-next')) {

                if (!quizItems[quizIndex].querySelector('.quiz-content__item-list__item.active') && quizIndex != 1) {
                    alertify.warning('Вы не ответили на вопрос');
                    return;
                } else if (quizIndex === 1) {
                    quizData[quizIndex] = document.querySelector('.pointer-label.high').textContent;
                    document.getElementById('quiz' + quizIndex).value = quizData[quizIndex];
                } else {
                    quizData[quizIndex] = quizItems[quizIndex].querySelector('.quiz-content__item-list__item.active .quiz-content__item-list__item-text').textContent;
                    document.getElementById('quiz' + quizIndex).value = quizData[quizIndex];
                }

                moveQuizItems(++quizIndex);
            }

            if (target.closest('.quiz-content__nav-prev')) {
                moveQuizItems(--quizIndex);
            }

            if (target.closest('.quiz-content__item-list__item')) {
                target = target.closest('.quiz-content__item-list__item');
                document.querySelectorAll('.quiz-content__item.active .quiz-content__item-list__item').forEach(function(item) {
                    item.classList.remove('active');
                });
                target.classList.add('active');
            }

            if (target.closest('.quiz-content__final-btn')) {

                resetQuiz();

                document.querySelector('.quiz-content__nav').style.display = 'flex';   
                document.querySelector('.quiz-content__final').classList.remove('active');             

            }

        });

    });


})();