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
            $("#hoverSelected-lock").css({ 'visibility': 'visible', 'opacity': '1' });
            $("#hoverSelected-lock")
                .css("left", posXY.pageX + 20 + "px")
                .css("top", posXY.pageY + -30 + "px");

        })
        $(".selected-lock").mouseleave(function(e) {
            $("#hoverSelected-lock").css({ 'visibility': 'hidden', 'opacity': '0' });
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
        let ukrp = 'Укрпочта';
        let nv = 'Новая почта';
        let samovivoz = 'Самовывоз';
        let justin = 'Justin';
        $("#tooltipBtn").css("font-size", "10px");

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
        if ($(this).hasClass('nv')) {
            $('#tooltipBtn').text(nv);
        }
        if ($(this).hasClass('samovivoz')) {
            $('#tooltipBtn').text(samovivoz);
        }
        if ($(this).hasClass('ukrp')) {
            $('#tooltipBtn').text(ukrp);
        }
        if ($(this).hasClass('justin')) {
            $('#tooltipBtn').text(justin);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.5s forwards' });
        if ($(this).children()[0].classList.contains('all')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
    });
    $(".list-small").hover(function(xy) {
        let pP = 'Пустое поле';
        let ua = 'Украина';
        let ru = 'Россия';
        let alb = 'Албания';
        let mobile = 'Mobile';
        let desktop = 'Desktop';
        let unknownDevice = 'Неизвестное устройство';
        let unknownSystem = 'Неизвестная система';
        let unknownBrowser = 'Неизвестный браузер';
        let android = 'Android';
        let windows = 'Windows';
        let apple = 'iOS';
        let chrome = 'Chrome';
        let safari = 'Safari';
        let firefox = 'Firefox';
        let opera = 'Opera';
        let edge = 'Edge';
        let yandex = 'Yandex Браузер';
        let mail = 'Mail Браузер';
        let vodafone = 'Vodafone';
        let kyivstar = 'Киевстар';
        let lifecell = 'Lifecell';
        let unknownNumber = 'Неизвестный номер';
        let incorrectNumber = 'Неверный номер';

        $("#tooltipBtn").css("font-size", "10px");
        if ($(this).hasClass('p-p')) {
            $('#tooltipBtn').text(pP);
        }
        if ($(this).hasClass('ua')) {
            $('#tooltipBtn').text(ua);
        }
        if ($(this).hasClass('ru')) {
            $('#tooltipBtn').text(ru);
        }
        if ($(this).hasClass('alb')) {
            $('#tooltipBtn').text(alb);
        }
        if ($(this).hasClass('mobile')) {
            $('#tooltipBtn').text(mobile);
        }
        if ($(this).hasClass('desktop')) {
            $('#tooltipBtn').text(desktop);
        }
        if ($(this).hasClass('unknownDevice')) {
            $('#tooltipBtn').text(unknownDevice);
        }
        if ($(this).hasClass('unknownSystem')) {
            $('#tooltipBtn').text(unknownSystem);
        }
        if ($(this).hasClass('unknownBrowser')) {
            $('#tooltipBtn').text(unknownBrowser);
        }
        if ($(this).hasClass('android')) {
            $('#tooltipBtn').text(android);
        }
        if ($(this).hasClass('windows')) {
            $('#tooltipBtn').text(windows);
        }
        if ($(this).hasClass('apple')) {
            $('#tooltipBtn').text(apple);
        }
        if ($(this).hasClass('chrome')) {
            $('#tooltipBtn').text(chrome);
        }
        if ($(this).hasClass('safari')) {
            $('#tooltipBtn').text(safari);
        }
        if ($(this).hasClass('firefox')) {
            $('#tooltipBtn').text(firefox);
        }
        if ($(this).hasClass('opera')) {
            $('#tooltipBtn').text(opera);
        }
        if ($(this).hasClass('edge')) {
            $('#tooltipBtn').text(edge);
        }
        if ($(this).hasClass('yandex')) {
            $('#tooltipBtn').text(yandex);
        }
        if ($(this).hasClass('mail')) {
            $('#tooltipBtn').text(mail);
        }
        if ($(this).hasClass('vodafone')) {
            $('#tooltipBtn').text(vodafone);
        }
        if ($(this).hasClass('kyivstar')) {
            $('#tooltipBtn').text(kyivstar);
        }
        if ($(this).hasClass('lifecell')) {
            $('#tooltipBtn').text(lifecell);
        }
        if ($(this).hasClass('unknownNumber')) {
            $('#tooltipBtn').text(unknownNumber);
        }
        if ($(this).hasClass('incorrectNumber')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.5s forwards' });
        // if ($(this).children()[0].classList.contains('all')) {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }
        if ($(this).hasClass('all')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('noMessage')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");
    });
    $(".import-list").hover(function(xy) {
        let pechat = '';
        let exportExcel = '';
        let exportDrop = 'Используется для массовой выгрузки и передачи заказов дропшипперу';
        let importDrop = 'Файл отправленный через «Экспорт заказов для Dropshipping» возвращается дропшиппером с заполненными номерами товарно-транспортных накладных для массового присвоения ТТН и дальнейшего отслеживания заказов в вашей CRM';
        let importExcel = 'Используется для загрузки «холодных» баз и другого';
        if ($(this).hasClass('pechat')) {
            $('#tooltipBtn').text(pechat);
        }
        if ($(this).hasClass('exportDrop')) {
            $('#tooltipBtn').text(exportDrop);
        }
        if ($(this).hasClass('importDrop')) {
            $('#tooltipBtn').text(importDrop);
        }
        if ($(this).hasClass('importExcel')) {
            $('#tooltipBtn').text(importExcel);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x - widthTooltip - 30 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(this).hasClass('exportExcel')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('pechat')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".modul-list").hover(function(xy) {
        let createTtn = 'Массовое создание ттн нп с разными местами и объемом при отправке, менеджеры только город указывают';
        let avtoobzvon = 'Автоматический обзвон выделенных заказов';
        let changeComm = 'Позволяет массово редактировать коментарий в выделеных заказах';
        let sendSMS = 'Массовая отправка SMS выделенным заказам';
        let copy = 'Копировать выделенный заказ';
        let delet = 'Удалить выделенные заказы';
        let changeStatus = 'Массовая смена статуса в выделенных заказах';
        let backOrderSelect = 'Принудительный возврат выделенных заказов отправителю';
        if ($(this).hasClass('createTtn')) {
            $('#tooltipBtn').text(createTtn);
        }
        if ($(this).hasClass('backOrderSelect')) {
            $('#tooltipBtn').text(backOrderSelect);
        }
        if ($(this).hasClass('avtoobzvon')) {
            $('#tooltipBtn').text(avtoobzvon);
        }
        if ($(this).hasClass('changeComm')) {
            $('#tooltipBtn').text(changeComm);
        }
        if ($(this).hasClass('sendSMS')) {
            $('#tooltipBtn').text(sendSMS);
        }
        if ($(this).hasClass('copy')) {
            $('#tooltipBtn').text(copy);
        }
        if ($(this).hasClass('delet')) {
            $('#tooltipBtn').text(delet);
        }
        if ($(this).hasClass('changeStatus')) {
            $('#tooltipBtn').text(changeStatus);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x - widthTooltip - 40 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(this).hasClass('none')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".resize").hover(function(e) {
        $('#tooltipBtn').html('Задать размер столбца<br>Зажать и потянуть для изменения размера<br>Двойной клик возвращает размер по умолчанию');
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let widthTooltip = $('#tooltipBtn').width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + blockWidth - 0 + "px").css("top", posElement.y - 0 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-resize 0.5s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".block-btn .btn-header").hover(function(xy) {
        let refresh = 'Сбросить все фильтры';
        let settings = 'Дополнения и расширения';
        let submit = 'Импорт экспорт данных';
        let addOrder = 'Создать заказ';
        let notification = 'Уведомления';
        $(this).click(function() {
            if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
                $("#tooltipBtn").css({ 'animation': '' });
            }
        });
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
        let posElement = this.getBoundingClientRect();
        let widthElement = $("#tooltipBtn").width();
        $("#tooltipBtn").css("left", posElement.x - widthElement * 0.38 + "px").css("top", posElement.y + 35 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(".import-block").hasClass('import-toggle') || $(".notifications").hasClass('notification-toggle') || $(".modul-block").hasClass('modul-toggle')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }); // $("#tooltipBtn").css({ 'background': 'rgba(81, 81, 81, 0.6)', 'color': 'white' })
    });
    $(".new-orders").hover(function(xy) {
        let posElement = this.getBoundingClientRect();
        $('#tooltipBtn').html('Заказ не открывался');
        $("#tooltipBtn").css("left", posElement.x - 10 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' });
    });
    $(".crm-header-link").each(function(e, item) {
        let allOrder = 'Все заказы в CRM';
        let newOrder = 'Заказ без статуса<br><span class="text-tooltip">Ожидает обработку</span>';
        let acceptOrder = 'Покупатель подтвердил заказ<br><span class="text-tooltip">Ожидает упаковку или передачу в «(Drop) Ожидает ТТН»<br><br>В статусе включена автоматическая отправка SMS согласно настроек модуля. Используемый шаблон:<br>- «Заказ принят, готовится к отправке»</span>';
        let declineOrder = 'Покупатель отказался от заказа';
        let finishOrder = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение наложенного платежа;<br>- выполнение заказа.<br>Присвоил заказу статус «Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let upakovanOrder = 'Заказ упакован<br><span class="text-tooltip">Ожидает передачу почтовой службе</span>';
        let peredanOrder = 'Заказ передан почтовой службе<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «Отправлен», после подтверждения получения посылки почтовой службой</span>';
        let sendOrder = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
        let backOrderWarehouse = 'Возвращенный заказ получил отправитель<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить» подтвердил получение возвращенного заказа. Присвоил заказу статус «Возврат (завершён)», заблокировал заказ кнопкой «Завершить».<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let vikuplenOrder = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let moneyGrab = 'Наложенный платёж получен<br><span class="text-tooltip">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let backOrder = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let dropWaitTtn = 'Заказ передан Dropshipping компании<br><span class="text-tooltip">Ожидает создания товарно-транспортной накладной дропшиппером, для её присвоения заказу с дальнейшим отслеживания в CRM системе</span>';
        let dropAssignedTtn = 'Заказу присвоена ТТН<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «(Drop) Отправлен», после подтверждения получения посылки почтовой службой</span>';
        let dropSend = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
        let dropBuying = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает выплату от дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
        let dropFinish = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение выплаты от дропшиппера;<br>- выполнение заказа.<br>Присвоил заказу статус «(Drop) Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        let dropBack = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает вычитания стоимости за возврат заказа из выплат дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span></span>';
        let dropBackFinish = 'Возврат учтён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил вычитание стоимости за возврат заказ, из выплат дропшиппера. Присвоил заказу статус «(Drop) Возврат (завершён)», заблокировал заказ кнопкой «Завершить». Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
        $(this).hover(function() {
            $("#tooltipBtn").css('font-size', '14px');

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
            if ($(this).hasClass('dropWaitTtn')) {
                $('#tooltipBtn').html(dropWaitTtn);
            }
            if ($(this).hasClass('dropAssignedTtn')) {
                $('#tooltipBtn').html(dropAssignedTtn);
            }
            if ($(this).hasClass('dropSend')) {
                $('#tooltipBtn').html(dropSend);
            }
            if ($(this).hasClass('dropBuying')) {
                $('#tooltipBtn').html(dropBuying);
            }
            if ($(this).hasClass('dropFinish')) {
                $('#tooltipBtn').html(dropFinish);
            }
            if ($(this).hasClass('dropBack')) {
                $('#tooltipBtn').html(dropBack);
            }
            if ($(this).hasClass('dropBackFinish')) {
                $('#tooltipBtn').html(dropBackFinish);
            }
            let posElement = this.getBoundingClientRect();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-status 1.5s forwards' });
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
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
        });
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
            $('#tooltipBtn').text(unknownNumber);
        }
        if ($(item.children[0]).hasClass('incorr')) {
            $('#tooltipBtn').text(incorrectNumber);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();

        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
        $("#tooltipBtn").css({ 'animation': '' });
    });
});

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

        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
        $("#tooltipBtn").css({ 'animation': '' });
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
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });

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
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".crm-main-table .convert-tooltip").each(function(e, item) {
    let message = 'Отправлено 4 сообщения';

    $(this).hover(function(xy) {
        if ($(this).hasClass('convert-tooltip')) {
            $('#tooltipBtn').text(message);
        }
        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });


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
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".crm-main-table .time").each(function(e, item) {
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
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
        $("#tooltipBtn").css({ 'animation': '' });
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
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 19 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
        $("#tooltipBtn").css({ 'animation': '' });
    });
});
$(".table-header th").each(function(e, item) {
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
    let ip = 'IP адрес, страна, браузер, ОС и тип устройства с которого поступил заказ<br><span class="text-tooltip">Используется для:<br>-Анализа маркетологами<br>-Блокировки IP в случае спама</span>';
    let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
    let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';
    $(this).hover(function() {
        $("#tooltipBtn").css('font-size', '14px');
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
        if ($(this).hasClass('header-sum')) {
            $('#tooltipBtn').html(sum)
        }
        if ($(this).hasClass('header-pay')) {
            $('#tooltipBtn').html(pay)
        }
        if ($(this).hasClass('header-delivery')) {
            $('#tooltipBtn').html(delivery)
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

        let posElement = this.getBoundingClientRect();
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
        if (screenWidth < posElement.x + widthTooltip) {
            $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
        }
        if (posElement.x < 110) {
            $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
        }
        if ($(this).hasClass('header-addres')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('header-product')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
        if ($(this).hasClass('header-comm')) {
            $("#tooltipBtn").css({ 'animation': '' });
        }
    }).mouseleave(function(e) {
        $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
    })
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
        let blockWidth = $(this).width();
        let blockHeight = $(this).height();
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        let widthTooltip = $('#tooltipBtn').width();
        let heightTooltip = $('#tooltipBtn').height();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
        $("#tooltipBtn").css({ 'animation': '' });
    });
});


// comment ...
$(".crm-main-table .max-lenght-comment").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 30) {
        text = text.substring(0, 28) + "...";
        $(this).text(text);
        $(this).hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
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
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
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
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x - 5 + "px").css("top", posElement.y + 20 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 7 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
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
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
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
            $('#tooltipBtn').text(boxMemory);
            let posElement = this.getBoundingClientRect();
            let blockWidth = $(this).width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 19 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
            if (screenWidth < posElement.x + widthTooltip) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 0 + 'px');
            }
            if (posElement.x < 110) {
                $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
            }
            if (screenHeight < posElement.y + heightTooltip + 25) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight + -12 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' });
        });
    }
});
//status ...




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

