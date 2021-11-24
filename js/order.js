var btnOrderCount = 0;
$('.order-dropdown .btn-order').on('click', function(e) {
    // e.preventDefault();
    // $(this).parents('.info-user-block').css('overflow', '');
    $('.btn-order-input').removeClass('toggle');
    $(this).siblings('.btn-menu').toggleClass('toggle');
    $(this).siblings('.btn-order-input').toggleClass('toggle')
    if ($('.btn-menu.toggle').length > 1) {
        $('.btn-menu').removeClass('toggle');
        $(this).siblings('.btn-menu').toggleClass('toggle');
    }
    // if ($('.btn-order-input').length > 1) {
    //     $(this).siblings
    // }
    console.log($('.btn-order-search').val())
    $(this).siblings().find('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    // countFind = $(this).siblings('.btn-menu').find('.btn-menu-list').length;
    btnOrderCount = 0;
    // $(this).siblings('.btn-order-input').find('.countFindFunction').html(`(${countFind})`);
    btnOrderCount = $(this).parents('.order-dropdown').find('.btn-menu-list').length;
    // countList = $(this).find('.select-btn').length;

    // try {
    //     countList = [...$(this).find('.select-btn')].filter(x => $(x).find('.findFunction')[0].innerHTML !== 'Все').length;
    // } catch (error) {

    // }

    $(this).siblings('.btn-order-input').find('.btn-order-count').html(`(${btnOrderCount})`);
    // dataFind = countFind;
    // countFind = 0;
    // $('#spider').focus();
    setTimeout(function() {
        // $(this).parents('.order-dropdown').find('.btn-order-search').focus();
        $('.btn-order-input.toggle .btn-order-search').focus();
    }, 300);


    // console.log($('#spider'))
    $(".btn-order-search").val('');
    $(this).parents('.order-dropdown').find(".btn-menu-list").css('display', 'flex');
    // let memoryText = $(this).parents('.order-dropdown').find('.findFunction').text();
    // if ($(this).parents('.order-dropdown').find('.btn-order-search')[0].value !== "" && $(this).parents('.order-dropdown').find('.btn-order-search')[0].value !== " ") {
    //     let re = new RegExp($(this).parents('.order-dropdown').find('.btn-order-search')[0].value, "gui");
    //     let text_pr = memoryText.replace(re, x => `<span class="findUnderline">${x}</span>&shy;`);
    //     // console.log(text_pr)
    //     document.querySelector('.findFunction').innerHTML = textToHTML(text_pr);
    // } else {
    //     document.querySelector('.findFunction').innerText = memoryText;
    // }
    // console.log($(this).parents('.order-dropdown').find(".btn-menu-list"))
    // const memlist = [...$(this).parents('.order-dropdown').find(".btn-menu-list")];
    // $(this).parents('.order-dropdown').find(".btn-menu-list").detach();
    // $(this).parents('.order-dropdown').find('.simplebar-content').append(memlist);
    // e.stopPropagation();
    // console.log($('.btn-order-search').focus())
    // btnOrderCount = 0;
    // let idx = $('.btn-order-search').index($(this).parents('.order-dropdown').find('.btn-order-search'));
    // if (el === null || lastIndex !== idx) {
    //     el = [...$(this).parents('.order-dropdown').find('.btn-menu-list')];
    //     text = [...el.map(x => $(x).find('.findFunction')[0].innerText)]
    // }
    // for (let index = 0; index < el.length; index++) {
    //     const element = el[index];
    //     // console.log($(element).find('.product-item'), e.currentTarget.value);
    //     if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
    //         $(element).css('display', 'none');
    //     } else {
    //         if ($('.btn-order-search')[idx].value !== "" && idx !== 1) {
    //             let re = new RegExp($('.btn-order-search')[idx].value, "gui");
    //             let text_pr = text[index].replace(re, x => '<span class="findUnderline">' + x + '</span>');
    //             // let text_pr = text[index].replace(re, x => '<span class="findUnderline" style="background: #FFE600;color: black;">' + x + '</span>');
    //             // countFind += 1;
    //             // if (text[index] !== 'Все') {
    //             // }

    //             btnOrderCount += 1;
    //             $(element).css('display', 'flex')
    //             $($(element).find('.findFunction')[0]).html(textToHTML(text_pr));
    //             console.log('1')


    //         } else {
    //             // if (text[index] !== 'Все') {
    //             // }
    //             // countFind += 1;
    //             btnOrderCount += 1;

    //             $($(element).find('.findFunction')[0]).text(text[index]);
    //             // memoryLst = $($(element).find('.findFunction')[0]).text(text[index]);
    //             $(element).css('display', 'flex')
    //             console.log('2')


    //         }

    //         //    console.log(text_pr)
    //         // document.querySelector('.product-list.list-item').innerHTML = textToHTML(text_pr);
    //     }
    // }
    // // console.log($(this).parents('.btn-wrap-large').find('.countFindFunction'), countFind);
    // $(this).parents('.order-dropdown').find('.btn-order-count').html('(' + btnOrderCount + ')');
    // btnOrderCount = 0;
    // // dataFind = countFind;
    // // countFind = 0;
    // lastIndex = idx;
    // // ).find('.list-large'));
    // // e.currentTarget.valu
    // let memoryTooltip = 
    // if ($(this).parents('.order-dropdown').find('.btn-order-search')[0].value !== "") {
    //     let re = new RegExp($(this).parents('.order-dropdown').find('.btn-order-search')[0].value, "gui");
    //     let text_pr = memoryTooltip.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
    //     // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
    //     document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
    // } else {
    //     document.getElementById('tooltipBtn').innerHTML = memoryTooltip;
    // }
});
// $('.order-dropdown').on('mouseleave', function(e) {
//     // e.preventDefault();
//     // e.stopPropagation();
//     $('.btn-order-search').blur();

// });
// $('.order-dropdown').on('mousemove', function(e) {
//     // e.preventDefault();
//     // e.stopPropagation();
//     $('.btn-order-search').focus();

// });
// $('.order-dropdown').on('mouseenter', function() {
//     $('.btn-order-search').focus();
// });
$('.btn-menu-list').on('click', function() {
    let memoryList = $(this).text();
    let memoryList2 = $(this).html();
    let memoryListCountry = $(this).html();
    $(this).parents('.order-dropdown').find('.btn-order').text(memoryList);
    $('.findFunction').find('.findUnderline').removeClass('findUnderline');
    if ($(this).parents('.contact-description').hasClass('country-style')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(memoryListCountry);
        $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.contact-description').hasClass('pay-method')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(memoryList2);
        $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.delivery-description').hasClass('delivery-mail')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(memoryList2);
        $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.contact-description').hasClass('status')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(memoryList2);
        // $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.info-description').hasClass('calen-block')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(`<span class="info-btn-tooltip order-tooltip" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${memoryList}</span>`);
        // $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.contact-description').hasClass('user-decline')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(`<span style="max-width:167px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${memoryList}</span>`);
        // $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    if ($(this).parents('.contact-description').hasClass('otdel')) {

        $(this).parents('.order-dropdown').find('.btn-order').html(`<span style="max-width:167px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${memoryList}</span>`);
        // $(this).parents('.order-dropdown').find('.btn-order span:last-child').remove();
    }
    $(this).siblings().removeClass('select-btn');
    $(this).addClass('select-btn');
    $(this).parents('.btn-menu').removeClass('toggle');
    $(this).parents('.btn-menu').siblings('.btn-order-input').removeClass('toggle');
});
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("order-dropdown")) {
        $(".btn-menu").removeClass('toggle');
        $(".btn-order-input").removeClass('toggle');
        $('.findFunction').find('.findUnderline').removeClass('findUnderline');

        // $(".btn-order-search").val('');
        // $(".btn-menu-list").css('display', 'block');
    }
});
// $('.btn-order-search').focus();
$('.comment-block').on('mouseenter', function() {
    $('.comment-input').focus().attr('placeholder', 'Ввод');
});
$('.comment-block').on('mouseleave', function() {
    $('.comment-input').blur().attr('placeholder', '');
})
$('.kartochka').click(function() {
    if ($('.order').hasClass('orderModeOn')) {
        $('.order').removeClass('orderModeOn');
        $('.scroll-wrap , .scroll-wrap2 , .arrow-bg').css('filter', 'none');
        $('.bg-blur').css('display', 'none');
    } else {
        $('.order').addClass('orderModeOn');
        $('.scroll-wrap , .scroll-wrap2 , .arrow-bg').css('filter', '4px');
        $('.bg-blur').css('display', 'block');
    }
});

