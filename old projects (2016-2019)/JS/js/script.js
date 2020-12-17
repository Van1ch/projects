window.addEventListener('DOMContentLoaded', function () {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];


    function hide(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hide(1);

    function show(b) {
        if (tabContent[b].classList.contains('hide')) {
            hide(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className === 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    show(i);
                    break;
                }
            }
        }
    });

    let deadline = "2018-09-25";

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    setClock('timer', deadline);

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));
        return {
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'total': t
        };
    }

    function setClock(id, endtime) {
        let timeInterval = setInterval(updateClock, 1000),
            timeout = setTimeout(updateClock);

        let timer = document.getElementById(id),
            seconds = timer.querySelector('.seconds'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);
            if (t.total <= 0) {
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                clearTimeout(timeout);
            }
        }

        updateClock();
    }

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description_btn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < description_btn.length; i++) {
        description_btn[i].addEventListener('click', function () {
            this.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    more.addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    let message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо, мы с Вами скоро свяжемся!";
    message.fail = "Что-то пошло не так";

    let form = document.getElementsByClassName('main-form')[0],
        contactsForm = document.getElementById('form'),
        popupForm = document.getElementsByClassName('popup-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        popupForm.appendChild(statusMessage);
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function () {
            form.style.display = 'block';
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status === 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                }
                else {
                    statusMessage.innerHTML = message.fail;
                }
            }
        };
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    contactsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactsForm.appendChild(statusMessage);
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status === 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                }
                else {
                    statusMessage.innerHTML = message.fail;
                }
            }
        };
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
            let timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }
            draw(timePassed);
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        })
    }

    let menu = document.getElementsByTagName('nav')[0];
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        animate((timePassed) => {
            let target = event.target;
            if (target.tagName = 'li') {
                let section = document.getElementById(target.getAttribute('href').slice(1));
                window.scrollBy(0, section.getBoundingClientRect().top / 20);
            }
        }, 1500)

    });

    showSlides(slideIndex);


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target === dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daySum = 0,
        total = 0;
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personSum = +this.value;
        if (personSum <= 0) {
            persons.value = '';
        }
        total = (daySum + personSum) * 4000;
        if ((persons.value === '') || (restDays.value === '')) {
            totalValue.innerHTML = 0;
        } else {
            let a = total,
                b = 0;
            animate((timePassed) => {
                if (b <= total) {
                    totalValue.innerHTML = b;
                }
                b += Math.ceil(total / 10);
            }, 700);
        }
        if ((persons.value === 'e') || (persons.value === '+') || (parseInt(persons.value) != persons.value)) {
            persons.value = '';
        }
    });
    restDays.addEventListener('change', function () {
        daySum = +this.value;
        if (daySum <= 0) {
            restDays.value = '';
        }
        total = (daySum + personSum) * 4000;
        if ((persons.value === '') || (restDays.value === '')) {
            totalValue.innerHTML = 0;
        } else {
            let a = total,
                b = 0;
            animate((timePassed) => {
                if (b <= total) {
                    totalValue.innerHTML = b;
                }
                b += Math.ceil(total / 10);
            }, 700);
        }
        if ((restDays.value === 'e') || (restDays.value === '+') || (parseInt(restDays.value) != restDays.value)) {
            restDays.value = '';
        }
    });
    place.addEventListener('change', function () {
        if (persons.value === '' || restDays.value === '') {
            totalValue.InnerHTML = 0;
        } else {
            let a = total,
                b = 0;
            animate((timePassed) => {
                if (b <= a * this.options[this.selectedIndex].value) {
                    totalValue.innerHTML = b;
                }
                b += Math.ceil((a * this.options[this.selectedIndex].value) / 10);
            }, 700);
        }

    });
    persons.addEventListener('change', function () {

    });
});