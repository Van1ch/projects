(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

        const mapElements = document.querySelectorAll('.contacts-list__item');

        function updateCardSliderHeight() {

            let cardSliderReal = document.querySelector('.card-slider__wrapper'),
                cardSliderWidth = cardSliderReal.clientWidth,
                cardSliderHeight = cardSliderWidth * 1.39;

                cardSliderReal.style.height = cardSliderHeight + 'px';

            return cardSliderHeight;
                
        }

        if (document.querySelector('div#map')) {
            ymaps.ready(function () {

                let mapData = JSON.parse(document.getElementById('mapData').textContent);

                var myMap = new ymaps.Map('map', {
                    center: [59.20815280167776,39.88709988737485],
                    zoom: (document.body.clientWidth > 900) ? 12 : 11
                });

                var objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    gridSize: 32
                });

                objectManager.objects.options
                    .set('preset', 'islands#redIcon')
                    .set('iconLayout', 'default#image')
                    .set('iconImageHref', '../img/general/mark.svg')
                    .set('iconImageSize', [23, 37])
                    .set('iconImageOffset'), [0, 0];
    
                myMap.geoObjects.add(objectManager);

                objectManager.add(mapData);
    
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

                document.querySelectorAll('.contacts-list__item-show').forEach(function(item) {

                    item.addEventListener('click', function(event) {

                        let target = event.target.closest('.contacts-list__item');

                        mapElements.forEach(function(item, index) {

                            if (item === target) {
        
                                myMap.setCenter(mapData.features[index].geometry.coordinates, 14);

                                if (document.body.clientWidth <= 900) {

                                    document.getElementById('map').scrollIntoView({block: "center", behavior: "smooth"});

                                }
        
                            }
        
                        });

                    });

                });

            });
        }


        
        let heroSlider = new Swiper('.hero-slider__wrapper', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            speed: 300,
            autoplay: {
                delay: 5000
            }
        });

        const mainSliders = document.querySelectorAll('.main-slider__wrapper');

        mainSliders.forEach(function(item, index) {

            let name = 'main-slider__wrapper_' + index;

            item.classList.add(name);

            item.closest('.main-slider__realWrapper').querySelectorAll('.main-slider__arrow').forEach(function(item) {item.classList.add('main-slider__arrow_' + index)});

            let mainSlider = new Swiper('.' + name, {
                observer: true,
                observeParents: true,
                speed: 600,
                spaceBetween: 20,
                //centerInsufficientSlides: true,
                navigation: {
                    nextEl: '.main-slider__arrow.main-slider__arrow_next.main-slider__arrow_' + index,
                    prevEl: '.main-slider__arrow.main-slider__arrow_prev.main-slider__arrow_' + index
                },
                breakpoints: {
                    1100: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    800: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    550: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    }
                }
            });

        });

        let cardSliderWidth = 800;

        if (document.querySelector('.card-slider__wrapper')) {

            let cardSlider = new Swiper('.card-slider__wrapper', {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.card-slider__dots',
                    type: 'bullets'
                },
                mousewheel: true,
                breakpoints: {
                    950: {
                        direction: 'vertical',
                        height: updateCardSliderHeight(),
                    },
                    0: {
                        direction: 'horizontal',
                        autoHeight: true
                    }
                }
            });

        }

        

        const mainTabItems = document.querySelectorAll('.main-tabs__item');
        const mainItems = document.querySelectorAll('.main-item');
        const headerBtn = document.querySelector('.header-search__wrapper');
        const menu = document.querySelector('.menu');
        const categoryMenu = document.querySelector('.categoryMenu');
        const tabs = document.querySelectorAll('.tabs-header__item');
        const tabsItems = document.querySelectorAll('.tabs-content__item');

        function hide(item1, item2) {

            item1.forEach(function(item, index) {

                item1[index].classList.remove('active');
                item2[index].classList.remove('active');

            });
            
        }

        function show(b, item1, item2) {

            if (!item1[b].classList.contains('active')) {

                hide(item1, item2);
                item1[b].classList.add('active');
                item2[b].classList.add('active');

            }

        }

        document.addEventListener('click', function(event) {

            let target = event.target;

            if (target.matches('.main-slider__top-btn')) {
                
                event.preventDefault();

            }

            if (target.closest('.main-slider__top-heart')) {

                target = target.closest('.main-slider__top-heart');

                event.preventDefault();

                if (!target.classList.contains('active')) {

                    target.classList.add('active');

                } else {

                    target.classList.remove('active');

                }

            }

            if (target.closest('.main-tabs__item')) {

                mainTabItems.forEach(function(item, index) {

                    if (target.closest('.main-tabs__item') === mainTabItems[index]) {

                        show(index, mainTabItems, mainItems);
                        return;

                    }

                });
    
            }

            if (target.matches('.header-search__mobile')) {

                headerBtn.classList.toggle('active');

                setTimeout(function() {

                    if (headerBtn.classList.contains('active')) {

                        document.querySelector('.header-search__mobile').classList.add('active');
                        document.querySelector('.header-search').classList.add('active');

                    } else {

                        document.querySelector('.header-search__mobile').classList.remove('active');
                        document.querySelector('.header-search').classList.remove('active');

                    }
                    
                }, 100);

            }

            if (!target.closest('.header-search__wrapper')) {

                headerBtn.classList.remove('active');

                setTimeout(function() {

                    if (headerBtn.classList.contains('active')) {

                        document.querySelector('.header-search__mobile').classList.add('active');
                        document.querySelector('.header-search').classList.add('active');

                    } else {

                        document.querySelector('.header-search__mobile').classList.remove('active');
                        document.querySelector('.header-search').classList.remove('active');

                    }
                    
                }, 100);

            }

            if ((menu.classList.contains('active') && !target.closest('.menu')) || target.matches('.menu-close')) {
                
                menu.classList.remove('active');

                event.preventDefault();

            }

            if (target.closest('.header-burger')) {

                menu.classList.add('active');

            }

            if ((categoryMenu && categoryMenu.classList.contains('active') && !target.closest('.categoryMenu')) || target.matches('.menu-close')) {
                
                categoryMenu.classList.remove('active');

                event.preventDefault();

            }

            if (target.closest('.category-mobile__btn-inner')) {

                categoryMenu.classList.add('active');

            }

            if (target.matches('.tabs-header__item')) {

                tabs.forEach(function(item, index) {

                    if (target === tabs[index]) {

                        show(index, tabs, tabsItems);
                        return;

                    }

                });
    
            }

            if (target.closest('.card-buttons__favorite')) {

                target = target.closest('.card-buttons__favorite');

                if (!target.classList.contains('active')) {

                    target.classList.add('active');

                } else {

                    target.classList.remove('active');

                }

            }

            if (target.dataset.scroll === 'true') {

                event.preventDefault();
                document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});

            }

            if (target.matches('.card-sizes__item')) {

                document.querySelectorAll('.card-sizes__item').forEach(function(item) {

                    item.classList.remove('active');

                });

                target.classList.add('active');

            }
            

            // if (target.closest('.categoryItemHeading')) {

            //     target = target.closest('.categoryItem');

            //     if (!target.classList.contains('active')) {

            //         target.classList.add('active');

            //         target.querySelector('.categoryItemHeading .categoryItemDec').classList.add('active');

            //         $(target.querySelector('.categoryItemContent')).slideDown();

            //     } else {

            //         target.classList.remove('active');

            //         target.querySelector('.categoryItemHeading .categoryItemDec').classList.remove('active');

            //         $(target.querySelector('.categoryItemContent')).slideUp();

            //     }

                

            // }

        });

        
        if (document.querySelector('.card-slider__wrapper')) {
            updateCardSliderHeight();
        }

        let mainSliderArrows = document.querySelectorAll('.main-slider__arrow');

        window.addEventListener('resize', function() {

            let mainSliderImg = document.querySelector('.main-slider__top-img');

            mainSliderArrows.forEach(function(item) {
                
                item.style.top = mainSliderImg.clientHeight / 2 + 'px';

            });

            updateCardSliderHeight();

        });

        let currActiveMenu = document.querySelector('.header-menu__list-item.active');

        const headerMenuContent = document.querySelectorAll('.header-menu__list-item__wrapper');

        document.querySelector('.header-menu__list-top').addEventListener('mouseover', function(event) {

            let target = event.target;

            if (target.matches('.header-menu__list-item') && target != currActiveMenu) {

                currActiveMenu.classList.remove('active');
                headerMenuContent[currActiveMenu.dataset.index].classList.remove('active');
                target.classList.add('active');
                currActiveMenu = target;
                headerMenuContent[currActiveMenu.dataset.index].classList.add('active');

            }

        });

    });

})();