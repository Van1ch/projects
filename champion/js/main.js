$(document).ready(function() {
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true,
        appendDots: $('.feedback-slider__nav-dots'),
        appendArrows: $('.feedback-slider__nav-arrows'),
        prevArrow: `
            <div class="feedback-slider__nav-arrows__item feedback-slider__nav-arrows__item_left">
                <svg viewBox="0 0 10 18">
                    <g>
                        <path
                            d="M0.27197,8.29719l7.57484,-8.00985c0.17509,-0.18569 0.40901,-0.28785 0.65838,-0.28785c0.24937,0 0.48328,0.10216 0.65849,0.28785l0.55779,0.58952c0.36301,0.3846 0.36301,1.00897 0,1.39297l-6.36074,6.72625v0l6.36784,6.73347c0.17521,0.18569 0.27191,0.43267 0.27191,0.69648c0,0.26381 -0.0967,0.51079 -0.27191,0.69648l-0.5579,0.58952c-0.17532,0.18569 -0.40901,0.28785 -0.65838,0.28785c-0.24937,0 -0.48328,-0.10216 -0.65849,-0.28785l-7.58183,-8.01706c-0.17567,-0.18629 -0.27214,-0.43448 -0.27157,-0.69829c-0.00057,-0.26501 0.0959,-0.5132 0.27157,-0.69949z">
                        </path>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <div class="feedback-slider__nav-arrows__item feedback-slider__nav-arrows__item_right">
                <svg viewBox="0 0 10 18">
                    <g>
                        <path
                            d="M9.72799,8.29719l-7.57484,-8.00985c-0.17521,-0.18569 -0.40913,-0.28785 -0.65849,-0.28785c-0.24937,0 -0.48317,0.10216 -0.65838,0.28785l-0.5579,0.58952c-0.36301,0.3846 -0.36301,1.00897 0,1.39297l6.36074,6.72625v0l-6.36772,6.73347c-0.17521,0.18569 -0.27203,0.43267 -0.27203,0.69648c0,0.26381 0.09682,0.51079 0.27203,0.69648l0.55779,0.58952c0.17532,0.18569 0.40901,0.28785 0.65849,0.28785c0.24937,0 0.48317,-0.10216 0.65838,-0.28785l7.58194,-8.01706c0.17555,-0.18629 0.27203,-0.43448 0.27145,-0.69829c0.00057,-0.26501 -0.0959,-0.5132 -0.27145,-0.69949z">
                        </path>
                    </g>
                </svg>
            </div>
        `
    });

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    alertify.set('notifier', 'position', 'bottom-right');
    alertify.set('notifier', 'delay', 10);

    document.addEventListener('wpcf7mailsent', function( event ) {
    alertify.success(event.detail.apiResponse.message)
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

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {
    
        const headerPhone = document.querySelector('.header-phone');
        const headerRectangle = document.querySelector('.header-rectangle');
        const picketRectangle = document.querySelector('.picket-rectangle');
        const picketItems = document.querySelectorAll('.picket-list__items-item__content');
        const productSettingsInput = document.querySelectorAll('.product-top__content-settings__item-input');
        const productTopPhoto = document.querySelector('.product-top__photo');
        const productTopColorItems = document.querySelectorAll('.product-top__content-color__choose-item');
        const pickerColor = document.querySelector('#picketColor');
        const picketBigImage = document.querySelector('.picket-list__big');

        let width = headerPhone.clientWidth + headerRectangle.clientWidth;
        
        picketRectangle.style.width = width + 'px';

        picketItems[0].classList.add('active');
        picketBigImage.style.backgroundImage = picketItems[0].style.backgroundImage;
    
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
                    iconImageHref: './img/map/mark.png',
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
                    .remove('rulerControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }

        AOS.init();

        productSettingsInput[0].addEventListener('input', function() {
            document.querySelector('#picketLength').value = this.value;
        });
        productSettingsInput[1].addEventListener('input', function() {
            document.querySelector('#picketHeight').value = this.value;
        });

        let data = 0;

        document.addEventListener('click', function(event) {
            let {target} = event;
    
            if (target.matches('div.picket-list__items-item__content')) {
                picketBigImage.style.backgroundImage = target.style.backgroundImage;
                picketItems.forEach(function(item) {
                    item.classList.remove('active');
                });
                target.classList.add('active');
            }
    
            if (target.dataset.scroll === 'true') {
                event.preventDefault();
                document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});
            }
    
            if (target.matches('.type-list__item-price__btn-link')) {
                data = JSON.parse(target.closest('.type-list__item-price').querySelector('.data').textContent);
                target = target.closest('.type-list__item-price');
                document.querySelector('.product-top__content-title').textContent = data.title;
                document.querySelector('.product-top__content-side__text').textContent = data.cover;
                productTopPhoto.style.backgroundImage = data.colors[0];
                productTopColorItems.forEach(function(item, index) {
                    (index) ? item.classList.remove('active') : item.classList.add('active');
                    item.style.backgroundImage = data.preview[index];
                    item.dataset.img = data.colors[index];
                    item.dataset.color = data.colorsName[index];
                });
                productSettingsInput.forEach(function(item) {
                    item.value = '';
                });
                document.querySelector('#picketName').value = data.title;
                document.querySelector('#picketCover').value = data.cover;
                pickerColor.value = productTopColorItems[0].dataset.color;
            }
    
            if (target.matches('.product-top__content-color__choose-item')) {
                productTopColorItems.forEach(function(item) {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                productTopPhoto.style.backgroundImage = target.dataset.img;
                pickerColor.value = target.dataset.color;
            }
    
            if (target.matches('.choose-list__item-btn__link')) {
                document.querySelector('#picketType').value = target.closest('.choose-list__item').querySelector('.choose-list__item-title').textContent;
            }
        });
    });
})();