//btn change menu start
$(".btnplus").click(function() {
    $('.department-change-toggle').toggle(200);
});
$(".btnplus2").click(function() {
    $('.clients-change-toggle').toggle(200);
});
$(".btnplus3").click(function() {
    $('.status-change-toggle').toggle(200);
    $('.block-for-user').toggleClass('info');
});
$(".btnplus4").click(function() {
    $('.delivery-change-toggle').toggle(200);
});
$(".btnplus5").click(function() {
    $('.product-change-toggle').toggle(200);
});
//btn change menu end

//block pick color
$(".status-color").click(function() {
    $('.block-pick-color').toggle(200);
});
$(".block-pick-color .close-btn-color").click(function() {
    $('.block-pick-color').toggle(200);
});
$(document).mouseup(function(e) {
    if (!$('.block-pick-color').is(e.target) && $('.block-pick-color').has(e.target).length === 0) {
        $('.block-pick-color').hide(200);
    }
});
//block pick color end
//chekbox
// $(".product-tv-shop").click(function() {
//     $('.tv-shop-dropdown').toggle(200);
//     $(".product-tv-shop .arrow-animation").toggleClass('aa-toggle');
// });
// $(".tv-item-1").click(function() {
//     $('.item-1-drop').toggle(200);
//     $(".tv-item-1 .arrow-animation").toggleClass('aa-toggle');
// });

// $(".tv-item-2").click(function() {
//     $('.item-2-drop').toggle(200);
//     $(".tv-item-2 .arrow-animation").toggleClass('aa-toggle');
// });
// $(".product-garden").click(function() {
//     $('.garden-drop').toggle(200);
//     $(".product-garden .arrow-animation").toggleClass('aa-toggle');
// });
$("#switch-item1-drop").click(function() {
    $('.tv-item-1-drop').toggleClass('opacity-toggle');
});
$("#switch-item2-drop").click(function() {
    $('.tv-item-2-drop').toggleClass('opacity-toggle');
});
$("#switch-garden-drop").click(function() {
    $('.garden-item-3').toggleClass('opacity-toggle');
});
$("#switch-for-tvshop").click(function() {
    $('.product-tv-shop').toggleClass('opacity-toggle');
    $(".product-tv-shop .arrow-animation").toggleClass('aa-toggle');
});
$("#switch-for-garden").click(function() {
    $('.product-garden').toggleClass('opacity-toggle');
    $(".product-garden .arrow-animation").toggleClass('aa-toggle');
});
$("#switch-for-opt2").click(function() {
    $('.tv-item-2').toggleClass('opacity-toggle');
    $(".tv-item-2 .arrow-animation").toggleClass('aa-toggle');
});
$("#switch-for-opt1").click(function() {
    $('.tv-item-1').toggleClass('opacity-toggle');
    $(".tv-item-1 .arrow-animation").toggleClass('aa-toggle');
});

//chekbox end
//switch
// $("#switch-for-tvshop").click(function() {
//     $('.product-tv-shop').off().toggleClass('opacity-toggle');
// });
// $("#switch-for-tvshop").click(function() {
//     $('.product-tv-shop').toggleClass('opacity-toggle');
//     $(".product-tv-shop").click(function() {
//         $('.tv-shop-dropdown').toggle(200);
//         $(".product-tv-shop .arrow-animation").toggleClass('aa-toggle');
//     });
// });
// $('#switch-for-tvshop').on('click', function() {
//     if (!$('.product-tv-shop').hasClass('opacity-toggle')) { // если класса нет
//         $('.product-tv-shop').addClass('opacity-toggle').off(); // добавляем класс
//         $(".product-tv-shop .arrow-animation").removeClass('aa-toggle');
//         $('.tv-shop-dropdown').hide(200);
//     } else { // если есть
//         $('.product-tv-shop').removeClass('opacity-toggle'); // убираем класс
//         $(".product-tv-shop").click(function() {
//             $('.tv-shop-dropdown').toggle(200);
//             $(".product-tv-shop .arrow-animation").toggleClass('aa-toggle');
//         });
//     }
// });
// $('#switch-for-opt1').on('click', function() {
//     if (!$('.tv-item-1').hasClass('opacity-toggle')) { // если класса нет
//         $('.tv-item-1').addClass('opacity-toggle').off(); // добавляем класс
//         $(".tv-item-1 .arrow-animation").removeClass('aa-toggle');
//         $('.item-1-drop').hide(200);
//     } else { // если есть
//         $('.tv-item-1').removeClass('opacity-toggle'); // убираем класс
//         $(".tv-item-1").click(function() {
//             $('.item-1-drop').toggle(200);
//             $(".tv-item-1 .arrow-animation").toggleClass('aa-toggle');
//         });
//     }
// });
// $('#switch-for-opt2').on('click', function() {
//     if (!$('.tv-item-2').hasClass('opacity-toggle')) { // если класса нет
//         $('.tv-item-2').addClass('opacity-toggle').off(); // добавляем класс
//         $(".tv-item-2 .arrow-animation").removeClass('aa-toggle');
//         $('.item-2-drop').hide(200);
//     } else { // если есть
//         $('.tv-item-2').removeClass('opacity-toggle'); // убираем класс
//         $(".tv-item-2").click(function() {
//             $('.item-2-drop').toggle(200);
//             $(".tv-item-2 .arrow-animation").toggleClass('aa-toggle');
//         });
//     }
// });
// $('#switch-for-garden').on('click', function() {
//     if (!$('.product-garden').hasClass('opacity-toggle')) { // если класса нет
//         $('.product-garden').addClass('opacity-toggle').off(); // добавляем класс
//         $(".product-garden .arrow-animation").removeClass('aa-toggle');
//         $('.garden-drop').hide(200);
//     } else { // если есть
//         $('.product-garden').removeClass('opacity-toggle'); // убираем класс
//         $(".product-garden").click(function() {
//             $('.garden-drop').toggle(200);
//             $(".product-garden .arrow-animation").toggleClass('aa-toggle');
//         });
//     }
// });

