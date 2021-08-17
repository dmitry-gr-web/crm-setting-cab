//menu country btn
$(".colum-country .country-btn").click(function() {
    $(".colum-country .block1").toggleClass("toggle");
    $(".list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-country .block1 .list").click(function(e) {
    $(".colum-country .list .all").removeClass("toggle")
    $(this).toggleClass('select-btn');
    if ($('.colum-country .block1 .list.select-btn').length == 1) {
        let appendCountry = $('.colum-country .list.select-btn').html();
        $(".country-btn").html(appendCountry);
        $('.btn-refresh').addClass('active-btn-header');
        $('.colum-country .list').children('.all').removeClass("select-btn-static");
        $('.country-btn').children('.all').removeClass("select-btn-static");
    }
    if ($('.colum-country .block1 .list.select-btn').length >= 2) {
        $(".country-btn").html('Фильтр');
        $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.colum-country .block1 .list.select-btn').length == 0) {
        $(".country-btn").html('Все');
        $('.colum-country .all').addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
    }
});
$(".colum-country .block1 .list .all").click(function() {
    $(".country-btn").html('Все');
    $(this).removeClass('select-btn');
    $('.colum-country .block1 .list').removeClass('select-btn');
    $(".colum-country .block1").removeClass("toggle");
    $('.btn-refresh').removeClass('active-btn-header');
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-country")) {
        $(".colum-country .block1").removeClass("toggle");
    }
});



$(".text-lenght").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 14) {
        text = text.substring(0, 13) + "...";
        $(this).text(text);

        $(this).parents('.list-status').hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
            let blockWidth = $(this).width();
            $("#tooltipBtn")
                .css("left", posElement.x + blockWidth + 10 + "px")
                .css("top", posElement.y - 4 + "px");
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
            // if (posElement.x < 110) {
            //     $("#tooltipBtn").css('left', posElement.x - blockWidth + 10 + 'px');
            // }
            // if (screenHeight < posElement.y + heightTooltip + 25) {
            //     $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            // }

        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }

});

$(".status-table .status-btn").click(function() {
    $(".input-btn").focus().val('');
    $(".status-table .block1").addClass("toggle");
    $(".list-status").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });

});
$(".status-table .block1 .list-status").click(function(e) {
    $(".status-table .list-status .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.status-table .block1 .list-status.select-btn').length == 1) {
        $('.status-table .list-status .all').removeClass("select-btn-static");
        $('.status-btn .list-status.select-btn').removeClass('select-btn');
        $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
        $(".input-btn").val('Фильтр');
        $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.status-table .block1 .list-status.select-btn').length == 0) {
        $(".input-btn").val('Все');
        $('.status-table .list-status .all').addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');

    }
});
$(".status-table .block1 .list-status .all").parent().click(function() {
    $('.btn-refresh').removeClass('active-btn-header');
    $(".input-btn").val('Все');
    $(this).removeClass('select-btn');
    $('.status-table .block1 .list-status').removeClass('select-btn');
    $(".status-table .block1").removeClass("toggle");
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("status-table")) {
        $(".status-table .block1").removeClass("toggle");

        if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
            $(".input-btn").val('Фильтр');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 1) {
            let appendCountry = $('.list-status.select-btn').text();
            $(".input-btn").val(appendCountry);
            $('.status-table .list-status .all').removeClass("select-btn-static");
            $('.status-btn .list-status.select-btn').removeClass('select-btn');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 0) {
            $(".input-btn").val('Все');
        }
    }
});
.message - box {
        display: flex;
        justify - content: space - between;
    }
    .count - message {
        background: rgba(156, 155, 158, 0.4);
        // border: 1px white solid;
        box - sizing: border - box;
        position: relative;
        // left: -2px;
        width: 18 % ;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.5);
        text - align: left;
        border - right: 1 px white solid;
        // border-left: none;
        // border-left: 3px white solid;
        // height: 17px;
        // &::placeholder {
        //     content: '';
        //     position: absolute;
        //     background-image: url('../img/arrow-down.svg');
        //     width: 6px;
        //     height: 3px;
        //     background-size: 100%;
        //     top: 7px;
        //     right: -4px;
        // }
    }
    .message - btn {
        position: relative;
        cursor: pointer; &
        : after {
            content: '';
            position: absolute;
            background - image: url('../img/arrow-down.svg');
            width: 6 px;
            height: 3 px;
            background - size: 100 % ;
            top: 7 px;
            right: 4 px;
            opacity: 0.8;
            z - index: 22;
        }
    }
    .message - menu {
        display: none;
        z - index: 3;
        box - shadow: 4 px 4 px 9 px rgb(0, 0, 0, 0.15);
        cursor: pointer;
        position: absolute;
        width: 25 px;
        text - align: center;
        background - color: white;
        right: 0;
        top: 18 px;
        height: 90 px;
        .simplebar - track.simplebar - vertical {
            background - color: rgba(0, 0, 0, 0.1);
            width: 3 px;
            margin - top: 5 px;
            margin - bottom: 5 px;
            margin - right: 2 px;
            bottom: 0;
            border - radius: 5 px;
        }
        .simplebar - track.simplebar - vertical.simplebar - scrollbar::before {
            background: rgba(0, 0, 0, 0.3);
            width: 3 px;
            border - radius: 5 px;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
        .simplebar - scrollbar.simplebar - visible: before {
                opacity: 1;
            }
            .simplebar - content - wrapper {
                padding: 0;
            }
            .message - list {
                position: relative;
                .all {
                    width: 100 % ;
                    display: inline - block;
                } &
                : hover.message - link {
                    color: rgba(0, 0, 0, 0.5);
                }
                input {
                    outline: none;
                    border: none;
                }
            }
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
                $('.btn-refresh').addClass('active-btn-header');
                $('.message-list').children('.all').removeClass("select-btn-static");
            }
            if ($('.message-list.select-btn').length >= 2) {
                $(".count-message").val('∞');
                $('.btn-refresh').addClass('active-btn-header');
            }
            if ($('.message-list.select-btn').length == 0) {
                $(".count-message").val('∞');
                $('.message-list .all').addClass("select-btn-static");
                $('.btn-refresh').removeClass('active-btn-header');
            } else if ($(this).children()[0].classList.contains('all')) {
                $(this).removeClass('select-btn');
                $(this).children().addClass("select-btn-static");
                $('.btn-refresh').removeClass('active-btn-header');
            }
        });
        $(".message-list .all").click(function() {
            $(".count-message").val('∞');
            $(this).removeClass('select-btn');
            $(".message-menu").removeClass('count-toggle');
            $(".message-list").removeClass('select-btn');
            $('.btn-refresh').removeClass('active-btn-header');
        });
        $(document).bind("click", function(e) {
            let $clicked = $(e.target);
            if (!$clicked.parents().hasClass("message-box")) {
                $(".message-menu").removeClass('count-toggle');
            }
        });