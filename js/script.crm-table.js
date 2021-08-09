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
        if ($(".crm-main-table").hasClass("select-toggle")) {
            $('.btn-settings').addClass('active-btn-header');
            $('.btn-accept').addClass('active-btn-header');
        } else {
            $('.btn-settings').removeClass('active-btn-header');
            $('.btn-accept').removeClass('active-btn-header');
        }
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
    $(".selected-lock").on("mouseenter", (e) => {
        $(".selected-lock").unbind("click");
        $(".selected-lock").mousemove(function(posXY) {
            $("#hoverSelected-lock").css({ 'visibility': 'visible', 'opacity': '1' });;
            $("#hoverSelected-lock")
                .css("left", posXY.pageX + 20 + "px")
                .css("top", posXY.pageY + -30 + "px");

        })
        $(".selected-lock").mouseleave(function(e) {
            $("#hoverSelected-lock").css({ 'visibility': 'hidden', 'opacity': '0' });;
        });
    });
    $(".list").hover(function(xy) {
        let ukraine = 'Украина';
        let russia = 'Россия';
        let kazahstan = 'Казахстан';
        let alb = 'Албания';
        let world = 'Мир';
        let predoplata = 'Предоплата';
        let nalozhplatezh = 'Наложенный платёж';
        let acceptPay = 'Оплачен';
        let decline = 'Отказ';
        let trade = 'Обмен';
        // let newOrder = 'Новый';
        // let accept = 'Принят';
        // let declineOrder = 'Отказ';
        // let uspeh = $('.status-text').text();

        // $(this).stop(true, true).animate({ width: "200px" });
        // if ($(this).hasClass('newOrder')) {
        //     $('#tooltipBtn').text(newOrder);
        // }
        // if ($(this).hasClass('accept')) {
        //     $('#tooltipBtn').text(accept);
        // }
        // if ($(this).hasClass('declineOrder')) {
        //     $('#tooltipBtn').text(declineOrder);
        // }
        // if ($(this).hasClass('uspeh')) {
        //     $('#tooltipBtn').text(uspeh);
        // }
        if ($(this).hasClass('ua')) {
            $('#tooltipBtn').text(ukraine);
        }
        if ($(this).hasClass('ru')) {
            $('#tooltipBtn').text(russia);
        }
        if ($(this).hasClass('kz')) {
            $('#tooltipBtn').text(kazahstan);
        }
        if ($(this).hasClass('al')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).hasClass('predoplata')) {
            $('#tooltipBtn').text(predoplata);
        }
        if ($(this).hasClass('acceptPay')) {
            $('#tooltipBtn').text(acceptPay);
        }
        if ($(this).hasClass('decline')) {
            $('#tooltipBtn').text(decline);
        }
        if ($(this).hasClass('trade')) {
            $('#tooltipBtn').text(trade);
        }
        if ($(this).hasClass('nalozhplatezh')) {
            $('#tooltipBtn').text(nalozhplatezh);
        }
        // if (xy.target.offsetParent.classList.contains('ru')) {
        //     $('#tooltipBtn').text(russia);
        // }
        // if (xy.target.offsetParent.classList.contains('kz')) {
        //     $('#tooltipBtn').text(kazahstan);
        // }
        // if (xy.target.offsetParent.classList.contains('al')) {
        //     $('#tooltipBtn').text(alb);
        // }

        // .delay(500)
        // .stop(true, false)
        $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
        // let tooltipWidth = $("#tooltipBtn").width();
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        // console.log(tooltipWidth)
        // .css("left", xy.pageX - tooltip + -30 + "px")
        // let tooltip = $(".list-item img").width();
        $("#tooltipBtn")
            .css("left", posElement.x + blockWidth + 0 + "px")
            .css("top", posElement.y - 4 + "px");
        if ($(this).children()[0].classList.contains('all')) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' });
        }

        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
        // if (!$(this).hasClass('uspeh')) {
        //     $("#tooltipBtn").css({ 'visibility': 'hidden' });
        // }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
    $(".btn-header").hover(function(xy) {
        let refresh = 'Сбросить все фильтры';
        let settings = 'Расширения модулей + массовость';
        let submit = 'Импорт экспорт данных';
        let addOrder = 'Создать заказ';
        let notification = 'Уведомления';

        if ($(this).hasClass('btn-refresh')) {
            $('#tooltipBtn').text(refresh);
        }
        if ($(this).hasClass('btn-settings')) {
            $('#tooltipBtn').text(settings);
        }
        if ($(this).hasClass('btn-accept')) {
            $('#tooltipBtn').text(submit);
        }
        if ($(this).hasClass('btn-order')) {
            $('#tooltipBtn').text(addOrder);
        }
        if ($(this).hasClass('notification-btn')) {
            $('#tooltipBtn').text(notification);
        }
        // let huy = $('.btn-refresh').offset();
        // console.log(huy);
        // .delay(500)
        // .stop(true, false)
        // $("#tooltipBtn").css({ 'background': 'rgba(255, 255, 255, 0.7)', 'color': 'black' })
        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(500).animate({ opacity: "1" }, { duration: 300, queue: true });
        // let tooltipWidth = $("#tooltipBtn").width();
        let posElement = this.getBoundingClientRect();
        // let blockWidth = $(this).width();
        let widthElement = $("#tooltipBtn").width();
        $("#tooltipBtn")
            .css("left", posElement.x - widthElement * 0.38 + "px")
            .css("top", posElement.y + 35 + "px");
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        // $("#tooltipBtn").css({ 'background': 'rgba(81, 81, 81, 0.6)', 'color': 'white' })
    });
    $(".new-orders").hover(function(xy) {
        let zakazNotOpen = 'Заказ не открывался';
        let posElement = this.getBoundingClientRect();
        // let blockHeight = $(this).height();
        // let blockWidth = $(this).width();
        $('#tooltipBtn').text(zakazNotOpen);
        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        // let tooltipWidth = $("#tooltipBtn").width();
        $("#tooltipBtn")
            .css("left", posElement.x - 10 + "px")
            .css("top", posElement.y + 22 + "px");
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });

    });
    $(".crm-header-link").hover(function(xy) {
        let allOrder = 'Все заказы в CRM';
        let newOrder = 'Заказ без статуса<br><span class="text-tooltip">Ожидает обработку</span>';
        let acceptOrder = 'Покупатель подтвердил заказ<br><span class="text-tooltip">Ожидает упаковку<br><br>В статусе включена автоматическая отправка SMS согласно настроек модуля. Используемый шаблон:<br>- «Заказ принят, готовится к отправке»</span>';
        let declineOrder = 'Покупатель отказался от заказа';
        let upakovanOrder = 'Заказ упакован<br><span class="text-tooltip">Ожидает передачу почтовой службе</span>';
        let peredanOrder = 'Заказ передан почтовой службе<br><span class="text-tooltip">Ожидает подтверждения получения почтовой службой</span>';
        let sendOrder = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта: За 1 день до платного хранения<br>- Укрпочта: За 1 день до платного хранения<br>- Justin: За 1 день до платного хранения<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
        let vikuplenOrder = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let moneyGrab = 'Наложенный платёж получен<br><span class="text-tooltip">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let finishOrder = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки "Завершить" подтвердил:<br>- получение наложенного платежа<br>- выполнение заказа<br>Присвоил заказу статус "Завершён", заблокировал заказ кнопкой "Завершить".<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let backOrder = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let backOrderWarehouse = 'Возвращенный заказ получил отправитель<br><span class="text-tooltip">Пользователь с правом использования кнопки "Завершить" подтвердил получение возвращенного заказа. Присвоил заказу статус "Возврат (завершён)", заблокировал заказ кнопкой "Завершить".<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';

        // let blockHeight = $(this).height();
        // let blockWidth = $(this).width();
        // $('#tooltipBtn').text(' ');
        if ($(this).hasClass('allOrder')) {
            $('#tooltipBtn').html(allOrder);
        }
        if ($(this).hasClass('newOrder')) {
            $('#tooltipBtn').html(newOrder);
        }
        if ($(this).hasClass('acceptOrder')) {
            $('#tooltipBtn').html(acceptOrder);
        }
        if ($(this).hasClass('declineOrder')) {
            $('#tooltipBtn').html(declineOrder);
        }
        if ($(this).hasClass('upakovanOrder')) {
            $('#tooltipBtn').html(upakovanOrder);
        }
        if ($(this).hasClass('peredanOrder')) {
            $('#tooltipBtn').html(peredanOrder);
        }
        if ($(this).hasClass('sendOrder')) {
            $('#tooltipBtn').html(sendOrder);
        }
        if ($(this).hasClass('vikuplenOrder')) {
            $('#tooltipBtn').html(vikuplenOrder);
        }
        if ($(this).hasClass('moneyGrab')) {
            $('#tooltipBtn').html(moneyGrab);
        }
        if ($(this).hasClass('finishOrder')) {
            $('#tooltipBtn').html(finishOrder);
        }
        if ($(this).hasClass('backOrder')) {
            $('#tooltipBtn').html(backOrder);
        }
        if ($(this).hasClass('backOrderWarehouse')) {
            $('#tooltipBtn').html(backOrderWarehouse);
        }
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css({ 'visibility': 'visible', 'font-size': '14px' }).delay(500).animate({ opacity: "1" }, { duration: 300, queue: true });
        // let tooltipWidth = $("#tooltipBtn").width();
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");

        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth + 10 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 20 + 'px');
        }
        // if (screenHeight < posElement.y + heightTooltip + 25) {
        //     $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        // }
        if ($(this).hasClass('test')) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden', 'font-size': '12px' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});

