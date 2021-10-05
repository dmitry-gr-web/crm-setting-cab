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
    if ($(this).hasClass('createTtn')) {
        $('#tooltipBtn').text(createTtn);
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
    let sendOrder = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта: За 1 день до платного хранения<br>- Укрпочта: За 1 день до платного хранения<br>- Justin: За 1 день до платного хранения<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
    let backOrderWarehouse = 'Возвращенный заказ получил отправитель<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить» подтвердил получение возвращенного заказа. Присвоил заказу статус «Возврат (завершён)», заблокировал заказ кнопкой «Завершить».<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
    let vikuplenOrder = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
    let moneyGrab = 'Наложенный платёж получен<br><span class="text-tooltip">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
    let backOrder = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
    let dropWaitTtn = 'Заказ передан Dropshipping компании<br><span class="text-tooltip">Ожидает создания товарно-транспортной накладной дропшиппером, для её присвоения заказу с дальнейшим отслеживания в CRM системе</span>';
    let dropAssignedTtn = 'Заказу присвоена ТТН<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «(Drop) Отправлен», после подтверждения получения посылки почтовой службой</span>';
    let dropSend = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта: За 1 день до платного хранения<br>- Укрпочта: За 1 день до платного хранения<br>- Justin: За 1 день до платного хранения<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
    let dropBuying = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает выплату от дропшиппера</span>';
    let dropFinish = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение выплаты от дропшиппера;<br>- выполнение заказа.<br>Присвоил заказу статус «(Drop) Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
    let dropBack = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает вычитания стоимости за возврат заказа из выплат дропшиппера</span>';
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
    let ip = 'IP адрес устройства с которого поступил заказ<br><span class="text-tooltip">Используется для отслеживания и блокировки в случаях спама</span>';
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
//подсказка в кнопки
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