$('body').on('mouseenter', '.order-tooltip', function(e) {
    let memoryTooltip = $(this).html();
    if ($(this).text() == 'Страна:') {
        let country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
        $('#tooltipBtn').html(country).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Покупатель:') {
        let pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
        $('#tooltipBtn').html(pokupatel).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Телефон:') {
        let tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
        $('#tooltipBtn').html(tel).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'E-mail:') {
        let tel = 'E-mail покупателя<br><span class="text-tooltip">Используется для автоматической отправки электронного чека ПРРО</span>';
        $('#tooltipBtn').html(tel).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Отдел:') {
        let depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
        $('#tooltipBtn').html(depart).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Статус:') {
        let status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
        $('#tooltipBtn').html(status).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Оплата:') {
        let pay = 'Используемый вид оплаты';
        $('#tooltipBtn').html(pay).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Вид:') {
        let delivery = 'Используемый вид доставки';
        $('#tooltipBtn').html(delivery).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Адрес:') {
        let delivery = 'Адрес доставки';
        $('#tooltipBtn').html(delivery).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'TTH:' || $(this).text() == 'TTH 2:') {
        let ttn = 'Номер товарно-транспортной накладной';
        $('#tooltipBtn').html(ttn).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'ПРРО:') {
        let prro = 'Программный реестр расчётных операций<br><span class="text-tooltip">Используется для фиксации прихода денежных средств от продажи товаров за наличный или безналичный расчет.<br> Данные о чеках передаются сразу в ГНС Украины.</span>';
        $('#tooltipBtn').html(prro).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'IP:') {
        let ip = 'IP адрес, страна, тип устройства, ОС и браузер с которого поступил заказ<br><span class="text-tooltip">Используется для:<br>-Анализа маркетологами<br>-Блокировки IP в случае спама</span>';
        $('#tooltipBtn').html(ip).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Сайт:') {
        let site = 'Источник заказа';
        $('#tooltipBtn').html(site).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Принял:') {
        let prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
        $('#tooltipBtn').html(prinyal).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Отправил:') {
        let whosend = 'Пользователь отправивший заказ<br><span class="text-tooltip">Автоматически закрепляется последний сотрудник редактировавший заказ, перед подтверждением получения посылки почтовой службой.<br> Используется для расчёта заплаты/премии сотрудника</span>';
        $('#tooltipBtn').html(whosend).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Изменил:') {
        let changed = 'Последний пользователь изменивший заказ';
        $('#tooltipBtn').html(changed).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Source:') {
        let utm = 'Значение utm_source';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Medium:') {
        let utm = 'Значение utm_medium';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Term:') {
        let utm = 'Значение utm_term';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Content:') {
        let utm = 'Значение utm_content';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Campaign:') {
        let utm = 'Значение utm_campaign';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);
    }

    // if ($(this).parent().hasClass('utm-list')) {
    //     let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
    //     $('#tooltipBtn').html(utm).css('font-size', '14px');
    //     tooltipOrderHeader(this);
    // }
    if ($(this).hasClass('btn-order-count')) {
        let text = $(this).text();
        // text = text.slice(0) + text.slice(-1);
        let result = text.substring(1, text.length - 1)
        $('#tooltipBtn').html(`Элементов в фильтре:<br>- найдено ${result}`);
        tooltipOrderHeader(this);
    }
    if ($(this).hasClass('generate-email')) {
        let generateEmail = 'Сгенерировать E-mail';
        // text = text.slice(0) + text.slice(-1);
        // let result = text.substring(1, text.length - 1)
        $('#tooltipBtn').html(`${generateEmail}`);
        tooltipOrderHeader(this);
    }
    if ($(this).text() == 'Товар') {
        // let generateEmail = 'Сгенерировать E-mail';
        // text = text.slice(0) + text.slice(-1);
        // let result = text.substring(1, text.length - 1)
        $('#tooltipBtn').html(`Товар учавствующий в заказе`).css('font-size', '14px');
        tooltipOrderHeader(this);
        e.stopPropagation();
    }
    if ($(this).text() == 'Дополнительные поля') {
        let field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';
        // let generateEmail = 'Сгенерировать E-mail';
        // text = text.slice(0) + text.slice(-1);
        // let result = text.substring(1, text.length - 1)
        $('#tooltipBtn').html(field).css('font-size', '14px');
        tooltipOrderHeader(this);
    }
    if ($(this).hasClass('product-delete')) {
        $('#tooltipBtn').html(`Удалить товар`);
        tooltipOrderButtonDelete(this);
    }
    if ($(this).hasClass('btnplus')) {
        $('#tooltipBtn').html(`Добавить товар`).css('font-size', '14px');
        tooltipOrderButtonDelete(this);
        e.stopPropagation();

    }
    // if ($(this).hasClass('info-calendary')) {
    //     $('#tooltipBtn').html(`Показывает время заказа`);
    //     tooltipOrderInfo(this);
    // }
    if ($(this).hasClass('info-calen-data')) {
        $('#tooltipBtn').html(`Дата получения посылки почтовой службой`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('info-calen-data-2')) {
        $('#tooltipBtn').html(`Время получения посылки почтовой службой`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('calen-data-change')) {
        $('#tooltipBtn').html(`Дата изменения заказа`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('calen-data-change-2')) {
        $('#tooltipBtn').html(`Время изменения заказа`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('calen-data-accept')) {
        $('#tooltipBtn').html(`Дата подтверждения заказа`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('calen-data-accept-2')) {
        $('#tooltipBtn').html(`Время подтверждения заказа`);
        tooltipOrderInfo(this);
    }
    if ($(this).hasClass('info-calen-data-3')) {
        let days = $(this).children('.block-days').text();
        let hours = $(this).children('.block-hours').text();
        let min = $(this).children('.block-min').text();
        let sec = $(this).children('.block-sec').text();
        // console.log(days)
        // $('#tooltipBtn').html(`Отправлен через ${days} дн ${hours} час ${min} мин ${sec} сек`);
        if (days.slice(-2) == '00') {
            days = days.replace('00', '');
            //$('#tooltipBtn').html(`Отправлен через ${days} ${hours} час. ${min} мин. ${sec} сек.`);
        }
        if (hours.slice(-2) == '00') {
            hours = hours.replace('00', '');
            // $('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} ${min} мин. ${sec} сек.`);
        }
        if (min.slice(-2) == '00') {
            min = min.replace('00', '');
            //$('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} ${sec} сек.`);
        }
        if (sec.slice(-2) == '00') {
            sec = sec.replace('00', '');
            //$('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} мин. ${sec}`);
        }
        if (days.charAt(0) == '0') {
            days = days.charAt(1);
            //console.log(newDays)
            //$('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} мин. ${sec} сек.`);
        }
        if (hours.charAt(0) == '0') {
            hours = hours.charAt(1);
            // $('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} мин. ${sec} сек.`);
        }
        if (min.charAt(0) == '0') {
            min = min.slice(1);
            // $('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} мин. ${sec} сек.`);
        }
        if (sec.charAt(0) == '0') {
            sec = sec.slice(1);
            // $('#tooltipBtn').html(`Отправлен через ${days} дн. ${hours} час. ${min} мин. ${sec} сек.`);
        }
        $('#tooltipBtn').html(`<span style="white-space:pre">Отправлен через ${days !== '' ? days + ' дн' : ''} ${hours !== '' ? hours + ' час' : ''} ${min !== '' ? min + ' мин' : ''} ${sec !== '' ? sec + ' сек' : ''}</span>`);
        if ($(this).hasClass('calen-data-accept-3')) {
            $('#tooltipBtn').html(`Принят за ${days !== '' ? days + ' дн' : ''}  ${hours !== '' ? hours + ' час' : ''} ${min !== '' ? min + ' мин' : ''} ${sec !== '' ? sec + ' сек' : ''}`);
        }
        // console.log(days.slice(-2))
        tooltipOrderInfo(this);
    }
    // if ($(this).hasClass('btnplus')) {
    //     $('#tooltipBtn').html(`Добавить товар`);
    //     tooltipOrderButtonDelete(this);
    // }
    if ($(this).hasClass('add-ttn')) {
        $('#tooltipBtn').html(`Добавить ТТН`).css('font-size', '14px');
        tooltipOrderButtonDelete(this);
    }
    if ($(this).hasClass('btninfo')) {
        $('#tooltipBtn').html(`История заказа`).css('font-size', '14px');
        tooltipOrderButtonDelete(this);
    }

    if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
        $("#tooltipBtn").html(memoryTooltip);
        if ($(this).parents('.order-dropdown').find('.btn-order-search').val() !== "") {
            let re = new RegExp($(this).parents('.order-dropdown').find('.btn-order-search').val(), "gui");
            let text_pr = memoryTooltip.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
            // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
            document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
        } else {
            document.getElementById('tooltipBtn').innerHTML = memoryTooltip;
        }
        // $("#tooltipBtn").css("font-size", "12px");
        let posElement = this.getBoundingClientRect();
        // let blockHeight = $(this).height();
        // let screenWidth = document.body.clientWidth;
        // let screenHeight = document.body.clientHeight;
        // let widthTooltip = $('#tooltipBtn').width();
        // let heightTooltip = $('#tooltipBtn').height();
        let blockWidth = $(this).width();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        // if (screenWidth < posElement.x + widthTooltip + blockWidth) {
        //     $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
        // }
    }
    if ($(this).hasClass('utm-description')) {
        // $(this).text()
        if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
            $('#tooltipBtn').html($(this).text()).css('font-size', '14px');
            let posElement = this.getBoundingClientRect();
            let screenHeight = document.body.clientHeight;
            let blockHeight = $(this).height();
            let heightTooltip = $('#tooltipBtn').height();
            tooltipOrderHeader(this);
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 32 + "px");
            if (screenHeight < posElement.y + heightTooltip + 35) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight - 17 + 'px');
            }
        }
    }
    if ($(this).hasClass('info-btn-tooltip')) {
        // $(this).text()
        // if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
        $('#tooltipBtn').html($(this).text()).css('font-size', '14px');
        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();
        tooltipOrderHeader(this);
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
        // if (screenHeight < posElement.y + heightTooltip + 35) {
        //     $("#tooltipBtn").css('top', posElement.y - blockHeight - 17 + 'px');
        // }
        // }
    }
    if ($(this).hasClass('site-link')) {
        let text = $(this).text();
        text = text.charAt(0).toUpperCase() + text.slice(1);
        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();
        console.log(text)
        $('#tooltipBtn').html(`Перейти на сайт ${text}`);
        // tooltipOrderInfo(this);
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 25 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });


    }
    if ($(this).hasClass('field-input')) {
        // $(this).text()
        if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
            $('#tooltipBtn').html($(this).val()).css('font-size', '14px');
            let posElement = this.getBoundingClientRect();
            let screenHeight = document.body.clientHeight;
            let blockHeight = $(this).height();
            let heightTooltip = $('#tooltipBtn').height();
            tooltipOrderHeader(this);
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 32 + "px");
            if (screenHeight < posElement.y + heightTooltip + 35) {
                $("#tooltipBtn").css('top', posElement.y - blockHeight - 17 + 'px');
            }
        }
    }
    if ($(this).text() == 'UTM - метки') {
        let utm = 'UTM-метка<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>';
        $('#tooltipBtn').html(utm).css('font-size', '14px');
        tooltipOrderHeader(this);

    }
});
$('.order-tooltip').on('mouseleave', function() {
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});
// $(window).load(function() {
//     let link = 'https://offer.lp-crm.biz/crm-dlya-prom-ua';
//     $('site-link').attr('href', link);
// });
$(document).ready(function() {
    let link = 'https://offer.lp-crm.biz/crm-dlya-prom-ua/';
    console.log(link)
    $('.site-link').attr('href', link);
    link = link.replaceAll('https://', '');
    $('.site-link').text(link);
    // console.log($('.site-link').attr())
});
// $('.').on('mouseenter', function(){
//     if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
//         $("#tooltipBtn").html(memoryTooltip);
//         if ($(this).parents('.order-dropdown').find('.btn-order-search').val() !== "") {
//             let re = new RegExp($(this).parents('.order-dropdown').find('.btn-order-search').val(), "gui");
//             let text_pr = memoryTooltip.replace(re, x => '<span style="background: #FFE600; color: black;">' + x + '</span>');
//             // console.log(textToHTML(text_pr + '<br> <span class="cenaProduct3">Цена: 349.00</span>' + '<br><span class="idProduct3">ID: 243534</span> '))
//             document.getElementById('tooltipBtn').innerHTML = textToHTML(text_pr);
//         } else {
//             document.getElementById('tooltipBtn').innerHTML = memoryTooltip;
//         }
//         // $("#tooltipBtn").css("font-size", "12px");
//         let posElement = this.getBoundingClientRect();
//         // let blockHeight = $(this).height();
//         // let screenWidth = document.body.clientWidth;
//         // let screenHeight = document.body.clientHeight;
//         // let widthTooltip = $('#tooltipBtn').width();
//         // let heightTooltip = $('#tooltipBtn').height();
//         let blockWidth = $(this).width();
//         $("#tooltipBtn").css("left", posElement.x + blockWidth + 10 + "px").css("top", posElement.y - 2 + "px");
//         $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
//         // if (screenWidth < posElement.x + widthTooltip + blockWidth) {
//         //     $("#tooltipBtn").css('left', posElement.x - widthTooltip - 10 + 'px');
//         // }
//     }
// });
function tooltipOrderHeader(e) {
    let posElement = e.getBoundingClientRect();
    let screenHeight = document.body.clientHeight;
    let blockHeight = $(e).height();
    let heightTooltip = $('#tooltipBtn').height();
    $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
    if (screenHeight < posElement.y + heightTooltip + 30) {
        $("#tooltipBtn").css('top', posElement.y - blockHeight - 20 + 'px');
    }

    // if ($(e)[0].scrollWidth > $(e)[0].offsetWidth && $(e).hasClass('utm-description')) {
    //     $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 32 + "px");
    //     if (screenHeight < posElement.y + heightTooltip + 35) {
    //         $("#tooltipBtn").css('top', posElement.y - blockHeight - 17 + 'px');
    //     }
    // }
    $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
}

