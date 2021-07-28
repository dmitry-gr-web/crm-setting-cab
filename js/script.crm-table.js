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
$(".user-lock").on("mouseenter", (e) => {
    $(".user-lock").unbind("click");
    $(".user-lock").mousemove(function(posXY) {
        $("#hoverSelected-lock").show();
        $("#hoverSelected-lock")
            .css("left", posXY.pageX + -100 + "%")
            .css("top", posXY.pageY + 20 + "px");

    })
    $(".user-lock").mouseleave(function(e) {
        $("#hoverSelected-lock").hide();
    });
});
// $(document).ready(function() {
//     $(".crm-main-table").on("click", (e) => {
//         $(".crm-main-table").unbind("mouseleave mousemove");
//         $(".select-toggle")
//             .mousemove(function(pos) {
//                 if ($(".crm-main-table").hasClass("selected-lock")) {
//                     $("#hoverSelectedLock").show();
//                     $("#hoverSelectedLock")
//                         .css("left", pos.pageX + 20 + "px")
//                         .css("top", pos.pageY + -40 + "px");
//                 }
//             })
//             .mouseleave(function(e) {
//                 $("#hoverSelectedLock").hide();
//             });
//     });
// });
// $(".block1").css('overflow', '');
// $(".block1").css('clear', 'both');
$(".list-item img").hover(function(xy) {
    let ukraine = 'Украина';
    let russia = 'Россия';
    let kazahstan = 'Казахстан';
    let alb = 'Албания';
    let world = 'Мир';
    // console.log();
    // $('.list').each(function(_, item) {
    //     console.log(item);
    if (xy.target.offsetParent.classList.contains('ua')) {
        $('#tooltipBtn').text(ukraine);
        // $('.tooltip').attr('data', ukraine);
    }
    if (xy.target.offsetParent.classList.contains('ru')) {
        $('#tooltipBtn').text(russia);
        // $('.tooltip').attr('data', ukraine);
    }
    if (xy.target.offsetParent.classList.contains('kz')) {
        $('#tooltipBtn').text(kazahstan);
        // $('.tooltip').attr('data', ukraine);
    }
    if (xy.target.offsetParent.classList.contains('al')) {
        $('#tooltipBtn').text(alb);
        // $('.tooltip').attr('data', ukraine);
    }
    $("#tooltipBtn").css({ 'visibility': 'visible', 'opacity': '1' });
    // $(".lazyBlock").css('opacity', '1');
    $("#tooltipBtn")
        .css("left", xy.pageX + 20 + "px")
        .css("top", xy.pageY + 10 + "px");
    // });


}).mouseleave(function(e) {
    // $("#tooltipBtn").hide();

    $("#tooltipBtn").css({ 'visibility': 'hidden', 'opacity': '0' });
    // $(".lazyBlock").css('opacity', '0');
});
// let = gus = document.querySelector('.crm-table').offsetWidth
// console.log(gus);
// $(".list").mouseleave(function() {
//     $(".block1").css('overflow', 'auto');
//     // $(".block1").css('clear', 'both');
// });

// $(".container-info-settings").on( function(e) {
//     if (e.which == 1) {
//     (e.which==2).mousedown();
//     }
//  });


// const slider = document.querySelector('.crm-table');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;

//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;

// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;

// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });
// let container = $('.container-info-settings');

