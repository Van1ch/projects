(function() {

    
    document.addEventListener('DOMContentLoaded', function() {

        if (document.body.clientWidth >= 1100) {
            document.querySelectorAll('.production-item__img').forEach(function(item) {

                item.style.backgroundImage = 'url(' + item.dataset.image + ')';
    
            });
        }

        alertify.set('notifier', 'position', 'bottom-right');
        alertify.set('notifier', 'delay', 10);

        if (document.querySelector('div#map') || document.querySelector('div#map2')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map((document.body.clientWidth >= 900) ? 'map' : ((document.querySelector('div#map2')) ? 'map2' : 'map'), {
                    center: (document.body.clientWidth >= 900 && !document.querySelector('.contacts-map#map')) ? [59.44286174796709,40.173991739547716] : [59.43882906481512,40.15675049999999],
                    zoom: 14
                });
                
                var myPlacemark = new ymaps.Placemark([59.43882906481512,40.15675049999999], {
                    hintContent: 'Вологодская обл., г. Сокол, ул. Кирпичная, д. 9',
                    balloonContent: 'Вологодская обл., г. Сокол, ул. Кирпичная, д. 9'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/general/footer/mark.svg',
                    iconImageSize: [33, 33],
                    iconImageOffset: [0, 0]
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
    });

    const menu = document.querySelector('.menu');
    const categoryMenu = document.querySelector('.categoryMenu');
    const woodListItems = document.querySelectorAll('.wood-content__list-item');
    const woodTextItems = document.querySelectorAll('.wood-content__text-item');

    function hide() {
        woodListItems.forEach(function(item, index) {
            woodTextItems[index].classList.remove('active');
            woodListItems[index].classList.remove('active');
        });
    }

    function show(b) {
        if (!woodTextItems[b].classList.contains('active')) {
            hide();
            woodTextItems[b].classList.add('active');
            woodListItems[b].classList.add('active');
        }
    }

    if (document.querySelector('.categoryInfo-top__text-inner') && document.querySelector('.categoryInfo-top__text-inner').scrollHeight > 333) {
        document.querySelector('.categoryInfo-top__text-more').style.display = 'block';
    }

    document.addEventListener('click', function(event) {

        let target = event.target;

        if (target.matches('.menu-close')) {
            menu.classList.remove('active');
        }

        if (!target.closest('.menu') && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }

        if (target.closest('.header-burger')) {
            menu.classList.add('active');
        }

        if (target.matches('.categoryMenu-close')) {
            categoryMenu.classList.remove('active');
        }

        if (categoryMenu && !target.closest('.categoryMenu') && categoryMenu.classList.contains('active')) {
            categoryMenu.classList.remove('active');
        }

        if (target.closest('.categoryMain-content__btns-item_menu')) {
            categoryMenu.classList.add('active');
        }

        if (target.closest('.wood-content__list-item')) {
            woodListItems.forEach(function(item, index) {
                if (target.closest('.wood-content__list-item') === woodListItems[index]) {
                    show(index);
                    return;
                }
            });

            if (document.body.clientWidth <= 1050) {
                document.querySelector('.wood-content__text').scrollIntoView({block: "start", behavior: "smooth"});
            }

        }

        if (target.matches('.categoryInfo-top__text-more__content')) {
            
            $box = $('.categoryInfo-top__text-inner');
            
            minimumHeight = 100;
            
            currentHeight = $box.outerHeight();
            
            autoHeight = $box.css('max-height', '100%').outerHeight();
            
            $box.css('height', currentHeight).animate({
                height: autoHeight
            });
            
            document.querySelector('.categoryInfo-top__text-more').style.display = 'none';

        }

        if (target.dataset.scroll === 'true') {
            event.preventDefault();
            document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});
        }

        if (target.matches('.categoryMain-content__item-text__bottom-btn')) {

            document.querySelector('.modal-hidden').value = target.dataset.product;

        }

    });

    let productionThing;

    if (document.body.clientWidth > 900) {

        productionThing = OverlayScrollbars(document.querySelector('.production-container'), {});

    }

    window.addEventListener('resize', function() {

        if (document.body.clientWidth <= 900 && productionThing) {

            productionThing.destroy();

        }

    })

})();