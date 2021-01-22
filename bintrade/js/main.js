$(document).ready(function() {

    AOS.init();

});

(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

        function hide(item1, item2) {

            item1.forEach(function(item, index) {

                item1[index].classList.remove('active');
                item2[index].classList.remove('active');

            });
            
        }

        function show(b, item1, item2) {

            if (!item1[b].classList.contains('active')) {

                hide(item1, item2);
                item1[b].classList.add('active');
                item2[b].classList.add('active');

            }

        }

        const form = document.querySelector('.form');
        const formTopItems = document.querySelectorAll('.form-top__item');
        const formMainItems = document.querySelectorAll('.form-main');

        let formThing = window.location.search.replace('?action=', '');

        if (formThing && formThing === 'signIn') {

            form.classList.add('active');

            show(0, formTopItems, formMainItems);

        } else if (formThing && formThing === 'signUp') {

            form.classList.add('active');

            show(1, formTopItems, formMainItems);

        }

        document.addEventListener('click', function(event) {

            const target = event.target;

            if (!target.closest('.form') && form.classList.contains('active')) {

                form.classList.remove('active');

            }

            if (target.matches('.header_signUp')) {

                form.classList.add('active');

                show(1, formTopItems, formMainItems);

            }

            if (target.matches('.header_signIn')) {

                form.classList.add('active');

                show(0, formTopItems, formMainItems);

            }

            if (target.matches('.form-top__item')) {

                formTopItems.forEach(function(item, index) {

                    if (target.closest('.form-top__item') === formTopItems[index]) {

                        show(index, formTopItems, formMainItems);
                        return;

                    }

                });
    
            }

        });

    });

})();