$(".tel").each(function(e, item) {
    let vodofone = 'Vodafone';
    let kyivstar = 'Киевстар';
    let lifecell = 'Lifecell';
    let incorrectNumber = 'Неверный номер';
    let unknownNumber = 'Неизвестный номер';

    $(this).hover(function(xy) {

        if ($(item.children[0]).hasClass('vod')) {
            $('#tooltipBtn').text(vodofone);
        }
        if ($(item.children[0]).hasClass('ky')) {
            $('#tooltipBtn').text(kyivstar);
        }
        if ($(item.children[0]).hasClass('life')) {
            $('#tooltipBtn').text(lifecell);
        }
        if ($(item.children[0]).hasClass('unk')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        if ($(item.children[0]).hasClass('incorr')) {
            $('#tooltipBtn').text(unknownNumber);
        }

        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        // console.log(posElement);
        // console.log(blockWidth);
        // console.log(screenWidth);
        // console.log(widthTooltip);

        // console.log(posElement);
        // console.log(blockHeight);
        // console.log(screenHeight);
        // console.log(heightTooltip);

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");


        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
// let posElement = this.getBoundingClientRect();
// let blockWidth = $(this).width();
// let blockHeight = $(this).height();
// let screenWidth = document.body.clientWidth;
// let screenHeight = document.body.clientHeight;
// let widthTooltip = $('#tooltipBtn').width();
// let heightTooltip = $('#tooltipBtn').height();
// if (screenWidth < posElement.x + widthTooltip) {
//     $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
// }
// if (posElement.x < 110) {
//     $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
// }
// if (screenHeight < posElement.y + heightTooltip + 25) {
//     $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
// }
$(".colum-pay").each(function(e, item) {
    let predoplata = 'Предоплата';
    let nalozhplatezh = 'Наложенный платёж';
    let acceptPay = 'Оплачен';
    let decline = 'Отказ';
    let trade = 'Обмен';

    $(this).hover(function(xy) {
        if ($(item.children[0].children).hasClass('card')) {
            $('#tooltipBtn').text(predoplata);
        }
        if ($(item.children[0].children).hasClass('svg-trade')) {
            $('#tooltipBtn').text(trade);
        }
        if ($(item.children[0].children).hasClass('svg-decline')) {
            $('#tooltipBtn').text(decline);
        }
        if ($(item.children[0].children).hasClass('coin')) {
            $('#tooltipBtn').text(acceptPay);
        }
        if ($(item.children[0].children).hasClass('convert-pay')) {
            $('#tooltipBtn').text(nalozhplatezh);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
$(".svg-delivery").each(function(e, item) {
    let ukrPochta = 'Укрпочта';
    let nv = 'Новая почта';
    let samovivoz = 'Самовывоз';
    let justin = 'Justin';

    $(this).hover(function(xy) {
        if ($(item.children[0].children).hasClass('ukrp')) {
            $('#tooltipBtn').text(ukrPochta);
        }
        if ($(item.children[0].children).hasClass('nv')) {
            $('#tooltipBtn').text(nv);
        }
        if ($(item.children[0].children).hasClass('justin')) {
            $('#tooltipBtn').text(justin);
        }
        if ($(item.children[0].children).hasClass('samovivoz')) {
            $('#tooltipBtn').text(samovivoz);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");

        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
$(".crm-main-table .convert-tooltip").each(function(e, item) {
    let message = 'Отправлено 4 сообщения';

    $(this).hover(function(xy) {
        if ($(this).hasClass('convert-tooltip')) {
            $('#tooltipBtn').text(message);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 20 + "px");

        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -7 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
$(".crm-main-table .date-time").each(function(e, item) {
    let otkrit = 'Открыт через 10 дней 3 минуты 25 секунд';
    let otkritHours = 'Открыт через 3 дня 1 час 3 минуты 25 секунд';
    let acceptZa = 'Принят за 3 минуты 23 секунды';
    let acceptZahours = 'Принят за 1 час 3 минуты 23 секунды';
    let otpravka = 'Отправлен через 3 дня 3 минуты 23 секунды';

    $(this).hover(function(xy) {
        if ($(item).hasClass('otkrit')) {
            $('#tooltipBtn').text(otkrit);
        }
        if ($(item).hasClass('otkrithours')) {
            $('#tooltipBtn').text(otkritHours);
        }
        if ($(item).hasClass('acceptza')) {
            $('#tooltipBtn').text(acceptZa);
        }
        if ($(item).hasClass('acceptzahours')) {
            $('#tooltipBtn').text(acceptZahours);
        }
        if ($(item).hasClass('otpravka')) {
            $('#tooltipBtn').text(otpravka);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -7 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
$(".crm-main-table .box-day-tooltip").each(function(e, item) {
    let message = 'Остался 1 день до платного хранения';

    $(this).hover(function(xy) {
        if ($(this).hasClass('box-day-tooltip')) {
            $('#tooltipBtn').text(message);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 19 + "px");

        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });

});
$(".table-header th").hover(function(e, item) {
    let id = 'Идентификатор/номер заказа<br><span class="text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>';
    let status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
    let pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
    let country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
    let tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
    let comm = '...';
    let sum = 'Итоговая сумма заказа';
    let product = '...';
    let pay = 'Используемый вид оплаты';
    let delivery = 'Используемый вид доставки';
    let addres = '...';
    let ttn = 'Номер товарно-транспортной накладной';
    let ttnStatus = 'Информация за последний час о статусе посылки<br><span class="text-tooltip">Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM</span>';
    let prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
    let depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
    let add = 'Дата и время добавления заказа в CRM';
    let open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>';
    let opened = 'Последний пользователь открывший заказ<br><span class="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>';
    let prinyatZa = 'Время между открытием заказа и изменением его статуса на «Принят»<br><span class="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>';
    let accepted = 'Дата и время изменения статуса заказа на «Принят»<br><span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>';
    let otpravka = 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>';
    let send = 'Дата и время получения посылки почтовой службой<br><span class="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>';
    let change = 'Дата и время последнего изменения заказа';
    let changed = 'Последний пользователь изменивший заказ';
    let finish = 'Дата и время завершения заказа<br><span class="text-tooltip">Используется для подтверждения завершения заказа. Пользователь с правом использования кнопки «Завершить», блокирует ею заказ. Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
    let site = 'Источник заказа';
    let ip = 'IP адрес устройства с которого поступил заказ<br><span class="text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>';
    let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
    let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';

    if ($(this).hasClass('header-id')) {
        $('#tooltipBtn').html(id)
    }
    if ($(this).hasClass('header-status')) {
        $('#tooltipBtn').html(status)
    }
    if ($(this).hasClass('header-pokupatel')) {
        $('#tooltipBtn').html(pokupatel)
    }
    if ($(this).hasClass('header-country')) {
        $('#tooltipBtn').html(country)
    }
    if ($(this).hasClass('header-tel')) {
        $('#tooltipBtn').html(tel)
    }
    if ($(this).hasClass('header-comm')) {
        $('#tooltipBtn').html(comm)
    }
    if ($(this).hasClass('header-sum')) {
        $('#tooltipBtn').html(sum)
    }
    if ($(this).hasClass('header-product')) {
        $('#tooltipBtn').html(product)
    }
    if ($(this).hasClass('header-pay')) {
        $('#tooltipBtn').html(pay)
    }
    if ($(this).hasClass('header-delivery')) {
        $('#tooltipBtn').html(delivery)
    }
    if ($(this).hasClass('header-addres')) {
        $('#tooltipBtn').html(addres)
    }
    if ($(this).hasClass('header-ttn')) {
        $('#tooltipBtn').html(ttn)
    }
    if ($(this).hasClass('header-ttn-status')) {
        $('#tooltipBtn').html(ttnStatus)
    }
    if ($(this).hasClass('header-depart')) {
        $('#tooltipBtn').html(depart)
    }
    if ($(this).hasClass('header-opened')) {
        $('#tooltipBtn').html(opened)
    }
    if ($(this).hasClass('header-add')) {
        $('#tooltipBtn').html(add)
    }
    if ($(this).hasClass('header-open')) {
        $('#tooltipBtn').html(open)
    }
    if ($(this).hasClass('header-accepted')) {
        $('#tooltipBtn').html(accepted)
    }
    if ($(this).hasClass('header-prinyatZa')) {
        $('#tooltipBtn').html(prinyatZa)
    }
    if ($(this).hasClass('header-prinyal')) {
        $('#tooltipBtn').html(prinyal)
    }
    if ($(this).hasClass('header-otpravka')) {
        $('#tooltipBtn').html(otpravka)
    }
    if ($(this).hasClass('header-send')) {
        $('#tooltipBtn').html(send)
    }
    if ($(this).hasClass('header-change')) {
        $('#tooltipBtn').html(change)
    }
    if ($(this).hasClass('header-changed')) {
        $('#tooltipBtn').html(changed)
    }
    if ($(this).hasClass('header-finish')) {
        $('#tooltipBtn').html(finish)
    }
    if ($(this).hasClass('header-site')) {
        $('#tooltipBtn').html(site)
    }
    if ($(this).hasClass('header-ip')) {
        $('#tooltipBtn').html(ip)
    }
    if ($(this).hasClass('header-utm')) {
        $('#tooltipBtn').html(utm)
    }
    if ($(this).hasClass('header-field')) {
        $('#tooltipBtn').html(field)
    }


    $("#tooltipBtn").css({ 'visibility': 'visible', 'font-size': '14px' }).delay(500).animate({ opacity: "1" }, { duration: 300, queue: true });

    let posElement = this.getBoundingClientRect();
    let blockWidth = $(this).width();
    let blockHeight = $(this).height();
    let screenWidth = document.body.clientWidth;
    let screenHeight = document.body.clientHeight;
    let widthTooltip = $('#tooltipBtn').width();
    let heightTooltip = $('#tooltipBtn').height();

    // console.log(posElement);
    // console.log(blockWidth);
    // console.log(screenWidth);
    // console.log(widthTooltip);

    $("#tooltipBtn")
        .css("left", posElement.x + 0 + "px")
        .css("top", posElement.y + 28 + "px");

    // $(".text-tooltip").text(function(i, text) {

    //     if (text.lenght >= 30) {
    //         text = text.substring(0, 29) + "<br>";
    //         // $(this).append('<div class="tooltip"></div>');
    //         // $('.tooltip').css('visibility', 'visible');
    //         $(this).html(text);
    //         // $(this).append('<div class="tooltip">' + boxMemory + '</div>');
    //     }
    // });

    if (screenWidth < posElement.x + widthTooltip) {
        $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
    }
    if (posElement.x < 110) {
        $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
    }
    // if (screenHeight < posElement.y + heightTooltip) {
    //     $("#tooltipBtn").css('top', posElement.y - blockHeight + 10 + 'px');
    // }
}).mouseleave(function(e) {
    $("#tooltipBtn").css({ 'visibility': 'hidden', 'font-size': '12px' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
});



// $(".table-header th").each(function(e, item) {
//     let id = 'Идентификатор/номер заказа<br><span class="text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>';
//     let status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
//     let pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
//     let country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
//     let tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
//     let comm = '...';
//     let sum = 'Итоговая сумма заказа';
//     let product = '...';
//     let pay = 'Используемый вид оплаты';
//     let delivery = 'Используемый вид доставки';
//     let addres = '...';
//     let ttn = 'Номер товарно-транспортной накладной';
//     let ttnStatus = 'Информация за последний час о статусе посылки<br><span class="text-tooltip">Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM</span>';
//     let prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
//     let depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
//     let add = 'Дата и время добавления заказа в CRM';
//     let open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>';
//     let opened = 'Последний пользователь открывший заказ<br><span class="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>';
//     let prinyatZa = 'Время между открытием заказа и изменением его статуса на «Принят»<br><span class="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>';
//     let accepted = 'Дата и время изменения статуса заказа на «Принят»<br><span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>';
//     let pered = 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>';
//     let send = 'Дата и время получения посылки почтовой службой<br><span class="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>';
//     let change = 'Дата и время последнего изменения заказа';
//     let changed = 'Последний пользователь изменивший заказ';
//     let finish = 'Дата и время завершения заказа<br><span class="text-tooltip">Используется для подтверждения завершения заказа. Дальнейшее редактирование заказа сотрудниками не имеющим доступ, запрещен</span>';
//     let site = 'Источник заказа';
//     let ip = 'IP адрес устройства с которого поступил заказ<br><span class="text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>';
//     let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
//     let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';

//     if ($(item).hasClass('header-id')) {
//         $(this).append('<div class="tooltip">' + id + '</div>');
//     }
//     if ($(item).hasClass('header-opened')) {
//         $(this).append('<div class="tooltip">' + opened + '</div>');
//     }
//     if ($(item).hasClass('header-status')) {
//         $(this).append('<div class="tooltip">' + status + '</div>');
//     }
//     if ($(item).hasClass('header-pokupatel')) {
//         $(this).append('<div class="tooltip">' + pokupatel + '</div>');
//     }
//     if ($(item).hasClass('header-country')) {
//         $(this).append('<div class="tooltip">' + country + '</div>');
//     }
//     if ($(item).hasClass('header-tel')) {
//         $(this).append('<div class="tooltip">' + tel + '</div>');
//     }
//     if ($(item).hasClass('header-comm')) {
//         $(this).append('<div class="tooltip">' + comm + '</div>');
//     }
//     if ($(item).hasClass('header-sum')) {
//         $(this).append('<div class="tooltip">' + sum + '</div>');
//     }
//     if ($(item).hasClass('header-product')) {
//         $(this).append('<div class="tooltip">' + product + '</div>');
//     }
//     if ($(item).hasClass('header-pay')) {
//         $(this).append('<div class="tooltip">' + pay + '</div>');
//     }
//     if ($(item).hasClass('header-delivery')) {
//         $(this).append('<div class="tooltip">' + delivery + '</div>');
//     }
//     if ($(item).hasClass('header-addres')) {
//         $(this).append('<div class="tooltip">' + addres + '</div>');
//     }
//     if ($(item).hasClass('header-ttn')) {
//         $(this).append('<div class="tooltip">' + ttn + '</div>');
//     }
//     if ($(item).hasClass('header-ttn-status')) {
//         $(this).append('<div class="tooltip">' + ttnStatus + '</div>');
//     }
//     if ($(item).hasClass('header-prinyal')) {
//         $(this).append('<div class="tooltip">' + prinyal + '</div>');
//     }
//     if ($(item).hasClass('header-depart')) {
//         $(this).append('<div class="tooltip">' + depart + '</div>');
//     }
//     if ($(item).hasClass('header-add')) {
//         $(this).append('<div class="tooltip">' + add + '</div>');
//     }
//     if ($(item).hasClass('header-open')) {
//         $(this).append('<div class="tooltip">' + open + '</div>');
//     }
//     if ($(item).hasClass('header-prinyatZa')) {
//         $(this).append('<div class="tooltip">' + prinyatZa + '</div>');
//     }
//     if ($(item).hasClass('header-accepted')) {
//         $(this).append('<div class="tooltip">' + accepted + '</div>');
//     }
//     if ($(item).hasClass('header-pered')) {
//         $(this).append('<div class="tooltip">' + pered + '</div>');
//     }
//     if ($(item).hasClass('header-send')) {
//         $(this).append('<div class="tooltip">' + send + '</div>');
//     }
//     if ($(item).hasClass('header-change')) {
//         $(this).append('<div class="tooltip">' + change + '</div>');
//     }
//     if ($(item).hasClass('header-changed')) {
//         $(this).append('<div class="tooltip">' + changed + '</div>');
//     }
//     if ($(item).hasClass('header-finish')) {
//         $(this).append('<div class="tooltip">' + finish + '</div>');
//     }
//     if ($(item).hasClass('header-site')) {
//         $(this).append('<div class="tooltip">' + site + '</div>');
//     }
//     if ($(item).hasClass('header-ip')) {
//         $(this).append('<div class="tooltip">' + ip + '</div>');
//     }
//     if ($(item).hasClass('header-utm')) {
//         $(this).append('<div class="tooltip">' + utm + '</div>');
//     }
//     if ($(item).hasClass('header-field')) {
//         $(this).append('<div class="tooltip">' + field + '</div>');
//         // let elemW = $('.header-field-5');  
//     }
//     let arr = document.querySelectorAll('tr th');
//     let posElement = arr[arr.length - 1].getBoundingClientRect();
//     let screenWidth = window.screen.width;
//     let widthElement = $('.tooltip').width();
//     console.log(posElement);
//     console.log(widthElement);
//     console.log(screenWidth);
//     console.log(e === (arr.length - 1));
//     if (screenWidth < posElement.x + widthElement && e === (arr.length - 1)) {
//         $(arr[arr.length - 1].children[0]).css('left', 0 - widthElement +  'px');
//     }

// });
// // Получаем нужный элемент
// var element = document.querySelector('.header-field');

// var Visible = function(target) {
//     // Все позиции элемента
//     var targetPosition = {
//             top: window.pageYOffset + target.getBoundingClientRect().top,
//             left: window.pageXOffset + target.getBoundingClientRect().left,
//             right: window.pageXOffset + target.getBoundingClientRect().right,
//             bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//         },
//         // Получаем позиции окна
//         windowPosition = {
//             top: window.pageYOffset,
//             left: window.pageXOffset,
//             right: window.pageXOffset + document.documentElement.clientWidth,
//             bottom: window.pageYOffset + document.documentElement.clientHeight
//         };

//     if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//         targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//         targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//         targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//         // Если элемент полностью видно, то запускаем следующий код
//         console.clear();
//         console.log('Вы видите элемент :)');
//         $('.header-field .tooltip').css('left', '0');
//     } else {
//         // Если элемент не видно, то запускаем этот код
//         console.clear();
//         $('.header-field .tooltip').css('left', '-200%');
//     };
// };

// // Запускаем функцию при прокрутке страницы
// window.addEventListener('scroll', function() {
//     Visible(element);
// });

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible(element);
$(".crm-main-table .country-block").each(function(e, item) {
    let ukraine = 'Украина';
    let russia = 'Россия';
    let kazahstan = 'Казахстан';
    let alb = 'Албания';
    let world = 'Мир';
    $(this).hover(function(xy) {
        if ($(item.children[0].children).hasClass('ua')) {
            $('#tooltipBtn').text(ukraine);
        }
        if ($(item.children[0].children).hasClass('ru')) {
            $('#tooltipBtn').text(russia);
        }
        if ($(item.children[0].children).hasClass('al')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(item.children[0].children).hasClass('world')) {
            $('#tooltipBtn').text(world);
        }
        if ($(item.children[0].children).hasClass('kz')) {
            $('#tooltipBtn').text(kazahstan);
        }
        let posElement = this.getBoundingClientRect();

        $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
        $("#tooltipBtn")
            .css("left", posElement.x + 0 + "px")
            .css("top", posElement.y + 22 + "px");
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if (screenHeight < posElement.y + heightTooltip + 25) {
            $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    });
});
// $(".crm-main-table .country-block").each(function(e, item) {
//     let ukraine = 'Украина';
//     let russia = 'Россия';
//     let kazahstan = 'Казахстан';
//     let alb = 'Албания';
//     let world = 'Мир';

//     if ($(item.children[0].children).hasClass('ua')) {
//         $(this).append('<div class="tooltip">' + ukraine + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item.children[0].children).hasClass('ru')) {
//         $(this).append('<div class="tooltip">' + russia + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item.children[0].children).hasClass('al')) {
//         $(this).append('<div class="tooltip">' + alb + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item.children[0].children).hasClass('world')) {
//         $(this).append('<div class="tooltip">' + world + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
//     if ($(item.children[0].children).hasClass('kz')) {
//         $(this).append('<div class="tooltip">' + kazahstan + '</div>');
//         // $('.tooltip').attr('data', ukraine);
//     }
// });
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
// comment ...
$(".crm-main-table .max-lenght-comment").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        // $(this).append('<div class="tooltip"></div>');
        // $('.tooltip').css('visibility', 'visible');
        $(this).text(text);
        $(this).hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
            $("#tooltipBtn")
                .css("left", posElement.x + 0 + "px")
                .css("top", posElement.y + 22 + "px");

            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }
});
// comment ...
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

// $(".crm-header .max-lenght").text(function(i, text) {
//     let boxMemory = text;
//     if (text.length >= 20) {
//         text = text.substring(0, 18) + "...";
//         $(this).text(text);
//         $(this).append('<div class="tooltip">' + boxMemory + '</div>');
//     }
// });
//another standart ...
$(".crm-main-table .max-lenght").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
            $("#tooltipBtn")
                .css("left", posElement.x + 0 + "px")
                .css("top", posElement.y + 22 + "px");

            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }

        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }
});
//another standart ...
// product ...
$(".crm-main-table .max-lenght-product").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 40) {
        text = text.substring(0, 38) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
            $("#tooltipBtn")
                .css("left", posElement.x + 0 + "px")
                .css("top", posElement.y + 20 + "px");

            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }
});
// product ...
//addres ...
$(".crm-main-table .addres-block").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
            $("#tooltipBtn")
                .css("left", posElement.x + 0 + "px")
                .css("top", posElement.y + 22 + "px");
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }
});
//addres ...
//status ...
$(".status-table .color-form2").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 12) {
        text = text.substring(0, 11) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(300).animate({ opacity: "1" }, { duration: 300, queue: true });
            $("#tooltipBtn")
                .css("left", posElement.x + 0 + "px")
                .css("top", posElement.y + 19 + "px");
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        });
    }
});
//status ...
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
    // if ($(this).children().hasClass('all')) {
    //     $(this).removeClass('select-btn');
    // }

    if ($('.message-list.select-btn').length == 1) {
        let appendCount = $('.message-list.select-btn').text();
        $(".count-message").val(appendCount);
        $('.all').removeClass("select-btn-static");
        // $('.status-btn .list-status.select-btn').removeClass('select-btn');
    }
    if ($('.message-list.select-btn').length >= 2) {
        $(".count-message").val('∞');
    }
    if ($('.message-list.select-btn').length == 0) {
        $(".count-message").val('∞');
        $('.all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        // $('.list .all').addClass("select-btn-static");
    }
    // if ($('.message-list.select-btn-static').length == 1) {
    //     $(".count-message").val('');

    // }

    // if ($('.message-list').hasClass('select-btn-static')) {
    //     $(this).children().removeClass('select-btn-static');
    // }
    $(".message-list").removeClass('select-btn-static');
});
$(".message-list .all").click(function() {
    // $(this).parent().addClass('select-btn-static');
    $(this).removeClass('select-btn');
    $(".message-menu").removeClass('count-toggle');
    $(".message-list").removeClass('select-btn');
    $(".count-message").val('');
    // if ($('.message-list.select-btn-static').length == 0) {
    //     $(".count-message").val('');
    // }

});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("message-box")) {
        $(".message-menu").removeClass('count-toggle');
    }
});
//COUNT MESSAGE
//menu status
// $(".status-table .status-btn").click(function() {
//     $(".status-table .block1").toggleClass("toggle");
//     $(".status-text").text(function(i, text) {
//         let textEllipsis = $(this).width();
//         console.log(textEllipsis);
//         // let boxMemory = text;
//         // if (text.length >= 12) {
//         //     text = text.substring(0, 11) + "...";
//         //     $(this).text(text);
//         //     $(this).parents('.list-status').hover(function(xy) {

//         //         $('#tooltipBtn').text(boxMemory);
//         //         $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
//         //         let tooltipWidth = $("#tooltipBtn").width();
//         //         $("#tooltipBtn")
//         //             .css("left", xy.pageX - tooltipWidth + -40 + "px")
//         //             .css("top", xy.pageY + 0 + "px");
//         //         // if ($(this).children()[0].classList.contains('all')) {
//         //         //     $("#tooltipBtn").css({ 'visibility': 'hidden' });
//         //         // }
//         //     }).mouseleave(function(e) {
//         //         $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
//         //     });
//         // }
//         if (textEllipsis > 90) {
//             $(this).css({
//                 'overflow': 'hidden',
//                 'text-overflow': 'ellipsis',
//                 'width': '84px'
//             });
//             $(this).parents('.list-status').hover(function(xy) {
//                 let boxMemory = text;
//                 $('#tooltipBtn').text(boxMemory);
//                 $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
//                 let tooltipWidth = $("#tooltipBtn").width();
//                 $("#tooltipBtn")
//                     .css("left", xy.pageX - tooltipWidth + -40 + "px")
//                     .css("top", xy.pageY + 0 + "px");
//                 // if ($(this).children()[0].classList.contains('all')) {
//                 //     $("#tooltipBtn").css({ 'visibility': 'hidden' });
//                 // }
//             }).mouseleave(function(e) {
//                 $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
//             });
//         }
//     });
// });
// $(".status-table .block1 .list-status").click(function(e) {
//     $(".status-table .list-status .all").removeClass("toggle");
//     $(this).toggleClass('select-btn');

//     if ($('.status-table .block1 .list-status.select-btn').length == 1) {
//         let appendCountry = $('.list-status.select-btn').clone();
//         $(".status-btn").html(appendCountry);
//         $('.all').removeClass("select-btn-static");
//         $('.status-btn .list-status.select-btn').removeClass('select-btn');
//     }
//     if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
//         $(".status-btn").html('Фильтр');
//     }
//     if ($('.status-table .block1 .list-status.select-btn').length == 0) {
//         $(".status-btn").html('Все');
//         $('.all').addClass("select-btn-static");
//     } else if ($(this).children()[0].classList.contains('all')) {
//         $(this).removeClass('select-btn');
//         $(this).children().addClass("select-btn-static");

//     }
// });
// $(".status-table .block1 .list-status .all").click(function() {
//     $(".status-btn").html('Все');
//     $(this).removeClass('select-btn');
//     $('.status-table .block1 .list-status').removeClass('select-btn');
//     $(".status-table .block1").removeClass("toggle");
// });

// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("status-table")) {
//         $(".status-table .block1").removeClass("toggle");
//     }
// });
// $('.input-btn').focus(function() {

//     $(".input-btn").val('');

// });
$(".status-text").text(function(i, text) {
    // let textEllipsis = $(this).width();
    // console.log(textEllipsis);
    let boxMemory = text;
    if (text.length >= 14) {
        text = text.substring(0, 13) + "...";
        $(this).text(text);

        $(this).parents('.list-status').hover(function(xy) {
            // let huy = $('.list-status').offset();
            // console.log(huy);
            let posElement = this.getBoundingClientRect();
            $('#tooltipBtn').text(boxMemory);
            // console.log(posElement)
            $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
            // let tooltipWidth = $("#tooltipBtn").width();
            let blockWidth = $(this).width();
            $("#tooltipBtn")
                .css("left", posElement.x + blockWidth + 10 + "px")
                .css("top", posElement.y - 4 + "px");
            // .css("top", posElement.y - 55 + "px");
            // if ($(this).children()[0].classList.contains('all')) {
            //     $("#tooltipBtn").css({ 'visibility': 'hidden' });
            // }

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
    // if (textEllipsis > 90) {
    //     $(this).css({
    //         'overflow': 'hidden',
    //         'text-overflow': 'ellipsis',
    //         'width': '84px'
    //     });
    //     $(this).parents('.list-status').hover(function(xy) {
    //         let boxMemory = text;
    //         $('#tooltipBtn').text(boxMemory);
    //         $("#tooltipBtn").css({ 'visibility': 'visible' }).animate({ opacity: "1" }, { duration: 300, queue: true });
    //         let tooltipWidth = $("#tooltipBtn").width();
    //         $("#tooltipBtn")
    //             .css("left", xy.pageX - tooltipWidth + -40 + "px")
    //             .css("top", xy.pageY + 0 + "px");
    //         // if ($(this).children()[0].classList.contains('all')) {
    //         //     $("#tooltipBtn").css({ 'visibility': 'hidden' });
    //         // }
    //     }).mouseleave(function(e) {
    //         $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
    //     });
    // }
});
// $(".simplebar-content").animate({ scrollTop: 0 }, 3500);
// $('.simplebar-content-wrapper').bind('mousewheel', function(e) {
//     var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 100);
//     e.preventDefault();
//     e.stopPropagation();
//     $(document.body).stop().animate({
//         scrollTop: nt
//     }, 20, 'easeInOutCubic');
// });
// $('.simplebar-content-wrapper')[0].scrollIntoView({ behavior: 'smooth' })
// $(".simplebar-content-wrapper").animate({ scrollTop: 0 }, 'slow');
$(".status-table .status-btn").click(function() {
    $(".input-btn").focus().val('');
    $(".status-table .block1").addClass("toggle");
    // $(".simplebar-content-wrapper").animate({ scrollTop: 0 }, { duration: 0 });
    $(".list-status").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });

});
$(".status-table .block1 .list-status").click(function(e) {
    $(".status-table .list-status .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.status-table .block1 .list-status.select-btn').length == 1) {
        // let appendCountry = $('.list-status.select-btn').text();
        // $(".status-btn").html(appendCountry);
        // $(".input-btn").val(appendCountry);
        $('.status-table .list-status .all').removeClass("select-btn-static");
        $('.status-btn .list-status.select-btn').removeClass('select-btn');
        $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
        // $(".status-btn").html('Фильтр');
        $(".input-btn").val('Фильтр');
        $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.status-table .block1 .list-status.select-btn').length == 0) {
        // $(".status-btn").html('Все');
        $(".input-btn").val('Все');
        $('.status-table .list-status .all').addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");

    }
});
$(".status-table .block1 .list-status .all").parent().click(function() {
    // $(".status-btn").html('Все');
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
            // $(".status-btn").html('Фильтр');
            $(".input-btn").val('Фильтр');

        }
        if ($('.status-table .block1 .list-status.select-btn').length == 1) {
            let appendCountry = $('.list-status.select-btn').text();
            $(".input-btn").val(appendCountry);
            // $(".input-btn").val(appendCountry);
            $('.status-table .list-status .all').removeClass("select-btn-static");
            $('.status-btn .list-status.select-btn').removeClass('select-btn');
            // $('.btn-refresh').addClass('active-btn-header');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 0) {
            // $(".status-btn").html('Все');
            $(".input-btn").val('Все');
            // $('.btn-refresh').removeClass('active-btn-header');
            // $('.all').addClass("select-btn-static");
        }
        //  else if ($(this).children()[0].classList.contains('all')) {
        //     $(this).removeClass('select-btn');
        //     $(this).children().addClass("select-btn-static");

        // }

    }

});
//menu status


//menu country btn
$(".colum-country .country-btn").click(function() {
    $(".colum-country .block1").toggleClass("toggle");
});
$(".colum-country .block1 .list").click(function(e) {
    $(".colum-country .list .all").removeClass("toggle")
    $(this).toggleClass('select-btn');
    // $('.all').parents().hasClass('select-btn').removeClass('select-btn');
    // $('.block1').find('div:first').removeClass('select-btn');
    if ($('.colum-country .block1 .list.select-btn').length == 1) {
        let appendCountry = $('.list.select-btn').html();
        // $('.list.select-btn').html();  
        $(".country-btn").html(appendCountry);
        $('.btn-refresh').addClass('active-btn-header');
        $('.list').children('.all').removeClass("select-btn-static");
        $('.country-btn').children('.all').removeClass("select-btn-static");
        // $(".country-btn .list .all.select-btn-static").removeClass("select-btn-static");
        // $('.country-btn .list.select-btn').removeClass('select-btn');
    }
    if ($('.colum-country .block1 .list.select-btn').length >= 2) {
        $(".country-btn").html('Фильтр');
        $('.btn-refresh').addClass('active-btn-header');
        // $(".country-btn").html('<svg class="filter" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6668 9.73313C12.3334 9.53313 12.2001 9.1998 12.2668 8.86646C12.3334 8.5998 12.3334 8.26646 12.3334 7.99979C12.3334 7.73313 12.3334 7.3998 12.2668 7.13313C12.2001 6.7998 12.4001 6.46646 12.6668 6.26646C13.0668 5.99979 13.2001 5.46646 13.0001 5.06646L12.5334 4.26646C12.2668 3.86646 11.7334 3.73313 11.3334 3.93313C11.0001 4.13313 10.6668 4.06646 10.4001 3.86646C9.93344 3.46646 9.46678 3.1998 8.86678 2.9998C8.53344 2.86646 8.33344 2.53313 8.33344 2.1998C8.33344 1.73313 7.93344 1.33313 7.46677 1.33313H6.53344C6.06678 1.33313 5.66677 1.73313 5.66677 2.1998C5.66677 2.53313 5.46678 2.86646 5.13344 2.9998C4.60011 3.1998 4.06677 3.53313 3.60011 3.86646C3.33344 4.06646 2.93344 4.13313 2.60011 3.93313C2.20011 3.73313 1.66678 3.86646 1.46677 4.26646L1.00011 5.06646C0.733442 5.46646 0.933442 5.99979 1.33344 6.26646C1.66677 6.46646 1.80011 6.7998 1.73344 7.13313C1.73344 7.46646 1.66677 7.73313 1.66677 7.99979C1.66677 8.26646 1.66677 8.5998 1.73344 8.86646C1.80011 9.1998 1.60011 9.53313 1.33344 9.73313C0.866775 9.9998 0.733442 10.5331 1.00011 10.9331L1.46677 11.7331C1.73344 12.1331 2.26677 12.2665 2.66677 12.0665C3.00011 11.8665 3.33344 11.9331 3.66677 12.1331C4.13344 12.4665 4.60011 12.7998 5.13344 12.9998C5.46678 13.1331 5.66677 13.4665 5.66677 13.7998V13.8665C5.66677 14.3331 6.06678 14.7331 6.53344 14.7331H7.46677C7.93344 14.7331 8.33344 14.3331 8.33344 13.8665C8.33344 13.5331 8.53344 13.1998 8.86678 13.0665C9.40011 12.8665 9.93344 12.5998 10.3334 12.1998C10.6001 11.9998 11.0001 11.9331 11.2668 12.1331C11.6668 12.3998 12.2001 12.1998 12.4668 11.7998L12.9334 10.9998C13.2668 10.5331 13.1334 9.9998 12.6668 9.73313ZM7.00011 10.6665C5.53344 10.6665 4.33344 9.46646 4.33344 7.99979C4.33344 6.53313 5.53344 5.33313 7.00011 5.33313C8.46678 5.33313 9.66678 6.53313 9.66678 7.99979C9.66678 9.46646 8.46678 10.6665 7.00011 10.6665Z" stroke="#515151" stroke-opacity="0.5" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        // $(".filter").hover(function(filter) {
        //     if (filter.target) {
        //         $('#tooltipBtn').text('Применился фильтер');
        //     }
        //     $("#tooltipBtn").css({ 'visibility': 'visible' }).delay(500).animate({ opacity: "1" }, { duration: 300, queue: true });
        //     $("#tooltipBtn")
        //         .css("left", filter.pageX + 20 + "px")
        //         .css("top", filter.pageY + 10 + "px");
        // }).mouseleave(function(e) {
        //     $("#tooltipBtn").css({ 'visibility': 'hidden' }).stop(true, true).animate({ opacity: "0" }, { duration: 0, queue: true });
        // });
    }
    if ($('.colum-country .block1 .list.select-btn').length == 0) {
        $(".country-btn").html('Все');
        $('.all').addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
        // $('.all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        $('.btn-refresh').removeClass('active-btn-header');
        // $('.list .all').addClass("select-btn-static");
    }
});
$(".colum-country .block1 .list .all").click(function() {
    // let textDelivery = $(this).html();
    $(".country-btn").html('Все');
    $(this).removeClass('select-btn');

    // $(".country-btn .list-item").removeClass('select-btn-static');
    // $('.list .all').addClass("select-btn-static");
    // $(this).addClass('select-btn-static');
    // $('.list-item.all').addClass("select-btn-static");
    // $(".employe- btn").html(text);
    $('.colum-country .block1 .list').removeClass('select-btn');
    $(".colum-country .block1").removeClass("toggle");
    $('.btn-refresh').removeClass('active-btn-header');
    // $(".crm-main-table").removeClass("z-index");
    // $('.all').removeClass("select-btn-static");
    // if (!$('.list .all').hasClass('select-btn-static')) {
    //     $('.all').addClass("select-btn-static");
    // };

});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-country")) {
        $(".colum-country .block1").removeClass("toggle");
        // $('.all').addClass("select-btn-static");
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
        $('.all').removeClass("select-btn-static");
        $($('.delivery-btn .list.select-btn')).removeClass('select-btn');
    }
    if ($('.colum-delivery .block1 .list.select-btn').length >= 2) {
        $(".delivery-btn").html('Фильтр');
    }
    if ($('.colum-delivery .block1 .list.select-btn').length == 0) {
        $(".delivery-btn").html('Все');
        $('.all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-delivery .block1 .list .all").click(function() {
    // let textDelivery = $(this).html();
    $(".delivery-btn").html('Все');
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
        $('.all').removeClass("select-btn-static");
        $($('.pay-btn .list.select-btn')).removeClass('select-btn');
    }
    if ($('.colum-pay .block1 .list.select-btn').length >= 2) {
        $(".pay-btn").html('Фильтр');
    }
    if ($('.colum-pay .block1 .list.select-btn').length == 0) {
        $(".pay-btn").html('Все');
        $('.all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-pay .block1 .list .all").click(function() {
    // let textPay = $(this).html();
    $(".pay-btn").html('Все');

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
    importBlock.classList.remove("import-toggle");
    modulBlock.classList.remove("modul-toggle");
});
document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".header-crm") === null) {
        notificationBlock.classList.remove("notification-toggle");
    }
});
//notification
//import block
const importBtn = document.querySelector(".btn-accept");
const importBlock = document.querySelector(".import-block");