function tooltipOrderButtonDelete(e) {
    let posElement = e.getBoundingClientRect();
    $("#tooltipBtn").css("left", posElement.x + 10 - $("#tooltipBtn").width() + "px").css("top", posElement.y + 28 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
}

function tooltipOrderInfo(e) {
    let posElement = e.getBoundingClientRect();
    $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 20 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
}

$('.product-description span').on('mouseenter', function(e) {
    let memoryTooltip = $(this).text();

    if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
        $("#tooltipBtn").html(memoryTooltip);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
    }
    if ($(this).attr('data-images') == "video") {
        $('#tooltipBtn').html(`${memoryTooltip}<br><div class="img-product"><img src="./img/roz-nosok1.jpg" alt=""></div></div>`);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
    }
    if ($(this).attr('data-images') == "uroven") {
        $('#tooltipBtn').html(`${memoryTooltip}<br><div class="img-product"><img src="./img/roz-nosok1.jpg" alt=""></div></div>`);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + "px").css("top", posElement.y + 20 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-header 1s forwards' });
    }
});
$('.product-description span').on('mouseleave', function(e) {
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});
//BUTTON MINUS PLUS

$('.plus-btn, .minus-btn').on('mouseup', function() {
    $(this).css('transform', 'scale(1)');
});
$('.plus-btn, .minus-btn').on('mousedown', function() {
    $(this).css('transform', 'scale(0.6)');
});
//ПОЯВЛЕНИЕ БЛОКОВ
$('.currency-block').on('mouseenter', visiPlusMinus);
$('.currency-block').on('mouseleave', hidePlusMinus);