// container.on('mousedown') = container.on('touchstart')
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
$(".tel").each(function(e, item) {
    let vodofone = 'Vodafone';
    let kyivstar = 'Киевстар';
    let lifecell = 'Lifecell';
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
        $(this).append('<div class="tooltip">' + unknownNumber + '</div>');
    }
    if ($(item.children[0]).hasClass('incorr')) {
        $(this).append('<div class="tooltip">' + incorrectNumber + '</div>');
    }
});
$(".colum-pay").each(function(e, item) {
    let card = 'Предоплата';
    let card2 = 'Наложенный платёж';
    let acceptPay = 'Оплачен';
    let decline = 'Отказ';
    let trade = 'Обмен';

    if ($(item.children[0].children).hasClass('card')) {
        $(this).append('<div class="tooltip">' + card + '</div>');
    }
    if ($(item.children[0].children).hasClass('svg-trade')) {
        $(this).append('<div class="tooltip">' + trade + '</div>');
    }
    if ($(item.children[0].children).hasClass('svg-decline')) {
        $(this).append('<div class="tooltip">' + decline + '</div>');
    }
    if ($(item.children[0].children).hasClass('coin')) {
        $(this).append('<div class="tooltip">' + acceptPay + '</div>');
    }
    if ($(item.children[0].children).hasClass('convert-pay')) {
        $(this).append('<div class="tooltip">' + card2 + '</div>');
    }
});
$(".svg-delivery").each(function(e, item) {
    let ukrPochta = 'Укрпочта';
    let nv = 'Новая почта';
    let samovivoz = 'Самовывоз';
    let justin = 'Justin';
    if ($(item.children[0].children).hasClass('ukrp')) {
        $(this).append('<div class="tooltip">' + ukrPochta + '</div>');
    }
    if ($(item.children[0].children).hasClass('nv')) {
        $(this).append('<div class="tooltip">' + nv + '</div>');
    }
    if ($(item.children[0].children).hasClass('justin')) {
        $(this).append('<div class="tooltip">' + justin + '</div>');
    }
    if ($(item.children[0].children).hasClass('samovivoz')) {
        $(this).append('<div class="tooltip">' + samovivoz + '</div>');
    }

});
$(".crm-main-table .svg-wrap").each(function(e, item) {
    let message = 'Отправлено 4 сообщения';
    if ($(item.children[0]).hasClass('svg-convert')) {
        $(this).append('<div class="tooltip">' + message + '</div>');
    }
});
$(".crm-main-table .date-time").each(function(e, item) {
    let message = 'Принят за 3 минуты 25 секунд';
    let message2 = 'Принят за 1 час 3 минуты 25 секунд';
    let open = 'Открыт через 3 дня 3 минуты 23 секунды';
    let open2 = 'Открыт через 10 дней 1 час 3 минуты 23 секунды';
    let peredan = 'Передан через 3 дня 3 минуты 23 секунды';

    if ($(item).hasClass('acceptfor')) {
        $(this).append('<div class="tooltip">' + message + '</div>');
    }
    if ($(item).hasClass('acceptforhours')) {
        $(this).append('<div class="tooltip">' + message2 + '</div>');
    }
    if ($(item).hasClass('open')) {
        $(this).append('<div class="tooltip">' + open + '</div>');
    }
    if ($(item).hasClass('openforhours')) {
        $(this).append('<div class="tooltip">' + open2 + '</div>');
    }
    if ($(item).hasClass('peredan')) {
        $(this).append('<div class="tooltip">' + peredan + '</div>');
    }
});
$(".crm-main-table .svg-wrap").each(function(e, item) {
    let message = 'Остался 1 день до платного хранения';
    if ($(item.children[0]).hasClass('svg-box')) {
        $(this).append('<div class="tooltip">' + message + '</div>');
    }
});
$(".table-header th").each(function(e, item) {
    let id = 'Идентификатор/номер заказа<br>Используется для поиска и передачи заказа между пользователями CRM';
    let status = 'Текущий статус заказа<br><br>Используется для контроля, анализа и отслеживания заказа в CRM';
    let pokupatel = 'ФИО покупателя<br><span class="text-tooltip">Используется при автозаполнении ТТН почтовых служб</span>';
    let country = 'Страна за которой закреплён заказ<br>Используется для разделения заказов из разных стран';
    let tel = 'Телефон покупателя<br>Используется при автозаполнении ТТН почтовых служб';
    let commentary = '...';
    let sum = 'Итоговая сумма заказа';
    let product = '...';
    let pay = 'Используемый вид оплаты';
    let delivery = 'Используемый вид доставки';
    let addres = '...';
    let ttn = 'Товарно-транспортная накладная';
    let ttnStatus = 'Информация за последний час о статусе посылки.<br>Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM';
    let user = 'Пользователь за которым закреплён заказ';
    let depart = 'Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствуещему отделу';
    let add = 'Дата и время добавления заказа в CRM';
    let open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним.<br>Показывает сколько времени покупатель ожидал звонка/ответа';
    let adopted = 'Время между открытием заказа и изменением его статуса на «Принят».<br>Используется для оценки времени потраченого на подтверждение заказа';
    let zakr = 'Дата и время изменения статуса заказа на «Принят»';
    let pered = 'Время между получением статуса принят и получением посылки почтой.<br>Показывает сколько времени покупатель ожидал отправку заказа';
    let send = 'Дата и время регистрации посылки в почтовой службе';
    let update = 'Дата и время последнего изменения заказа';
    let finish = 'Дата и время завершения заказа, дальнейшее редактирование запрещено кроме группы администратор';
    let site = 'Место откуда поступил заказ';
    let ip = 'Ip адрес откуда поступил заказ.<br>Используется для отслеживания и блокировки в случаях спама';
    let utm = 'UTM-метка.<br>Используется для отслеживания рекламного источника, который привел клиента на Ваш сайт';
    let field = 'Дополнительное поле заказа.<br>Используется для передачи,или хранения информации о заказе.';
    if ($(item).hasClass('header-id')) {
        $(this).append('<div class="tooltip">' + id + '</div>');
    }
    if ($(item).hasClass('header-status')) {
        $(this).append('<div class="tooltip">' + status + '</div>');
    }
    if ($(item).hasClass('header-pokupatel')) {
        $(this).append('<div class="tooltip">' + pokupatel + '</div>');
    }
    if ($(item).hasClass('header-country')) {
        $(this).append('<div class="tooltip">' + country + '</div>');
    }
    if ($(item).hasClass('header-tel')) {
        $(this).append('<div class="tooltip">' + tel + '</div>');
    }
    if ($(item).hasClass('header-comm')) {
        $(this).append('<div class="tooltip">' + commentary + '</div>');
    }
    if ($(item).hasClass('header-sum')) {
        $(this).append('<div class="tooltip">' + sum + '</div>');
    }
    if ($(item).hasClass('header-product')) {
        $(this).append('<div class="tooltip">' + product + '</div>');
    }
    if ($(item).hasClass('header-pay')) {
        $(this).append('<div class="tooltip">' + pay + '</div>');
    }
    if ($(item).hasClass('header-delivery')) {
        $(this).append('<div class="tooltip">' + delivery + '</div>');
    }
    if ($(item).hasClass('header-addres')) {
        $(this).append('<div class="tooltip">' + addres + '</div>');
    }
    if ($(item).hasClass('header-ttn')) {
        $(this).append('<div class="tooltip">' + ttn + '</div>');
    }
    if ($(item).hasClass('header-ttn-status')) {
        $(this).append('<div class="tooltip">' + ttnStatus + '</div>');
    }
    if ($(item).hasClass('header-user')) {
        $(this).append('<div class="tooltip">' + user + '</div>');
    }
    if ($(item).hasClass('header-depart')) {
        $(this).append('<div class="tooltip">' + depart + '</div>');
    }
    if ($(item).hasClass('header-add')) {
        $(this).append('<div class="tooltip">' + add + '</div>');
    }
    if ($(item).hasClass('header-open')) {
        $(this).append('<div class="tooltip">' + open + '</div>');
    }
    if ($(item).hasClass('header-adopted')) {
        $(this).append('<div class="tooltip">' + adopted + '</div>');
    }
    if ($(item).hasClass('header-zakr')) {
        $(this).append('<div class="tooltip">' + zakr + '</div>');
    }
    if ($(item).hasClass('header-pered')) {
        $(this).append('<div class="tooltip">' + pered + '</div>');
    }
    if ($(item).hasClass('header-send')) {
        $(this).append('<div class="tooltip">' + send + '</div>');
    }
    if ($(item).hasClass('header-update')) {
        $(this).append('<div class="tooltip">' + update + '</div>');
    }
    if ($(item).hasClass('header-finish')) {
        $(this).append('<div class="tooltip">' + finish + '</div>');
    }
    if ($(item).hasClass('header-site')) {
        $(this).append('<div class="tooltip">' + site + '</div>');
    }
    if ($(item).hasClass('header-ip')) {
        $(this).append('<div class="tooltip">' + ip + '</div>');
    }
    if ($(item).hasClass('header-utm')) {
        $(this).append('<div class="tooltip">' + utm + '</div>');
    }
    if ($(item).hasClass('header-field')) {
        $(this).append('<div class="tooltip">' + field + '</div>');
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
// $(".list").each(function(e, item) {
//     let ukraine = 'Украина';
//     let russia = 'Россия';
//     let kazahstan = 'Казахстан';
//     let alb = 'Албания';
//     let world = 'Мир';

//     if ($(item).hasClass('ua')) {
//         $(this).append('<div class="tooltip">' + ukraine + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item).hasClass('ru')) {
//         $(this).append('<div class="tooltip">' + russia + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item).hasClass('al')) {
//         $(this).append('<div class="tooltip">' + alb + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item).hasClass('world')) {
//         $(this).append('<div class="tooltip">' + world + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item).hasClass('kz')) {
//         $(this).append('<div class="tooltip">' + kazahstan + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
// });
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
        $(this).text(text);
        $(this).append('<div class="tooltip">' + boxMemory + '</div>');
    }
});
$(".crm-main-table .max-lenght-product").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 40) {
        text = text.substring(0, 38) + "...";
        $(this).text(text);
        $(this).append('<div class="tooltip">' + boxMemory + '</div>');
    }
});
$(".crm-main-table .addres-block").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        $(this).text(text);
        $(this).append('<div class="tooltip">' + boxMemory + '</div>');
    }
});
$(".status-table .color-form2").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 12) {
        text = text.substring(0, 11) + "...";
        $(this).text(text).parent().append('<div class="tooltip">' + boxMemory + '</div>');;
        // $(this.parents[0]).append('<div class="tooltip">' + boxMemory + '</div>');
    }
});

