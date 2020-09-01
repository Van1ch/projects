const inputWrapper = document.querySelectorAll('.profit-calc__form-item__input-input__wrapper');
const inputs = document.querySelectorAll('.profit-calc__form-item__input-input');

const pc = document.querySelectorAll('.profit-calc__form-item__input-input__trigger-text')[0];
const ps = document.querySelectorAll('.profit-calc__form-item__input-input__trigger-text')[1];
const firstYear = document.querySelectorAll('.profit-calc__form-item__text-number')[0];
const firstYearV2 = document.querySelectorAll('.profit-calc__form-item__text-number')[1];
const secondYear = document.querySelectorAll('.profit-calc__form-item__text-number')[2];
const allInputs = document.querySelectorAll('input');

const profit = {
    light : {
        firstYear : '144 680',
        secondYear : '325 780'
    },
    standart: {
        firstYear : '278 211',
        secondYear : '561 040'
    },
    business: {
        firstYear : '406 288',
        secondYear : '880 289'
    }
}

for (const item of inputWrapper) {
    item.addEventListener('click', function() {
        this.querySelector('.profit-calc__form-item__input-input').classList.toggle('open');
    })
}

window.addEventListener('click', function(e) {
    for (const select of inputs) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

for (const option of document.querySelectorAll(".profit-calc__form-item__input-input__option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.profit-calc__form-item__input-input__option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.profit-calc__form-item__input-input').querySelector('.profit-calc__form-item__input-input__trigger-text').textContent = this.textContent;
            if (pc.textContent === '45') {
                ps.textContent = '4';
                firstYear.textContent = `${profit.business.firstYear} руб.`;
                firstYearV2.textContent = `${profit.business.firstYear} руб.`;
                secondYear.textContent = `${profit.business.secondYear} руб.`;
            } else if (pc.textContent === '30'){
                ps.textContent = '2';
                firstYear.textContent = `${profit.standart.firstYear} руб.`;
                firstYearV2.textContent = `${profit.standart.firstYear} руб.`;
                secondYear.textContent = `${profit.standart.secondYear} руб.`;
            } else {
                ps.textContent = '2';
                firstYear.textContent = `${profit.light.firstYear} руб.`;
                firstYearV2.textContent = `${profit.light.firstYear} руб.`;
                secondYear.textContent = `${profit.light.secondYear} руб.`;
            }
        }
    })
}

document.addEventListener('click', (event) => {
    let {target} = event;
    if (target.dataset.scroll) {
        event.preventDefault();
        document.querySelector(target.closest("a").getAttribute("href")).scrollIntoView({block: "start", behavior: "smooth"});
    }
});

allInputs.forEach(item => {
    $('input[type=tel]').mask("+7 (999) 999-99-99");
})

AOS.init();