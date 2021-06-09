$(".btnplus").click(function() {
    $('.department-change-toggle').toggle(200);
});
$(".btnplus2").click(function() {
    $('.clients-change-toggle').toggle(200);
});
$(".btnplus3").click(function() {
    $('.status-change-toggle').toggle(200);
});
$(".btnplus4").click(function() {
    $('.delivery-change-toggle').toggle(200);
});
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
// let popup = document.querySelector('.block-pick-color');
// document.addEventListener('mousedown', function(e) {
//     if (e.target.closest('.block-pick-color') === null) {
//         popup.style.display = 'none';
//     }
// });
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
//btn country-local
$(".status-local-btn .dropdown-block .btn").click(function() {
    let arrbtn = $('.status-local-btn .dropdown-block .scroll-position');
    arrbtn.map(x => $(".status-local-btn .dropdown-block .scroll-position").removeClass('toggle'));
    $(".status-local-btn .dropdown-block .scroll-position").toggleClass('toggle');
});
$(".status-local-btn .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
    var text = $(this).html();
    $(".status-local-btn .dropdown-block .btn .btn-span").html(text);
    $(".status-local-btn .dropdown-block .scroll-position").toggleClass('toggle');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown-block"))
        $(".status-local-btn .dropdown-block .scroll-position").removeClass('toggle');
});
//btn county-local2
$(".status-local-btn2 .dropdown-block .btn").click(function() {
    let arrbtn = $('.status-local-btn2 .dropdown-block .scroll-position');
    arrbtn.map(x => $(".status-local-btn2 .dropdown-block .scroll-position").removeClass('toggle'));
    $(".status-local-btn2 .dropdown-block .scroll-position").toggleClass('toggle');
});
$(".status-local-btn2 .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
    var text = $(this).html();
    $(".status-local-btn2 .dropdown-block .btn .btn-span").html(text);
    $(".status-local-btn2 .dropdown-block .scroll-position").toggleClass('toggle');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown-block"))
        $(".status-local-btn2 .dropdown-block .scroll-position").removeClass('toggle');
});
//btn dropdown pages
$(".pages-dropdown .dropdown-block .btn").click(function() {
    let arr = $('.scroll-position');
    arr.map(x => $(".dropdown-block .scroll-position").removeClass('toggle'));
    $(".pages-dropdown .dropdown-block .scroll-position").toggleClass('toggle');
});

$(".pages-dropdown .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
    var text = $(this).html();
    $(".pages-dropdown .dropdown-block .btn .btn-span").html(text);
    $(".pages-dropdown .dropdown-block .scroll-position").toggleClass('toggle');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown-block"))
        $(".pages-dropdown .dropdown-block .scroll-position").removeClass('toggle');
});
//type-chose-btn
$(".type-chose-btn .dropdown-block .btn").click(function() {
    let arr = $('.scroll-position');
    arr.map(x => $(".type-chose-btn .scroll-position").removeClass('toggle'));
    $(".type-chose-btn .dropdown-block .scroll-position").toggleClass('toggle');
});

$(".type-chose-btn .dropdown-block .custom-scroll-pretty_container .custom-scroll-pretty_inner ul li").click(function() {
    var text = $(this).html();
    $(".type-chose-btn .dropdown-block .btn .btn-span").html(text);
    $(".type-chose-btn .dropdown-block .scroll-position").toggleClass('toggle');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown-block"))
        $(".type-chose-btn .dropdown-block .scroll-position").removeClass('toggle');
});