// $(".simplebar-content-wrapper").addClass('huy');


// $(".scroll-wrap2").children().addClass("huy");
//scroll slider header
$("#next").click(function() {
    $(".scroll-wrap2 .simplebar-content-wrapper").animate({
        scrollLeft: "+=250px",
    }, { duration: 300, queue: false });
});
$("#prev").click(function() {
    $(".scroll-wrap2 .simplebar-content-wrapper").animate({
        scrollLeft: "0px",
    }, { duration: 300, queue: false });
});

//COUNT MESSAGE
// $(".count-message").focus(function() {
//     $(".count-message").val('');
//     $('.message-list').removeClass('select-btn');
// });
$(".count-message").change(function() {
    // $(".count-message").val('');
    $('.message-list').removeClass('select-btn');
});
$(".count-message, .message-btn").click(function() {
    $(".message-menu").toggleClass('count-toggle');
});
$(".message-list").click(function() {
    $(this).toggleClass('select-btn');
    if ($('.message-list.select-btn').length == 1) {
        let appendCount = $('.message-list.select-btn').text();
        $(".count-message").val(appendCount);
    }
    if ($('.message-list.select-btn').length >= 2) {
        $(".count-message").val('~');
    }
    if ($('.message-list.select-btn').length == 0) {
        $(".count-message").val('');
    }
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("message-box")) {
        $(".message-menu").removeClass('count-toggle');
    }
});
//COUNT MESSAGE
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
    if (e.target.closest(".task-block") === null && !e.target.closest("ui-datepicker-buttonpane") === null && !e.target.closest("ui-datepicker-header") === null && !e.target.closest("ui-datepicker-calendar") === null && !e.target.closest("ui-datepicker") === null) {
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
let simpleBar = null;

btnCrmNav.addEventListener("click", () => {
    navWrap.classList.toggle("nav-crm-plus");
    navCrmPlus.forEach((x) => x.classList.toggle("nav-desc-toggle"));
    btnCrmNav.classList.toggle("selected-nav");
    // if (navWrap.closest('.nav-crm-plus')) {
    //     simpleBar = new SimpleBar(document.querySelector('.nav-crm-plus'));
    // }
    //  else {
    //     // simpleBar.unMount();
    //     document.querySelector('.simplebar-content-wrapper').style.overflow = '';
    // }
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".nav-crm") === null) {
        navWrap.classList.remove("nav-crm-plus");
        // navWrap.classList.remove('nav-crm-overflow');
        navCrmPlus.forEach((x) => x.classList.remove("nav-desc-toggle"));
        btnCrmNav.classList.remove("selected-nav");
    }
    // if (!navWrap.closest('.nav-crm-plus')) {
    //     simpleBar.unMount();
    //     document.querySelector('.simplebar-content-wrapper').style.overflow = '';
    // }
});

