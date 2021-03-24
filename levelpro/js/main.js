$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {

        function addZero(number) {

            if (number < 10) {

                return '0' + number;

            } else {

                return number;

            }

        }

        if (document.querySelector('section.app')) {

            let circle = document.querySelector('.app-dec__circle');

            circle.style.width = circle.offsetHeight + 'px';
            circle.style.borderWidth = circle.offsetHeight / 5 + 'px';

        }

        let heroSlider = new Swiper('.hero-slider', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.hero-pagination .hero-pagination__container',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {

                    return '<div class="' + className + ' hero-pagination__item"><div class="hero-pagination__line"></div><div class="hero-pagination__number">' + (index + 1) + '</div></div>';
                    
                }
            }

        });

        let fashionTextSlider = new Swiper('.fashion-slider__text', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            on: {
                slideChange() {

                    fashionImgSlider.slideTo(this.realIndex);

                }
            }

        });

        let sliderFlag = 0;

        let fashionImgSlider = new Swiper('.fashion-slider__img', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.fashion-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.fashion-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            on: {
                slideChange() {

                    let index = this.realIndex

                    if (!sliderFlag) {

                        setTimeout(function() {fashionTextSlider.slideTo(index)}, 300);
                        
                        sliderFlag = 1;

                    }


                },
                slideChangeTransitionEnd() {

                    sliderFlag = 0;

                }
            }

        });

        let instSlider = new Swiper('.inst-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 2,
            slidesPerGroup: 2,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.inst-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.inst-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            breakpoints: {
                950: {
                    spaceBetween: 40,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            }

        });

        let starSlider = new Swiper('.star-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.star-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.star-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            breakpoints: {
                1200: {
                    spaceBetween: 40
                },
                950: {
                    spaceBetween: 30,
                },
                550: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            }

        });

        let partnersSlider = new Swiper('.partners-slider', {

            speed: 600,
            spaceBetween: 60,
            slidesPerView: 5,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: '.partners-slider__arrow.partners-slider__arrow_prev',
                nextEl: '.partners-slider__arrow.partners-slider__arrow_next'
            },
            pagination: {
                el: '.partners-slider__dots',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {

                1300: {
                    spaceBetween: 60,
                    slidesPerView: 5,
                    slidesPerGroup: 3,
                },
                1000: {
                    spaceBetween: 50,
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                },
                650: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                },
                360: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }

            }
        });

        function updateCardSliderHeight() {

            let cardSlider = document.querySelector('.card-slider'),
                cardSliderWidth = cardSlider.clientWidth,
                cardSliderHeight = cardSliderWidth * 1.38;

                if (cardSlider) {
                    cardSlider.style.height = cardSliderHeight + 'px';
                }

            return cardSliderHeight;
                
        }

        if (document.querySelector('.card-slider')) {

            let cardSlider = new Swiper('.card-slider', {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.card-slider__dots',
                    type: 'bullets'
                },
                mousewheel: {
                    
                    releaseOnEdges: true,
                    
                },
                breakpoints: {
                    1000: {
                        direction: 'vertical',
                        height: updateCardSliderHeight(),
                    },
                    0: {
                        spaceBetween: 15,
                        direction: 'horizontal',
                        mousewheel: false,
                    }
                }
            });

        }

        const cardSliders = document.querySelectorAll('.cardSlider');

        cardSliders.forEach(function(item, index) {

            let name = 'cardSlider_' + index;

            item.classList.add(name);

            item.closest('.swiper-container').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let popularSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 40,
                slidesPerView: 4,
                slidesPerGroup: 4,
                observer: true,
                observeParents: true,
                touchEventsTarget: 'wrapper',
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.card-arrow.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow__next.card-arrow.slider-arrow_' + index
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                },
                breakpoints: {

                    1200: {
                        spaceBetween: 40,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    750 : {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    400 : {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    0 : {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }

                }
            });

        }); 

        const burger = document.querySelector('.header-burger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const searchInput = document.querySelector('.search-input');
        const search = document.querySelector('.search');
        const cardSizes = document.querySelectorAll('.card-size__item');
        const cardNumber = document.querySelector('.card-quantity__number');
        const cart = document.querySelector('.cart');
        const catalogItems = document.querySelectorAll('.catalog-item');
        const catalogMenu = document.querySelector('.catalog-menu_mobile');
        const catalogAmount = document.querySelectorAll('.catalog-amount');

        let catalogItemFlexBasis;

        if (catalogItems.length != 0) {

            catalogItemFlexBasis = getComputedStyle(document.querySelector('.catalog-item')).flexBasis;

        }

        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        function stopBodyScrolling() {

            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.paddingRight = `${scrollWidth}px`;

        }

        function continueBodyScrolling() {

            const scrollY = document.body.style.top;
            document.body.style.width = 'auto';
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            document.body.style.paddingRight = 0;

        }

        function destroyMenu() {

            burger.classList.remove('active');
            mobileMenu.classList.remove('active');

            continueBodyScrolling();

        }

        document.addEventListener('click', function(event) {

            const { target } = event;

            if (target.closest('.catalog-dropdown__top')) {

                let item = target.closest('.catalog-dropdown');
                let body = item.querySelector('.catalog-dropdown__body');

                if (item.classList.contains('active')) {

                    item.classList.remove('active');
                    body.style.maxHeight = 0;

                } else {

                    item.classList.add('active');
                    body.style.maxHeight = body.scrollHeight + 'px';

                }

            }

            if (target.matches('.catalog-amount')) {

                catalogAmount.forEach(function(item) {

                    item.classList.remove('active');

                });

                if (target.matches('.catalog-amount__full')) {

                    target.classList.add('active');

                    catalogItems.forEach(function(item) {

                        item.style.flexBasis = '100%';

                    });

                } else {

                    target.classList.add('active');

                    catalogItems.forEach(function(item) {

                        item.style.flexBasis = catalogItemFlexBasis;

                    });

                }

            }

            if (target.closest('.catalog-menu__btn')) {

                catalogMenu.classList.add('active');
                stopBodyScrolling();

            }

            if (target.matches('.catalog-menu_mobile__top-img')) {

                catalogMenu.classList.remove('active');
                continueBodyScrolling();

            }

            if (target.matches('.card-specs__item-value__img')) {

                let text = target.closest('.card-specs__item-value_copy').querySelector('span').textContent;

                navigator.clipboard.writeText(text);

            }

            if (target.matches('.card-size__item')) {

                if (!target.classList.contains('inactive')) {

                    cardSizes.forEach(function(item) {

                        item.classList.remove('active');
    
                    });
    
                    target.classList.add('active');

                }

            }

            if (target.matches('.card-quantity__img')) {

                let cardNumberData = +cardNumber.value;

                if (target.classList.contains('card-quantity__minus')) {

                    if (cardNumberData > 1) {

                        cardNumberData -= 1;

                    }

                } else {

                    cardNumberData += 1;

                }

                cardNumber.value = cardNumberData;
                cardNumber.dataset.number = cardNumber.value;

            }

            if (!target.closest('.header-burger') && !target.closest('.mobile-menu') && mobileMenu.classList.contains('active')) {

                destroyMenu();

            }

            if (target.closest('.header-burger')) {

                if (mobileMenu.classList.contains('active')) {

                    destroyMenu();

                } else {

                    mobileMenu.classList.add('active');

                    stopBodyScrolling();

                }

            }

            if (target.closest('.search-form__cross')) {

                searchInput.value = '';

            }

            if (target.closest('.search-cross') || !target.closest('.search.active')) {

                search.classList.remove('active');

            }

            if (target.closest('.header-search_mobile')) {

                search.classList.add('active');

            }

            if (cart.classList.contains('active') && (target.closest('.cart-cross') || !target.closest('.cart'))) {

                cart.classList.remove('active');
                continueBodyScrolling();
                

            }

            if (target.closest('.cart-circle') || target.closest('.header-cart')) {

                cart.classList.add('active');
                stopBodyScrolling();

            }
            
        });

        document.addEventListener('input', function(event) {

            const target = event.target;

            if (target.matches('.card-quantity__number')) {

                if (target.value == '' || target.value <= 0) {

                    target.value = 1;

                }

                target.dataset.number = target.value;

            }

        });

        function splitByLines(array) {

            array.forEach(function(el) {

                let tmp = document.createElement('p');
                    tmp = el.cloneNode(true);
                    tmp.style.width = el.offsetWidth + 'px';
                    tmp.style.position = 'absolute';
                    tmp.style.left = '-2000px';
                    tmp.innerHTML = 'foo';
                    document.body.appendChild(tmp);
            
                let content = el.textContent.split(''),
                    oneLineHeight = tmp.scrollHeight,
                    lines = [],
                    i = 0;
            
                while (i < content.length) {

                    let line = tmp.innerHTML = '';

                    while (i < content.length && tmp.scrollHeight <= oneLineHeight) {

                        tmp.innerHTML = line += content[i++];

                    }

                    let lineEndIndex = i === content.length ? i : line.lastIndexOf(' ') + 1;
                    lines.push(content.splice(0, lineEndIndex).join(''));
                    i = 0;

                }

                tmp.remove();
                el.innerHTML = lines.map(function(line) {return '<div class="line-wrapper"><div class="line">' + line + '</div></div>'}).join('');

            });

        }

        const lineContainers = document.querySelectorAll('.line-container');

        if (lineContainers) {

            splitByLines(lineContainers);

        }

        const lineWrappers = document.querySelectorAll('.line-wrapper');
        const collabItems = document.querySelectorAll('.collab-item');
        const AboutItems = document.querySelectorAll('.about-item');

        function isScrolledIntoView(elements) {

            return Array.from(elements).filter(function(item) {

                let rect = item.getBoundingClientRect();
                let elemTop = rect.top;
                let elemBottom = rect.bottom;

                if (elemTop < window.innerHeight && elemBottom >= 0) {

                    return item;

                }

            });

        }

        function ActiveIfScrolledIntoView(items) {

            if (isScrolledIntoView(items).length != 0) {

                isScrolledIntoView(items).forEach(function(item) {

                    item.classList.add('active');

                });

            } else {

                items.forEach(function(item) {

                    item.classList.remove('active');

                });

            }

        }

        ActiveIfScrolledIntoView(lineWrappers);
        ActiveIfScrolledIntoView(collabItems);
        ActiveIfScrolledIntoView(AboutItems);
        
        window.addEventListener('scroll', function() {

            ActiveIfScrolledIntoView(lineWrappers);
            ActiveIfScrolledIntoView(collabItems);
            ActiveIfScrolledIntoView(AboutItems);

        });

        const mask1 = document.querySelector('.mask-dec__img.mask-dec__img_1');
        const mask2 = document.querySelector('.mask-dec__img.mask-dec__img_2');
        const mask3 = document.querySelector('.mask-dec__img.mask-dec__img_3');

        window.addEventListener('mousemove', function(event) {

            let x = event.clientX / window.innerWidth;
            let y = event.clientY / window.innerHeight;

            if (mask1 || mask2 || mask3) {

                mask1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 35 + 'px)';
                mask2.style.transform = 'translate(+' + x * 25 + 'px, -' + y * 30 + 'px)';
                mask3.style.transform = 'translate(-' + x * 30 + 'px, +' + y * 20 + 'px)';
                
            }

        });

        OverlayScrollbars(document.querySelector('.cart-main'), {});

    });

})()