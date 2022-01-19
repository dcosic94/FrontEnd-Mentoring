const navigation = document.querySelector('.main-navigation-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close-btn');

hamburger.addEventListener('click', function() {

    const expanded = JSON.parse(hamburger.getAttribute('aria-expanded'));
    hamburger.setAttribute('aria-expanded', !expanded);

    navigation.classList.toggle('is-visable');


    setTimeout(() => {
        navigation.classList.toggle('is-active');
    });
});