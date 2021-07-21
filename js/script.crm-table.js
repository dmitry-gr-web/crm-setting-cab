//header-link
[...document.querySelectorAll(".crm-header-link")].map((x) => {
    x.addEventListener("click", () => {
        [...document.querySelectorAll(".crm-header-link")].map((y) =>
            y.classList.remove("btn-toggle")
        );
        x.classList.toggle("btn-toggle");
    });
});
//header-link
//tooltip select
$(document).ready(function() {
    $(".crm-main-table").on("click", (e) => {
        $(".crm-main-table").unbind("mouseleave mousemove");
        $(".select-toggle")
            .mousemove(function(pos) {
                if ($(".crm-main-table").hasClass("select-toggle")) {
                    $("#hoverSelect").show();
                    $("#hoverSelect")
                        .css("left", pos.pageX + 20 + "px")
                        .css("top", pos.pageY + -40 + "px");
                }
            })
            .mouseleave(function(e) {
                $("#hoverSelect").hide();
            });
    });
});
// $(".container-info-settings").on("mousedown", (e) => {
//     $(".simplebar-scrollbar").click();
//     $(".simplebar-scrollbar ").css('transform','translate3d(200px,0px,0px)');
 
// });
//tooltip 
// $(".crm-main-table .country-block").each(function(e, item) {
//     let ukraine = 'Украина';
//     let russia = 'Россия';
//     let kazahstan = 'Казахстан';
//     let alb = 'Албания';
//     let world = 'Мир';
//     if ($(item.children[0].children).hasClass('ua')) {
//         $(this).addClass('tooltip');
//         $(this).attr('data', ukraine);
//     }
//     if ($(item.children[0].children).hasClass('ru')) {
//         $(this).addClass('tooltip');
//         $(this).attr('data', russia);
//     }
//     if ($(item.children[0].children).hasClass('kz')) {
//         $(this).addClass('tooltip');
//         $(this).attr('data', kazahstan);
//     }
//     if ($(item.children[0].children).hasClass('al')) {
//         $(this).addClass('tooltip');
//         $(this).attr('data', alb);
//     }
//     if ($(item.children[0].children).hasClass('world')) {
//         $(this).addClass('tooltip');
//         $(this).attr('data', world);
//     }
// });
$(".crm-main-table .tel-colum .tel").each(function(e, item) {
    let vodofone = 'Водафон';
    let kyivstar = 'Киевстар';
    let lifecell = 'Лайфселл';
    let incorrectNumber = 'Неверный номер';
    let unknownNumber = 'Неизвестный номер';
    if ($(item.children[0]).hasClass('vod')) {
        $(this).append('<div class="tooltip">' + vodofone + '</div>');
    }
    if ($(item.children[0]).hasClass('ky')) {
        $(this).append('<div class="tooltip">' + kyivstar + '</div>');
    }
    if ($(item.children[0]).hasClass('life')) {
        $(this).append('<div class="tooltip">' + lifecell + '</div>');
    }
    if ($(item.children[0]).hasClass('unk')) {
        $(this).append('<div class="tooltip">' + incorrectNumber + '</div>');
    }
    if ($(item.children[0]).hasClass('incorr')) {
        $(this).append('<div class="tooltip">' + unknownNumber + '</div>');
    }
});
$(".crm-main-table .country-block").each(function(e, item) {
    let ukraine = 'Украина';
    let russia = 'Россия';
    let kazahstan = 'Казахстан';
    let alb = 'Албания';
    let world = 'Мир';
    if ($(item.children[0].children).hasClass('ua')) {
        $(this).append('<div class="tooltip">' + ukraine + '</div>');
        // $('.tooltip').attr('data', ukraine);
    }
    if ($(item.children[0].children).hasClass('ru')) {
        $(this).append('<div class="tooltip">' + russia + '</div>');
        // $('.tooltip').attr('data', ukraine);
    }
    if ($(item.children[0].children).hasClass('al')) {
        $(this).append('<div class="tooltip">' + alb + '</div>');
        // $('.tooltip').attr('data', ukraine);
    }
    if ($(item.children[0].children).hasClass('world')) {
        $(this).append('<div class="tooltip">' + world + '</div>');
        // $('.tooltip').attr('data', ukraine);
    }
    if ($(item.children[0].children).hasClass('kz')) {
        $(this).append('<div class="tooltip">' + kazahstan + '</div>');
        // $('.tooltip').attr('data', ukraine);
    }
});
//tooltip
//...