$('.message-btn').mouseenter(function() {
    $(this).css('width', '51px');
});
$('.message-btn').mouseleave(function() {
    if (!$('.message-menu').hasClass('count-toggle')) {
        $(this).css('width', '23px');
    }
});
$(".count-message").click(function() {
    $(".message-menu").toggleClass('count-toggle');
    $(".message-list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".message-list").click(function() {
    $(this).toggleClass('select-btn');
    $(this).parents('.message-btn').children('.count-message').addClass('hide-arrow');
    if ($('.message-list.select-btn').length == 1) {
        let appendCount = $('.message-list.select-btn').html();
        $(".count-message").html(appendCount);
        $('.message-list').children('.all').removeClass("select-btn-static");
    }
    if ($('.message-list.select-btn').length >= 2) {
        $(".count-message").html('Фильтр');
    }
    if ($('.message-list.select-btn').length == 0) {
        $(".count-message").html('');
        $('.message-list .all').addClass("select-btn-static");
        $(this).parents('.message-btn').children('.count-message').removeClass('hide-arrow');

    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
    // console.log($(this));
});
$(".message-list:first-child").click(function() {
    $(this).parents('.message-btn').children('.count-message').removeClass('hide-arrow');
    $(".count-message").html('');
    $(this).removeClass('select-btn');
    $(".message-menu").removeClass('count-toggle');
    $(".message-list").removeClass('select-btn');
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("message-box")) {
        $(".message-menu").removeClass('count-toggle');
        changesInput();
        $('.message-btn').css('width', '23px');
    }
});

//COUNT MESSAGE
//TTN MESSAGE

// $(".count-ttn, .btn-ttn").click(function() {
//     $(".menu-ttn").toggleClass('count-toggle');
//     $(".list-ttn").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
// });
// $(".list-ttn").click(function() {
//     $(".list-ttn .all").removeClass("count-toggle")
//     $(this).toggleClass('select-btn');
//     if ($('.list-ttn.select-btn').length == 1) {
//         let appendCount = $('.list-ttn.select-btn').text();
//         $(".count-ttn").val(appendCount);
//         $('.list-ttn').children('.all').removeClass("select-btn-static");
//     }
//     if ($('.list-ttn.select-btn').length >= 2) {
//         $(".count-ttn").val('~');
//     }
//     if ($('.list-ttn.select-btn').length == 0) {
//         $(".count-ttn").val('∞');
//         $('.list-ttn .all').addClass("select-btn-static");
//     } else if ($(this).children()[0].classList.contains('all')) {
//         $(this).removeClass('select-btn');
//         $(this).children().addClass("select-btn-static");
//     }
// });
// $(".list-ttn .all").click(function() {
//     $(".count-ttn").val('∞');
//     $(this).removeClass('select-btn');
//     $(".menu-ttn").removeClass('count-toggle');
//     $(".list-ttn").removeClass('select-btn');
// });
// $(document).bind("click", function(e) {
//     let $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("message-box-ttn")) {
//         $(".menu-ttn").removeClass('count-toggle');
//         changesInput();
//     }
// });



//TTN MESSAGE
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
$(".text-lenght").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 14) {
        text = text.substring(0, 13) + "...";
        $(this).text(text);
        $(this).parents('.list-status').hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css("font-size", "10px");
            let posElement = this.getBoundingClientRect();
            let blockWidth = $('.list-status').width();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();

            $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.5s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
        });
    }
});
// $(".input-status").change(function() {
//     $('.btn-refresh').addClass('active-btn-header');
// });
// $(".crm-input input").change(function() {
//     $('.btn-refresh').addClass('active-btn-header');
// });
// (function($) {
//     var originalVal = $.fn.val;
//     $.fn.val = function() {
//         var prev;
//         if (arguments.length > 0) {
//             prev = originalVal.apply(this, []);
//         }
//         var result = originalVal.apply(this, arguments);
//         if (arguments.length > 0 && prev != originalVal.apply(this, []))
//             $(this).change(); // OR with custom event $(this).trigger('value-changed')
//         return result;
//     };
// })(jQuery);
// $(".input-status").change(function() {
//     // $(".input-status").trigger("change");
//     $('.btn-refresh').addClass('active-btn-header');
// });
$(".status-btn").mouseenter(function() {
    $(".status-table .block1").addClass("toggle");
    $(".list-status").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".status-btn").mouseleave(function() {
    $(".status-table .block1").removeClass("toggle");
});
$(".status-table .input-status").click(function() {
    $(".input-status").focus().val('');
    $(".status-table .block1").addClass("toggle");
});
$(".status-table .block1 .list-status").click(function(e) {
    $(".status-table .list-status .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.status-table .block1 .list-status.select-btn').length == 1) {
        let appendStatus = $('.list-status.select-btn').text();
        $(".input-status").val(appendStatus);
        $('.status-table .list-status .all').removeClass("select-btn-static");
        // $('.status-btn .list-status.select-btn').removeClass('select-btn');
        // $('.btn-refresh').addClass('active-btn-header');
    }
    // if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
    //     $('.btn-refresh').addClass('active-btn-header');
    // }
    if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
        $(".input-status").val('Фильтр');
        // console.log($(".input-status").val())
    }
    if ($('.status-table .block1 .list-status.select-btn').length == 0) {
        $(".input-status").val('Все');
        $('.status-table .list-status .all').addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');

    }
});
$(".status-table .block1 .list-status .all").parent().click(function() {

    // $('.btn-refresh').removeClass('active-btn-header');
    $(".input-status").val('Все');
    $(this).removeClass('select-btn');
    $('.status-table .block1 .list-status').removeClass('select-btn');
    $(".status-table .block1").removeClass("toggle");
    // changesInput();
    // if ($(".country-btn").find('Все')) {
    //     $('.btn-refresh').removeClass('active-btn-header');
    // } else {
    //     $('.btn-refresh').addClass('active-btn-header');
    // }
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("status-table")) {
        $(".status-table .block1").removeClass("toggle");

        if ($('.status-table .block1 .list-status.select-btn').length >= 2) {
            $(".input-status").val('Фильтр');
            // console.log($(".input-status").val())
        }
        // if ($('.status-table .block1 .list-status.select-btn').length == 1) {
        //     let appendStatus = $('.list-status.select-btn').text();
        //     $(".input-status").change().val(appendStatus);
        //     $('.status-table .list-status .all').removeClass("select-btn-static");
        //     $('.status-btn .list-status.select-btn').removeClass('select-btn');
        //     // console.log(appendStatus);

        // }

        if ($('.status-table .block1 .list-status.select-btn').length == 0) {
            $(".input-status").val('');
        }
        if ($('.status-table .block1 .list-status.select-btn').length == 1) {
            let appendStatus = $('.list-status.select-btn').text();
            $(".input-status").val(appendStatus);
            // $('.status-table .list-status .all').removeClass("select-btn-static");
            // $('.status-btn .list-status.select-btn').removeClass('select-btn');
            // $('.btn-refresh').addClass('active-btn-header');
        }
        changesInput();
        // $(".input-status").change(function() {
        //     if ($(".input-status").val() == 'Все') {
        //         $('.btn-refresh').removeClass('active-btn-header');
        //     } else {
        //         $('.btn-refresh').addClass('active-btn-header');
        //     }
        //     // $(this).attr('value');
        //     // console.log($(this).attr('value'))
        // });

    }
});

