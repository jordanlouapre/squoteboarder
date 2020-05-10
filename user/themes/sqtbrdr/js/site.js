$(function() {
    var header = $(".home .header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= $(window).height()) {
            header.removeClass('header-hero');
        } else {
            header.addClass('header-hero');
        }
    });
});