importBtn.addEventListener("click", () => {
    importBlock.classList.toggle("import-toggle");
    notificationBlock.classList.remove("notification-toggle");
    modulBlock.classList.remove("modul-toggle");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".header-crm") === null) {
        importBlock.classList.remove("import-toggle");
    }
});
//import block
//modul block
const modulBtn = document.querySelector(".btn-settings");
const modulBlock = document.querySelector(".modul-block");

modulBtn.addEventListener("click", () => {
    modulBlock.classList.toggle("modul-toggle");
    notificationBlock.classList.remove("notification-toggle");
    importBlock.classList.remove("import-toggle");
});

document.addEventListener("mousedown", function(e) {
    if (e.target.closest(".header-crm") === null) {
        modulBlock.classList.remove("modul-toggle");
    }
});
//modul block
// nav sidebar

const btnCrmNav = document.getElementById("sidebar");
const navWrap = document.querySelector(".nav-crm");
const navCrmPlus = document.querySelectorAll(".nav-desc");


btnCrmNav.addEventListener("click", () => {
    navWrap.classList.toggle("nav-crm-plus");
    navCrmPlus.forEach((x) => x.classList.toggle("nav-desc-toggle"));
    btnCrmNav.classList.toggle("selected-nav");
    // if ($('.drop-list').parents().hasClass('.block-visible')) {
    //     $(".animation-arrow").css({ 'display': 'block' });
    // }
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

//drop nav btn

$(".zakaz-btn").click(function() {
    // let dropBlock = $(".drop-nav .zakaz-block");
    // dropBlock.map((x) => $(".drop-nav .zakaz-block").removeClass('block-visible'));
    $(".zakaz-drop-block").toggleClass('block-visible');
    // let arrbtn = $(".dropdown2 .ul-block");
    // arrbtn.map((x) => $(".dropdown2 .ul-block").removeClass("toggle"));
    // $('.nav-crm').prop("data-simplebar", "true");
    $(".animation-arrow").css({ 'display': 'block' });

});
$(".catalog-btn").click(function() {
    $(".catalog-drop-block").toggleClass('block-visible');
});
$(".contact-btn").click(function() {
    $(".contact-drop-block").toggleClass('block-visible');
});
$(".send-product-btn").click(function() {
    $(".send-drop-block").toggleClass('block-visible');
});
$(".warehouse-btn").click(function() {
    $(".warehouse-drop-block").toggleClass('block-visible');
});
$(".templates-btn").click(function() {
    $(".templates-drop-block").toggleClass('block-visible');
});
$(".modul-btn").click(function() {
    $(".modul-drop-block").toggleClass('block-visible');
});
$(".statistic-btn").click(function() {
    $(".statistic-drop-block").toggleClass('block-visible');
});
$(".mailing-btn").click(function() {
    $(".mailing-drop-block").toggleClass('block-visible');
});
$(".setting-btn").click(function() {
    $(".setting-drop-block").toggleClass('block-visible');
});
$(".trash-btn").click(function() {
    $(".trash-drop-block").toggleClass('block-visible');
});
$(".info-btn").click(function() {
    $(".info-drop-block").toggleClass('block-visible');
});
$(".video-btn").click(function() {
    $(".video-drop-block").toggleClass('block-visible');
});
//drop nav btn

// header hide
$(".crm-input").hover(function() {
    $(".wrap-hide").addClass('wrap-open');
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("crm-input") && !$clicked.parents().hasClass("table-header") && !$clicked.parents().hasClass("ui-datepicker-buttonpane") && !$clicked.parents().hasClass("ui-datepicker-header") && !$clicked.parents().hasClass("ui-datepicker-calendar") && !$clicked.hasClass("ui-datepicker") && !$clicked.parents().hasClass("block-btn")) {
        $(".wrap-hide").removeClass('wrap-open');
    }
});

// $(".btn-refresh").click(function(e) {
//     let rotates = 360;
//     // $(this).css({ 'transition': '0.3s', 'transform': 'rotate(' + rotates + 'deg)' });
//     $(this).toggleClass('rotate');
//     // $(".btn-refresh").rotate(360);

// });

//reset filter rotate
let rotate = 0;
$(".btn-header").first().click(function() {
    rotate = rotate + 360;

    $(".btn-refresh").css({
        "transform": "rotate(" + rotate + "deg)",
        'transition': '0.4s'
    });
    $('.btn-refresh').removeClass('active-btn-header');
    // $(".wrap-open").animate({ opacity: 0 }, 0).delay(100).animate({ opacity: 1 }, 0);
    // $(".wrap-open").css({ 'opacity': '0' }).delay(100).css({ 'opacity': '1' });
    //СБРОС КНОПОК
    $(".input-btn").val('Все');
    $('.list-status').removeClass('select-btn');
    $('.status-table .block1 .list-status').removeClass('select-btn');
    $(".status-table .block1").removeClass("toggle");
    $(".all").addClass("select-btn-static");

    $(".country-btn").html('Все');
    $('.list').removeClass('select-btn');
    $('.colum-country .block1 .list').removeClass('select-btn');
    $(".colum-country .block1").removeClass("toggle");
    //СБРОС КНОПОК
});
//reset filter rotate

// $(".btn-refresh").mouseleave(function(e) {

//     // $(this).css({ 'transition': '0.3s', 'transform': 'rotate(' + rotates + 'deg)' });
//     $(this).removeClass('rotate');
//     // $(".btn-refresh").rotate(360);

// });



// var toggle = 1;
// $('.btn-refresh').click(function() {
//     toggle++;
//     if ((toggle % 2) == 0) {
//         $(this).css({ 'transform': 'rotate(180deg)', 'transition': '0.3s' });
//     } else {
//         $(this).css({ 'transform': 'rotate(0deg)', 'transition': '0' });
//     }
// });
// $(function() { // doc ready
//     var rotation = 0; // variable to do rotation with
//     $(".btn-refresh").click(function() {
//         rotation = (rotation + 45) % 360; // the mod 360 probably isn't needed
//         $(this).rotate(rotation);
//     });
// });
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


//RAZOBRAT
// $('#faq h3').click(function (e) {
//     e.preventDefault();
//     var p = $(this).parents('li');
//     if (p.hasClass('active')) {
//         $('.desc', p).slideUp(400, function () {
//             $(p).removeClass('active');
//         });
//     } else {
//         $('#faq li.active .desc').slideUp(400);
//         $('.desc', p).slideDown(400);
//         $('#faq li.active').removeClass('active');
//         $(p).addClass('active');
//     }
// });
//RAZOBRAT

// var w=document.documentElement.clientWidth;
// var zoom;   
// zoom = w*100/1920;      
// zoom = zoom+'%';
// document.body.style.zoom = zoom;