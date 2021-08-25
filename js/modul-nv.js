//dropMenu
$(".btn-menu").click(function() {
    $(".menu-list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    let oneMenuOpen = $(".block-menu");
    $($(this).parent('.dropMenu').find('ul')).toggleClass('block-menu-toggle');
    oneMenuOpen.map((_, i) => {
        if (!$(this).parents('.dropMenu').find('ul').hasClass(i.classList[1])) {
            $(i).removeClass("block-menu-toggle");
        }
    });
});
$(".menu-list").click(function() {
    const memory = $(this).text();
    $($(this).parents('.dropMenu').find('.btn-menu')).html(memory);
    $(".block-menu").removeClass('block-menu-toggle');
    console.log($(this).closest().find('.btn-menu'));
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropMenu")) {
        $(".block-menu").removeClass('block-menu-toggle');
    }
});


//dropMenu Search
// $(".btn-menu-search").click(function() {
//     $(".menu-list-search").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
//     let oneMenuOpen = $(".block-menu-search");
//     // console.log($(".dropMenu-search"))
//     $($(this).siblings('.block-menu-search')).toggleClass('block-menu-toggle');
//     oneMenuOpen.map((_, i) => {
//         if (!$(this).siblings('.block-menu-search').hasClass(i.classList[1])) {
//             $(i).removeClass("block-menu-toggle");
//         }
//     });
// });
// $(".menu-list-search").click(function() {
//     const memory = $(this).text();
//     $($(this).parents('.dropMenu-search').find('.btn-menu-search')).html(memory);
//     $(".block-menu-search").removeClass('block-menu-toggle');
//     console.log($(this).closest().find('.btn-menu-search'));
// });
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("dropMenu-search")) {
//         $(".block-menu-search").removeClass('block-menu-toggle');
//     }
// });

//dropFilter

$(".btn-menu-filter").click(function() {
    $(".menu-list-filter").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    let oneMenuOpen = $(".block-menu-filter");
    $($(this).parent('.dropFilter').find('ul')).toggleClass('block-menu-toggle');
    oneMenuOpen.map((_, i) => {
        if (!$(this).parents('.dropFilter').find('ul').hasClass(i.classList[1])) {
            $(i).removeClass("block-menu-toggle");
        }
    });
    if ($('.btn-menu-filter').children('.1').length == 1) {
        // $(this).addClass('menu-select-filter');
        $(this).parents('.dropFilter').find('ul').find('.1').parent().addClass('menu-select-filter');
    }
});




$(".menu-list-filter").click(function() {
    const memory = $(this).html();
    $(this).addClass('menu-select-filter');
    if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).length !== 0) {
        $($(this).parents('.dropFilter').find('.btn-menu-filter')).children("." + $(this)[0].firstChild.classList.value).remove();
        $(this).removeClass('menu-select-filter');
    } else {
        $($(this).parents('.dropFilter').find('.btn-menu-filter')).append(memory);
    }



    // console.log()


    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.1').length == 2) {
    //     $(this).removeClass('menu-select-filter');
    // }
    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.2').length == 2) {
    //     $($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.2').remove();
    //     $(this).removeClass('menu-select-filter');
    // }
    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.3').length == 2) {
    //     $($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.3').remove();
    //     $(this).removeClass('menu-select-filter');
    // }
    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.4').length == 2) {
    //     $($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.4').remove();
    //     $(this).removeClass('menu-select-filter');
    // }
    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.5').length == 2) {
    //     $($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.5').remove();
    //     $(this).removeClass('menu-select-filter');
    // }
    // if ($($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.6').length == 2) {
    //     $($(this).parents('.dropFilter').find('.btn-menu-filter')).children('.6').remove();
    //     $(this).removeClass('menu-select-filter');
    // }
});


$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropFilter")) {
        $(".block-menu-filter").removeClass('block-menu-toggle');
    }
});


//selectMenu
$(".btn-auto-order").click(function() {
    $(".np-auto-order").css('display', 'block');
    $(".np-auto-status").css('display', 'none');
    $(this).addClass('btn-np-select');
    $(".btn-auto-status").removeClass('btn-np-select');

});
$(".btn-auto-status").click(function() {
    $(".np-auto-order").css('display', 'none');
    $(".np-auto-status").css('display', 'block');
    $(this).addClass('btn-np-select');
    $(".btn-auto-order").removeClass('btn-np-select');
});
// const memoryBox = $('.np-auto-order').children().children('tr:last-child').clone();
// const copyBox = $('.np-auto-order').children().children('tr:last-child').clone();
// let memoryBox = copyBox;
$(".add-new-np").on('click', function() {
    const memoryBox = $('.np-auto-order').find('tr:nth-child(2)').clone(true);
    // const memoryBox = $('.stroke-np-order').clone(true);
    $('.np-auto-order').append(memoryBox);
});
$(".np-delete").on('click', function() {
    if ($('.np-auto-order').find('.stroke-np-order').length > 1) {
        $(this).parents('tr').remove();
    }
});
//modul NP open/save
$(".su").on('click', function() {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
});
$(".np-close").on('click', function() {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
});
$(".save-btn").on('click', function() {
    $(".modul-np").toggleClass('modul-np-toggle');
    $(".bg-blur").toggleClass('on-off');
});
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("modul-np")) {
//         $(".modul-np").addClass('modul-np-toggle');
//     }
// });
//modul NP open
// console.log($('.np-auto-order').find('.stroke-np-order').length);