//menu status


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
        // $('.btn-refresh').addClass('active-btn-header');
        $('.colum-country .list').children('.all').removeClass("select-btn-static");
        $('.country-btn').children('.all').removeClass("select-btn-static");
    }
    if ($('.colum-country .block1 .list.select-btn').length >= 2) {
        $(".country-btn").html('Фильтр');
        // $('.btn-refresh').addClass('active-btn-header');

    }
    if ($('.colum-country .block1 .list.select-btn').length == 0) {
        $(".country-btn").html('Все');
        $('.colum-country .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    }
});
$(".colum-country .block1 .list .all").click(function() {
    $(".country-btn").html('Все');
    $(this).removeClass('select-btn');
    $('.colum-country .block1 .list').removeClass('select-btn');
    $(".colum-country .block1").removeClass("toggle");
    // $('.btn-refresh').removeClass('active-btn-header');
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-country")) {
        $(".colum-country .block1").removeClass("toggle");
        changesInput();
        // changeInputBtn();
    }
});

//menu country btn
//menu ip


function openMenu() {
    $(".list-small").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    $(this).css('width', '51px');
    $(this).children('.block1').addClass("toggle");
    // if ($(this).children('.block1').hasClass('toggle')) {
    //     $(this).css('width', '51px');
    //     $(this).children('.btn-small').removeClass('hide-arrow');
    // }
    $(this).children('.btn-small').removeClass('hide-arrow');
};

