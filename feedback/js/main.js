document.addEventListener('DOMContentLoaded', function() {

    function removeActive(target) {
        target.querySelectorAll('.content-item__main-item').forEach(function(item) {
            item.classList.remove('active');
        });
    }

    function allSelected() {

        let flag = 1;

        document.querySelectorAll('.content-item').forEach(function(item) {
            if (!item.classList.contains('active')) {
                flag =  0;
            }
        });

        return flag;
    }

    const data = {};

    const textarea = document.querySelector('.bottom-top__text');

    textarea.addEventListener('input', function() {
        data.advice = textarea.value;
    });

    document.addEventListener('click', function(event) {
        
        let target = event.target;

        if (target.matches('.content-item__main-item')) {

            let parent = target.closest('.content-item');

            removeActive(parent);
            target.classList.add('active');
            parent.classList.add('active');
            data[parent.dataset.info] = target.textContent;
        }

        if (target.matches('.bottom-top__button') && !allSelected()) {
            document.querySelector('.bottom-top__error').style.display = 'block';
        }

    });

});