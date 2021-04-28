$(document).ready(function() {
    $('.menu-burger').on('click', function(e) {
        e.preventDefault
        $('.menu-burger-btn').toggleClass('menu-burger-btn--active')
        $('.header__nav').toggleClass('header__nav--visible')
    })
    $(window).scroll(function() {
        $('.header').toggleClass('scroll', $(this).scrollTop() > 100)
    })
    $('#buttonDown').on('click', 'a', function(event) {
        event.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 900)
    })
    $('#buttonPortfolio').on('click', 'a', function(event) {
        event.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1500)
    })
})