"use strict";

//отменяю отправку формы
document.querySelector('.js-form').addEventListener('submit', function(event) {
    event.preventDefault();
});


//табы
document.querySelectorAll('.js-tab').forEach((item) => {
    item.addEventListener('click', function() {
        const dataContent = item.dataset.content;

        document.querySelectorAll('.js-tab').forEach((item) => {
            item.classList.remove('settings-tabs__item--active');
        });
        item.classList.add('settings-tabs__item--active');
        
        document.querySelectorAll('.js-tab-content').forEach((item) => {
            if(item.dataset.content === dataContent) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    })
});