function openMenu1() {
    $(this).css('width', '51px');
    if ($(this).children('.block1').hasClass('toggle')) {
        $(this).css('width', '51px');
        $(this).children('.ip-btn').removeClass('hide-arrow');
    }
    $(this).children('.ip-btn').removeClass('hide-arrow');
};
$('.ip-wrap').mouseenter(openMenu1);

$('.ip-wrap').mouseleave(function() {
    $('.ip-wrap').css('width', '16px');
    $('.ip-wrap:first-child').css('width', '25px');
    $('.ip-wrap:last-child').css('width', '18px');
    if ($('.ip-wrap').children('.block1').hasClass('toggle')) {
        $('.ip-wrap').children('.block1.toggle').css('width', '51px')
        $('.ip-wrap').children('.block1.toggle').parent().css('width', '51px')
    }
    if ($(this).children('.ip-btn').find('.flags') || $(this).children('.ip-btn').children().text() == 'П/п') {
        $(this).children('.ip-btn').addClass('hide-arrow');
    }
    if ($(this).children('.ip-btn').html() == '') {
        $(this).children('.ip-btn').removeClass('hide-arrow');
    }
    console.log($(this).children('.ip-btn').html())

});
$(".ip-btn").click(function() {
    if (!$('.ip-wrap').children('.block1').hasClass("toggle")) {
        $(this).siblings('.block1').addClass("toggle");

        $(".list-ip").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
        let oneMenuOpen = $(".block1");
        $($(this).parent('.dropMenu').find('ul')).toggleClass('block-menu-toggle');
        oneMenuOpen.map((_, i) => {
            if (!$(this).parents('.ip-wrap').find('.block1').hasClass(i.classList[1])) {
                $(i).removeClass("toggle");
            }
        });
        $('.ip-wrap').unbind('mouseenter');
    }
});

$(".list-ip").click(function(e) {
    $(this).toggleClass('select-btn');
    $(this).parent().find('.list-ip:first-child').removeClass('select-btn');
    if ($(this).parents('.ip-wrap').find('.select-btn').length == 1) {
        let appendCountry = $(this).parents('.ip-wrap').find('.select-btn').html();
        $(this).parents('.ip-wrap').children('.ip-btn').html(appendCountry);
    }
    if ($(this).parents('.ip-wrap').find('.select-btn').length >= 2) {
        $(this).parents('.block1').siblings('.ip-btn').html('<span class="list-item padding-left">Фильтр</span>');
    }
    if ($(this).parents('.ip-wrap').find('.select-btn').length == 0) {
        $(this).parents('.block1').siblings('.ip-btn').html('');
        $(this).parent().find('.list-ip:first-child').addClass('select-btn');
        $(this).parents('.ip-wrap').children('.ip-btn').removeClass('hide-arrow');
    }
});
$(".list-ip:first-child").click(function() {
    $(this).parents('.ip-wrap').children('.ip-btn').removeClass('hide-arrow');
    $(this).parents('.block1').siblings('.ip-btn').html('');
    $(this).parent().siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");
    $('.ip-wrap').mouseenter(openMenu1);
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("ip-wrap")) {
        $(".ip-wrap .block1").removeClass("toggle");
        changesInput();
        $('.ip-wrap').mouseenter(openMenu1);
        $('.ip-wrap').css('width', '16px');
        $(".ip-wrap:first-child").css('width', '25px');
        $(".ip-wrap:last-child").css('width', '18px');
    }
});