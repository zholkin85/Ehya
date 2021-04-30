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
            loop: false,
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 2,
                },
                1440: {
                    slidesPerView: 3,
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.button-slide-next',
                prevEl: '.button-slide-prev',
            },
        })
        //=== /portfolio-slider

    //=== recall-slider
    const recallSlider = new Swiper('.recall-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 2,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.recall__slide-button-next',
            prevEl: '.recall__slide-button-prev',
        },
    })

    // Обработка формы
    $('.form').each(function() {
        $(this).validate({
            errorClass: 'invalid',
            rules: {
                name: {
                    required: true,
                    minlength: '2',
                },
                nameFoot: {
                    required: true,
                    minlength: '2',
                },
                phone: {
                    required: true,
                    phone: true,
                },
                email: {
                    required: true,
                    email: true,
                    minlength: '2',
                },
            },
            messages: {
                name: {
                    required: 'Укажите ваше имя',
                    minlength: 'Имя должно состоять минимум из двух букв.',
                },
                nameFoot: {
                    required: 'Please specify your name',
                    minlength: 'The name must be at least two letters',
                },
                email: {
                    required: 'We need your email address to contact you',
                    email: 'Your email address must be in the format of name@domain.com',
                },
                phone: {
                    required: 'Phone is required',
                },
                emailSub: {
                    required: 'We need your email address to contact you',
                    email: 'Your email address must be in the format of name@domain.com',
                },
            },
        })
        $.validator.addMethod(
            'phone',
            function(phone_number, element) {
                var ruPhone_number = phone_number.replace(/\(|\)|\s+|-/g, '')
                return this.optional(element) || (ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(ruPhone_number))
            },
            'Please specify a valid mobile number',
        )
    })

    //маска номера телефона
    $('.phone').each(function() {
        $(this).mask('+7 (999) 999-99-99', { placeholder: '+7 (999) 999-99-99' })
    })

    // Отправка данных на сервер
})