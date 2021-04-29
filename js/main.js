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
        //== modal window ===
    var modalButton = $('[data-toggle=modal]')
    var closeModalButton = $('.modal__close')
    var closeEsc = $('[data-toggle=modal]')
    modalButton.on('click', openModal)
    closeModalButton.on('click', closeModal)
    closeEsc.on('keydown', escClose)

    function openModal() {
        var targetModal = $(this).attr('data-href')
        $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
        $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
        var paddingOffset = innerWidth - document.body.offsetWidth + 'px'
        var marginOffset = document.body.offsetWidth - innerWidth + 'px'
        $('body').addClass('fix')
        $('body').css('padding-right', paddingOffset)
        $('body').css('margin-right', marginOffset)
        $('body').css('margin-left', marginOffset)
    }

    function closeModal(event) {
        event.preventDefault()
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
        $('body').removeClass('fix')
        $('body').css('padding', 0)
        $('body').css('margin', 0)
    }
    $('.modal__overlay').on('click', closeModal)

    function escClose() {
        modalButton.keydown(function(event) {
            if (event.which == 27) {
                var modalOverlay = $('.modal__overlay')
                var modalDialog = $('.modal__dialog')
                modalOverlay.removeClass('modal__overlay--visible')
                modalDialog.removeClass('modal__dialog--visible')
            }
        })
    }
    //=== /modal window ===
    //=== portfolio-slider ===
    const swiper = new Swiper('.portfolio-slider', {
            slidesPerView: 2,
            spaceBetween: 30,

            // Navigation arrows
            navigation: {
                nextEl: '.porfolio-button__swiper-button-next',
                prevEl: '.porfolio-button__swiper-button-prev',
            },
        })
        //=== /portfolio-slider

    //=== recall-slider
    const recallSlider = new Swiper('.recall-slider', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.recall-slider__swiper-button-next',
            prevEl: '.recall-slider__swiper-button-prev',
        },
    })
})