$(".crm-main-table .max-lenght-comment").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        // $(this).append('<div class="tooltip"></div>');
        // $('.tooltip').css('visibility', 'visible');
        $(this).text(text);
        $(this).append('<div class="tooltip">' + boxMemory + '</div>');
    }
});
// $(".crm-main-table .max-lenght-comment").text(function(i, text) {
//     let boxMemory = text;
//     if (text.length >= 30) {
//         text = text.substring(0, 28) + "...";
//         // $(this).append('<div class="tooltip"></div>');
//         // $('.tooltip').css('visibility', 'visible');
//         $(this).addClass('tooltip');
//         $(this).attr('data', boxMemory);
//     } else {
//         $(this).removeClass('tooltip');
//     }
//     $(this).text(text);
// });


$(".crm-main-table .max-lenght").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";

    }
    $(this).text(text);
});
$(".crm-main-table .max-lenght-product").text(function(i, text) {
    if (text.length >= 40) {
        text = text.substring(0, 38) + "...";
    }
    // if ($(".product-colum").hasClass('svg-wrap')){

    // }
    $(this).text(text);
});
$(".crm-main-table .addres-block").text(function(i, text) {
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
    }
    $(this).text(text);
});
$(".crm-main-table .max-lenght-status").text(function(i, text) {
    if (text.length >= 12) {
        text = text.substring(0, 11) + "...";
    }
    $(this).text(text);
});





//scroll slider header
$("#next").click(function() {
    $("#crmHeader").animate({
        scrollLeft: "+=250px",
    }, { duration: 300, queue: false });
});
$("#prev").click(function() {
    $("#crmHeader").animate({
        scrollLeft: "0px",
    }, { duration: 300, queue: false });
});


//menu country btn
$(".colum-country .country-btn").click(function() {
    $(".colum-country .block1").toggleClass("toggle");
    // $(".crm-main-table").addClass("z-index");
});
$(".colum-country .block1 .list").click(function() {
    // let text = $(this).html();
    // $(".country-btn").html(text);
    // $(".colum-country .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");


    $(".colum-country .list .all").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-country .block1 .list.select-btn').length == 1) {
        let appendCountry = $('.list.select-btn').clone();
        $(".country-btn").html(appendCountry);
        $($('.country-btn .list.select-btn')).removeClass('select-btn');
    }
    if ($('.colum-country .block1 .list.select-btn').length >= 2) {
        $(".country-btn").html('Фильтр');
    }
    if ($('.colum-country .block1 .list.select-btn').length == 0) {
        $(".country-btn").html('Все');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
    }
});
$(".colum-country .block1 .list .all").click(function() {
    let textDelivery = $(this).html();
    $(".country-btn").html(textDelivery);
    $(this).removeClass('select-btn');
    // $(".employe-btn").html(text);
    $('.colum-country .block1 .list').removeClass('select-btn');
    $(".colum-country .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-country")) {
        $(".colum-country .block1").removeClass("toggle");
    }
    // if (!$(".block1").hasClass("toggle")) {
    //     $(".crm-main-table").removeClass("z-index");
    // }
});

