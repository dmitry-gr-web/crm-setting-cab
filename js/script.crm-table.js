[...document.querySelectorAll('.crm-header-link')].map(x => {
    x.addEventListener('click', () => {
        [...document.querySelectorAll('.crm-header-link')].map(y => y.classList.remove('btn-toggle'));
        x.classList.toggle('btn-toggle');
    });
});
//tooltip
$(document).ready(function() {
    $(".crm-main-table").on('click', (e) => {
        $(".crm-main-table").unbind("mouseleave mousemove");
        $(".select-toggle").mousemove(
            function(pos) {
                if ($(".crm-main-table").hasClass('select-toggle')) {
                    $("#hoverSelect").show();
                    $("#hoverSelect").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
                }
            }
        ).mouseleave(function(e) {
            $("#hoverSelect").hide();
        });
    });
});
//tooltip

//ctrl a
// const listA = document.querySelector('body');
// listA.addEventListener('keydown', (e) => {
//     if ((e.ctrlKey) && (e.which == 65) || (e.metaKey) && (e.which == 65)) {
//         document.querySelectorAll('.crm-main-table').forEach(e => {
//             if (!e.classList.contains('selected-lock')) {
//                 e.classList.add('select-toggle');
//                 // count = e.length;
//                 // // $(".select-toggle").mousemove(
//                 // //     function(pos) {
//                 // //         if ($(".crm-main-table").hasClass('select-toggle')) {
//                 // //             $("#hoverSelect").show();
//                 // //             $("#hoverSelect").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
//                 // //         }
//                 // //     }
//                 // // )
//                 // $('.count-hover').text(count);
//                 // console.log(count);
//             }
//             // $('.crm-main-table').length.appendTo('.count-hover');
//         });
//         e.preventDefault();
//     }
// });

// console.log($('.crm-main-table').length);
//ctrl a
//ctrl+click


// [...document.querySelectorAll('.crm-main-table')].map(x => {
//     x.addEventListener('click', (e) => {
//         if (e.ctrlKey || e.metaKey) {
//             x.classList.toggle('select-toggle');
//         }
//         // else if (e.shiftKey) {
//         //     x.classList.toggle('select-toggle');
//         else if (x.classList.contains('selected-lock')) {
//             x.classList.remove('select-toggle');
//         } else {
//             [...document.querySelectorAll('.crm-main-table')].map(y => y.classList.remove('select-toggle'));
//             x.classList.toggle('select-toggle');
//         }
//     });
// });


//ctrl+click


// $("a .ui-datepicker-next").hover(function() {
//     $("a .ui-datepicker-next-hover").removeClass();

// });

//shift+click

(function($) {
    // selekt jQuery plugin // http://stackoverflow.com/a/35813513/383904
    $.fn.selekt = function() {

        let settings = $.extend({
            children: ".wrap-scroll .crm-main-table",
            className: "select-toggle",
            onSelect: function() {}
        }, arguments[0] || {});

        return this.each(function(_, that) {
            let $ch = $(this).find(settings.children),
                sel = [],
                last;

            // $('.crm-main-table').on('keydown', function(e) {
            //     let isCtrl = (e.ctrlKey || e.metaKey),
            //         keyA = (e.which == 65);


            //     $(sel).removeClass(settings.className);

            //     if (isCtrl && keyA) {
            //         console.log('1');
            //         $('.crm-main-table').each(function() {
            //             if (!$('.crm-main-table').hasClass('selected-lock')) {
            //                 $('.crm-main-table').addClass('select-toggle');
            //             }

            //             // $('.crm-main-table').length;
            //             // console.log($('.crm-main-table').length);
            //         });
            //     }

            // });



            $ch.on("mousedown", function(ev) {
                let isCtrl = (ev.ctrlKey || ev.metaKey),
                    isShift = ev.shiftKey,
                    ti = $ch.index(this),
                    li = $ch.index(last),
                    ai = $.inArray(this, sel);

                if (isShift || isCtrl) ev.preventDefault();

                $(sel).removeClass(settings.className);

                if (isCtrl) {
                    if (ai > -1) sel.splice(ai, 1);
                    else sel.push(this);
                } else if (isShift && sel.length > 0) {
                    if (ti > li) ti = [li, li = ti][0];
                    sel = [...$ch.slice(ti, li + 1)].filter(x => {
                            return !x.classList.contains('selected-lock');
                        })
                        //sel = $ch.slice(ti, li + 1);
                } else {
                    sel = ai < 0 || sel.length > 1 ? [this] : [];
                    if (!$(".crm-main-table").hasClass('select-toggle')) {
                        $("#hoverSelect").hide();
                    }
                    // if ($(".crm-main-table").hasClass('selected-lock')) {
                    //     $(".crm-main-table").removeClass('select-toggle');
                    // }
                }
                last = this;
                // [...sel].map(x => {
                //         if (!x.classList?.contains('selected-lock')) {
                //             x.classList.add("select-toggle");
                //         }
                //     })

                $(sel).addClass(settings.className);

                settings.onSelect.call(that, sel);
            });

        });
    };
}(jQuery));
$(".wrap-scroll").selekt({
    children: ".crm-main-table", // Elements to target (default: "tbody tr")
    className: "select-toggle", // Desired CSS class  (default: "selected")
    onSelect: function(sel) { // Useful callback
        $(".count-hover").text(sel.length);
    }
});
// $(document).ready(function() {
//     $(".crm-main-table").on('mousemove', () => {
//         if ($(".crm-main-table").hasClass('select-toggle')) {
//             tippy('.select-toggle', {
//                 content: 'My tooltip!',
//             });
//         }
//     });
// })


