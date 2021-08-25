$(".status-table .status-btn").click(function() {
    $(".input-status").focus().val('');
    $(".status-table .block1").addClass("toggle");
    $(".list-status").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".status-table .block1 .list-status").click(function(e) {
    $(".status-table .list-status .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.status-table .block1 .list-status.select-btn').length == 1) {
        let appendStatus = $('.list-status.select-btn').text();
        $(".input-status").val(appendStatus);
        $('.status-table .list-status .all').removeClass("select-btn-static");
        $('.status-btn .list-status.select-btn').removeClass('select-btn');
    }
    if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
        $(".input-status").val('Фильтр');
    }
    if ($('.status-table .block1 .list-status.select-btn').length == 0) {
        $(".input-status").val('Все');
        $('.status-table .list-status .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".status-table .block1 .list-status .all").parent().click(function() {
    $(".input-status").val('Все');
    $(this).removeClass('select-btn');
    $('.status-table .block1 .list-status').removeClass('select-btn');
    $(".status-table .block1").removeClass("toggle");
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("status-table")) {
        $(".status-table .block1").removeClass("toggle");
        if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
            $(".input-status").val('Фильтр');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 0) {
            $(".input-status").val('Все');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 1) {
            let appendStatus = $('.list-status.select-btn').text();
            $(".input-status").val(appendStatus);
        }
        changesInput();
    }
});
$(".count-message, .message-btn").click(function() {
    $(".message-menu").toggleClass('count-toggle');
    $(".message-list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".message-list").click(function() {
    $(".message-list .all").removeClass("count-toggle")
    $(this).toggleClass('select-btn');
    if ($('.message-list.select-btn').length == 1) {
        let appendCount = $('.message-list.select-btn').text();
        $(".count-message").val(appendCount);
        $('.message-list').children('.all').removeClass("select-btn-static");
    }
    if ($('.message-list.select-btn').length >= 2) {
        $(".count-message").val('~');
    }
    if ($('.message-list.select-btn').length == 0) {
        $(".count-message").val('∞');
        $('.message-list .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".message-list .all").click(function() {
    $(".count-message").val('∞');
    $(this).removeClass('select-btn');
    $(".message-menu").removeClass('count-toggle');
    $(".message-list").removeClass('select-btn');
    console.log($(".count-message"));
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("message-box")) {
        $(".message-menu").removeClass('count-toggle');
        changesInput();
    }
});