//menu country btn
//menu delivery btn
$(".colum-delivery .delivery-btn").click(function() {
    $(".colum-delivery .block1").toggleClass("toggle");
    // $(".crm-main-table").addClass("z-index");
});
$(".colum-delivery .block1 .list").click(function() {
    // let text = $(this).html();
    // $(".delivery-btn").html(text);
    // $(".colum-delivery .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");

    $(".colum-delivery .list .all").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-delivery .block1 .list.select-btn').length == 1) {
        let appendDelivery = $('.list.select-btn').clone();
        $(".delivery-btn").html(appendDelivery);
        $($('.delivery-btn .list.select-btn')).removeClass('select-btn');
    }
    if ($('.colum-delivery .block1 .list.select-btn').length >= 2) {
        $(".delivery-btn").html('Фильтр');
    }
    if ($('.colum-delivery .block1 .list.select-btn').length == 0) {
        $(".delivery-btn").html('Все');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
    }
});
$(".colum-delivery .block1 .list .all").click(function() {
    let textDelivery = $(this).html();
    $(".delivery-btn").html(textDelivery);
    $(this).removeClass('select-btn');
    // $(".employe-btn").html(text);
    $('.colum-delivery .block1 .list').removeClass('select-btn');
    $(".colum-delivery .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);

    if (!$clicked.parents().hasClass("colum-delivery")) {
        $(".colum-delivery .block1").removeClass("toggle");
    }
    // if (!$(".block1").hasClass("toggle")) {
    //     $(".crm-main-table").removeClass("z-index");
    // }
});
//menu delivery btn
//pay btn
$(".colum-pay .pay-btn").click(function() {
    $(".colum-pay .block1").toggleClass("toggle");
    // $(".crm-main-table").addClass("z-index");
});
$(".colum-pay .block1 .list").click(function() {
    // var text = $(this).html();
    // $(".pay-btn").html(text);
    // $(".colum-pay .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");

    $(".colum-pay .list .all").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-pay .block1 .list.select-btn').length == 1) {
        let appendPay = $('.list.select-btn').clone();
        $(".pay-btn").html(appendPay);
        $($('.pay-btn .list.select-btn')).removeClass('select-btn');
    }
    if ($('.colum-pay .block1 .list.select-btn').length >= 2) {
        $(".pay-btn").html('Фильтр');
    }
    if ($('.colum-pay .block1 .list.select-btn').length == 0) {
        $(".pay-btn").html('Все');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
    }
});
$(".colum-pay .block1 .list .all").click(function() {
    let textPay = $(this).html();
    $(".pay-btn").html(textPay);

    $(this).removeClass('select-btn');
    // $(".employe-btn").html(text);
    $('.colum-pay .block1 .list').removeClass('select-btn');
    $(".colum-pay .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-pay")) {
        $(".colum-pay .block1").removeClass("toggle");
    }
    // if (!$(".block1").hasClass("toggle")) {
    //     $(".crm-main-table").removeClass("z-index");
    // }
});


// $(".colum-pay .pay-btn").click(function() {
//     $(".colum-pay .block1").toggleClass("toggle");
//     $(".crm-main-table").addClass("z-index");
// });
// $(".colum-pay .block1 .list").click(function() {
//     var text = $(this).html();
//     $(".pay-btn").html(text);
//     $(".colum-pay .block1").removeClass("toggle");
//     $(".crm-main-table").removeClass("z-index");
// });
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("colum-pay")) {
//         $(".colum-pay .block1").removeClass("toggle");
//     }
//     if (!$(".block1").hasClass("toggle")) {
//         $(".crm-main-table").removeClass("z-index");
//     }
// });
//pay btn
//depart btn
$(".colum-depart .depart-btn").click(function() {
    $(".colum-depart .block1").toggleClass("toggle");
    // $(".crm-main-table").addClass("z-index");
});
$(".colum-depart .block1 .list").click(function() {
    // let text = $(this).html();
    // $(".depart-btn").html(text);
    // $(".colum-depart .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");


    $(".colum-depart .list .all").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-depart .block1 .list.select-btn').length == 1) {
        let appendDepart = $('.list.select-btn').text();
        $(".depart-btn").html(appendDepart);
    }
    if ($('.colum-depart .block1 .list.select-btn').length >= 2) {
        $(".depart-btn").html('Фильтр');
    }
    if ($('.colum-depart .block1 .list.select-btn').length == 0) {
        $(".depart-btn").html('Все');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
    }
});
$(".colum-depart .block1 .list .all").click(function() {
    let textDepart = $(this).html();
    $(".depart-btn").html(textDepart);

    $(this).removeClass('select-btn');
    // $(".employe-btn").html(text);
    $('.colum-depart .block1 .list').removeClass('select-btn');
    $(".colum-depart .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-depart")) {
        $(".colum-depart .block1").removeClass("toggle");
    }
    // if (!$(".block1").hasClass("toggle")) {
    //     // $(".crm-main-table").removeClass("z-index");
    // }
});