function closeMenu() {
    $(this).children('.block1').removeClass("toggle");
    $('.btn-wrap').css('width', '16px');
    $('.btn-wrap.width25').css('width', '25px');
    $('.btn-wrap.width18').css('width', '18px');
    if ($(this).children('.btn-small').html() == '') {
        $(this).children('.btn-small').removeClass('hide-arrow');
    } else {
        $(this).children('.btn-small').addClass('hide-arrow');
    }
};
$(".btn-small").on('click', btnMenu);
$('.btn-wrap').on('mouseenter', openMenu);
$('.btn-wrap').on('mouseleave', closeMenu);

function btnMenu() {
    $('.btn-wrap').on('mouseenter', openMenu);
    $('.btn-wrap').on('mouseleave', closeMenu);
    $(this).siblings('.block1').toggleClass("toggle");

    $(".list-small").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    // let oneMenuOpen = $(".block1");
    // $($(this).parent('.dropMenu').find('ul')).toggleClass('block-menu-toggle');
    // oneMenuOpen.map((_, i) => {
    //     if (!$(this).parents('.btn-wrap').find('.block1').hasClass(i.classList[1])) {
    //         $(i).removeClass("toggle");
    //     }
    // });
};


$(".list-small").click(function(e) {
    $(this).toggleClass('select-btn');
    $(".btn-small").off('click', btnMenu);
    $(this).parents('.btn-wrap').children('.btn-small').on('click', btnMenu);
    $('.btn-wrap').off('mouseenter', openMenu);
    $('.btn-wrap').off('mouseleave', closeMenu);
    $(this).parent().find('.list-small:first-child').removeClass('select-btn');

    if ($(this).parents('.btn-wrap').find('.select-btn').length == 1) {
        let appendCountry = $(this).parents('.btn-wrap').find('.select-btn').html();
        $(this).parents('.btn-wrap').children('.btn-small').html(appendCountry);
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length >= 2) {
        $(this).parents('.block1').siblings('.btn-small').html('<span class="list-item padding-left">Фильтр</span>');
    }
    if ($(this).parents('.btn-wrap').find('.select-btn').length == 0) {
        $(this).parents('.block1').siblings('.btn-small').html('');
        $(this).parent().find('.list-small:first-child').addClass('select-btn');
        $(this).parents('.btn-wrap').children('.btn-small').removeClass('hide-arrow');
    }
});
$(".list-small:first-child").click(function() {
    $(this).addClass('select-btn');
    $(this).parents('.btn-wrap').children('.btn-small').removeClass('hide-arrow');
    $(this).parents('.block1').siblings('.btn-small').html('');
    $(this).siblings().removeClass('select-btn');
    $(this).parents('.block1').removeClass("toggle");
    $('.btn-wrap').on('mouseenter', openMenu);
    $('.btn-wrap').on('mouseleave', closeMenu);
});

