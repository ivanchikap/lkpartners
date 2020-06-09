(function () {
    // .header-nav навигация
    let nav = $('.nav__list');
    let btn = $('.nav__btn');
    let close = $('.nav__close');
    let logo =  $('.header__logo');

    // .menu-btn - кнопка меню
    $(btn).click(function () {
        if (nav.hasClass('nav__list--active')) {
            nav.removeClass('nav__list--active');
            close.hide();
        } else {
            nav.addClass('nav__list--active');
            btn.hide();
            // logo.addClass('mx-sm-auto');
            close.show();
        }
    });
    $(close).click(function () {
        nav.removeClass('nav__list--active');
        setTimeout(function () {
            btn.show();
            // logo.removeClass('mx-auto');
        }, 500);
    });
})();