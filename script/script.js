var slideNow = 1;
var slideCount = $('#slide-wrapper').children().length;
var translateWidth = 0;

$(document).ready(function () {

    $('#next-btn').click(function () {
        nextSlide();
    });

    $('#prev-btn').click(function () {
        prevSlide();
    });

    $('.price-item__button').hover(
        function () {
            $(this).addClass('active');
            $(this).siblings('.price-item__header').addClass('active');
        },
        function () {
            $(this).removeClass('active');
            $(this).siblings('.price-item__header').removeClass('active');
        }
    );

    $('#email').on('input propertychange', function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $('#email-warning').hide();
            } else {
                $('#email-warning').show();
            }
        }
    });

    $('#menu-btn').on('click', function () {
        $('#header-menu').toggle(500 , function() {
            // Animation complete.
        });
        if ($('.slider').css('margin-top') == '50px') {
            $('.slider').animate({marginTop:350},500);
        } else {
            $('.slider').animate({marginTop:50},500);
        }

    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slide-wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
}

