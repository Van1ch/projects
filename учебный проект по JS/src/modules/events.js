import images from "./images";
import countSum from "./calc";
import sendForm from "./sendForm";
export default function events() {

  const commandWrap = document.querySelector('#command .row');

  document.body.addEventListener('input', (event) => {
    const {target} = event;
    const calcInputs = target.closest('.calc-block input');
    const calcSelect = target.closest('.calc-block select');
    const formTelInput = target.closest('form input[type="tel"]');
    const formRuTextInput = target.closest('form input[type="text"]');

    // Инпут из калькулятора
    if (calcInputs) {
      calcInputs.value = calcInputs.value.replace(/\D/g, ' ');

      return 0;
    }

    if(calcInputs || calcSelect) {
      countSum(100);
      return 0;
    }

    if (formTelInput) {
      formTelInput.value = formTelInput.value.replace(/[^+\d]/g, '');
    }

    if (formRuTextInput) {
      formRuTextInput.value = formRuTextInput.value.replace(/[^а-я\s]/ig, '');
    }


  });
  commandWrap.addEventListener('mouseenter', (event) => {
    images(event);
  }, true);
  commandWrap.addEventListener('mouseleave', (event) => {
    images(event);
  }, true);
  
  document.body.addEventListener('submit', event => {
    sendForm(event.target);
  });
};