$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("btn-wrap")) {
        $(".btn-wrap .block1").removeClass("toggle");
        changesInput();
        // if ($('.btn-small').html() == '') {
        //     $('.btn-small').removeClass('hide-arrow');
        // } else {
        //     $('.btn-small').addClass('hide-arrow');
        // }
        $('.btn-small').each(function() {
            if ($(this).html() == '') {
                $(this).removeClass('hide-arrow');
            } else { $(this).addClass('hide-arrow'); }
        });
        // $('.btn-small').addClass('hide-arrow');
        $('.btn-wrap').on('mouseenter', openMenu);
        $('.btn-wrap').on('mouseleave', closeMenu);
        $(".btn-small").on('click', btnMenu);
        $('.btn-wrap').css('width', '16px');
        $(".btn-wrap.width25").css('width', '25px');
        $(".btn-wrap.width18").css('width', '18px');
    }
});

//menu ip
//menu delivery btn
$(".colum-delivery .delivery-btn").click(function() {
    $(".colum-delivery .block1").toggleClass("toggle");
    $(".list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-delivery .block1 .list").click(function() {
    $(".colum-delivery .list .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-delivery .block1 .list.select-btn').length == 1) {
        let appendDelivery = $('.colum-delivery .list.select-btn').html();
        $(".delivery-btn").html(appendDelivery);
        // $('.btn-refresh').addClass('active-btn-header');
        $('.colum-delivery .list').children('.all').removeClass("select-btn-static");
        $('.delivery-btn').children('.all').removeClass("select-btn-static");
    }
    if ($('.colum-delivery .block1 .list.select-btn').length >= 2) {
        $(".delivery-btn").html('Фильтр');
        // $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.colum-delivery .block1 .list.select-btn').length == 0) {
        $(".delivery-btn").html('Все');
        $('.colum-delivery .all').addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    }
});
$(".colum-delivery .block1 .list .all").click(function() {
    $(".delivery-btn").html('Все');
    $(this).removeClass('select-btn');
    $('.colum-delivery .block1 .list').removeClass('select-btn');
    $(".colum-delivery .block1").removeClass("toggle");
    // $('.btn-refresh').removeClass('active-btn-header');
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-delivery")) {
        $(".colum-delivery .block1").removeClass("toggle");
        changesInput();
    }
});
//menu delivery btn
//pay btn
$(".colum-pay .pay-btn").click(function() {
    $(".colum-pay .block1").toggleClass("toggle");
    $(".list").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-pay .block1 .list").click(function() {
    $(".colum-pay .list .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-pay .block1 .list.select-btn').length == 1) {
        let appendPay = $('.colum-pay .list.select-btn').html();
        $(".pay-btn").html(appendPay);
        // $('.btn-refresh').addClass('active-btn-header');
        $('.colum-pay .list').children('.all').removeClass("select-btn-static");
        $('.pay-btn').children('.all').removeClass("select-btn-static");
    }
    if ($('.colum-pay .block1 .list.select-btn').length >= 2) {
        $(".pay-btn").html('Фильтр');
        // $('.btn-refresh').addClass('active-btn-header');
    }
    if ($('.colum-pay .block1 .list.select-btn').length == 0) {
        $(".pay-btn").html('Все');
        $('.colum-pay .all').addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
        // $('.btn-refresh').removeClass('active-btn-header');
    }
});
$(".colum-pay .block1 .list .all").click(function() {
    $(".pay-btn").html('Все');
    $(this).removeClass('select-btn');
    $('.colum-pay .block1 .list').removeClass('select-btn');
    $(".colum-pay .block1").removeClass("toggle");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-pay")) {
        $(".colum-pay .block1").removeClass("toggle");
        changesInput();
    }
});