// let popup = document.querySelector('.block-pick-color');
// document.addEventListener('mousedown', function(e) {
//     if (e.target.closest('.block-pick-color') === null) {
//         popup.style.display = 'none';
//     }
// });
//block pick color
$(".color-1B1B51").click(function() {
    $('.current-color').css('background-color', '#1b1b51');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-E1004C").click(function() {
    $('.current-color').css('background-color', '#E1004C');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-006B53").click(function() {
    $('.current-color').css('background-color', '#006B53');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-A63F00").click(function() {
    $('.current-color').css('background-color', '#A63F00');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-AC5FCA").click(function() {
    $('.current-color').css('background-color', '#AC5FCA');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-747323").click(function() {
    $('.current-color').css('background-color', '#747323');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-485164").click(function() {
    $('.current-color').css('background-color', '#485164');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-747C77").click(function() {
    $('.current-color').css('background-color', '#747C77');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-470010").click(function() {
    $('.current-color').css('background-color', '#470010');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-CEB339").click(function() {
    $('.current-color').css('background-color', '#CEB339');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-9E9E73").click(function() {
    $('.current-color').css('background-color', '#9E9E73');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
$(".color-C6693B").click(function() {
    $('.current-color').css('background-color', '#C6693B');
    let colorSelect = $('.color-form');
    colorSelect.map(x => $(".color-form").removeClass('color-select'));
    $(this).toggleClass('color-select');
    $('.block-pick-color').toggle(200);
});
//block pick color 

//link blocks
$("#otdel-link").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-department').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
$("#group-client-link").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-clients').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
$("#status-order-link").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-status-order').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
$("#block-payment-method").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-payment-method').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
$("#block-delivery-link").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-delivery-method').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
$("#block-product-category").click(function() {
    let arr = $('.add');
    arr.map(x => $(".add").removeClass('block-hide-show'));

    let arry = $('.selected');
    arry.map(x => $('.selected').removeClass('hover-list-permanent'));
    $('.block-product-category').toggleClass('block-hide-show');
    $(this).addClass('hover-list-permanent');
});
// $(".main-setting").click(function() {
//     let arr = $('.add');
//     arr.map(x => $(".add").removeClass('block-hide-show'));


//     $('.block-nav').toggleClass('block-hide-show');

// });
// $(".user-setting").click(function() {
//     let arr = $('.add');
//     arr.map(x => $(".add").removeClass('block-hide-show'));


//     $('.block-user-setting').toggleClass('block-hide-show');

// });
//link blocks end

//pages-dropdown btn
$(".pages-dropdown .dropdown .btn .btn-span").click(function() {
    let arrbtn = $('.dropdown .ul-block');
    arrbtn.map(x => $(".dropdown .ul-block").removeClass('toggle'));
    $(".pages-dropdown .dropdown .ul-block").toggle();
    $(".btn").css('opacity', '0');
    $(".pages-total").css('opacity', '0');
    $(".block-pages-num").css('opacity', '0');
    $(".dropdown").css('opacity', '1');
});
$(".pages-dropdown .dropdown .ul-block .list").click(function() {
    var text = $(this).html();
    $(".pages-dropdown .dropdown .btn .btn-span").html(text);
    $(".pages-dropdown .dropdown .ul-block").hide();

});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".pages-dropdown .dropdown .ul-block").hide();
});
//status local btn
$(".status-local-btn .dropdown .btn .btn-span").click(function() {
    let arrbtn = $('.dropdown .ul-block');
    arrbtn.map(x => $(".dropdown .ul-block").removeClass('toggle'));
    $(".status-local-btn .dropdown .ul-block").toggle();
});
$(".status-local-btn .dropdown .ul-block .list").click(function() {
    var text = $(this).html();
    $(".status-local-btn .dropdown .btn .btn-span").html(text);
    $(".status-local-btn .dropdown .ul-block").hide();
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".status-local-btn .dropdown .ul-block").hide();
});
//status local btn 2
$(".status-local-btn2 .dropdown .btn .btn-span").click(function() {
    let arrbtn = $('.dropdown .ul-block');
    arrbtn.map(x => $(".dropdown .ul-block").removeClass('toggle'));
    $(".status-local-btn2 .dropdown .ul-block").toggle();
});
$(".status-local-btn2 .dropdown .ul-block .list").click(function() {
    var text = $(this).html();
    $(".status-local-btn2 .dropdown .btn .btn-span").html(text);
    $(".status-local-btn2 .dropdown .ul-block").hide();
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".status-local-btn2 .dropdown .ul-block").hide();
});
//type-chose-btn
$(".type-chose-btn .dropdown .btn .btn-span").click(function() {
    let arrbtn = $('.dropdown .ul-block');
    arrbtn.map(x => $(".dropdown .ul-block").removeClass('toggle'));
    $(".type-chose-btn .dropdown .ul-block").toggle();
});
$(".type-chose-btn .dropdown .ul-block .list").click(function() {
    var text = $(this).html();
    $(".type-chose-btn .dropdown .btn .btn-span").html(text);
    $(".type-chose-btn .dropdown .ul-block").hide();
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".type-chose-btn .dropdown .ul-block").hide();
});