//depart btn
//employe btn
$(".colum-employe .employe-btn").click(function() {
    $(".colum-employe .block1").toggleClass("toggle");
    // $(".crm-main-table").addClass("z-index");
});
$(".colum-employe .block1 .list").click(function() {
    // $(".colum-employe .block1").removeClass("toggle");
    $(".colum-employe .list .all").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-employe .block1 .list.select-btn').length == 1) {
        let appendEmploye = $('.list.select-btn').text();
        $(".employe-btn").html(appendEmploye);
    }
    if ($('.colum-employe .block1 .list.select-btn').length >= 2) {
        $(".employe-btn").html('Фильтр');
    }
    if ($('.colum-employe .block1 .list.select-btn').length == 0) {
        $(".employe-btn").html('Все');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
    }
});
$(".colum-employe .block1 .list .all").click(function() {
    let textEmploye = $(this).html();
    $(".employe-btn").html(textEmploye);

    $(this).removeClass('select-btn');
    // $(".employe-btn").html(text);
    $('.colum-employe .block1 .list').removeClass('select-btn');
    $(".colum-employe .block1").removeClass("toggle");
    // $(".crm-main-table").removeClass("z-index");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-employe")) {
        $(".colum-employe .block1").removeClass("toggle");
    }
    // if (!$(".block1").hasClass("toggle")) {
    //     // $(".crm-main-table").removeClass("z-index");
    // }
});


//task block
const btnActual = document.querySelector(".actual");
const btnDone = document.querySelector(".done");
const blockActual = document.querySelector(".task-toggle-actual");
const blockDone = document.querySelector(".task-toggle-done");

btnDone.addEventListener("click", () => {
    blockActual.style.display = "none";
    blockDone.style.display = "block";
    btnDone.classList.add("btn-style");
    btnActual.classList.remove("btn-style");
});
btnActual.addEventListener("click", () => {
    blockActual.style.display = "block";
    blockDone.style.display = "none";
    btnDone.classList.remove("btn-style");
    btnActual.classList.add("btn-style");
});

const btnOpenTask = document.getElementById("inbox");
const taskBlock = document.querySelector(".task-block");

btnOpenTask.addEventListener("click", () => {
    taskBlock.classList.toggle("task-block-toggle");
    btnOpenTask.classList.toggle("selected-nav");
});

document.addEventListener("mousedown", function(e) {
    // const ui = document.getElementById('ui-datepicker-div');
    if (e.target.closest(".task-block") === null) {
        taskBlock.classList.remove("task-block-toggle");
        btnOpenTask.classList.remove("selected-nav");
    }
});

const btnTaskPlus = document.querySelector(".btnplus7");
const wrapTaskPlus = document.querySelector(".task-plus");
const btnTaskCancel = document.querySelector(".btn-cancel");
const btnTaskAccept = document.querySelector(".btn-accept");
const btnTaskLink = document.querySelector(".task-link");
const blockTaskList = document.querySelector(".task-list");

btnTaskPlus.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "hidden";
    btnTaskLink.style.display = "none";
    blockTaskList.style.display = "none";
});
btnTaskCancel.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = "block";
    blockTaskList.style.display = "block";
});
btnTaskAccept.addEventListener("click", () => {
    wrapTaskPlus.classList.toggle("task-block-toggle");
    btnTaskPlus.style.visibility = "visible";
    btnTaskLink.style.display = "block";
    blockTaskList.style.display = "block";
});