//pay btn

//depart btn
$(".text-lenght-2").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";
        $(this).text(text);
        $(this).parents('.list-depart').hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css("font-size", "10px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $('.list-depart').width();
            $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.5s forwards' });
            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
        });
    }
});
$(".colum-depart .depart-btn").click(function() {
    $(".input-depart").focus().val('');
    $(".colum-depart .block1").addClass("toggle");
    $(".list-depart").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-depart .block1 .list-depart").click(function() {
    $(".colum-depart .list-depart .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-depart .block1 .list-depart.select-btn').length == 1) {
        let appendDepart = $('.colum-depart .list-depart.select-btn').text();
        $(".input-depart").val(appendDepart);
        $('.colum-depart .list-depart .all').removeClass("select-btn-static");
        $('.depart-btn .list-depart.select-btn').removeClass('select-btn');
    }
    if ($('.colum-depart .block1 .list-depart.select-btn').length >= 2) {
        $(".input-depart").val('Фильтр');
    }
    if ($('.colum-depart .block1 .list-depart.select-btn').length == 0) {
        $(".input-depart").val('Все');
        $('.colum-depart .list-depart .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-depart .block1 .list-depart .all").parent().click(function() {
    $(".input-depart").val('Все');
    $(this).removeClass('select-btn');
    $('.colum-depart .block1 .list-depart').removeClass('select-btn');
    $(".colum-depart .block1").removeClass("toggle");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-depart")) {
        $(".colum-depart .block1").removeClass("toggle");
        if ($('.colum-depart .block1 .list-depart.select-btn').length >= 2) {
            $(".input-depart").val('Фильтр');
        }
        if ($('.colum-depart .block1 .list-depart.select-btn').length == 1) {
            let appendDepart = $('.colum-depart .list-depart.select-btn').text();
            $(".input-depart").val(appendDepart);
        }
        if ($('.colum-depart .block1 .list-depart.select-btn').length == 0) {
            $(".input-depart").val('');
        }
        changesInput();
    }
});

//depart btn
//employe btn
$(".text-lenght-3").text(function(i, text) {
    let boxMemory = text;
    if (text.length >= 20) {
        text = text.substring(0, 18) + "...";
        $(this).text(text);
        $(this).parents('.list-employe').hover(function(xy) {
            $('#tooltipBtn').text(boxMemory);
            $("#tooltipBtn").css("font-size", "10px");
            let posElement = this.getBoundingClientRect();
            let blockHeight = $(this).height();
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            let widthTooltip = $('#tooltipBtn').width();
            let heightTooltip = $('#tooltipBtn').height();
            let blockWidth = $('.list-employe').width();

            $("#tooltipBtn").css("left", posElement.x + blockWidth + 0 + "px").css("top", posElement.y - 2 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.5s forwards' });

            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
            }
        }).mouseleave(function(e) {
            $("#tooltipBtn").css({ 'animation': '' }).css("font-size", "12px");;
        });
    }
});
$(".colum-employe .employe-btn").click(function() {
    $(".input-employe").focus().val('');
    $(".colum-employe .block1").addClass("toggle");
    $(".list-employe").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-employe .block1 .list-employe").click(function() {
    $(".colum-employe .list-employe .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-employe .block1 .list-employe.select-btn').length == 1) {
        let appendEmploye = $('.colum-employe .list-employe.select-btn').text();
        $(".input-employe").val(appendEmploye);
        $('.colum-employe .list-employe .all').removeClass("select-btn-static");
        $('.status-btn .list-employe.select-btn').removeClass('select-btn');
    }
    if ($('.colum-employe .block1 .list-employe.select-btn').length >= 2) {
        $(".input-employe").val('Фильтр');
    }
    if ($('.colum-employe .block1 .list-employe.select-btn').length == 0) {
        $(".input-employe").val('Все');
        $('.colum-employe .list-employe .all').addClass("select-btn-static");

    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-employe .block1 .list-employe .all").parent().click(function() {
    $(".input-employe").val('Все');
    $(this).removeClass('select-btn');
    $('.colum-employe .block1 .list-employe').removeClass('select-btn');
    $(".colum-employe .block1").removeClass("toggle");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-employe")) {
        $(".colum-employe .block1").removeClass("toggle");
        if ($('.colum-employe .block1 .list-employe.select-btn').length >= 2) {
            $(".input-employe").val('Фильтр');
        }
        if ($('.colum-employe .block1 .list-employe.select-btn').length == 1) {
            let appendEmploye = $('.colum-employe .list-employe.select-btn').text();
            $(".input-employe").val(appendEmploye);
        }
        if ($('.colum-employe .block1 .list-employe.select-btn').length == 0) {
            $(".input-employe").val('');
        }
        changesInput();
    }
});

$(".colum-employe-prinyal .employe-btn").click(function() {
    $(".input-employe-prinyal").focus().val('');
    $(".colum-employe-prinyal .block1").addClass("toggle");
    $(".list-employe").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-employe-prinyal .block1 .list-employe").click(function() {
    $(".colum-employe-prinyal .list-employe .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length == 1) {
        let appendEmploye = $('.colum-employe-prinyal .list-employe.select-btn').text();
        $(".input-employe-prinyal").val(appendEmploye);
        $('.colum-employe-prinyal .list-employe .all').removeClass("select-btn-static");
        $('.status-btn .list-employe.select-btn').removeClass('select-btn');
    }
    if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length >= 2) {
        $(".input-employe-prinyal").val('Фильтр');
    }
    if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length == 0) {
        $(".input-employe-prinyal").val('Все');
        $('.colum-employe-prinyal .list-employe .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-employe-prinyal .block1 .list-employe .all").parent().click(function() {
    $(".input-employe-prinyal").val('Все');
    $(this).removeClass('select-btn');
    $('.colum-employe-prinyal .block1 .list-employe').removeClass('select-btn');
    $(".colum-employe-prinyal .block1").removeClass("toggle");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-employe-prinyal")) {
        $(".colum-employe-prinyal .block1").removeClass("toggle");
        if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length >= 2) {
            $(".input-employe-prinyal").val('Фильтр');
        }
        if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length == 1) {
            let appendEmploye = $('.colum-employe-prinyal .list-employe.select-btn').text();
            $(".input-employe-prinyal").val(appendEmploye);
        }
        if ($('.colum-employe-prinyal .block1 .list-employe.select-btn').length == 0) {
            $(".input-employe-prinyal").val('');
        }
        changesInput();
    }
});
$(".colum-employe-izmenil .employe-btn").click(function() {
    $(".input-employe-izmenil").focus().val('');
    $(".colum-employe-izmenil .block1").addClass("toggle");
    $(".list-employe").parents('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
});
$(".colum-employe-izmenil .block1 .list-employe").click(function() {
    $(".colum-employe-izmenil .list-employe .all").removeClass("toggle");
    $(this).toggleClass('select-btn');
    if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length == 1) {
        let appendEmploye = $('.colum-employe-izmenil .list-employe.select-btn').text();
        $(".input-employe-izmenil").val(appendEmploye);
        $('.colum-employe-izmenil .list-employe .all').removeClass("select-btn-static");
        $('.status-btn .list-employe.select-btn').removeClass('select-btn');
    }
    if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length >= 2) {
        $(".input-employe-izmenil").val('Фильтр');
    }
    if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length == 0) {
        $(".input-employe-izmenil").val('Все');
        $('.colum-employe-izmenil .list-employe .all').addClass("select-btn-static");
    } else if ($(this).children()[0].classList.contains('all')) {
        $(this).removeClass('select-btn');
        $(this).children().addClass("select-btn-static");
    }
});
$(".colum-employe-izmenil .block1 .list-employe .all").parent().click(function() {
    $(".input-employe-izmenil").val('Все');
    $(this).removeClass('select-btn');
    $('.colum-employe-izmenil .block1 .list-employe').removeClass('select-btn');
    $(".colum-employe-izmenil .block1").removeClass("toggle");
});
$(document).bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("colum-employe-izmenil")) {
        $(".colum-employe-izmenil .block1").removeClass("toggle");
        if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length >= 2) {
            $(".input-employe-izmenil").val('Фильтр');
        }
        if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length == 1) {
            let appendEmploye = $('.colum-employe-izmenil .list-employe.select-btn').text();
            $(".input-employe-izmenil").val(appendEmploye);

        }
        if ($('.colum-employe-izmenil .block1 .list-employe.select-btn').length == 0) {
            $(".input-employe-izmenil").val('');
        }
        changesInput();
    }
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
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
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
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
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
    if (e.target.closest(".btn-header") === null && e.target.closest(".notifications") === null && e.target.closest(".import-block") === null && e.target.closest(".modul-block") === null) {
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
        if ($(".btn-refresh").hasClass('active-btn-header')) {
            $(".wrap-hide").addClass('wrap-open');
        }
    }
});


