// Вызов меню
const menubBtn = document.querySelector('.burger');
const menuList = document.querySelector('.menu_list');
const burgerSpan = document.querySelector('.burger_span');

menubBtn.addEventListener('click', () => {
    menubBtn.classList.toggle('burger--active');
    menuList.classList.toggle('menu_list--active');
    burgerSpan.classList.toggle('burger_span--active')
});

// Слайдер
const swiper = new Swiper(".portfolio_slider", {
    slidesPerView: 'auto',
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// Popup форма обратной связи для оставления заявки
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup_form');
const openPopupButtons = document.querySelector('.hero_btn');
const popupClose = document.querySelector('.popup_form-close');

openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup_active')
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_active');
});

document.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('popup_active');
    }
});