//nav sidebar

//zakaz btn
// $(".zakaz-btn").click(function() {
//     let arrbtn = $(".drop-zakaz .zakaz-block");
//     arrbtn.map((x) => $(".drop-zakaz .zakaz-block").removeClass('zakaz-visible'));
//     $(".zakaz-block").toggleClass('zakaz-visible');
//     // $(".zakaz-block").each((x) => x.toggleClass('zakaz-visible'));
//     // $('.nav-crm').prop("data-simplebar", "true");
// });
$(".zakaz-btn").on('click', function() {

    $(".zakaz-block").each(function(e) {
        $(this).toggleClass('block-visible');
    });
    // $(".zakaz-block").each((x) => x.toggleClass('zakaz-visible'));
    // $('.nav-crm').prop("data-simplebar", "true");
});
// $(document).ready(function() {
//     $(".zakaz-block").each(function(index, element) { // производим перебор элементов <li> коллекции jQuery
//         if (element.hasClass('zakaz-visible').length = 1) { // если остаток от деления индекса элемента на 2 не равен нулю
//             $(this).toggleClass('zakaz-visible'); // устанавливаем цвет текста текущему элементу
//         } else {
//             $(this).removeClass('zakaz-visible');
//         }
//     });
// });
// document.querySelectorAll('.zakaz-btn').addEventListener('click', (e) => {
//     document.querySelectorAll('.zakaz-block').forEach((x) => x.classList.toggle("zakaz-visible"));


// });

// $('.dropDown').each(function() {
//   $(this).click(function() {
//     $('.drop').removeClass('drop');
//     $(this).addClass('drop');
//   })
// })
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