const sendForm = (target) => {
    const errorMessage = 'Что-то пошло не так!',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся с Вами!';
    const form = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.className = 'message';
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';


    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });


    form.forEach(elem => {
        elem.addEventListener('submit', event  => {
            event.preventDefault();
            target.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(elem);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            const inputs = elem.querySelectorAll('input');
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 300000);
                    inputs.forEach(item => {
                        item.value = '';
                    });
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 300000);
                    inputs.forEach(item => {
                        item.value = '';
                    });
                });
        });
    });
};

export default sendForm;