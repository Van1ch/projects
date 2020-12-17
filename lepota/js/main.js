(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

        function isScrolledIntoView(el) {

            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
            return elemTop < window.innerHeight && elemBottom >= 0;

        }

        const contactsSection = document.querySelector('section.contacts');
        const contactsImg1 = document.querySelector('.contacts-top__img_1');
        const contactsImg2 = document.querySelector('.contacts-top__img_2');
        const contactsImg3 = document.querySelector('.contacts-bottom__img_1');
        const contactsImg4 = document.querySelector('.contacts-bottom__img_2');
        const contactsImg5 = document.querySelector('.contacts-bottom__img_4');
        const aboutSection = document.querySelector('section.about');
        const aboutBerry1 = document.querySelector('.about-berry_1');
        const aboutBerry2 = document.querySelector('.about-berry_2');
        const aboutBerry3 = document.querySelector('.about-berry_6');
        const aboutBerry4 = document.querySelector('.about-berry_8');
        const eventSection = document.querySelector('section.event');
        const eventBerry1 = document.querySelector('.event-berry_1');
        const eventBerry2 = document.querySelector('.event-berry_4');
        const eventBerry3 = document.querySelector('.event-berry_5');

        function flyThing(el, num, action, elCssProperty) {

            elValue = parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
            (action) ? elValue += num: elValue -= num;
            el.style[elCssProperty] = elValue + 'px';

        }

        let windowHeight = window.pageYOffset;

        window.addEventListener('scroll', function () {

            if (contactsSection && isScrolledIntoView(contactsSection)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(contactsImg1, 1, false, 'bottom');
                    flyThing(contactsImg2, 1, true, 'bottom');
                    flyThing(contactsImg3, 1, false, 'bottom');
                    flyThing(contactsImg4, 1, true, 'bottom');
                    flyThing(contactsImg5, 1, true, 'bottom');

                } else {

                    flyThing(contactsImg1, 1, true, 'bottom');
                    flyThing(contactsImg2, 1, false, 'bottom');
                    flyThing(contactsImg3, 1, true, 'bottom');
                    flyThing(contactsImg4, 1, false, 'bottom');
                    flyThing(contactsImg5, 1, false, 'bottom');

                }

                windowHeight = window.pageYOffset;
            }

            if (aboutSection && isScrolledIntoView(aboutSection)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(aboutBerry1, 1, false, 'top');
                    flyThing(aboutBerry2, 1, false, 'bottom');
                    flyThing(aboutBerry3, 1, true, 'bottom');
                    flyThing(aboutBerry4, 1, true, 'top');

                } else {

                    flyThing(aboutBerry1, 1, true, 'top');
                    flyThing(aboutBerry2, 1, true, 'bottom');
                    flyThing(aboutBerry3, 1, false, 'bottom');
                    flyThing(aboutBerry4, 1, false, 'top');

                }

                windowHeight = window.pageYOffset;
            }

            if (eventSection && isScrolledIntoView(eventSection)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(eventBerry1, 1, false, 'bottom');
                    flyThing(eventBerry2, 1, true, 'top');
                    flyThing(eventBerry3, 1, true, 'bottom');

                } else {

                    flyThing(eventBerry1, 1, true, 'bottom');
                    flyThing(eventBerry2, 1, false, 'top');
                    flyThing(eventBerry3, 1, false, 'bottom');

                }

                windowHeight = window.pageYOffset;
            }

        });
        

        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [59.18746911017949,39.930293999999975],
                    zoom: 13
                });
                
                var myPlacemark = new ymaps.Placemark([59.18746911017949,39.930293999999975], {
                    hintContent: 'г. Вологда, ул. Московская, д. 71, оф. 405',
                    balloonContent: 'г. Вологда, ул. Московская, д. 71, оф. 405'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/general/mark.svg',
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

        const menu = document.querySelector('.menu');

        function updateAmount (target, num) {

                let item = target.closest('.cart-item');

                item.querySelector('.cart-item__price').textContent = item.dataset.price * num + ' руб.';

                item.dataset.amount = num;

            updatePrice(true);

        }

        function updatePrice(delivery) {

            let items = document.querySelectorAll('.cart-item');

            let deliveryItem = document.querySelector('.deliveryPrice');

            let totalGoodsPrice = 0;

            items.forEach(function(item) {

                totalGoodsPrice += item.dataset.price * item.dataset.amount;

            });

            deliveryItem.textContent = delivery ? deliveryItem.dataset.price + ' руб.' : '0 руб.';

            document.querySelector('.cart-price__number').textContent = totalGoodsPrice + ' руб.'
            document.querySelector('.totalGoodsPrice').textContent = totalGoodsPrice + ' руб.'
            document.querySelector('.totalPrice').textContent = totalGoodsPrice + parseInt(deliveryItem.textContent) + ' руб.'

        }

        if (document.querySelector('section.cart')) {

            updatePrice(true);

        }

        document.addEventListener('click', function(event) {

            let target = event.target;

            if (target.closest('.slider-item__bottom-amount__minus')) {

                target = target.closest('.slider-item__bottom-amount');

                let num = parseInt(target.querySelector('.slider-item__bottom-amount__number').textContent);

                num > 1 ? num-- : num;

                target.querySelector('.slider-item__bottom-amount__number').textContent = num + ' шт';

            }

            if (target.closest('.slider-item__bottom-amount__plus')) {

                target = target.closest('.slider-item__bottom-amount');

                let num = parseInt(target.querySelector('.slider-item__bottom-amount__number').textContent);

                target.querySelector('.slider-item__bottom-amount__number').textContent = ++num + ' шт';

            }

            if ((menu.classList.contains('active') && !target.closest('.menu')) || target.matches('.menu-close')) {
                
                menu.classList.remove('active');

                event.preventDefault();

            }

            if (target.closest('.header-burger')) {

                menu.classList.add('active');

            }

            if (target.dataset.scroll === 'true') {

                event.preventDefault();
                document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});
                
            }

            if (target.closest('.cart-item__delete')) {

                if (confirm('Вы уверены, что хотите удалить данную позицию?')) {

                    target.closest('.cart-item').remove();

                    updatePrice(true);

                }
            }

            if (target.closest('.cart-item__amount-minus')) {

                target = target.closest('.cart-item__amount');

                let num = parseInt(target.querySelector('.cart-item__amount-text').textContent);

                num > 1 ? num-- : num;

                target.querySelector('.cart-item__amount-text').textContent = num + ' шт';

                updateAmount(target, num);

            }

            if (target.closest('.cart-item__amount-plus')) {

                target = target.closest('.cart-item__amount');

                let num = parseInt(target.querySelector('.cart-item__amount-text').textContent);

                target.querySelector('.cart-item__amount-text').textContent = ++num + ' шт';

                updateAmount(target, num);

            }

            if (document.querySelector('input#delivery')) {

                document.querySelector('input#delivery').checked ? updatePrice(true) : updatePrice(false)
                
            }

        });

        let heroSlider = new Swiper('.hero', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            pagination: {
                el: '.hero-dots',
                type: 'bullets',
                clickable: true
            },
            autoplay: {
                delay: 5000
            }
        });

        let carousel = new Swiper('.carousel-inner', {
            loop: true,
            //centerInsufficientSlides: true,
            navigation: {
                prevEl: '.carousel-arrow.carousel-arrow_prev',
                nextEl: '.carousel-arrow.carousel-arrow_next'
            },
            breakpoints: {
                1500: {
                    slidesPerView: 10,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                1300: {
                    slidesPerView: 9,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                1100: {
                    slidesPerView: 8,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                1000: {
                    slidesPerView: 7,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                850: {
                    slidesPerView: 6,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                700: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                600: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                450: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 15
                },
                0: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 15
                },
            }
        });

        let peopleSlider = new Swiper('.people-slider .swiper-container', {
            navigation: {
                prevEl: '.people-arrow.people-arrow_prev',
                nextEl: '.people-arrow.people-arrow_next'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                900: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 20
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20
                },
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20
                },
            }
        });

        const galleryItems = document.querySelectorAll('.gallery-item');

        const galleryThing = function() {
            galleryItems.forEach(function(item, index) {

                setTimeout(function() {

                    let itemImg = item.style.backgroundImage;

                    item.style.backgroundImage = item.dataset.img;

                    item.dataset.img = itemImg;
                    
                }, index * 1000);

            });
        }
        
        setTimeout(galleryThing, 0);
        setInterval(galleryThing, 5000);

        const sliders = document.querySelectorAll('.slider-wrapper');

        sliders.forEach(function(item, index) {

            let name = 'slider-wrapper_' + index;

            item.classList.add(name);

            item.closest('.slider-realWrapper').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let mainSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 30,
                //centerInsufficientSlides: true,
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow_prev.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow_next.slider-arrow_' + index
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 30
                    },
                    1100: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30
                    },
                    670: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20
                    },
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20
                    }
                }
            });

        });

        const video = document.querySelector('.gallery-video__content');

        const relation = 9 / 16;

        if (video) {

            video.style.height = window.getComputedStyle(video).getPropertyValue('width').slice(0, -2) * relation + 'px';

        }

        let peopleSliderArrows = document.querySelectorAll('.people-arrow');

        let peopleSliderImg = document.querySelector('.people-item__img');

        peopleSliderArrows.forEach(function(item) {
            
            item.style.top = peopleSliderImg.clientHeight / 2 + 'px';

        });

        window.addEventListener('resize', function() {
            
            if (video) {

                video.style.height = window.getComputedStyle(video).getPropertyValue('width').slice(0, -2) * relation + 'px';

            }

            peopleSliderImg = document.querySelector('.people-item__img');

            peopleSliderArrows.forEach(function(item) {
                
                item.style.top = peopleSliderImg.clientHeight / 2 + 'px';

            });

        });

        const delays = [0, 6, 11, 19, 32, 43, 64, 67, 80];
        const circleItems = document.querySelectorAll('.circle-item');

        const circleThing = function() {

            circleItems.forEach(function(item, index) {

                setTimeout(function() {

                    item.classList.add('active');

                }, delays[index] * 1000);

            });

            circleItems.forEach(function(item, index) {

                setTimeout(function() {

                    item.classList.remove('active');

                }, (index + 1) * 16000);

            });

        }

        setTimeout(circleThing, 0);

        setInterval(circleThing, 96000);

    });

})();