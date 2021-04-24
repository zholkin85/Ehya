$(document).ready(function() {
    $('.menu-burger').on('click', function(e) {
        e.preventDefault
        $('.menu-burger-btn').toggleClass('menu-burger-btn--active')
        $('.header__nav').toggleClass('header__nav--visible')
    })
})