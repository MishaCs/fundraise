// "use strict";

//скрываем теги если они не вмещаются в одну строку
const cardList = document.querySelector('.js-card-list');
const contentWrap = document.querySelector('.js-content-wrap');
const listItem = document.querySelectorAll('.js-list-item');

hideItems();

function hideItems() {
    let indexItem = listItem.length;

    listItem.forEach((item, index, array) => {
        indexItem = indexItem - 1;
        console.log(cardList.clientWidth, contentWrap.clientWidth)
        if(cardList.clientWidth > contentWrap.clientWidth) {
            array[indexItem].classList.add('hidden');
        } else if(cardList.clientWidth < contentWrap.clientWidth) {
            if(item.classList.contains('hidden')) {
                item.classList.remove('hidden');
                if(cardList.clientWidth > contentWrap.clientWidth) {
                    item.classList.add('hidden');
                }
            }
        }
    });
}

//при скроле тоже скрываем
window.addEventListener('resize', function() {
    hideItems();
}, true);
