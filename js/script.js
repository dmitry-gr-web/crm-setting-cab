$(".btnplus").click(function() {
    $('.department-change-toggle').toggle(200);
});
$(".btnplus2").click(function() {
    $('.clients-change-toggle').toggle(200);
});
$(".btnplus3").click(function() {
    $('.status-change-toggle').toggle(200);
});
$(".status-color").click(function() {
    $('.block-pick-color').toggle();

});
// $(document).bind('click', function(e) {
//     var $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("block-status-order"))
//         $(".block-pick-color").css('display', 'none');
// });

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
//btn
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