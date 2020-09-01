$(document).ready(function() {
    
    $(document).on("click", ".faq-list__item", function() {

        let bottom = $(this).find(".faq-list__item-bottom"); 

        if ($(this).hasClass("active")) {

            bottom.stop().slideUp();
            $(this).removeClass("active");

        } else {

            bottom.stop().slideDown();
            $(this).addClass("active");

        }
    });
    
    $('.calc-main__calendar input').datepicker({
        minDate: new Date()
    });

    alertify.set('notifier', 'position', 'bottom-right');
    alertify.set('notifier', 'delay', 10);

    document.addEventListener('wpcf7mailsent', function( event ) {
        alertify.success(event.detail.apiResponse.message);
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

    AOS.init();

    let modalThing = window.location.search.replace('?form=', '');

    if (modalThing) {

        $.fancybox.open({
            src: '#' + modalThing,
            opts : {
                touch: false
            }
        })

    }

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {


        function isScrolledIntoView(el) {
            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
            return elemTop < window.innerHeight && elemBottom >= 0;
        }

        const numberSection = document.querySelector('.number.section');
        const formSection = document.querySelector('.form.section');
        const coin1 = document.querySelector('.number-coin_1');
        const coin2 = document.querySelector('.number-coin_2');
        const bg = document.querySelector('.form-bg__img');

        function flyThing(el, num, action, elCssProperty) {
            elValue = parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
            (action) ? elValue += num : elValue -= num;
            el.style[elCssProperty] = elValue + 'px';
        }

        function getInitial(el, elCssProperty) {
            return parseInt(window.getComputedStyle(el).getPropertyValue(elCssProperty));
        }

        let initialCoin1 = getInitial(coin1, 'top');
        let initialCoin2 = getInitial(coin2, 'bottom');
        let initialBg = getInitial(bg, 'bottom');

        let windowHeight = window.pageYOffset;

        window.addEventListener('scroll', function() {
            if (isScrolledIntoView(numberSection)) {
                if (windowHeight < window.pageYOffset) {
                    flyThing(coin1, 2, false, 'top');
                    flyThing(coin2, 2, true, 'bottom');
                } else {
                    flyThing(coin1, 2, true, 'top');
                    flyThing(coin2, 2, false, 'bottom');
                }
                windowHeight = window.pageYOffset;
            } else {
                coin1.style.top = initialCoin1 + 'px';
                coin2.style.bottom = initialCoin2 + 'px';
            }

            if (isScrolledIntoView(formSection)) {
                if (windowHeight < window.pageYOffset) {
                    flyThing(bg, 2, true, 'bottom');
                } else {
                    flyThing(bg, 2, false, 'bottom');
                }
                windowHeight = window.pageYOffset;
            } else {
                bg.style.bottom = initialBg + 'px';
            }

        });

        
        function removeClassOpen() {
            document.querySelectorAll('.customSelect').forEach(function(item) {
                item.classList.remove('open');
            });
        }

        function getMill(item) {

            let arr = item.value.split('.'),
                newArr = [],
                date;

            arr.forEach(function(item) {
                (item[0] === '0') ? newArr.push(item.slice(1)) : newArr.push(item);
            });

            date = new Date(newArr[2], newArr[1] - 1, newArr[0])

            return date.getTime();
        }

        document.addEventListener('click', function(event) {

            let target = event.target;

            if (target.dataset.scroll === 'true') {
                event.preventDefault();
                document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});
            }

            if (target.closest('.customSelect')) {
                target.closest('.customSelect').classList.toggle('open');
            }

            if (target.matches('.customSelect-item')) {

                document.querySelectorAll('.customSelect-item').forEach(function(item) {
                    item.classList.remove('active');
                });

                target.classList.add('active');

                target.closest('.customSelect').querySelector('.customSelect-text').textContent = target.textContent;
                
                removeClassOpen();

            }

            if (!target.closest('.customSelect')) {
                removeClassOpen();
            }

            if (target.matches('.calc-main__button')) {

                let days = (getMill(document.querySelectorAll('.calc-main__calendar input')[1]) - getMill(document.querySelectorAll('.calc-main__calendar input')[0])) / 1000 / 60 / 60 / 24;

                let sum = document.querySelector('.calc-main__item-input').value.replace(/\s/g, '');

                let percent = 0;

                if (document.querySelector('.calc-main__item-select__inner-item.active')) {
                    percent = document.querySelector('.calc-main__item-select__inner-item.active').dataset.percent;
                }
                
                if (days <= 0 || isNaN(days)) {
                    alertify.warning('Вы ввели некорректное количество дней');
                } else if (sum <= 0 || isNaN(sum)) {
                    alertify.warning('Вы ввели некорректную сумму гарантии');
                } else if (!percent) {
                    alertify.warning('Вы не выбрали вид гарантии');
                } else {
                    let result = days * parseFloat(percent) / 100 * parseFloat(sum) / 365;
                    document.querySelector('.calc-main__number').textContent = result.toFixed(2) + ' ₽';
                }

            }

            if (target.closest('.form-main__select') && document.querySelector('.form-main__select-inner__item.active')) {
                
                document.getElementById('type').value = document.querySelector('.form-main__select-top__text').textContent;
                
            }

            if (target.matches('.provide-list__item-button')) {

                document.getElementById('guarantee').value = target.closest('.provide-list__item').querySelector('.provide-list__item-title').textContent;

            }


        });
        
    });


})();