function hidePlusMinus() {
    $(this).find('.plus-btn').css('visibility', 'hidden');
    $(this).find('.minus-btn').css('visibility', 'hidden');
    // $('.plus-btn').css('display', 'none');
    // $('.minus-btn').css('display', 'none');
}

function visiPlusMinus() {
    $(this).find('.plus-btn').css('visibility', 'visible');
    $(this).find('.minus-btn').css('visibility', 'visible');
    FlagFocus = true;

    // $('.plus-btn').css('display', 'block');
    // $('.minus-btn').css('display', 'block');
}
//ВЫДЕЛЕНИЕ КАУНТА
$('.number-product').on('mouseenter', focusPrice);

function focusPrice() {
    this.select();
    // background-color: rgb(71, 74, 81, 0.2);
    $(this).css('background', '#afafb3');
}

//УХОД КАУНТА
$('.number-product').on('mouseleave', blurPrice);
$('.number-product').on('click', function() {
    // $('.plus-btn').css('visibility', 'hidden');
    // $('.minus-btn').css('visibility', 'hidden');
    // $('.plus-btn').css('display', 'none');
    // $('.minus-btn').css('display', 'none');
    // $('.plus-btn').css('visibility', 'hidden').css({
    //     'position': 'absolute',
    //     'right': '10px'
    // });
    // $('.minus-btn').css('visibility', 'hidden').css({
    //     'position': 'absolute',
    //     'left': '0px'
    // });
    // $(this).parent('div').css('width', $(this).width() + '36px');
    // let width = getTextWidth(this);
    // // add 10 px to pad the input.
    // let widthInPx = (width) + "px";
    // this.style.width = widthInPx;
    // console.log($(this).width())
    $(this).parent('div').css('width', $(this).width() + 36 + 'px');
    $('.number-product').off('mouseleave', blurPrice);
    $('.number-product').off('mouseenter', focusPrice);
    $('.currency-block').off('mouseenter', visiPlusMinus);
    $('.currency-block').off('mouseleave', hidePlusMinus);
    $(this).css('background', 'transparent');
});
//КЕЙАП КАУНТА
// $('.number-product').on('input', function(e, text) {

