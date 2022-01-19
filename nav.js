const navigation = document.querySelector('.main-navigation-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close-btn');

hamburger.addEventListener('click', function() {

    const expanded = JSON.parse(hamburger.getAttribute('aria-expanded'));
    hamburger.setAttribute('aria-expanded', !expanded);

    navigation.classList.toggle('is-visable');
    close.classList.toggle('active');
    hamburger.classList.toggle('inactive');



    setTimeout(() => {
        navigation.classList.toggle('is-active');
    });
});

close.addEventListener('click', function() {
    close.classList.remove('active');
    hamburger.classList.remove('inactive');
    hamburger.classList.toggle('active');
    navigation.classList.remove('is-active');
    navigation.classList.remove('is-visable');
});
