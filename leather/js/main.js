$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {

        let giftSlider = new Swiper('.gift-slider', {

            speed: 600,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow_prev.gift-arrow',
                nextEl: '.slider-arrow.slider-arrow_next.gift-arrow'
            }

        });

        let chooseSlider = new Swiper('.choose-slider', {

            speed: 600,
            spaceBetween: 140,
            slidesPerView: 5,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            pagination: {
                el: '.choose-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {

                1400: {

                    slidesPerView: 5

                },
                1000: {

                    slidesPerView: 4,
                    slidesPerGroup: 2,
                    spaceBetween: 100

                },
                550: {

                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 40

                },
                360: {

                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30

                },
                0: {

                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20

                }

            }

        });

        const logo = document.querySelectorAll('.logo');

        let logoInterval = setInterval(function() {

            logo.forEach(function(item) {

                item.classList.add('active');
    
            });

            setTimeout(function() {

                logo.forEach(function(item) {

                    item.classList.remove('active');
        
                });

            }, 400);

        }, 4000);

        const numbersPathes = document.querySelectorAll('.numbers-item path');
        const reasonItemImgDec = document.querySelectorAll('.reason-item__img-dec');

        numbersPathes.forEach(function(item) {

            let length = item.getTotalLength();
            item.style.strokeDashoffset = length;
            item.style.strokeDasharray = length;

        });

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

        ActiveIfScrolledIntoView(numbersPathes);
        ActiveIfScrolledIntoView(reasonItemImgDec);
        
        window.addEventListener('scroll', function() {

            ActiveIfScrolledIntoView(numbersPathes);
            ActiveIfScrolledIntoView(reasonItemImgDec);

        });

    });

})()