//reset filter rotate
let rotate = 0;
$(".btn-header").first().click(function() {
    rotate = rotate + 360;
    $(".crm-input input").val('');
    $(".btn-refresh").css({
        "transform": "rotate(" + rotate + "deg)",
        'transition': '0.4s'
    });
    $('.btn-refresh').removeClass('active-btn-header');
    // $(".wrap-open").animate({ opacity: 0 }, 0).delay(100).animate({ opacity: 1 }, 0);
    // $(".wrap-open").css({ 'opacity': '0' }).delay(100).css({ 'opacity': '1' });
    //СБРОС КНОПОК
    $(".input-btn").val('');
    // $(".input-status").val('Все');
    $('.list-status').removeClass('select-btn');
    $('.status-table .block1 .list-status').removeClass('select-btn');


    // $(".input-depart").val('Все');
    $('.list-depart').removeClass('select-btn');
    $('.colum-depart .block1 .list-depart').removeClass('select-btn');

    // $(".input-employe").val('Все');
    $('.colum-employe .block1 .list-employe').removeClass('select-btn');
    $('.list-employe').removeClass('select-btn');


    // $(".all").addClass("select-btn-static");
    $('.list').removeClass('select-btn');
    $(".block1").removeClass("toggle");


    $(".country-btn").html('');
    $(".pay-btn").html('');
    $(".delivery-btn").html('');

    $(".ip-btn").html('');
    $('.list-ip').removeClass('select-btn');
    $('.list-ip:first-child').addClass('select-btn');

    $(".btn-small").html('');
    $('.list-small').removeClass('select-btn');
    $('.list-small:first-child').addClass('select-btn');

    $(".count-message").html('');
    $(".message-menu").removeClass('count-toggle');
    $(".message-list").removeClass('select-btn');

    $(".count-ttn").val('');
    $(".menu-ttn").removeClass('count-toggle');
    $(".list-ttn").removeClass('select-btn');

    //СБРОС КНОПОК
});


