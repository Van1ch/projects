$(document).ready(function () {

    AOS.init();

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function () {

    document.addEventListener('DOMContentLoaded', function () {

        function isScrolledIntoView(el) {

            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
            return elemTop < window.innerHeight && elemBottom >= 0;

        }

        const adSection = document.querySelector('section.ad');
        const secureSection = document.querySelector('section.secure');
        const deliveryPage = document.querySelector('section.deliveryPage');
        const leaf1 = document.querySelector('.ad-leaf_1');
        const leaf2 = document.querySelector('.ad-leaf_2');
        const leaf3 = document.querySelector('.ad-leaf_3');
        const leaf4 = document.querySelector('.ad-leaf_4');
        const deliveryLeaf1 = document.querySelector('.deliveryPage-leaf_1');
        const deliveryLeaf2 = document.querySelector('.deliveryPage-leaf_2');
        const deliveryLeaf3 = document.querySelector('.deliveryPage-leaf_3');
        const deliveryLeaf4 = document.querySelector('.deliveryPage-leaf_4');
        const box1 = document.querySelector('.deliveryPage-box_1');
        const box2 = document.querySelector('.deliveryPage-box_2');
        const seeds1 = document.querySelector('.secure-seeds_1')
        const seeds2 = document.querySelector('.secure-seeds_2')
        const seeds3 = document.querySelector('.secure-seeds_3')

        function flyThing(el, num, action, elCssProperty) {

            elValue = parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
            (action) ? elValue += num: elValue -= num;
            el.style[elCssProperty] = elValue + 'px';

        }

        let windowHeight = window.pageYOffset;

        window.addEventListener('scroll', function () {

            if (adSection && isScrolledIntoView(adSection)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(leaf1, 2, false, 'top');
                    flyThing(leaf2, 2, true, 'bottom');
                    flyThing(leaf3, 2, false, 'top');
                    flyThing(leaf4, 2, true, 'bottom');

                } else {

                    flyThing(leaf1, 2, true, 'top');
                    flyThing(leaf2, 2, false, 'bottom');
                    flyThing(leaf3, 2, true, 'top');
                    flyThing(leaf4, 2, false, 'bottom');

                }

                windowHeight = window.pageYOffset;
            }

            if (secureSection && isScrolledIntoView(secureSection)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(seeds1, 1, true, 'bottom');
                    flyThing(seeds2, 2, true, 'bottom');
                    flyThing(seeds3, 3, true, 'bottom');

                } else {

                    flyThing(seeds1, 1, false, 'bottom');
                    flyThing(seeds2, 2, false, 'bottom');
                    flyThing(seeds3, 3, false, 'bottom');

                }

                windowHeight = window.pageYOffset;
            }

            if (deliveryPage && isScrolledIntoView(deliveryPage)) {

                if (windowHeight < window.pageYOffset) {

                    flyThing(deliveryLeaf1, 2, true, 'top');
                    flyThing(deliveryLeaf2, 2, false, 'bottom');
                    flyThing(deliveryLeaf3, 2, true, 'bottom');
                    flyThing(deliveryLeaf4, 2, false, 'top');
                    flyThing(box1, 2, true, 'bottom');
                    flyThing(box2, 2, false, 'top');

                } else {

                    flyThing(deliveryLeaf1, 2, false, 'top');
                    flyThing(deliveryLeaf2, 2, true, 'bottom');
                    flyThing(deliveryLeaf3, 2, false, 'bottom');
                    flyThing(deliveryLeaf4, 2, true, 'top');
                    flyThing(box1, 2, false, 'bottom');
                    flyThing(box2, 3, true, 'top');

                }

                windowHeight = window.pageYOffset;
            }

        });

        let gallerySlider = new Swiper('.gallery-slider__wrapper', {
            loop: true,
            slidesPerGroup: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            speed: 300,
            autoplay: {
                delay: 5000
            },
            breakpoints: {
                1300: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
                1100: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    spaceBetween: 30
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    centeredSlides: false
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    centeredSlides: false
                }
            }
        });

        let cardSlider = new Swiper('.card-slider__wrapper', {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            speed: 300,
            breakpoints: {
                900: {
                    slidesPerView: 4
                },
                650: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                },
            }
        });


        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [59.78350010977558,42.755495999999965],
                    zoom: 10
                });

                var myPlacemark = new ymaps.Placemark([59.78350010977558,42.755495999999965], {
                    hintContent: 'Тотемский район, деревня Горбенцево 14а',
                    balloonContent: 'Тотемский район, деревня Горбенцево 14а'
                }, {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image'
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
        const catalogMenu = document.querySelector('.catalogMenu');
        
        document.addEventListener('click', function (event) {

            let target = event.target;

            if (target.closest('.amount-plus')) {

                target = target.closest('.amount');

                target.querySelector('.amount-text').textContent = parseInt(target.querySelector('.amount-text').textContent) + 1;

            }

            if (target.closest('.amount-minus')) {

                target = target.closest('.amount');

                let num = parseInt(target.querySelector('.amount-text').textContent);

                (num > 1) ? num-- : num;

                target.querySelector('.amount-text').textContent = num;

            }

            if (target.matches('.production-menu__item-link') && document.querySelector(target.getAttribute("href"))) {

                event.preventDefault();

                document.querySelector(target.getAttribute("href")).scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                });

            }

            if (target.matches('.menu-close')) {
                event.preventDefault();
                menu.classList.remove('active');
            }
    
            if (!target.closest('.menu') && menu.classList.contains('active')) {
                event.preventDefault();
                menu.classList.remove('active');
            }
    
            if (target.closest('.header-burger')) {
                menu.classList.add('active');
            }
    
            if (target.matches('.catalogMenu-close')) {
                event.preventDefault();
                catalogMenu.classList.remove('active');
            }
    
            if (catalogMenu && !target.closest('.catalogMenu') && catalogMenu.classList.contains('active')) {
                event.preventDefault();
                catalogMenu.classList.remove('active');
            }
    
            if (target.closest('.catalog-list__btn-inner')) {
                catalogMenu.classList.add('active');
            }

            if (target.closest('.catalog-item__btn')) {

                let name = target.closest('.catalog-item').dataset.name;

                document.querySelector('#goodName').value = name;
                document.querySelector('#goodCount').value = target.closest('.catalog-item__bottom').querySelector('.amount-text').textContent;

            }

            if (target.closest('.card-bottom__btn-link')) {

                let name = target.closest('.card').dataset.name;

                document.querySelector('#goodName').value = name;
                document.querySelector('#goodCount').value = target.closest('.card-bottom').querySelector('.amount-text').textContent;

            }

        });

    });

})();