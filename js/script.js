$(document).ready(function () {

    $('.women-rewards__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
        ]
    });

    $('.women-rewards__images').slick({
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    variableWidth: false
                }
            },
        ]
    });

    $('.women-range__list').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    $('.women-positive__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true
                }
            },
        ]
    });

    $('.women-staff__slider').slick({
        slide: 'div',
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    variableWidth: false,
                    dots: true,
                    rtl: false
                }
            },
        ],
        prevArrow: $('.women-staff__slider-prev'),
        dotsClass: 'slider-paging-number',
        customPaging: function (slick) {
            return (slick.currentSlide + 1) + '/' + slick.slideCount;
        }
    }).on('afterChange', function (event, slick, currentSlide) {
        // works with 1.7.1+
        $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));
    });


    $('.women-reviews__slider--1').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ],
        dotsClass: 'slider-paging-number',
        customPaging: function (slick) {
            return (slick.currentSlide + 1) + '/' + slick.slideCount;
        }
    }).on('afterChange', function (event, slick, currentSlide) {
        // works with 1.7.1+
        $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

    });

    if ($(".women-reviews__slider--1 .slick-slide").length === 1) {
        $(".women-reviews__slider--1 .slick-track").addClass("transform-1")
    }

    if ($(".women-reviews__slider--1 .slick-slide").length === 3) {
        $(".women-reviews__slider--1 .slick-slide").removeClass("slick-current")
        $(".women-reviews__slider--1 .slick-slide:nth-child(2)").addClass("slick-current")
    }

    if ($(".women-reviews__slider--2 .slick-slide").length === 1) {
        $(".women-reviews__slider--2 .slick-track").addClass("transform-1")
    }

    if ($(".women-reviews__slider--2 .slick-slide").length === 3) {
        debugger
        console.log('awf')
        $(".women-reviews__slider--2 .slick-slide").removeClass("slick-current")
        $(".women-reviews__slider--2 .slick-slide:nth-child(2)").addClass("slick-current")
    }

    // $('.women-reviews__slider-2').slick({
    //   centerMode: true,
    //   slidesToShow: 3,
    //   arrows: true,
    //   dots: true,
    //   responsive: [
    // {
    //   breakpoint: 1200,
    //   settings: {
    //   arrows: true,
    //   centerMode: true,
    //   centerPadding: '20px',
    //   slidesToShow: 1,
    // }
    // },
    // {
    //   breakpoint: 768,
    //   settings: {
    //   arrows: true,
    //   centerMode: true,
    //   centerPadding: '20px',
    //   slidesToShow: 1,
    // }
    // }
    // ],
    //     dotsClass: 'slider-paging-number',
    //     customPaging: function (slick) { return (slick.currentSlide + 1) + '/' + slick.slideCount; }
    // }).on('afterChange', function (event, slick, currentSlide) {
    //   // works with 1.7.1+
    //   $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

    // });

    $('.women-instagram__slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1
                }
            },
        ],
    });

    $('.teacher-slider').slick({
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

window.onload = function () {
    var div = document.querySelector('.load-block');
    div && div.classList.remove('load-block')
};

$(document).ready(function () {
    var instaSlider = $('.insta-slider');
    instaSlider.each(function () {
        var instaSwiper = new Swiper(this, {
            loop: true,
            loopedSlides: 8,
            speed: 500,
            spaceBetween: 20,
            slidesPerView: 8,
            navigation: {
                prevEl: $(this).parents('.slider-block').find('.swiper-button-prev')[0],
                nextEl: $(this).parents('.slider-block').find('.swiper-button-next')[0],
            },

        });

    });
});

$('input[type="tel"]').mask('0000000000000');

$('.women-header__top-citybtn').on('click', function () {
    $('.modal-city').addClass('active');
    $('body').css('overflow-y', 'hidden')
})

$('.closed-modal').on('click', function () {
    $('.modal-city').removeClass('active');
    $('body').css('overflow-y', 'auto')
})

// $('.women-header__top-callmebtn').on('click', function () {
//     $('.modal-background.modal-background-2').css('z-index', '999')
//     $('.modal-background.modal-background-2').addClass('active')
//     $('body').css('overflow-y', 'hidden')
// })
//
// $('.women-training__button').on('click', function (e) {
//     e.preventDefault()
//     $('.modal-background.modal-background-2').css('z-index', '999')
//     $('.modal-background.modal-background-2').addClass('active')
//     $('body').css('overflow-y', 'hidden')
// })

$('.orderbtn').on('click', function (e) {
    e.preventDefault()
    $('#order-modal').css('z-index', '999')
    $('#order-modal').addClass('active')
    $('body').css('overflow-y', 'hidden')
})
//
// $(document).mouseup(function (e) {
//     var container = $(".modal-callme");
//     if (container.has(e.target).length === 0) {
//         $('.modal-background').removeClass('active')
//         $('.modal-background').css('z-index', '-10')
//         $('body').css('overflow-y', 'auto')
//     }
// });

// $('.franshiza-header__top-callmebtn').on('click', function () {
//     $('.modal-background').css('z-index', '999')
//     $('.modal-background').addClass('active')
//     $('body').css('overflow-y', 'hidden')
// })

// $(document).mouseup(function (e) {
//     var container = $(".modal-callme");
//     if (container.has(e.target).length === 0) {
//         $('.modal-background').removeClass('active')
//         $('.modal-background').css('z-index', '-10')
//         $('body').css('overflow-y', 'auto')
//     }
// });


$('.women-header__hamburger').on('click', function () {
    $('.women-header__hamburger').toggleClass('active');
    $('.main-navigation').toggleClass('active');
    $('body').toggleClass('overflow');
});

$('.main-navigation a').on('click', function () {
    $('.women-header__hamburger').toggleClass('active');
    $('.main-navigation').toggleClass('active');
    $('body').toggleClass('overflow');
});

// $('.video').on('click', function(evt) {
//   var video_link = $(this).attr('data-video');
//   $(evt.target).attr('data-video', video_link);
//   var $iframe = $('.modal-iframe iframe');
//   $iframe.attr('src', video_link);

//   $('.modal-background-2').css('z-index', '999')
//   $('.modal-background-2').addClass('active')
//   $('body').css('overflow-y', 'hidden')
// })

// $(document).mouseup(function (e) {
//     var container = $(".modal-iframe");
//     if (container.has(e.target).length === 0){
//       $('.modal-background-2').removeClass('active')
//       $('.modal-background-2').css('z-index', '-10')
//       $('body').css('overflow-y', 'auto')
//     }
// });

// $(document).mousedown(function (e) {
//     // debugger
//     var container = $(".modal-callme");
//     if (container.has(e.target).length === 0) {
//         $('modal-background.modal-background-2').removeClass('active')
//         $('modal-background.modal-background-2').css('z-index', '-10')
//         $('body').css('overflow-y', 'auto')
//     }
// });

$('.women-reviews__link').on('click', function (evt) {
    console.log($(evt.target))
    $('.women-reviews__link').removeClass('active');
    $(evt.target).addClass('active');

    $('.women-reviews__slider').removeClass('active');

    if ($(evt.target).attr('data-link') === 'tab-0') {
        $('.women-reviews__slider--1').addClass('active');
    }

    if ($(evt.target).attr('data-link') === 'tab-1') {
        $('.women-reviews__slider--2').addClass('active');
        if (!$('.women-reviews__slider--2').hasClass('slick-initialized')) {
            $('.women-reviews__slider--2').slick({
                centerMode: true,
                slidesToShow: 3,
                arrows: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1,
                        }
                    }
                ],
                dotsClass: 'slider-paging-number',
                customPaging: function (slick) {
                    return (slick.currentSlide + 1) + '/' + slick.slideCount;
                }
            }).on('afterChange', function (event, slick, currentSlide) {
                // works with 1.7.1+
                $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

            });
        }
    }

    if ($(".women-reviews__slider--2 .slick-slide").length === 1) {
        $(".women-reviews__slider--2 .slick-track").addClass("transform-1")
    }

    if ($(".women-reviews__slider--2 .slick-slide").length === 3) {
        // debugger
        console.log('awf')
        $(".women-reviews__slider--2 .slick-slide").removeClass("slick-current")
        $(".women-reviews__slider--2 .slick-slide:nth-child(2)").addClass("slick-current")
    }
})

function dotsSlider() {
    setTimeout(function () {
        var number = $(".women-staff__slider .slider-paging-number li:first-child").text();
        console.log(number)
        $(".arrow-direction__number").html(number);
    }, 1000)
}

dotsSlider()

$(".arrow-direction__right, .people__arrow-prev").on('click', function () {
    $(".women-staff .women-staff__slider-prev.slick-arrow").click();
    $(".teacher-slider .slick-prev").click();
    dotsSlider()
})

$(".arrow-direction__left, .people__arrow-next").on('click', function () {
    $(".women-staff .slick-next.slick-arrow").click();
    $(".teacher-slider .slick-next").click();
    dotsSlider()
})

$(".women-staff__slider").on('swipe', function (event, slick, direction) {
    dotsSlider()
});

$(".teacher-slider").on("init", function(event, slick){
    $(".people__number").html("<span>" + parseInt(slick.currentSlide + 1) + "</span>" + slick.slideCount);
});

$(".teacher-slider").on("afterChange", function(event, slick, currentSlide){
    $(".people__number").html("<span>" + parseInt(slick.currentSlide + 1) + "</span>" + slick.slideCount);
});