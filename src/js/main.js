// tel country init
var telInputCountry = document.querySelector('.tel-input-country-init');
var telInputCountryModal = document.querySelector('.tel-input-country-modal-init');

if ($('.tel-input-country-init').length > 0) {
    window.intlTelInput(telInputCountry, {
        initialCountry: 'auto'
    });
}

if ($('.tel-input-country-modal-init').length > 0) {
    window.intlTelInput(telInputCountryModal, {
        initialCountry: 'auto'
    });
}

$(document).ready(function() {    
    // test pager
    $('.tasks-field-wrap').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        $('.tab-pane.active .tasks-field-wrap').removeClass('active-item');
        $(this).addClass('active-item');
        if (screenTest.find('.tasks-field-wrap').hasClass('active-item')) {
            screenTest.find('.hworihrw35-form-b__footer-btn-next').removeClass('disabled');
            return false;
        }
    });

    $('.hworihrw35-form-b__footer-btn-next').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        if (screenTest.find('.tasks-field-wrap').hasClass('active-item')) {
            screenTest.removeClass('active');
            screenTestNext.addClass('active');
        }
    });

    $('.hworihrw35-form-b__footer-btn-prev').click(function (e) {
        var screenTest = $('.tab-pane.active');
        screenTestNext = screenTest.next();
        screenTestPrev = screenTest.prev();
        screenTest.removeClass('active');
        screenTestPrev.addClass('active');
    });

    // modal init
    $('.js-modal-init').click(function (e) {
        var modalIn = $(this).attr('href');
        $('body').addClass('is-modal-opened');
        $(modalIn).addClass('is-show');
        e.preventDefault();
    });

    $('.js-modal-close').on('click', function (e) {
        $('body').removeClass('is-modal-opened');
        $(this).parents('.asfgteje-35').removeClass('is-show');
        e.preventDefault();
    });
});