$(".crm-input .input-style , .crm-input .input-btn").change(function() {
    changesInput();
});


function changesInput() {
    let flag = false;
    $(".input-style , .input-btn, .country-btn , .pay-btn , .delivery-btn, .ip-btn, .count-message, .btn-small").each(function(_, item) {
        if (($(item).val() !== '' && $(item).val().toString().trim() !== "∞" && $(item).val() !== 'Все') || $(item).children().children().attr('data-img') === "" || $(item).children().attr('data-img') === "" || $(item)[0].innerText === "Фильтр" || $(item)[0].innerText === "П/п") {
            flag = true;
        }
        if (flag == true) {
            $('.btn-refresh').addClass('active-btn-header');
        } else {
            $('.btn-refresh').removeClass('active-btn-header');
        }
    });
}

// function changeInputBtn() {
//     $(".country-btn").each(function(_, item) {
//         if ($(item).children().children().attr('data-img') === "" || $(item)[0].innerText === "Фильтр") {
//             $('.btn-refresh').addClass('active-btn-header');
//         } else {
//             $('.btn-refresh').removeClass('active-btn-header');
//         }
//     });
// }



// $(document).ready(function() {
//     $('.crm-input').find(".input-style").change().each(function(ev) {
//         // if (!$(this).val()) {
//         //     $(this).attr("placeholder", "Type your answer here");
//         // }
//         if (!$(this).val() == '') {
//             $('.btn-refresh').addClass('active-btn-header');
//         } else {
//             $('.btn-refresh').removeClass('active-btn-header');
//         }
//     });
// });
//reset filter rotate