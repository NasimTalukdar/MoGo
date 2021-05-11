$(function () {
    var html_body = $('html,body');
    var backtop = $('.backtop');
    //navbar active on mouseover;
    $('.navbar .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(window).scroll(function () {
        var navscroll = $(this).scrollTop();
        var backtoTop = $(this).scrollTop();
        if (navscroll > 400) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');

        }
        // backtotop
        if (backtoTop > 500) {
            backtop.fadeIn();
        } else {
            backtop.fadeOut();
        }
    });

    // banner js
    $('.bannerSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        speed: 2500,
        autoplaySpeed: 2500,
    });

    // fun Fact js
    $('.counter').counterUp({
        time: 2000,
    });

    // message js
    $('.messageslider').slick({
        arrows: true,
        autoplay: true,
        dots: false,
        speed: 2500,
        autoplaySpeed: 2500,
        prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoPlay: true,
                    arrows: false,
                }
            },
        ]
    });
    // feedback js
    $('.feedbackSlider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        speed: 2500,
        autoplaySpeed: 2500,
        prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoPlay: true,
                    arrows: false,
                }
            },
        ]
    });
    new WOW().init();
    // scrollEfect
    $('.navbar-nav .nav-item .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }

    });
    // scrollspy
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset: 100,
    });
    backtop.click(function () {
        html_body.animate({
            scrollTop: 0,
        }, 1000);
    });
});