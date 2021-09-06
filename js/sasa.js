function openMenu() {
    $(".list-small").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    $(this).css('width', '51px');
    $(this).children('.block1').addClass("toggle");
    // if ($(this).children('.block1').hasClass('toggle')) {
    //     $(this).css('width', '51px');
    //     $(this).children('.btn-small').removeClass('hide-arrow');
    // }
    $(this).children('.btn-small').removeClass('hide-arrow');
};

function closeMenu() {
    $(this).children('.block1').removeClass("toggle");
    $('.btn-wrap').css('width', '16px');
    $('.btn-wrap.width25').css('width', '25px');
    $('.btn-wrap.width18').css('width', '18px');
    if ($(this).children('.btn-small').html() == '') {
        $(this).children('.btn-small').removeClass('hide-arrow');
    } else {
        $(this).children('.btn-small').addClass('hide-arrow');
    }
};
$(".btn-small").on('click', btnMenu);
$('.btn-wrap').on('mouseenter', openMenu);
$('.btn-wrap').on('mouseleave', closeMenu);

function btnMenu() {
    $('.btn-wrap').on('mouseenter', openMenu);
    $('.btn-wrap').on('mouseleave', closeMenu);
    $(this).siblings('.block1').toggleClass("toggle");

    $(".list-small").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    // let oneMenuOpen = $(".block1");
    // $($(this).parent('.dropMenu').find('ul')).toggleClass('block-menu-toggle');
    // oneMenuOpen.map((_, i) => {
    //     if (!$(this).parents('.btn-wrap').find('.block1').hasClass(i.classList[1])) {
    //         $(i).removeClass("toggle");
    //     }
    // });
};


$(".list-small").click(function(e) {
    $(this).toggleClass('select-btn');
    $(".btn-small").off('click', btnMenu);
    $(this).parents('.btn-wrap').children('.btn-small').on('click', btnMenu);
    $('.btn-wrap').off('mouseenter', openMenu);
    $('.btn-wrap').off('mouseleave', closeMenu);
    $(this).parent().find('.list-small:first-child').removeClass('select-btn');

    if ($(this).parents('.btn-wrap').find('.select-btn').length == 1) {
        let appendCountry = $(this).parents('.btn-wrap').find('.select-btn').html();
        $(this).parents('.btn-wrap').children('.btn-small').html(appendCountry);
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length >= 2) {
        $(this).parents('.block1').siblings('.btn-small').html('<span class="list-item padding-left">Фильтр</span>');
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length == 0) {
        $(this).parents('.block1').siblings('.btn-small').html('');
        $(this).parent().find('.list-small:first-child').addClass('select-btn');
        $(this).parents('.btn-wrap').children('.btn-small').removeClass('hide-arrow');
    }
});
$(".list-small:first-child").click(function() {
    $(this).addClass('select-btn');
    $(this).parents('.btn-wrap').children('.btn-small').removeClass('hide-arrow');
    $(this).parents('.block1').siblings('.btn-small').html('');
    $(this).siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");
    $('.btn-wrap').on('mouseenter', openMenu);
    $('.btn-wrap').on('mouseleave', closeMenu);
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("btn-wrap")) {
        $(".btn-wrap .block1").removeClass("toggle");
        changesInput();
        // if ($('.btn-small').html() == '') {
        //     $('.btn-small').removeClass('hide-arrow');
        // } else {
        //     $('.btn-small').addClass('hide-arrow');
        // }
        $('.btn-small').each(function() {
            if ($(this).html() == '') {
                $(this).removeClass('hide-arrow');
            } else { $(this).addClass('hide-arrow'); }
        });
        // $('.btn-small').addClass('hide-arrow');
        $('.btn-wrap').on('mouseenter', openMenu);
        $('.btn-wrap').on('mouseleave', closeMenu);
        $(".btn-small").on('click', btnMenu);
        $('.btn-wrap').css('width', '16px');
        $(".btn-wrap.width25").css('width', '25px');
        $(".btn-wrap.width18").css('width', '18px');
    }
});