//shift click
//...
$(".crm-main-table .user-item").text(function(i, text) {
    if (text.length >= 26) {
        text = text.substring(0, 25) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .colum-id").text(function(i, text) {
    if (text.length >= 7) {
        text = text.substring(0, 5) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .order-id-style").text(function(i, text) {
    if (text.length >= 12) {
        text = text.substring(0, 10) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .item-product").text(function(i, text) {
    if (text.length >= 43) {
        text = text.substring(0, 41) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .comm-item").text(function(i, text) {
    if (text.length >= 28) {
        text = text.substring(0, 27) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .sum-item").text(function(i, text) {
    if (text.length >= 9) {
        text = text.substring(0, 7) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .status-item").text(function(i, text) {
    if (text.length >= 25) {
        text = text.substring(0, 23) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .ttn-item").text(function(i, text) {
    if (text.length >= 17) {
        text = text.substring(0, 15) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .adress-item").text(function(i, text) {
    if (text.length >= 32) {
        text = text.substring(0, 31) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .employe-item").text(function(i, text) {
    if (text.length >= 20) {
        text = text.substring(0, 19) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .site-item").text(function(i, text) {
    if (text.length >= 22) {
        text = text.substring(0, 21) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .utm").text(function(i, text) {
    if (text.length >= 13) {
        text = text.substring(0, 12) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .camp").text(function(i, text) {
    if (text.length >= 18) {
        text = text.substring(0, 17) + '...';
    }
    $(this).text(text);
});
$(".crm-main-table .field").text(function(i, text) {
    if (text.length >= 20) {
        text = text.substring(0, 19) + '...';
    }
    $(this).text(text);
});

// ...


//menu country btn
$(".colum-country .country-btn").click(function() {
    $(".colum-country .block1").addClass('toggle');
    $(".crm-main-table").addClass('z-index');
});
$(".colum-country .block1 .list").click(function() {
    var text = $(this).html();
    $(".country-btn").html(text);
    $(".colum-country .block1").removeClass('toggle');
    $(".crm-main-table").removeClass('z-index');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-country")) {
        $(".colum-country .block1").removeClass('toggle');
    }
    if (!$(".block1").hasClass('toggle')) {
        $(".crm-main-table").removeClass('z-index');
    }
});

//menu country btn
//menu delivery btn
$(".colum-delivery .delivery-btn").click(function() {
    $(".colum-delivery .block1").addClass('toggle');
    $(".crm-main-table").addClass('z-index');
});
$(".colum-delivery .block1 .list").click(function() {
    var text = $(this).html();
    $(".delivery-btn").html(text);
    $(".colum-delivery .block1").removeClass('toggle');
    $(".crm-main-table").removeClass('z-index');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);

    if (!$clicked.parents().hasClass("colum-delivery")) {
        $(".colum-delivery .block1").removeClass('toggle');
    }
    if (!$(".block1").hasClass('toggle')) {
        $(".crm-main-table").removeClass('z-index');
    }
});
//menu delivery btn
//pay btn
$(".colum-pay .pay-btn").click(function() {
    $(".colum-pay .block1").addClass('toggle');
    $(".crm-main-table").addClass('z-index');
});
$(".colum-pay .block1 .list").click(function() {
    var text = $(this).html();
    $(".pay-btn").html(text);
    $(".colum-pay .block1").removeClass('toggle');
    $(".crm-main-table").removeClass('z-index');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-pay")) {
        $(".colum-pay .block1").removeClass('toggle');
    }
    if (!$(".block1").hasClass('toggle')) {
        $(".crm-main-table").removeClass('z-index');
    }
});
//pay btn
//depart btn
$(".colum-depart .depart-btn").click(function() {
    $(".colum-depart .block1").addClass('toggle');
    $(".crm-main-table").addClass('z-index');
});
$(".colum-depart .block1 .list").click(function() {
    var text = $(this).html();
    $(".depart-btn").html(text);
    $(".colum-depart .block1").removeClass('toggle');
    $(".crm-main-table").removeClass('z-index');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-depart")) {
        $(".colum-depart .block1").removeClass('toggle');
    }
    if (!$(".block1").hasClass('toggle')) {
        $(".crm-main-table").removeClass('z-index');
    }
});

//depart btn
//employe btn
$(".colum-employe .employe-btn").click(function() {
    $(".colum-employe .block1").addClass('toggle');
    $(".crm-main-table").addClass('z-index');
});
$(".colum-employe .block1 .list").click(function() {
    var text = $(this).html();
    $(".employe-btn").html(text);
    $(".colum-employe .block1").removeClass('toggle');
    $(".crm-main-table").removeClass('z-index');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-employe")) {
        $(".colum-employe .block1").removeClass('toggle');
    }
    if (!$(".block1").hasClass('toggle')) {
        $(".crm-main-table").removeClass('z-index');
    }
});


//employe btn
// $(function() {
//     $("[data-tooltip]").mousemove(function(eventObject) {
//         $data_tooltip = $(this).attr("data-tooltip");
//         $("#tooltip").html($data_tooltip)
//             .css({
//                 "top": eventObject.pageY + 5,
//                 "left": eventObject.pageX + 5
//             })
//             .show();
//     }).mouseout(function() {
//         $("#tooltip").hide()
//             .html("")
//             .css({
//                 "top": 0,
//                 "left": 0
//             });
//     });
// });
// $('.crm-main-table').mousemove(function(e) {
//     var X = e.pageX;
//     var Y = e.pageY;
//     var top = Y + 10 + 'px';
//     var left = X + 10 + 'px';
//     var id = $(this).data('hoverMouse');
//     $('#hover').css({
//         display: "block",
//         top: top,
//         left: left
//     });
// });
// $('.crm-main-table').mouseout(function() {
//     var id = $(this).data('hoverMouse');
//     $('#hover').css({
//         display: "none"
//     });
// });



// document.querySelector('.colum-user').innerHTML.slice(0, 5);
// document.querySelector('.colum-user').slice(0, 5);


// var size = 15,
//     newsContent = $('.colum-user'),
//     newsText = newsContent.text();

// if (newsText.length > size) {
//     newsContent.text(newsText.slice(0, size) + ' ...');
// }
// /**
//  * Функция для сокращения длинного текста
//  * @var object element - элемент, в котором необходимо укоротить текст
//  * @var int count_lit - лимит символов
//  * @var bool light - true|false задать осветление последних символов или нет
//  */
// function cutLongString(element, count_lit, light) {
//     // текст в блоке
//     var text = element.html();
//     // длина текста в блоке
//     var all_len = text.length;
//     // хранилище для нового текста
//     var new_text;

//     // если текст больше заданного лимита, то обрезаем его
//     if (all_len > count_lit) {
//         // обрезаем текст и добавляем три точки в конец
//         new_text = text.substr(0, (count_lit - 3)) + '...';
//         // если необходимо задать осветление последним символам
//         if (light) {
//             // кусок обычного текста
//             var first_part_text = new_text.substr(0, (count_lit - 10));
//             // кусок текста, который будет осветлен
//             var light_part_text = new_text.substr((count_lit - 10), count_lit);
//             // переменная, для хранения осветленного текста
//             var light_text = "";
//             // цвета для последний 10 символов
//             var array_color = ["#444444", "#545454", "#646464", "#747474", "#848484", "#949494", "#a4a4a4", "#b4b4b4", "#c4c4c4", "#d4d4d4"];
//             // перебираем по одному символу текст, который будет осветлен
//             for (var i = 0; i < 10; i++) {
//                 // оборачиваем каждый символ в span и задаем ему цвет
//                 light_text += "<span style='color: " + array_color[i] + "'>" + light_part_text.substr(i, 1) + "</span>";
//             }
//             // склеиваем две части текста
//             new_text = first_part_text + light_text;
//         }
//         // заменяем текст в блоке
//         element.html(new_text);
//     }
// }
// $(document).ready(function() {
//     // после загрузки страницы вызываем функцию
//     // обрезание с осветлением
//     // cutLongString($('.colum-user'), 10, true);
//     // обрезание без осветления
//     cutLongString($('.colum-user'), 8, false);
// });

// const sliced = document.querySelector('.colum-user');

// sliced.text.slice(0, 10);
// if (sliced.length < text.length) {
//     sliced += '...';
// }

// const hoverMouse = document.querySelector('.select-toggle');
// const hoverMouseBlock = document.querySelector('.hoverMouse');

// hoverMouse.addEventListener('onmouseover', (e) => {
//     hoverMouse.style.display = 'block';
//     hoverMouseBlock.style.display = 'block';
// });

// function mouseOver() {
//     document.querySelector(".select-toggle").document.querySelector(".hoverMouse").style.display = 'block';
// }

// function mouseOut() {
//     document.getElementById("button").src = "../images/button1.png";
// }
// const listBtn = document.querySelector('.crm-main-table');

// listBtn.addEventListener('click', func);

// function func(event) {
//     if (event.ctrlKey) {
//         [...document.querySelectorAll('.crm-main-table')].map(y => y.classList.add('select-toggle'));
//         event.classList.add('select-toggle');
//     }
// }

//task block
const btnActual = document.querySelector('.actual');
const btnDone = document.querySelector('.done');
const blockActual = document.querySelector('.task-toggle-actual');
const blockDone = document.querySelector('.task-toggle-done');

btnDone.addEventListener('click', () => {
    blockActual.style.display = 'none';
    blockDone.style.display = 'block';
    btnDone.classList.add('btn-style');
    btnActual.classList.remove('btn-style');
});
btnActual.addEventListener('click', () => {
    blockActual.style.display = 'block';
    blockDone.style.display = 'none';
    btnDone.classList.remove('btn-style');
    btnActual.classList.add('btn-style');
});

const btnOpenTask = document.getElementById('inbox');
const taskBlock = document.querySelector('.task-block');

btnOpenTask.addEventListener('click', () => {
    taskBlock.classList.toggle('task-block-toggle');
    btnOpenTask.classList.toggle('selected-nav');
});

document.addEventListener('mousedown', function(e) {
    // const ui = document.getElementById('ui-datepicker-div');
    if (e.target.closest('.task-block') === null) {
        taskBlock.classList.remove('task-block-toggle');
        btnOpenTask.classList.remove('selected-nav');
    }
});

const btnTaskPlus = document.querySelector('.btnplus7');
const wrapTaskPlus = document.querySelector('.task-plus');
const btnTaskCancel = document.querySelector('.btn-cancel');
const btnTaskAccept = document.querySelector('.btn-accept');
const btnTaskLink = document.querySelector('.task-link');
const blockTaskList = document.querySelector('.task-list');

btnTaskPlus.addEventListener('click', () => {
    wrapTaskPlus.classList.toggle('task-block-toggle');
    btnTaskPlus.style.visibility = "hidden";
    btnTaskLink.style.display = 'none';
    blockTaskList.style.display = 'none';

});
btnTaskCancel.addEventListener('click', () => {
    wrapTaskPlus.classList.toggle('task-block-toggle');
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = 'block';
    blockTaskList.style.display = 'block';
});
btnTaskAccept.addEventListener('click', () => {
    wrapTaskPlus.classList.toggle('task-block-toggle');
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = 'block';
    blockTaskList.style.display = 'block';
});


$(".recall-clients .dropdown2 .btn .btn-span").click(function() {
    let arrbtn = $('.dropdown2 .ul-block');
    arrbtn.map(x => $(".dropdown2 .ul-block").removeClass('toggle'));
    $(".recall-clients .dropdown2 .ul-block").toggle();
});
$(".recall-clients .dropdown2 .ul-block .list").click(function() {
    var text = $(this).html();
    $(".recall-clients .dropdown2 .btn .btn-span").html(text);
    $(".recall-clients .dropdown2 .ul-block").hide();
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown2"))
        $(".recall-clients .dropdown2 .ul-block").hide();
});
//task block


//notification
const btnNot = document.querySelector('.btn-not');
const btnTech = document.querySelector('.btn-tech');

const blockNote = document.querySelector('.block-not');
const techNote = document.querySelector('.tech-note');

btnNot.addEventListener('click', () => {
    btnNot.classList.add('btn-style');
    blockNote.style.display = 'block';
    techNote.style.display = 'none';
    btnTech.classList.remove('btn-style');

});
btnTech.addEventListener('click', () => {
    blockNote.style.display = 'none';
    techNote.style.display = 'block';
    btnTech.classList.add('btn-style');
    btnNot.classList.remove('btn-style');
});

const notificationBtn = document.querySelector('.notification-btn');
const notificationBlock = document.querySelector('.notifications');

notificationBtn.addEventListener('click', () => {
    notificationBlock.classList.toggle('notification-toggle');
});
document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.header-crm') === null) {
        notificationBlock.classList.remove('notification-toggle');
    }
});
//notification

// nav sidebar

const btnCrmNav = document.getElementById('sidebar');
const navWrap = document.querySelector('.nav-crm');
const navCrmPlus = document.querySelectorAll('.nav-desc');

btnCrmNav.addEventListener('click', () => {
    navWrap.classList.toggle('nav-crm-plus');
    navCrmPlus.forEach(x => x.classList.toggle('nav-desc-toggle'));
    btnCrmNav.classList.toggle('selected-nav');
});

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.nav-crm') === null) {
        navWrap.classList.remove('nav-crm-plus');
        navCrmPlus.forEach(x => x.classList.remove('nav-desc-toggle'));
        btnCrmNav.classList.remove('selected-nav');
    }
});

//nav sidebar
// document.querySelector('.btn-not').addEventListener('click', () => {
//     document.querySelectorAll('.block-not').classList.toggle('toggle-display');
// });
// document.querySelector('.btn-tech').addEventListener('click', () => {
//     document.querySelectorAll('.tech-not').classList.toggle('toggle-display');
// });


// document.querySelectorAll('.crm-main-table').onclick = function(event) {
//     if (event.target.tagName != "div") return;

//     if (event.ctrlKey || event.metaKey) {
//         toggleSelect(event.target);
//     } else {
//         singleSelect(event.target);
//     }
// }

// document.querySelectorAll('.crm-main-table').onmousedown = function() {
//     return false;
// };

// function toggleSelect(div) {
//     div.classList.toggle('select-toggle');
// }

// function singleSelect(div) {
//     let selected = document.querySelectorAll('.crm-main-table');
//     for (let elem of selected) {
//         elem.classList.remove('select-toggle');
//     }
//     document.querySelectorAll('.crm-main-table').classList.add('select-toggle');
// }


// $(".crm-main-table").on("click", function(e) {
//     if (e.ctrlKey) {
//         $(this).addClass('select-toggle');
//     }
// });


// $(document).keydown(function(e) {
//     if (e.ctrlKey) {
//         $(".crm-main-table").click(function() {
//             let btn = $('.crm-main-table');
//             btn.map(x => $(".crm-main-table").removeClass('select-toggle'));
//             $('.crm-main-table').addClass('select-toggle');
//         });
//     }
// });


// const btn = document.querySelectorAll('.crm-main-table');
// btn.addEventListener('keydown', function(event) {
//     if (event.keyCode == 17) {
//         btn.classList.toggle('select-toggle');
//     }
// });

// x.addEventListener('keydown', (event) => {
//     if (event.keyCode == 17 && x) {
//         x.classList.toggle('select-toggle');
//     }
// });


// document.addEventListener('keydown', function() {
//     if (keyCode == 17) {
//         document.querySelectorAll('.crm-main-table').addEventListener('click', () => {
//             document.querySelectorAll('.crm-main-table').classList.toggle('select-toggle');
//         });
//     }
// });

// document.addEventListener("mousedown", function(event) {
//     if (event.ctrlKey && event.button == 1) {
//                 document.querySelectorAll('.crm-main-table').addEventListener('click', () => {
//             document.querySelectorAll('.crm-main-table').classList.toggle('select-toggle');
//     }
// });