// });


//BUTTON MINUS PLUS
//CENA
let cena = '1487.00';
let FlagFocus = false;
// let arr = [
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
//     { cena: 1, count: 2, total: 3 },
// ]
// $('.number-product').keyup(function(e) {
//     let width = getTextWidth(this);
//     // add 10 px to pad the input.
//     let widthInPx = (width) + "px";
//     this.style.width = widthInPx;
//     this.value = this.value.replace(/[^0-9]/g, "").replace(/(^| )(0+)/g, "");
//     $('.plus-btn').css('visibility', 'hidden')
//     $('.minus-btn').css('visibility', 'hidden')
//         // $(this).parent('div').css('width', $(this).width() + 36 + 'px');
//     $('.number-product').off('mouseleave', blurPrice);
//     $('.number-product').off('mouseenter', focusPrice);
//     $('.currency-block').off('mouseenter', visiPlusMinus);
//     $('.currency-block').off('mouseleave', hidePlusMinus);
//     $(this).css('background', 'transparent');
//     if (e.keyCode === 13) {
//         let currentVal = $(this).val();
//         let priceForOne = $(this).parents('.currency-block').siblings('.price-for-one').find('input').val();
//         $(this).parents('.currency-block').siblings('.all-price').text(currentVal * cena);
//         const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
//         const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
//         $(this).parents('.currency-block').siblings('.all-price').text(olol);
//         $(this).blur();

//         if ($(this).val() == "") {
//             $(this).val('1');
//             const olol = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
//             $(this).parents('.currency-block').siblings('.all-price').text(olol);
//         }
//         let width = getTextWidth(this);
//         // add 10 px to pad the input.
//         let widthInPx = (width) + "px";
//         this.style.width = widthInPx;
//         // $(this).parent('div').css('width', $(this).parent('div').width() + '36px');
//         $('.plus-btn').css('visibility', 'hidden').css({
//             'position': 'relative',
//             'right': '0'
//         });
//         $('.minus-btn').css('visibility', 'hidden').css({
//             'position': 'relative',
//             'left': '0'
//         });
//         $(this).parent('div').css('width', $(this).width() + 36 + 'px');
//         $('.number-product').on('mouseleave', blurPrice);
//         $('.number-product').on('mouseenter', focusPrice);
//         $('.currency-block').on('mouseenter', visiPlusMinus);
//         $('.currency-block').on('mouseleave', hidePlusMinus);
//     }
// });

$('.number-product').on('input', function(e) {
    let width = getTextWidth(this);
    // add 10 px to pad the input.
    let widthInPx = (width) + "px";
    this.style.width = widthInPx;
    this.value = this.value.replace(/[^0-9]/g, "").replace(/(^| )(0+)/g, "");
    $('.plus-btn').css('visibility', 'hidden')
    $('.minus-btn').css('visibility', 'hidden')
        // $(this).parent('div').css('width', $(this).width() + 36 + 'px');
    $('.number-product').off('mouseleave', blurPrice);
    $('.number-product').off('mouseenter', focusPrice);
    $('.currency-block').off('mouseenter', visiPlusMinus);
    $('.currency-block').off('mouseleave', hidePlusMinus);
    $(this).css('background', 'transparent');
});
$('.number-product').keyup(function(e) {
    if (e.keyCode === 13) {
        let currentVal = $(this).val();
        let priceForOne = $(this).parents('.currency-block').siblings('.price-for-one').find('input').val();
        $(this).parents('.currency-block').siblings('.all-price').text(currentVal * cena);
        const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
        const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
        $(this).parents('.currency-block').siblings('.all-price').text(olol);
        $(this).blur();
        if ($(this).val() == "") {
            $(this).val('1');
            const olol = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
            $(this).parents('.currency-block').siblings('.all-price').text(olol);
        }
        let width = getTextWidth(this);
        // add 10 px to pad the input.
        let widthInPx = (width) + "px";
        this.style.width = widthInPx;
        // $(this).parent('div').css('width', $(this).parent('div').width() + '36px');
        $('.plus-btn').css('visibility', 'hidden').css({
            'position': 'relative',
            'right': '0'
        });
        $('.minus-btn').css('visibility', 'hidden').css({
            'position': 'relative',
            'left': '0'
        });
        $(this).parent('div').css('width', $(this).width() + 36 + 'px');
        $('.number-product').on('mouseleave', blurPrice);
        $('.number-product').on('mouseenter', focusPrice);
        $('.currency-block').on('mouseenter', visiPlusMinus);
        $('.currency-block').on('mouseleave', hidePlusMinus);
    }
});

