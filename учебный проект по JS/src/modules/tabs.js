const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = index => {
        for (let i = 0; i < tabContent.length; i++) {
            tab[i].classList[ index === i ? 'add' : 'remove']('active');
            tabContent[i].classList[ index === i ? 'remove' : 'add']('d-none');
        }
    };

    tabHeader.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if (target) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
};

export default tabs;