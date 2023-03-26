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

//стилизация ползунков
const rangeInputs = document.querySelectorAll('input[type="range"]');
const cancel = document.querySelector('.js-cancel');

cancel.addEventListener('click', resetRange);

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
});

function resetRange() {
    rangeInputs.forEach(input => {
        input.style.backgroundSize = "50% 100%";
    });

    document.querySelectorAll('.js-range').forEach(function(item) {
        const range = item.querySelector('input[type="range"]');
        const output = item.querySelector('.js-range-output');

        setTimeout(() => {
            output.textContent = range.value;
        }, 0)

    });
}

function handleInputChange(e) {
    let target = e.target

    const min = target.min,
        max = target.max,
        val = target.value;

    target.closest('.js-range').querySelector('.js-range-output').textContent = val;
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

//копирование при клике на ID
document.querySelector('.js-copy').addEventListener('click', () => {
    const text = document.querySelector('.js-copy-content').textContent;

    navigator.clipboard.writeText(text);
});
  