$('.minus-btn').on('click', function() {
    let currentVal = $(this).siblings('.number-product').val();
    $(this).siblings('.number-product').val(parseInt(currentVal) - 1);
    $(this).parents('.currency-block').siblings('.all-price').html(cena * $(this).siblings('.number-product').val());
    const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
    const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
    $(this).parents('.currency-block').siblings('.all-price').text(olol);
    if (parseInt($(this).siblings('.number-product').val()) <= 1) {
        $(this).siblings('.number-product').val('1');
        $(this).parents('.currency-block').siblings('.all-price').html($(this).parents('.currency-block').siblings('.price-for-one').find('input').val());
    }
    // let width = getTextWidth($(this).siblings('.number-product').width());
    // // add 10 px to pad the input.
    // let widthInPx = (width) + "px";
    // $(this).siblings('.number-product').css('width', width + 'px');
    // let hey = $(this).siblings('.number-product');
    // hey.css('width', ((hey.val().length + 1) * 5.5) + 'px');
    // let width = getTextWidth(this.closest('div').children[1]);
    // // add 10 px to pad the input.
    // let widthInPx = (width) + "px";
    // this.closest('div').children[1].style.width = widthInPx;
    // $(this).parent('div').css('width', width + 36 + 'px')
    if ($(this).siblings('.number-product').val().length == 1) {
        $(this).siblings('.number-product').css('width', 12 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 2) {
        $(this).siblings('.number-product').css('width', 13.3 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 3) {
        $(this).siblings('.number-product').css('width', 19.95 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 4) {
        $(this).siblings('.number-product').css('width', 26.6 + 'px');
    }
    $(this).parent('div').css('width', $(this).siblings('.number-product').width() + 36 + 'px')
});
$('.plus-btn').on('click', function() {
    let currentVal = $(this).siblings('.number-product').val();
    $(this).siblings('.number-product').val(parseInt(currentVal) + 1);
    $(this).parents('.currency-block').siblings('.all-price').html(cena * $(this).siblings('.number-product').val());
    const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
    const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
    $(this).parents('.currency-block').siblings('.all-price').text(olol);
    if (parseInt($(this).siblings('.number-product').val()) >= 9999) {
        $(this).siblings('.number-product').val('9999');
        $(this).parents('.currency-block').siblings('.all-price').html((cena * 9999).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.'));
    }
    // let width = getTextWidth($(this).siblings('.number-product').width());
    // // add 10 px to pad the input.
    // let widthInPx = (width) + "px";
    // $(this).siblings('.number-product').css('width', width + 'px');
    // let hey = $(this).siblings('.number-product');
    // hey.css('width', ((hey.val().length + 1) * 5.5) + 'px');

    // console.log(this.closest('div').children[1])
    // let width = getTextWidth(this.closest('div').children[1]);
    // // add 10 px to pad the input.
    // let widthInPx = (width) + 7 + "px";
    // this.closest('div').children[1].style.width = widthInPx;
    if ($(this).siblings('.number-product').val().length == 1) {
        $(this).siblings('.number-product').css('width', 12 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 2) {
        $(this).siblings('.number-product').css('width', 13.3 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 3) {
        $(this).siblings('.number-product').css('width', 19.95 + 'px');
    } else if ($(this).siblings('.number-product').val().length == 4) {
        $(this).siblings('.number-product').css('width', 26.6 + 'px');
    }
    $(this).parent('div').css('width', $(this).siblings('.number-product').width() + 36 + 'px')

});
$('.price-for-one input').on('mouseenter', focusPrise2);

function focusPrise2() {
    this.select();
    FlagFocus = true;
};
$('.price-for-one input').on('mouseleave', blurPrice);
var widthElem = 0;
$('.price-for-one input').on('click', function() {
    // $('.plus-btn').css('visibility', 'hidden');
    // $('.minus-btn').css('visibility', 'hidden');
    // this.value = this.value.replace('&nbsp;', '');
    // console.log(this.value)
    // let mem = this.value;
    // console.log(mem.replace(' ', ''));
    // let memText = $(this).val();
    // memText.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')
    // $(this).val(cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.')); //шо за нах
    // const olol2 = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
    // $(this).val(olol2);
    // let price = $(this).val().split(' ');
    // cena.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
    $(this).val((+cena).toFixed(2));
    console.log(+cena)
        // $(this).val(cena.toFixed(2));
        // let huy = +($(this).val()).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
        // widthElem = $(this).width();
        // console.log(widthElem)
        // $(this).val(huy);
        // const olol2 = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
        // $(this).val(olol2);
        // $(this).css('text-align', 'right');
    $(this).parent('td').css('width', $(this).width() + 'px');
    // $(this).val(mem.replace(' ', ''));
    $('.price-for-one input').off('mouseleave', blurPrice);
    $('.price-for-one input').off('mouseenter', focusPrise2);
    // $(this).css('background', 'transparent');
    if ($(this).val().length == "") {
        $(this).val('0.00');
    }
});

function getTextWidth(el) {
    // uses a cached canvas if available
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    // get the full font style property
    var font = window.getComputedStyle(el, null).getPropertyValue('font');
    var text = el.value;
    // set the font attr for the canvas text
    context.font = font;
    var textMeasurement = context.measureText(text);
    return textMeasurement.width;
}


function blurPrice() {
    $(this).css('background', 'transparent');

    this.blur();
};
// $('.price-for-one input').keyup(function(e) {
//     this.value = this.value.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "").replace(/\.(?=.*\..*)/g, x => "");
//     let width = getTextWidth(this);
//     // add 10 px to pad the input.
//     let widthInPx = (width) + "px";
//     this.style.width = widthInPx;
//     // console.log($(this).parents('tbody').find('.number-product').val())
//     $('.price-for-one input').off('mouseleave', blurPrice);
//     $('.price-for-one input').off('mouseenter', focusPrise2);
//     let currentVal = $(this).val();
//     cena = currentVal;
//     if (e.keyCode === 13) {

//         let numberProduct = $(this).parents('tbody').find('.number-product').val();
//         $(this).parents('tbody').find('.all-price').text(cena * numberProduct);
//         const price = $(this).parents('tbody').find('.all-price').text().split(' ');
//         const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
//         $(this).parents('tbody').find('.all-price').text(olol);
//         const price2 = $(this).val().split(' ');
//         const olol2 = (+price2).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
//         $(this).val(olol2);
//         let width = getTextWidth(this);
//         // add 10 px to pad the input.
//         let widthInPx = (width) + "px";
//         this.style.width = widthInPx;

//         $(this).blur();
//         $('.price-for-one input').on('mouseleave', blurPrice);
//         $('.price-for-one input').on('mouseenter', focusPrise2);
//     }
// });
$('.price-for-one input').on('input', function(e) {
    this.value = this.value.replace(/[^0-9.,]/g, x => x = "").replace(/,/g, x => ".").replace(/(\.)(?=\1)/g, x => "").replace(/\.(?=.*\..*)/g, x => "");
    let width = getTextWidth(this);
    // add 10 px to pad the input.
    let widthInPx = (width) + "px";
    this.style.width = widthInPx;
    // $(this).css('width', widthElem + 'px');
    // console.log($(this).parents('tbody').find('.number-product').val())
    $('.price-for-one input').off('mouseleave', blurPrice);
    $('.price-for-one input').off('mouseenter', focusPrise2);

});
$('.price-for-one input').keyup(function(e) {
    let currentVal = $(this).val();
    cena = currentVal;
    if (e.keyCode === 13) {
        let numberProduct = $(this).parents('tbody').find('.number-product').val();
        $(this).parents('tbody').find('.all-price').text(cena * numberProduct);
        const price = $(this).parents('tbody').find('.all-price').text().split(' ');
        const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
        $(this).parents('tbody').find('.all-price').text(olol);
        const price2 = $(this).val().split(' ');
        const olol2 = (+price2).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
        $(this).val(olol2);
        let width = getTextWidth(this);
        // add 10 px to pad the input.
        let widthInPx = (width) + "px";
        this.style.width = widthInPx;
        $(this).blur();
        $(this).parent('td').css('width', $(this).width() + 'px');
        $('.price-for-one input').on('mouseleave', blurPrice);
        $('.price-for-one input').on('mouseenter', focusPrise2);
    }
})
$('.order').bind("click", function(e) {
    let $clicked = $(e.target);
    if (!$clicked.parents().hasClass("price-for-one") && !$clicked.parents().hasClass("currency-block")) {
        $('.price-for-one input').each(function() {
            console.log(FlagFocus);
            if (FlagFocus) {
                let numberProduct = $(this).parents('tbody').find('.number-product').val();
                $(this).parents('tbody').find('.all-price').text(cena * numberProduct);
                const price = $(this).parents('tbody').find('.all-price').text().split(' ');
                const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                $(this).parents('tbody').find('.all-price').text(olol);
                const olol2 = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                $(this).val(olol2);
                let width = getTextWidth(this);
                let widthInPx = (width) + "px";
                this.style.width = widthInPx;
                $(this).parent('td').css('width', $(this).width() + 'px');
                $('.price-for-one input').on('mouseleave', blurPrice);
                $('.price-for-one input').on('mouseenter', focusPrise2);
            }
        });
        $('.number-product').each(function() {
            if (FlagFocus) {
                $(this).css('background', 'transparent');
                let currentVal = $(this).val();
                $(this).parents('.currency-block').siblings('.all-price').text(currentVal * cena);
                const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
                const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                $(this).parents('.currency-block').siblings('.all-price').text(olol);
                let width = getTextWidth(this);
                let widthInPx = (width) + "px";
                this.style.width = widthInPx;
                if ($(this).val() == "") {
                    $(this).val('1');
                    const olol = (+cena).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', '.');
                    $(this).parents('.currency-block').siblings('.all-price').text(olol);
                }

                $('.number-product').on('mouseleave', blurPrice);
                $('.number-product').on('mouseenter', focusPrice);
                $('.currency-block').on('mouseenter', visiPlusMinus);
                $('.currency-block').on('mouseleave', hidePlusMinus);
                $(this).parent('div').css('width', $(this).width() + 36 + 'px');
                $('.plus-btn').css('visibility', 'hidden').css({
                    'position': 'relative',
                    'right': '0'
                });
                $('.minus-btn').css('visibility', 'hidden').css({
                    'position': 'relative',
                    'left': '0'
                });
                if ($(this).val().length == 1) {
                    $(this).css('width', '12px');
                    $(this).parent('div').css('width', '48px');
                }
                FlagFocus = false;
            }
        });
    } else {
        FlagFocus = true;
    }
});
//CENA
$('#btnAddProduct').on('click', function() {
    $('.product-table tbody').append(
        '<tr class="addit-product"><td>2343-22</td><td></td><td></td><td>2 234.00</td><td>1</td><td>2 234.00</td><td><button class="product-delete"></button></td></tr>'
    );
});
$('body').on('click', '.product-delete', function(e) {
    if ($(this).parents('tbody').find('tr').length > 1) {
        $(this).parents('tr').remove();
    }
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
    e.stopPropagation();
});
$('.product-delete').on('mouseenter', function() {
    $(this).parents('tr').find('.product-description').css('opacity', '0.4');
});
$('.product-delete').on('mouseleave', function() {
    $(this).parents('tr').find('.product-description').css('opacity', '0.7');
});
// $('.number-product').on('input', function(e) {
//     // $(this).focus();
//     // let currentVal = $(this).val();
//     // let priceForOne = $(this).parents('.currency-block').siblings('.price-for-one').text();
//     // $(this).parents('.currency-block').siblings('.all-price').text(currentVal * priceForOne);
//     // const price = $(this).parents('.currency-block').siblings('.all-price').text().split(' ');
//     // const olol = (+price).toLocaleString('ru-RU', { minimumFractionDigits: 2 }).replace(',', '.');
//     // $(this).parents('.currency-block').siblings('.all-price').text(olol);
//     $('.plus-btn').css('visibility', 'hidden');
//     $('.minus-btn').css('visibility', 'hidden');
// });

// $('.adaptiveWidth').css('width', (($('.adaptiveWidth').val().length + 1) * 10) + 'px');
// $('.adaptiveWidth').((i, text) => {
//     this.style.width = ((this.value.length) * 8) + 'px';
//     // const price = text.split(' ');
//     // return `${(+price).toLocaleString('ru-RU',{ minimumFractionDigits: 2 }).replace(',','.')}`;
// });
$('.product-number-format').val((i, text) => {
    // this.style.width = ((this.value.length) * 8) + 'px';
    const price = text.split(' ');
    return `${(+price).toLocaleString('ru-RU',{ minimumFractionDigits: 2 }).replace(',','.')}`;
});

$('.product-number-format').text((i, text) => {
    const price = text.split(' ');
    return `${(+price).toLocaleString('ru-RU',{ minimumFractionDigits: 2 }).replace(',','.')}`;
});


// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').css({
//         'width': '100%',
//         'visibility': 'visible'
//     })
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').css({
//         'width': '0',
//         'visibility': 'hidden'
//     })
// });
// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').css({
//         'transition': '0.3s',
//         'left': '0px',
//         'visibility': 'visible',
//         'opacity': '1'
//     })
//     $(this).siblings('.info-user-block').css({
//         'transition': '0s',
//         'visibility': 'hidden',
//         'left': '-10px',
//         'opacity': '0'
//     })
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').css({
//         'transition': '0s',
//         'visibility': 'hidden',
//         'left': '-10px',
//         'opacity': '0'

//     })
//     $(this).children('.info-user-block').css({
//         'transition': '0.3s',
//         'left': '0px',
//         'visibility': 'visible',
//         'opacity': '1'
//     })
// });
// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').css({
//         'width': '100%',
//         'transition': '0.3s',
//         'visibility': 'visible'

//     })
//     $(this).siblings('.info-user-block').css({
//         'width': '0px',
//         'transition': '0s',
//         'visibility': 'hidden'

//     })
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').css({
//         'width': '0px',
//         'transition': '0s',
//         'visibility': 'hidden'


//     })
//     $(this).children('.info-user-block').css({
//         'width': '100%',
//         'transition': '0.3s',
//         'visibility': 'visible'

//     })
// });
// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').addClass('info-block-toggle');
//     $(this).siblings('.info-user-block').addClass('info-block-toggle-2');
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').removeClass('info-block-toggle');
//     $(this).children('.info-user-block').removeClass('info-block-toggle-2');
//     // $(this).children('.info-calendary-block').addClass('info-block-toggle-2');
//     // $(this).children('.info-user-block').addClass('info-block-toggle');
// });
// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').css({
//         'transform': 'rotateX(0deg)'
//     })
//     $(this).siblings('.info-user-block').css({
//         'transform': 'rotateX(90deg)'
//     })
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').css({
//         'transform': 'rotateX(90deg)'
//     })
//     $(this).children('.info-user-block').css({
//         'transform': 'rotateX(0deg)'
//     })
// });

$('.info-calendary').on('mouseenter', function() {
    $(this).siblings('.info-calendary-block').css({
        'width': '155px',
        'transition': '0.2s',
        'visibility': 'visible'
    })
    $(this).siblings('.info-user-block').css({
        // 'transition': '0',
        // // 'overflow': 'hidden',
        // 'width': '0px',
        'visibility': 'hidden',
        'opacity': '0'
    })
});
$('.calen-block').on('mouseleave', function() {
    $(this).children('.info-calendary-block').css({
        'width': '0px',
        'visibility': 'hidden',
        'transition': '0.2s'
    })
    $(this).children('.info-user-block').css({
        // 'width': '155px',
        // 'overflow': 'hidden',
        // 'width': '155px',
        'visibility': 'visible',
        'opacity': '1',
        'transition': '0.2s'
            // 'transition-delay': '0.1s'

    });
    // if ($('.btn-menu').hasClass('toggle')) {
    //     $(this).children('.info-user-block').css({
    //         // 'width': '155px',
    //         'overflow': '',
    //         'width': '155px',
    //         'visibility': 'visible',
    //         // 'opacity': '1',
    //         'transition': '0.3s'

    //     })
    // }
});
// var textarea = document.querySelector('textarea');

// textarea.addEventListener('keyup', function() {
//     if (this.scrollTop > 0) {
//         this.style.height = this.scrollHeight + "px";
//     }
// });
let rotateEmail = 0;
$(".generate-email").click(function() {
    rotateEmail = rotateEmail - 360;
    $(".generate-email").css({
        "transform": "rotate(" + rotateEmail + "deg)",
        'transition': '0.4s'
    });
});
$(document).on('mousemove', function() {
    // console.log('loh')
    let block = document.getElementById('order');
    // this = block;
    let posElement = block.getBoundingClientRect();
    // console.log(posElement)
    $('.bg-horizontal').css({
        'height': posElement.y - 50 + 'px'
    })
    $('.bg-horizontal-2').css({
        'height': posElement.y - 50 + 'px'
    })
    $('.bg-vert').css({
        'width': posElement.x - 50 + 'px'
    })
    $('.bg-vert-2').css({
        'width': posElement.x - 50 + 'px'
    })

});
// var btnOrderCount = 0;
// var memoryLst;
$('.btn-order-search').on('keyup', function(e) {
    // console.log('s')
    btnOrderCount = 0;
    let idx = $('.btn-order-search').index(this);
    if (el === null || lastIndex !== idx) {
        el = [...$(this).parents('.order-dropdown').find('.btn-menu-list')];
        text = [...el.map(x => $(x).find('.findFunction')[0].innerText)]
    }
    for (let index = 0; index < el.length; index++) {
        const element = el[index];
        // console.log($(element).find('.product-item'), e.currentTarget.value);
        if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
            $(element).css('display', 'none');
        } else {
            if ($('.btn-order-search')[idx].value !== "" && idx !== 1) {
                let re = new RegExp($('.btn-order-search')[idx].value, "gui");
                let text_pr = text[index].replace(re, x => '<span class="findUnderline">' + x + '</span>');
                // let text_pr = text[index].replace(re, x => '<span class="findUnderline" style="background: #FFE600;color: black;">' + x + '</span>');
                // countFind += 1;
                // if (text[index] !== 'Все') {
                // }

                btnOrderCount += 1;
                $(element).css('display', 'flex')
                $($(element).find('.findFunction')[0]).html(textToHTML(text_pr));
                console.log('1')


            } else {
                // if (text[index] !== 'Все') {
                // }
                // countFind += 1;
                btnOrderCount += 1;

                $($(element).find('.findFunction')[0]).text(text[index]);
                // memoryLst = $($(element).find('.findFunction')[0]).text(text[index]);
                $(element).css('display', 'flex')
                console.log('2')


            }

            //    console.log(text_pr)
            // document.querySelector('.product-list.list-item').innerHTML = textToHTML(text_pr);
        }
    }
    // console.log($(this).parents('.btn-wrap-large').find('.countFindFunction'), countFind);
    $(this).parents('.order-dropdown').find('.btn-order-count').html('(' + btnOrderCount + ')');
    btnOrderCount = 0;
    // dataFind = countFind;
    // countFind = 0;
    lastIndex = idx;
    // ).find('.list-large'));
    // e.currentTarget.value
});