$(".recall-clients .dropdown2 .btn .btn-span").click(function() {
    let arrbtn = $(".dropdown2 .ul-block");
    arrbtn.map((x) => $(".dropdown2 .ul-block").removeClass("toggle"));
    $(".recall-clients .dropdown2 .ul-block").toggle();
});
$(".recall-clients .dropdown2 .ul-block .list").click(function() {
    let text = $(this).html();
    $(".recall-clients .dropdown2 .btn .btn-span").html(text);
    $(".recall-clients .dropdown2 .ul-block").hide();
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown2"))
        $(".recall-clients .dropdown2 .ul-block").hide();
});
//task block

//notification
const btnNot = document.querySelector(".btn-not");
const btnTech = document.querySelector(".btn-tech");

const blockNote = document.querySelector(".block-not");
const techNote = document.querySelector(".tech-note");

btnNot.addEventListener("click", () => {
    btnNot.classList.add("btn-style");
    blockNote.style.display = "block";
    techNote.style.display = "none";
    btnTech.classList.remove("btn-style");
});
btnTech.addEventListener("click", () => {
    blockNote.style.display = "none";
    techNote.style.display = "block";
    btnTech.classList.add("btn-style");
    btnNot.classList.remove("btn-style");
});

const notificationBtn = document.querySelector(".notification-btn");
const notificationBlock = document.querySelector(".notifications");

notificationBtn.addEventListener("click", () => {
    notificationBlock.classList.toggle("notification-toggle");
});
document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".header-crm") === null) {
        notificationBlock.classList.remove("notification-toggle");
    }
});
//notification

// nav sidebar

const btnCrmNav = document.getElementById("sidebar");
const navWrap = document.querySelector(".nav-crm");
const navCrmPlus = document.querySelectorAll(".nav-desc");

btnCrmNav.addEventListener("click", () => {
    navWrap.classList.toggle("nav-crm-plus");
    // navWrap.classList.toggle('nav-crm-overflow');
    navCrmPlus.forEach((x) => x.classList.toggle("nav-desc-toggle"));
    btnCrmNav.classList.toggle("selected-nav");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".nav-crm") === null) {
        navWrap.classList.remove("nav-crm-plus");
        // navWrap.classList.remove('nav-crm-overflow');
        navCrmPlus.forEach((x) => x.classList.remove("nav-desc-toggle"));
        btnCrmNav.classList.remove("selected-nav");
    }
});

//nav sidebar

//zakaz btn
$(".zakaz-btn").click(function() {
    $(".zakaz-block").toggle(200);
    // $('.nav-crm').prop("data-simplebar", "true");
});
//zakaz btn

// header hide
$(".crm-input").hover(function() {
    $(".wrap-hide").addClass('wrap-open');
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("crm-input") && !$clicked.parents().hasClass("table-header") && !$clicked.parents().hasClass("ui-datepicker-buttonpane") && !$clicked.parents().hasClass("ui-datepicker-header") && !$clicked.parents().hasClass("ui-datepicker-calendar") && !$clicked.hasClass("ui-datepicker")) {
        $(".wrap-hide").removeClass('wrap-open');
    }
});
//header hide

// (function() {
//     var currentScale = 1;

//     var cssPrefixesMap = [
//         'scale',
//         '-webkit-transform',
//         '-moz-transform',
//         '-ms-transform',
//         '-o-transform',
//         'transform'
//     ];

//     function setScale(scale) {
//         var scaleCss = {};

//         cssPrefixesMap.forEach(function(prefix) {
//             scaleCss[prefix] = 'scale(' + scale + ')';
//         });

//         $('.crm-table').css(scaleCss);
//     }

//     $(".decrease").click(function() {
//         setScale(currentScale = currentScale - 0.1);
//     });

//     $(".increase").click(function() {
//         setScale(currentScale = currentScale + 0.1);
//     });
// })();


// var w=document.documentElement.clientWidth;
// var zoom;   
// zoom = w*100/1920;      
// zoom = zoom+'%';
// document.body.style.zoom = zoom;