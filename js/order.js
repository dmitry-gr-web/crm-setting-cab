var btnOrderCount = 0;
$('.order-dropdown .btn-order').on('click', function(e) {

    $('.podlozhka-order').css({
        'display': 'block'
    })
    $('.btn-order-input').removeClass('toggle');
    $(this).siblings('.btn-menu').toggleClass('toggle');
    $(this).siblings('.btn-order-input').toggleClass('toggle')
    if ($('.btn-menu.toggle').length > 1) {
        $('.btn-menu').removeClass('toggle');
        $(this).siblings('.btn-menu').toggleClass('toggle');
    }

    $(this).siblings().find('.simplebar-content-wrapper').animate({ scrollTop: 0 }, { duration: 0 });
    btnOrderCount = 0;
    btnOrderCount = $(this).parents('.order-dropdown').find('.btn-menu-list').length;


    $(this).siblings('.btn-order-input').find('.btn-order-count').html(`(${btnOrderCount})`);

    setTimeout(function() {
        $('.btn-order-input.toggle .btn-order-search').focus();
    }, 300);


    $(".btn-order-search").val('');
    $(this).parents('.order-dropdown').find(".btn-menu-list").css('display', 'flex');

});

$('.btn-menu-list').on('click', function() {
    let memoryList = $(this).text();
    let memoryList2 = $(this).html();
    let memoryListCountry = $(this).html();
    $('.podlozhka-order').css('display', 'none');
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
    if ($(this).parents('.delivery-table').hasClass('delivery-table')) {
        $('.input-ttn').val('');
        $('.back-ttn').css('display', 'none');
        $(this).parents('.delivery-table').find('.inputPlusBackTtn').siblings('.gpsmetka').css('display', 'none');
        $(this).parents('.delivery-table').find('.inputPlusBackTtn').siblings('.add-ttn').css('display', 'inline-block');
    }
    //NV
    // console.log($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-Union-3'))
    if ($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-Union-3')) {
        novaPochtaSelect = true;
        ukrPochtaSelect = false
    } else {
        novaPochtaSelect = false;
    }

    //ukr
    if ($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-ukrposhta')) {
        ukrPochtaSelect = true;
        novaPochtaSelect = false
    } else {
        ukrPochtaSelect = false;
    }
    console.log(novaPochtaSelect)
    console.log(ukrPochtaSelect)

});
var novaPochtaSelect = true;
var ukrPochtaSelect = false;
// $(document).bind('click', function(e) {
//     var $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("order-dropdown")) {
//         $(".btn-menu").removeClass('toggle');
//         $(".btn-order-input").removeClass('toggle');
//         $('.findFunction').find('.findUnderline').removeClass('findUnderline');

//         // $(".btn-order-search").val('');
//         // $(".btn-menu-list").css('display', 'block');
//     }
// });
$('.podlozhka-order').on('click', function(e) {

    $(".btn-menu").removeClass('toggle');
    $(".btn-order-input").removeClass('toggle');
    $('.findFunction').find('.findUnderline').removeClass('findUnderline');
    $('.input-order').removeClass('inputOpenFlag');
    // $('.podlozhka-order').css('display', 'none');
    $('.input-order').on('mouseleave', inputFocus2);
    // $('.comment-block').on('mouseleave', commentBlur);
    $('.underline').css('width', '0%');
    $('.input-order').css('z-index', '');
    $('.podlozhka-order').css('display', 'none');

    // commentBlur();

    $('.input-order').css('opacity', '1');
    if ($('.input-ttn')) {
        if ($('.input-ttn').val().length == 0) {
            $('.back-ttn').css('display', 'none');
        } else {
            $('.back-ttn').css('display', 'flex');
        }
    }
    $('.comment-input-order').attr('placeholder', '');
    $('.comment').css({
        'width': '130px',
        'transition': '0.2s',
        'background-color': 'white',
        'left': '87px'

    });
    $('.comment-wrapper').css({
        'background-color': 'white',
        'border': '1px solid black'

    });
    $('.comment-input-order').css({
        'background-color': 'white'
    });
    $('.addres-delivery-block').css({
        'top': '0px',
        'visibility': 'hidden',
        'opacity': '0'
    });
    $('.addres-menu-find').removeClass('menu-find-active');
    $('.addres-result').children().remove();
    if (novaPochtaTrigger == 'adres') {
        let result = "г. " + $('.gorod').val() + " ул. " + $('.ulica').val() + " д." + $('.dom').val() + " кв." + $('.kvartira').val();
        $('.addres-result').append(`<div>${result}</div>`);
        if ($('.gorod').val() == '' && $('.ulica').val() == '' && $('.dom').val() == '' && $('.kvartira').val() == '') {
            $('.addres-result').find('div').remove();
            $('.addres-result').append(`<div></div>`);
        }

    } else if (novaPochtaTrigger == 'otdel') {
        let result = "г. " + $('.gorod').val() + " отд. " + $('.otdelenie').val();
        $('.addres-result').append(`<div>${result}</div>`);
        // Array.prototype.forEach.call(document.querySelectorAll('.addres-delivery-input'), function(e) {

        //     if (e.value == '') {
        //         $('.addres-result').find('div').remove();
        //         $('.addres-result').append(`<div></div>`);
        //     }

        // });
        let inputCheck = document.querySelectorAll('.addres-delivery-input');
        console.log(inputCheck)
        let countErrors = 0;
        inputCheck.forEach(e => {
            if (e.value == '') {
                countErrors++;
                $('.addres-result').find('div').remove();
                $('.addres-result').append(`<div></div>`);
            }
        });
        if (countErrors === inputCheck.length) {
            $('.addres-delivery-block').css({
                'top': '0px',
                'visibility': 'hidden',
                'opacity': '0'
            });
        } else if (countErrors !== 0) {
            // countErrors = 0;
            $('#tooltipBtn').html(`Заполните все поля!`);
            // document.querySelector('.otdelenie');
            let posElement = document.querySelector('.otdelenie').getBoundingClientRect();
            $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
            timeOutCopy = setTimeout(function() {
                $("#tooltipBtn").css({ 'animation': '' });
            }, 1500);
            $('.addres-delivery-block').css({
                'top': '25px',
                'visibility': 'visible',
                'opacity': '1'
            });
            $('.podlozhka-order').css('display', 'block');
            // $('.addres-result').find('div').remove();
            // $('.addres-result').append(`<div></div>`);

        }
        console.log(inputCheck.length)
        console.log(countErrors)
    }
    if (ukrPochtaTrigger == 'adres') {
        let result = "страна " + $('.strana').val() + " г. " + $('.gorod').val() + " ул. " + $('.ulica').val() + " д." + $('.dom').val() + " кв." + $('.kvartira').val() + " ин." + $('.index').val();
        $('.addres-result').append(`<div>${result}</div>`);
    } else if (ukrPochtaTrigger == 'otdel') {
        let result = "г. " + $('.gorod').val() + " ул. " + $('.ulica').val() + " д." + $('.dom').val() + " кв." + $('.kvartira').val() + " ин." + $('.index').val();
        $('.addres-result').append(`<div>${result}</div>`);
    }

    // $(this).keyup(function(e) {
    //     if (e.keyCode === 13) {

    //         $('.underline').css('width', '0%');
    //         // $('.podlozhka').css('z-index', '0').css('display', 'none');
    //     }

    // });

    // $(".btn-order-search").val('');
    // $(".btn-menu-list").css('display', 'block');

});
// $('.podlozhka-order').on('mouseenter', function(e) {

//     if (e.keyCode === 13) {
//         // if ($(this).hasClass('comment-input-order')) {
//         //     e.preventDefault();
//         //     return;
//         // }
//         $('.podlozhka-order').css('display', 'none');
//         // e.preventDefault();
//         $('.input-order').on('mouseleave', inputFocus2);
//         // $('.comment-block').on('mouseleave', commentBlur);

//         // $('.podlozhka-order').css('display', 'none');
//         $('.underline').css('width', '0%');
//         $('.input-order').css('opacity', '1');
//         // $(this).css('z-index', '9999');
//         $('.input-order').css('z-index', '');
//         $('.input-order').blur();
//         $('.input-order').removeClass('inputOpenFlag');

//         // if ($(this).hasClass('input-ttn')) {
//         //     if ($(this).val().length == 0) {
//         //         $('.back-ttn').css('display', 'none');
//         //     } else {
//         //         $('.back-ttn').css('display', 'flex');

//         //     }
//         // }
//         $('.comment-input-order').attr('placeholder', '');
//         $('.comment').css({
//             'width': '130px',
//             'transition': '0.2s',
//             'background-color': 'white',
//             'left': '87px'

//         });
//         $('.comment-wrapper').css({
//             'background-color': 'white',
//             'border': '1px solid black'

//         });
//         $('.comment-input-order').css({
//             'background-color': 'white'
//         });
//         // e.preventDefault();
//         // e.stopPropagation(); // if ($(this).hasClass('comment-input-order')) {
//         //     e.preventDefault();
//         // }
//     }

// });

// $('.btn-order-search').focus();
// $('.comment-block').on('mouseenter', function() {
//     $('.comment-input-order').attr('placeholder', 'Ввод');
//     $(this).find('.comment').css({
//         'width': '100px',
//         'transition': '0.2s',
//         'background-color': 'transparent',
//         'left': '-4px'

//     });
//     $(this).find('.comment-wrapper').css({
//         'background-color': '#F1F1F1',
//         'border': '1px solid transparent'

//     });
//     $(this).find('.comment-input-order').css({
//         'background-color': '#F1F1F1'
//     });
// });
// $('.comment-block').on('mouseleave', commentBlur);

// function commentBlur() {
//     // e = this;
//     $('.comment-input-order').attr('placeholder', '');
//     $(this).find('.comment').css({
//         'width': '130px',
//         'transition': '0.2s',
//         'background-color': 'white',
//         'left': '87px'

//     });
//     $(this).find('.comment-wrapper').css({
//         'background-color': 'white',
//         'border': '1px solid black'

//     });
//     $(this).find('.comment-input-order').css({
//         'background-color': 'white'
//     });
// };
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
        let posElement = this.getBoundingClientRect();
        $('#tooltipBtn').html(`Элементов в фильтре:<br>- найдено ${result}`);
        // tooltipOrderHeader(this);
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
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
        $('#tooltipBtn').html(`Создать ТТН`).css('font-size', '12px');
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 23 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    }
    if ($(this).hasClass('btninfo')) {
        $('#tooltipBtn').html(`История заказа`).css('font-size', '14px');
        // tooltipOrderInfo(this);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
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
        if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
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
        }
    }

    if ($(this).hasClass('site-link')) {
        let text = $(this).text();
        text = text.charAt(0).toUpperCase() + text.slice(1);
        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();
        // console.log(text)
        $('#tooltipBtn').html(`Перейти на сайт ${text}`);
        // tooltipOrderInfo(this);
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 25 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });


    }
    if ($(this).hasClass('info-ip')) {
        let text = $(this).text();
        // text = text.charAt(0).toUpperCase() + text.slice(1);
        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();
        // console.log(text)
        $('#tooltipBtn').html(`Скопировать IP ${text}`);

        // console.log($(this).find('span').is('#another-ip'))
        // tooltipOrderInfo(this);
        $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 23 + "px");
        // $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
        if ($(this).find('span').is('#another-ip')) {
            let textUnderline = $(this).text().replaceAll('X', '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>');
            $('#tooltipBtn').html(`Подсеть ${textUnderline}`);
            // $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 23 + "px");
            // $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
        }


    }
    if ($(this).hasClass('status-ttn-info')) {
        // $(this).text()
        if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
            $('#tooltipBtn').html($(this).text()).css('font-size', '12px');
            let posElement = this.getBoundingClientRect();
            let screenHeight = document.body.clientHeight;
            let blockHeight = $(this).height();
            let heightTooltip = $('#tooltipBtn').height();
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
        }
    }
    if ($(this).hasClass('backttntooltip')) {
        let count = $(this).children('.count').text();
        $('#tooltipBtn').html(`Остался ${count} день/я до платного хранения`);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }
    if ($(this).hasClass('btnbackttn')) {
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html(`Вернуть посылку отправителю`).css('font-size', '12px');
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }
    if ($(this).is('#gpsmetka-ttn')) {
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html(`Отследить посылку`);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }
    if ($(this).is('#gpsmetka-ttn-2')) {
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html(`Отследить посылку`);
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }
    if ($(this).is('.btn-find-otdel')) {
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html(`Указать отделение`).css('font-size', '12px');
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    }
    if ($(this).is('.btn-find-addres')) {
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html(`Указать адрес`).css('font-size', '12px');
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
        // $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    }
    if ($(this).is('.addres-result')) {
        $('.addres-result div').text();
        // let count = $('.back-ttn-tooltip').children('.count').text();
        $('#tooltipBtn').html($('.addres-result div').text());
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }
    if ($(this).hasClass('btn-order')) {
        if ($(this).children().hasClass('icon-Vector-2')) {
            $('#tooltipBtn').html(`Justin`);
        }
        if ($(this).children().hasClass('icon-Union-3')) {
            $('#tooltipBtn').html(`Новая Почта`);
        }
        if ($(this).children().hasClass('icon-ukrposhta')) {
            $('#tooltipBtn').html(`Укрпочта`);
        }
        if ($(this).children().hasClass('icon-Union-4')) {
            $('#tooltipBtn').html(`Самовывоз`);
        }
        if ($(this).children().hasClass('icon-Vector-15')) {
            $('#tooltipBtn').html(`Предоплата`);
        }
        if ($(this).children().hasClass('icon-Vector-17')) {
            $('#tooltipBtn').html(`Наложенный платёж`);
        }
        if ($(this).children().hasClass('icon-Vector-19')) {
            $('#tooltipBtn').html(`Оплачен`);
        }
        if ($(this).children().hasClass('icon-Vector-16')) {
            $('#tooltipBtn').html(`Обмен`);
        }
        if ($(this).children().hasClass('icon-Vector-18')) {
            $('#tooltipBtn').html(`Отказ`);
        }
        if ($(this).children().hasClass('al')) {
            $('#tooltipBtn').html(`Албания`);
        }
        if ($(this).children().hasClass('ru')) {
            $('#tooltipBtn').html(`Россия`);
        }
        if ($(this).children().hasClass('ua')) {
            $('#tooltipBtn').html(`Украина`);
        }
        if ($(this).children().hasClass('ar')) {
            $('#tooltipBtn').html(`Армения`);
        }
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").css("left", posElement.x + $(this).width() + 23 + "px").css("top", posElement.y - 3 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    }

    if ($(this).hasClass('tooltip-logo')) {
        let text = $(this).siblings('.info-ip').text();
        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();


        $('#tooltipBtn').html(`Блокировать пользователя с IP ${text}`);
        // tooltipOrderInfo(this);
        $("#tooltipBtn").css("left", posElement.x - 2 + "px").css("top", posElement.y - 30 + "px");
        // $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        if (flagImgLockNet) {
            $('#tooltipBtn').html(`Блокировать пользователя с IP ${text}`);
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        } else {
            $('#tooltipBtn').html(`Разблокировать пользователя с IP ${text}`);
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        }

    }
    if ($(this).hasClass('tooltip-logo-network')) {

        let posElement = this.getBoundingClientRect();
        let screenHeight = document.body.clientHeight;
        let blockHeight = $(this).height();
        let heightTooltip = $('#tooltipBtn').height();
        // console.log(text)
        // $('#tooltipBtn').html(`Скопировать IP ${text}`);
        let textUnderline = $(this).siblings('.info-ip').text().replaceAll('X', '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>');
        // $('#tooltipBtn').html(`Подсеть ${textUnderline}`);
        $('#tooltipBtn').html(`Блокировать пользователя и всю подсеть ${textUnderline}`);
        // tooltipOrderInfo(this);
        $("#tooltipBtn").css("left", posElement.x - 2 + "px").css("top", posElement.y + 20 + "px");
        // $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        if (flagImgLockNetAll) {
            $('#tooltipBtn').html(`Блокировать пользователя и всю подсеть ${textUnderline}`);
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        } else {
            $('#tooltipBtn').html(`Разблокировать пользователя и всю подсеть ${textUnderline}`);
            $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
        }


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
    clearTimeout(timeOutCopy);
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});
$('.info-description .ip-icons-position').children().on('mouseenter', function() {
    let desktop = 'Компьютер';
    let windows = 'Windows';
    let chrome = 'Chrome';
    let ua = 'Украина';
    let mobile = 'Смартфон';
    let tablet = 'Планшет';
    let android = 'Android';
    let ru = 'Россия';
    let safari = 'Safari';
    let unknown = 'Неопределено';
    let iOS = 'iOS';
    let firefox = 'Firefox';
    let alb = 'Албания';
    let opera = 'Opera';
    let edge = 'Edge';
    let yandex = 'Yandex Браузер';
    let mail = 'Mail Браузер';
    let wifiIcon = 'Wi-Fi сеть';
    if ($(this).hasClass('wifi-icon')) {
        $('#tooltipBtn').text(wifiIcon);
    }
    if ($(this).hasClass('icon-Vector-10')) {
        $('#tooltipBtn').text(desktop);
    }
    if ($(this).hasClass('icon-Union-13')) {
        $('#tooltipBtn').text(mobile);
    }
    if ($(this).hasClass('icon-Tablet')) {
        $('#tooltipBtn').text(tablet);
    }
    if ($(this).hasClass('icon-Union-17')) {
        $('#tooltipBtn').text(yandex);
    }
    if ($(this).hasClass('icon-Vector-13')) {
        $('#tooltipBtn').text(mail);
    }
    if ($(this).hasClass('icon-Vector-12')) {
        $('#tooltipBtn').text(edge);
    }
    if ($(this).hasClass('icon-Union-16')) {
        $('#tooltipBtn').text(opera);
    }
    if ($(this).hasClass('alb')) {
        $('#tooltipBtn').text(alb);
    }
    if ($(this).hasClass('ru')) {
        $('#tooltipBtn').text(ru);
    }
    if ($(this).hasClass('icon-Windows-1')) {
        $('#tooltipBtn').text(windows);
    }
    if ($(this).hasClass('icon-Vector-9')) {
        $('#tooltipBtn').text(iOS);
    }
    if ($(this).hasClass('icon-Vector-11')) {
        $('#tooltipBtn').text(firefox);
    }
    if ($(this).hasClass('icon-uniE941')) {
        $('#tooltipBtn').text(unknown);
    }
    if ($(this).hasClass('icon-Union-12')) {
        $('#tooltipBtn').text(android);
    }
    if ($(this).hasClass('icon-Union-15')) {
        $('#tooltipBtn').text(safari);
    }
    if ($(this).hasClass('icon-Union-14')) {
        $('#tooltipBtn').text(chrome);
    }
    if ($(this).hasClass('ua')) {
        $('#tooltipBtn').text(ua);
    }
    if ($(this).hasClass('icon-Union-18')) {
        $('#tooltipBtn').text(incorrectNumber);
    }
    let posElement = this.getBoundingClientRect();
    // let blockWidth = $(this).width();
    // let blockHeight = $(this).height();
    // let screenWidth = document.body.clientWidth;
    // let screenHeight = document.body.clientHeight;
    // let widthTooltip = $('#tooltipBtn').width();
    // let heightTooltip = $('#tooltipBtn').height();

    $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
    // if (screenWidth < posElement.x + widthTooltip) {
    //     $("#tooltipBtn").css('left', posElement.x - widthTooltip + blockWidth - 5 + 'px');
    // }
    // if (posElement.x < 110) {
    //     $("#tooltipBtn").css('left', posElement.x + blockWidth + 10 + 'px');
    // }
    // if (screenHeight < posElement.y + heightTooltip + 25) {
    //     $("#tooltipBtn").css('top', posElement.y - blockHeight + -5 + 'px');
    // }
    // if ($(this).hasClass('button-tooltip')) {
    //     // $('#tooltipBtn').text(incorrectNumber);
    //     if ($(this).hasClass('ua')) {
    //         $('#tooltipBtn').text(ua);
    //         $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
    //         $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    //     }
    //     if ($(this).hasClass('wifi-icon')) {
    //         $('#tooltipBtn').text(wifiIcon);
    //         $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
    //         $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
    //     }
    // }
});
$('.info-description .ip-icons-position').on('mouseleave', function() {
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});
// $(window).load(function() {
//     let link = 'https://offer.lp-crm.biz/crm-dlya-prom-ua';
//     $('site-link').attr('href', link);
// });
// $('.unlock-logo').on('click', function() {
//     $(this).css('display', 'none');
//     $(this).siblings('.lock-logo').css('display', 'inline-block');
// });
var flagImgLockNet = true;
var flagImgLockNetAll = true;
$('.tooltip-logo').on('click', function() {
    // flagImgLock = true;
    // clearTimeout(timeOutCopy);
    // $("#tooltipBtn").css({ 'animation': '' });
    // clearTimeout(timeOutCopy);
    // $(this).children().remove();
    if (flagImgLockNet == true) {
        // $("#tooltipBtn").css({ 'animation': '' });
        // clearTimeout(timeOutCopy);
        // $(this).find('img').attr('src', 'img/zablokirovan.svg').css('left', '-1px');
        // $(this).children().remove();
        // $(this).append('<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.70001 4.86V3.14444C2.70001 2.5757 2.92578 2.03025 3.32764 1.62809C3.7295 1.22593 4.27455 1 4.84287 1C5.41119 1 5.95623 1.22593 6.3581 1.62809C6.75996 2.03025 6.98573 2.5757 6.98573 3.14444V4.86" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        // $(this).find('svg').css('left', '-1px')
        $(this).find('.second').css('display', 'flex').css('left', '-1px');
        $(this).find('.first').css('display', 'none');
        // console.log('loh')
        let text = $(this).siblings('.info-ip').text();
        // $('#tooltipBtn').html(`Разблокировать пользователя с IP ${text}`);
        $('#tooltipBtn').html(`Заблокирован`);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
        // timeOutCopy = setTimeout(function() {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }, 1500);

        // $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');

        // clearTimeout(timeOutCopy);
        flagImgLockNet = false;
    } else {
        clearTimeout(timeOutCopy);
        $("#tooltipBtn").css({ 'animation': '' });
        // $("#tooltipBtn").css({ 'animation': '' });
        // $(this).find('img').attr('src', 'img/razblokirovan.svg').css('left', '0px');
        // $(this).children().remove();
        // $(this).append('<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85714 4.85718H1.85714C1.38376 4.85718 1 5.24093 1 5.71432V8.71432C1 9.18771 1.38376 9.57146 1.85714 9.57146H7.85714C8.33053 9.57146 8.71429 9.18771 8.71429 8.71432V5.71432C8.71429 5.24093 8.33053 4.85718 7.85714 4.85718Z" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 4.85714V3.14286C7 2.57454 7.22576 2.02949 7.62763 1.62763C8.02949 1.22576 8.57454 1 9.14286 1C9.71118 1 10.2562 1.22576 10.6581 1.62763C11.0599 2.02949 11.2857 2.57454 11.2857 3.14286V4.85714" stroke="#9C9B9E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        // $(this).find('svg').css('left', '0px')
        $(this).find('.second').css('display', 'none');
        $(this).find('.first').css('display', 'flex');
        let text = $(this).siblings('.info-ip').text();
        // $('#tooltipBtn').html(`Блокировать пользователя с IP ${text}`);
        $('#tooltipBtn').html(`Разблокирован`);
        // $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
        // timeOutCopy = setTimeout(function() {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }, 1500);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
        // clearTimeout(timeOutCopy);
        // timeOutCopy = setTimeout(function() {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }, 1500);
        if (flagImgLockNetAll == false) {
            $(this).parents('.info-description').find('.tooltip-logo-network').find('.second').css('display', 'none');
            // $(this).siblings('.tooltip-logo').css('display', 'none');
            $(this).parents('.info-description').find('.tooltip-logo-network').find('.first').css('display', 'flex');

            flagImgLockNetAll = true;
        }
        flagImgLockNet = true;
    }
    timeOutCopy = setTimeout(function() {
        $("#tooltipBtn").css({ 'animation': '' });
    }, 1500);
    // $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
    // clearTimeout(timeOutCopy);
    // timeOutCopy = setTimeout(function() {
    //     $("#tooltipBtn").css({ 'animation': '' });
    // }, 1500);

    // $(this).siblings('.unlock-logo').css('display', 'inline-block');
});
$('.tooltip-logo-network').on('click', function() {
    // flagImgLock = true;
    // clearTimeout(timeOutCopy);
    if (flagImgLockNetAll == true) {
        // $(this).find('img').attr('src', 'img/zablokirovan.svg').css('left', '-1px');
        // console.log('loh')
        // let text = $(this).siblings('.info-ip').text();
        let textUnderline = $(this).siblings('.info-ip').text().replaceAll('X', '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>');
        $(this).find('.second').css('display', 'flex').css('left', '-1px');
        $(this).find('.first').css('display', 'none');
        // $('#tooltipBtn').html(`Разблокировать пользователя и всю подсеть ${textUnderline}`);
        $('#tooltipBtn').html(`Заблокировано`);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
        // timeOutCopy = setTimeout(function() {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }, 1500);
        if (flagImgLockNet == true) {
            $(this).parents('.info-description').find('.tooltip-logo').find('.second').css('display', 'flex').css('left', '-1px');
            // $(this).siblings('.tooltip-logo').css('display', 'none');
            $(this).parents('.info-description').find('.tooltip-logo').find('.first').css('display', 'none');

            flagImgLockNet = false;
        }
        // $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
        flagImgLockNetAll = false;
    } else {
        clearTimeout(timeOutCopy);
        $("#tooltipBtn").css({ 'animation': '' });
        // clearTimeout(timeOutCopy);
        // $(this).find('img').attr('src', 'img/razblokirovan.svg').css('left', '0px');
        // let text = $(this).siblings('.info-ip').text();
        $(this).find('.second').css('display', 'none');
        $(this).find('.first').css('display', 'flex');
        let textUnderline = $(this).siblings('.info-ip').text().replaceAll('X', '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>');

        // $('#tooltipBtn').html(`Блокировать пользователя и всю подсеть ${textUnderline}`);
        $('#tooltipBtn').html(`Разблокировано`);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
        // timeOutCopy = setTimeout(function() {
        //     $("#tooltipBtn").css({ 'animation': '' });
        // }, 1500);
        flagImgLockNetAll = true;
    }
    timeOutCopy = setTimeout(function() {
        $("#tooltipBtn").css({ 'animation': '' });
    }, 1500);
    // $(this).siblings('.unlock-logo').css('display', 'inline-block');
});
$('.info-description-ip-block .unlock-logo').on('mouseenter', function() {
    $(this).parents('td.another-opacity-ip').css('height', '40px');
    $(this).parents('.info-description').find('.info-description-ip-block-all-network').css('height', '17px').css('padding-top', '8px');
    // let text = $(this).parents('.info-description').find('#another-ip').text();
    let text1 = $(this).siblings('.info-ip').find('#primary-ip').html();
    // console.log(text1)
    // text = text.slice(-3)
    $(this).parents('.info-description').find('#another-ip').text(text1);
    // console.log(text)
    let ovbrezaemDoTochki = text1.split(".").pop();
    // console.log(ovbrezaemDoTochki.length)
    text1 = text1.substring(0, text1.length - ovbrezaemDoTochki.length) + '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>'.repeat(ovbrezaemDoTochki.length);
    // console.log(text1)
    $(this).parents('.info-description').find('#another-ip').html(text1);
    // console.log(text)
    // $(this).siblings('.lock-logo').css('display', 'inline-block');
});

$('.another-opacity-ip').on('mouseleave', function() {
    $(this).css('height', '17px');
    $(this).find('.info-description-ip-block-all-network').css('height', '0px').css('padding-top', '0px');
    // $(this).siblings('.lock-logo').css('display', 'inline-block');
});
var widthInput = $('.input-ttn').width();
$('#gpsmetka-ttn').on('mouseenter', function() {
    $(this).siblings('.status-ttn-info').css({
        'width': '155px',
        'transition': '0.15s',
        'visibility': 'visible',
    });
    $(this).siblings('.inputPlusBackTtn').css({
        'visibility': 'hidden',
        'opacity': '0'
    });
});
$('.ttn-block-description').on('mouseleave', function() {
    $(this).children('.status-ttn-info').css({
        'width': '0px',
        'visibility': 'hidden',
        'transition': '0.15s'
    });
    $(this).children('.inputPlusBackTtn').css({
        'visibility': 'visible',
        'opacity': '1',
        'transition': '0.15s'
    });
});
$('#gpsmetka-ttn-2').on('mouseenter', function() {
    $(this).siblings('.status-ttn-info').css({
        'width': '155px',
        'transition': '0.15s',
        'visibility': 'visible',
    });
    $(this).siblings('.inputPlusBackTtn').css({
        'visibility': 'hidden',
        'opacity': '0'
    });
});
$('.ttn-block-description').on('mouseleave', function() {
    $(this).children('.status-ttn-info').css({
        'width': '0px',
        'visibility': 'hidden',
        'transition': '0.15s'
    });
    $(this).children('.inputPlusBackTtn').css({
        'visibility': 'visible',
        'opacity': '1',
        'transition': '0.15s'
    });
});
// $('.info-calendary').on('mouseenter', function() {
//     $(this).siblings('.info-calendary-block').css({
//         'width': '155px',
//         'transition': '0.2s',
//         'visibility': 'visible'
//     })
//     $(this).siblings('.info-user-block').css({
//         'visibility': 'hidden',
//         'opacity': '0'
//     })
// });
// $('.calen-block').on('mouseleave', function() {
//     $(this).children('.info-calendary-block').css({
//         'width': '0px',
//         'visibility': 'hidden',
//         'transition': '0.2s'
//     })
//     $(this).children('.info-user-block').css({
//         'visibility': 'visible',
//         'opacity': '1',
//         'transition': '0.2s'
//     });
// });
//COPY IP
// $('.input-user-phone').on('input', function() {
//     let text = $(this).val();
//     text = text.match(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/g)

//     console.log(text)
// });
document.getElementById("primary-ip").addEventListener("click", copy_text);
var timeOutCopy = null;

function copy_text() {
    var copyText = document.getElementById("primary-ip");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    let text = $(this).text();
    $('#tooltipBtn').html(`Скопирован`);
    $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
    timeOutCopy = setTimeout(function() {
        $("#tooltipBtn").css({ 'animation': '' });
    }, 1500);

}
// $(document).ready(function() {
//     let undrelineWIdth = $('.underline').width();
//     $('.ttn2-block').css('width', undrelineWIdth + 'px');
// });
$('.input-order').on('mouseenter', inputOrderFocus);

function inputOrderFocus() {
    $(this).siblings('.underline').css('width', '98%');
    if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
        $(this).siblings('.underline').css('width', '100%');
    }

    $(this).css('z-index', '9999');
    $(this).css('opacity', '0.5');
    if ($(this).hasClass('inputOpenFlag')) {
        clearTimeout(delayFocus);
    } else {
        delayFocus = setTimeout(() => {
            this.setSelectionRange(this.value.length, this.value.length);
            // $(this).focus();
            this.focus()
                // this.select();
        }, 0);
    }
    if ($(this).parents('.delivery-table').find('.btn-order').find('.icons').hasClass('icon-Vector-2')) {
        $('.input-ttn').css('width', '61px');
        $('.input-ttn').attr('data-count', '9');
    }
    if ($(this).parents('.delivery-table').find('.btn-order').find('.icons').hasClass('icon-Union-3')) {
        $('.input-ttn').css('width', '95px');
        $('.input-ttn').attr('data-count', '14');
    }
    if ($(this).parents('.delivery-table').find('.btn-order').find('.icons').hasClass('icon-ukrposhta')) {
        $('.input-ttn').css('width', '88px');
        $('.input-ttn').attr('data-count', '13');
    }
    if ($(this).hasClass('comment-input-order')) {
        $('.comment-input-order').attr('placeholder', 'Ввод');
        $('.comment').css({
            'width': '100px',
            'transition': '0.2s',
            'background-color': 'transparent',
            'left': '-4px'

        });
        $('.comment-wrapper').css({
            'background-color': '#F1F1F1',
            'border': '1px solid transparent'

        });
        $('.comment-input-order').css({
            'background-color': '#F1F1F1'
        });
    }
    $(this).click(function() {
        $('.podlozhka-order').css('display', 'block');
        $(this).addClass('inputOpenFlag');
        $(this).css('opacity', '0.5');
        $(this).siblings('.underline').css('width', '98%');
        if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
            $(this).siblings('.underline').css('width', '100%');
        }
        $('.input-order').off('mouseleave', inputFocus2);
    });
    // $(this).keyup(function(e) {
    //     console.log('lodsfldsolfo')
    //     if (e.keyCode === 13) {
    //         e.preventDefault();
    //         // if (e.keyCode === 13) {
    //         //     alert('submit');
    //         //     return false;
    //         // }
    //         // return;
    //     }


    // });
    // $(this).keypress(function(e) {
    //     if (e.shiftKey && e.keyCode === 13) {
    //         // let enter = e.keyCode === 13;
    //         // let shiftEnter = e.shiftKey + enter;
    //         // // let enter = 
    //         // shiftEnter = enter;
    //         // shiftEnter;

    //         // if (e.keyCode === 13) {
    //         // $(this).val($(this).val()+ '&#13;&#10;');
    //         $(this).val($(this).val() + '\n');

    //         // e.keyCode === 13;'
    //         // let text = $(this).val().replace(/\n/g, '</br>');
    //         // $(this).val(text);
    //         //     alert('submit');
    //         //     return false;
    //         // }
    //         return;
    //     }
    // })


    $(this).keypress(function(e) {
        $(this).addClass('inputOpenFlag');
        $(this).css('opacity', '0.5');
        $('.input-order').off('mouseleave', inputFocus2);
        $(this).siblings('.underline').css('width', '98%');
        if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
            $(this).siblings('.underline').css('width', '100%');
        }
        $('.podlozhka-order').css('display', 'block');

        // if (e.shiftKey && e.keyCode === 13) {
        //     // e.preventDefault();
        //     // console.log('sdasds')
        //     // let enter = e.keyCode === 13;
        //     // let shiftEnter = e.shiftKey + enter;
        //     // // let enter = 
        //     // shiftEnter = enter;
        //     // shiftEnter;

        //     // if (e.keyCode === 13) {
        //     // $(this).val($(this).val()+ '&#13;&#10;');
        //     $(this).val($(this).val() + '\n');

        //     // e.keyCode === 13;'
        //     // let text = $(this).val().replace(/\n/g, '</br>');
        //     // $(this).val(text);
        //     //     alert('submit');
        //     //     return false;
        //     // }
        //     // return;
        // }
        if (e.keyCode === 13 && !e.shiftKey) {
            // if ($(this).hasClass('comment-input-order')) {
            //     return;
            // }
            // e.preventDefault()
            $('.podlozhka-order').css('display', 'none');
            $('.input-order').off('mouseenter', inputOrderFocus);
            $('.input-order').on('mouseleave', inputFocus2);
            $('.underline').css('width', '0%');
            $('.input-order').css('opacity', '1');
            $(this).css('z-index', '');
            $(this).blur();
            $(this).removeClass('inputOpenFlag');

            if ($(this).hasClass('input-ttn')) {
                if ($(this).val().length == 0) {
                    $('.back-ttn').css('display', 'none');
                } else {
                    $('.back-ttn').css('display', 'flex');

                }
            }
            $('.comment-input-order-order').attr('placeholder', '');
            $('.comment').css({
                'width': '130px',
                'transition': '0.2s',
                'background-color': 'white',
                'left': '87px'

            });
            $('.comment-wrapper').css({
                'background-color': 'white',
                'border': '1px solid black'

            });
            $('.comment-input-order').css({
                'background-color': 'white'
            });
            return false;
        }

        if ($(this).hasClass('input-ttn')) {
            if ($(this).val().length >= 1) {
                $(this).parents('.delivery-description').find('.add-ttn').css('display', 'none');
                $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'inline-block');
            } else {
                $(this).parents('.delivery-description').find('.add-ttn').css('display', 'inline-block');
                $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'none');
            }

        }

    });

}
$('.input-order').on('mouseleave', inputFocus2);

function inputFocus2() {
    $('.input-order').on('mouseenter', inputOrderFocus);
    $(this).blur();
    $(this).css('z-index', '');
    $('.input-order').css('opacity', '1');
    $(this).siblings('.underline').css('width', '0%');
    $('.comment-input-order').attr('placeholder', '');
    $('.comment').css({
        'width': '130px',
        'transition': '0.2s',
        'background-color': 'white',
        'left': '87px'

    });
    $('.comment-wrapper').css({
        'background-color': 'white',
        'border': '1px solid black'

    });
    $('.comment-input-order').css({
        'background-color': 'white'
    });
    clearTimeout(delayFocus);
};
// $('.info-ip #primary-ip').on('mouseup', function() {
//     $(this).css('color', 'grey').css('transform', 'scale(1)');
// });
// $('.info-ip #primary-ip').on('mousedown', function() {
//     $(this).css('color', 'black').css('transform', 'scale(0.9)');
// });
//COPY IP
$(document).ready(function() {
    let link = 'https://offer.lp-crm.biz/crm-dlya-prom-ua/';
    // console.log(link)
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
// $("#tooltipBtn").css({ 'animation': 'delay-another 0.8s forwards' });
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
            // console.log(FlagFocus);
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



$('.info-calendary').on('mouseenter', function() {
    $(this).siblings('.info-calendary-block').css({
        'width': '155px',
        'transition': '0.2s',
        'visibility': 'visible'
    })
    $(this).siblings('.info-user-block').css({
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
        'visibility': 'visible',
        'opacity': '1',
        'transition': '0.2s'
    });
});

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
    btnOrderCount = 0;
    let idx = $('.btn-order-search').index(this);
    if (el === null || lastIndex !== idx) {
        el = [...$(this).parents('.order-dropdown').find('.btn-menu-list')];
        text = [...el.map(x => $(x).find('.findFunction')[0].innerText)]
    }
    for (let index = 0; index < el.length; index++) {
        const element = el[index];
        if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
            $(element).css('display', 'none');
        } else {
            if ($('.btn-order-search')[idx].value !== "" && idx !== 1) {
                let re = new RegExp($('.btn-order-search')[idx].value, "gui");
                let text_pr = text[index].replace(re, x => '<span class="findUnderline">' + x + '</span>');
                btnOrderCount += 1;
                $(element).css('display', 'flex')
                $($(element).find('.findFunction')[0]).html(textToHTML(text_pr));
                console.log('1')
            } else {
                btnOrderCount += 1;
                $($(element).find('.findFunction')[0]).text(text[index]);
                $(element).css('display', 'flex')
                console.log('2')
            }

        }
    }
    $(this).parents('.order-dropdown').find('.btn-order-count').html('(' + btnOrderCount + ')');
    btnOrderCount = 0;
    lastIndex = idx;
});

// $('.addres-delivery-input').on('input', function() {
//     if ($(this).hasClass('gorod')) {
//         let goroda = '<div class="goroda"><div>Кривой Рог</div><div>Одесса</div><div>Киев</div><div>Львов</div><div>Ужгород</div></div>';
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(goroda);
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '0px');
//     }
//     if ($(this).hasClass('ulica')) {
//         let ulica = '<div class="ulici"><div>Заречный</div><div>Волгоградская</div><div>Тополя</div><div>95 квартал</div><div>Василевского</div></div>';
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '28px');
//     }
//     if ($(this).hasClass('dom')) {
//         let dom = '<div class="doma"><div>22</div><div>14</div><div>43</div><div>23</div><div>98</div></div>';
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(dom);
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '56px');
//     }
//     if ($(this).hasClass('kvartira')) {
//         let kvartira = '<div class="kvartiri"><div>3</div><div>2</div><div>7</div><div>8</div><div>22</div></div>';
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(kvartira);
//         $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '84px');
//     }
// });
// $('.btn-find-otdel').on('click', function() {
//     $('.addres-delivery-block').css({
//         'top': '25px',
//         'visibility': 'visible',
//         'opacity': '1'
//     });
//     $('.podlozhka-order').css({
//         'display': 'block'
//     });
//     // $('.btn-find-addres').css({
//     //     'display': 'none'
//     // });
//     $('.btn-find-addres').removeClass('active-btn');
//     $(this).addClass('active-btn');
// });
$('body').on('click', '.btn-find-otdel', function() {
    $('.addres-delivery-block').css({
        'top': '25px',
        'visibility': 'visible',
        'opacity': '1'
    });
    $('.podlozhka-order').css({
        'display': 'block'
    });
    // $('.btn-find-addres').css({
    //     'display': 'none'
    // });
    // novaPochtaOtdel = false;
    $('.btn-find-addres').removeClass('active-btn');
    $(this).addClass('active-btn');
    $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
    if (novaPochtaSelect == true) {
        novaPochtaTrigger = 'otdel';
        ukrPochtaSelect = false;
        ukrPochtaTrigger = '';
        // console.log(novaPochtaOtdel)
        // console.log(novaPochtaAdress)
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"></div></div>`;
        const deliveryListOtdelenie = `<div class="addres-delivery-list"><div>Отд-ние:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="otdelenie addres-delivery-input" type="text"></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListOtdelenie);
        let data = json.areas;
        let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';

        // $('.gorod').focus();
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(goroda);
        countAdress = $('.findAddres div').length;
        $('.count-addres').html(countAdress);
        $('.addres-menu-find').addClass('menu-find-active');
        // $('.gorod').focus();
        setTimeout(() => {
            $('.gorod').focus();
        }, 200);
    }
    if (ukrPochtaSelect == true) {
        ukrPochtaTrigger = 'otdel';
        novaPochtaSelect = false;
        novaPochtaTrigger = '';
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text"></div></div>`;
        const deliveryListIndex = `<div class="addres-delivery-list"><div>Индекс:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="index addres-delivery-input" type="text"></div></div>`;
        const deliveryListKvartira = `<div class="addres-delivery-list"><div>Кв-ра:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text"></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListKvartira + deliveryListIndex);
    }
    // $('.underline').css('width', '0%');
    $(this).parents('.delivery-description').find('.addres-delivery-block .addres-delivery-list:first-child').find('input').siblings('.underline').css('width', '100%');

});
$('body').on('click', '.btn-find-addres', function() {
    // $('#gpsmetka-addres').css({
    //     'display': 'none'
    // });
    $('.addres-delivery-block').css({
        'top': '25px',
        'visibility': 'visible',
        'opacity': '1'
    });
    $('.podlozhka-order').css({
        'display': 'block'
    });
    $('.btn-find-otdel').removeClass('active-btn');
    $('.btn-find-otdel').addClass('decl-btn');
    $(this).addClass('active-btn');
    // novaPochtaAdress = false;
    if (novaPochtaSelect == true) {
        // novaPochtaAdress = true;
        ukrPochtaSelect = false;
        novaPochtaTrigger = 'adres';
        ukrPochtaTrigger = '';
        // ukrPochtaTrigger = false;
        // console.log(novaPochtaOtdel)
        // console.log(novaPochtaAdress)
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text"></div></div>`;
        const deliveryListKvartira = `<div class="addres-delivery-list"><div>Кв-ра:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text"></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListKvartira);
    }
    if (ukrPochtaSelect == true) {
        novaPochtaSelect = false;
        ukrPochtaTrigger = 'adres';
        novaPochtaTrigger = '';
        // novaPochtaTrigger = false;
        const deliveryListStrana = `<div class="addres-delivery-list"><div>Страна:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="strana addres-delivery-input" type="text"></div></div>`;

        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text"></div></div>`;
        const deliveryListKvartira = `<div class="addres-delivery-list"><div>Квартира:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text"></div></div>`;
        const deliveryListIndex = `<div class="addres-delivery-list"><div>Индекс:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="index addres-delivery-input" type="text"></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListStrana + deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListIndex + deliveryListKvartira);
    }
});
var novaPochtaTrigger;
var ukrPochtaTrigger;
// var novaPochtaOtdel = false;
// $('.delivery-chose-btn').on('mouseenter', function() {
//     $(this).children('.btn-find-addres').find('svg').css('width', '14px');
// });
// $('.delivery-chose-btn').on('mouseleave', function() {
//     $(this).children('.btn-find-addres').find('svg').css('width', '0px');
// });
$('.delivery-chose-btn').on('mouseenter', function() {
    $('.btn-find-otdel').removeClass('decl-btn');
    $(this).children('.btn-find-addres').addClass('active-btn');
    $(this).children('.btn-find-otdel').addClass('active-btn');


});
// $('.delivery-chose-btn').on('mouseleave', function() {
//     $(this).children('.btn-find-addres').removeClass('active-btn');
//     $(this).children('.gpsmetka').removeClass('active-btn');
// });
var countAdress = 0;
// $('body').on('mouseleave', '.addres-delivery-list', function(e) {

// });
$('body').on('mouseenter', '.addres-delivery-list', function(e) {
    clearTimeout(timeOutCopy);
    $("#tooltipBtn").css({ 'animation': '' });
    let posElement = this.getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y;

    if (novaPochtaTrigger == 'adres') {
        console.log('novapochta adres')
        let data = json.areas;
        let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';

        let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
        data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
            ulica += '<div>' + x.name + '</div>'
        });
        ulica += '</div>';

        let dom = '<b class="count-addres"></b><div class="doma findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                dom += '<div>' + y.key + '</div>'
            });
        });
        dom += '</div>';
        // let countAdress = $('.findAddres div').length;
        $(this).find('.underline').css('width', '100%');

        if ($(this).find('.addres-delivery-input').hasClass('gorod')) {
            $(this).find('.addres-delivery-input').focus();
            // let posElemnt = this.getBoundingClientRect();
            // posElemnt.y - posElemnt.y + 0 + 
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '0px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('ulica')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '28px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('dom')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '56px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('kvartira')) {
            $(this).find('.addres-delivery-input').focus();
            $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
            // let kvartira = '<div class="kvartiri"><div>3</div><div>2</div><div>7</div><div>8</div><div>22</div></div>';
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(kvartira);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '84px');
        }
    } else if (novaPochtaTrigger == 'otdel') {
        // console.log('ebob')
        // $('.gorod').focus();
        // $('.addres-menu-find').addClass('menu-find-active');
        if (!$('.addres-menu-find').hasClass('menu-find-active')) {
            $(this).find('.addres-delivery-input').focus();
            this.children[1].children[1].select()

            $('.underline').css('width', '0%');
            $(this).find('.underline').css('width', '100%');
            // $('.addres-menu-find div').remove()
            // if ($(this).find('.addres-delivery-input').hasClass('gorod')) {
            //     $('.addres-menu-find').css({
            //         'opacity': '1',
            //         'visibility': 'visible',
            //         'top': '0px'
            //     });
            // }
            // if ($(this).find('.addres-delivery-input').hasClass('otdelenie')) {
            //     $('.addres-menu-find').css({
            //         'opacity': '1',
            //         'visibility': 'visible',
            //         'top': '28px'
            //     });
            // }

        }
        console.log(this.children[1].children[1])
        console.log('novapochta otdelenie')
            // let data = json.areas;
            // let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
            // data.forEach(x => {
            //     // goroda += '<div>' + x.name + '</div>'
            //     x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
            //         goroda += '<div>' + y.name + '</div>'
            //     });
            // });
            // goroda += '</div>';



        // let otdelenie = '<b class="count-addres"></b><div class="otdelenie findAddres">';
        // data.forEach(x => {
        //     x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
        //         otdelenie += '<div>' + y.key + '</div>'
        //     });
        // });
        // otdelenie += '</div>';
        // let dom = '<b class="count-addres"></b><div class="doma findAddres">';
        // data.forEach(x => {
        //     x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
        //         dom += '<div>' + y.key + '</div>'
        //     });
        // });
        // dom += '</div>';
        // let countAdress = $('.findAddres div').length;
        // $('.underline').css('width', '0%');
        // $(this).find('.underline').css('width', '100%');
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '0px').css('visibility', 'visible')
        // if ($(this).find('.addres-delivery-input').hasClass('gorod')) {
        //     $(this).find('.addres-delivery-input').focus();
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
        //     countAdress = $('.findAddres div').length;
        //     $('.count-addres').html(countAdress);
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '0px').css('visibility', 'visible');
        // }
        // if ($(this).find('.addres-delivery-input').hasClass('otdelenie')) {
        //     $(this).find('.addres-delivery-input').focus();
        //     // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
        //     // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(otdelenie);
        //     countAdress = $('.findAddres div').length;
        //     $('.count-addres').html(countAdress);
        //     // if ($(this).parents('.addres-delivery-block').find('.gorod').val() !== '') {
        //     //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '28px').css('visibility', 'visible');
        //     // } else {
        //     //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '0').css('top', '28px').css('visibility', 'hidden');
        //     // }
        // }
    }
    //UKRPOCHTA
    if (ukrPochtaTrigger == 'otdel') {
        console.log('ukrpochta otdelenie')
        let data = json.areas;

        let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';

        let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
        data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
            ulica += '<div>' + x.name + '</div>'
        });
        ulica += '</div>';

        let dom = '<b class="count-addres"></b><div class="doma findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                dom += '<div>' + y.key + '</div>'
            });
        });
        dom += '</div>';
        // console.log(e)
        // let positionList = e.target.offsetTop;

        // let countAdress = $('.findAddres div').length;
        $(this).find('.underline').css('width', '100%');

        if ($(this).find('.addres-delivery-input').hasClass('gorod')) {
            $(this).find('.addres-delivery-input').focus();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);


            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('ulica')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
            if ($(this).find('.ulica').val() !== '') {
                $(this).parents('.addres-delivery-block').find('.index').val(getRandomIntInclusive(11111, 44444));
            } else {
                $(this).parents('.addres-delivery-block').find('.index').val('');
            }

        }
        if ($(this).find('.addres-delivery-input').hasClass('dom')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('kvartira')) {
            $(this).find('.addres-delivery-input').focus();
            $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');

        }
        if ($(this).find('.addres-delivery-input').hasClass('index')) {
            $(this).find('.addres-delivery-input').focus();
            $(this).find('.underline').css('width', '0%');
            $('.index').attr('readonly', '');
            $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');

        }
    } else if (ukrPochtaTrigger == 'adres') {
        console.log('ukrpochta adres')

        let data = json.areas;
        let strana = '<b class="count-addres"></b><div class="strana findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                strana += '<div>' + y.name + '</div>'
            });
        });
        strana += '</div>';
        let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';

        let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
        data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).forEach(x => {
            ulica += '<div>' + x.name + '</div>'
        });
        ulica += '</div>';

        let dom = '<b class="count-addres"></b><div class="doma findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).map(y => {
                dom += '<div>' + y.key + '</div>'
            });
        });
        dom += '</div>';
        // let countAdress = $('.findAddres div').length;
        $(this).find('.underline').css('width', '100%');
        if ($(this).find('.addres-delivery-input').hasClass('strana')) {
            $(this).find('.addres-delivery-input').focus();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(strana);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('gorod')) {
            $(this).find('.addres-delivery-input').focus();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('ulica')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
            if ($(this).find('.ulica').val() !== '') {
                $(this).parents('.addres-delivery-block').find('.index').val(getRandomIntInclusive(11111, 44444));
            } else {
                $(this).parents('.addres-delivery-block').find('.index').val('');
            }
        }
        if ($(this).find('.addres-delivery-input').hasClass('dom')) {
            $(this).find('.addres-delivery-input').focus();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            countAdress = $('.findAddres div').length;
            $('.count-addres').html(countAdress);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        }
        if ($(this).find('.addres-delivery-input').hasClass('kvartira')) {
            $(this).find('.addres-delivery-input').focus();
            $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
            // let kvartira = '<div class="kvartiri"><div>3</div><div>2</div><div>7</div><div>8</div><div>22</div></div>';
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(kvartira);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '84px');
        }
        if ($(this).find('.addres-delivery-input').hasClass('index')) {
            $(this).find('.addres-delivery-input').focus();
            $(this).find('.underline').css('width', '0%');
            $('.index').attr('readonly', '');
            $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');

        }
    }


});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
$('body').on('mouseleave', '.addres-delivery-list', function() {
    // $(this).find('.underline').css('width', '0%');
    // $(this).find('.addres-delivery-input').blur();
    if (!$('.addres-menu-find').hasClass('menu-find-active')) {
        this.children[1].children[1].blur();
        $('.underline').css('width', '0%');
    }


    // $('.underline').css('width', '0%');
    // $(this).find('.underline').css('width', '100%');
});
$('.addres-delivery-block').on('click', function() {
    $('.addres-menu-find').removeClass('menu-find-active');
});
$('body').on('click', '.goroda div', function() {
    // $(this).text();
    $('.gorod').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    $(this).parents('.addres-delivery-block').find('.otdelenie').val('');
    if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.otdelenie.addres-delivery-input')) {
        let data = json.areas;
        let otdelenie = '<b class="count-addres"></b><div class="otdelenie findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                otdelenie += '<div>' + y.key + '</div>'
            });
        });
        otdelenie += '</div>';
        $('.otdelenie.addres-delivery-input').focus();
        $('.underline').css('width', '0%');
        $('.otdelenie.addres-delivery-input').siblings('.underline').css('width', '100%');
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(otdelenie);
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', '28px');
        countAdress = $('.findAddres div').length;
        $('.count-addres').html(countAdress);

        // if ($(this).parents('.addres-delivery-block').find('.gorod').val() !== '') {
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', '28px').css('visibility', 'visible');
        // } else {
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '0').css('top', '28px').css('visibility', 'hidden');
        // }
    }

});
$('body').on('click', '.strana div', function() {
    // $(this).text();
    $('.strana').val($(this).text());
    $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
});
$('body').on('click', '.ulici div', function() {
    // $(this).text();
    $('.ulica').val($(this).text());
    $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
});
$('body').on('click', '.doma div', function() {
    // $(this).text();
    $('.dom').val($(this).text());
    $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
});
$('body').on('click', '.kvartiri div', function() {
    // $(this).text();
    $('.kvartira').val($(this).text());
    $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
});
$('body').on('click', '.otdelenie div', function() {
    // $(this).text();
    $('.otdelenie').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    $('.underline').css('width', '0%');
    // $('.otdelenie.addres-delivery-input').siblings('.underline').css('width', '100%');

    // if ($(this).parents('.addres-delivery-block').find('.gorod').val() == '') {
    //     $('.otdelenie').val('');
    //     $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
    //     $('#tooltipBtn').html(`Выберите город!`);
    //     // document.querySelector('.otdelenie');
    //     let posElement = document.querySelector('.otdelenie').getBoundingClientRect();
    //     $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
    //     $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
    //     timeOutCopy = setTimeout(function() {
    //         $("#tooltipBtn").css({ 'animation': '' });
    //     }, 1500);

    // }
});
$('body').on('keyup', '.addres-delivery-input', function(e) {
    // countAdress = 0;
    if ($(this).hasClass('ulica')) {
        // $(this).find('.addres-delivery-input').focus();
        // // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
        // // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').children().remove();
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
        // countAdress = $('.findAddres div').length;
        // $('.count-addres').html(countAdress);
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').css('opacity', '1').css('top', resultBlocks + 'px').css('visibility', 'visible');
        if ($(this).find('.ulica').val() !== '') {
            $(this).parents('.addres-delivery-block').find('.index').val(getRandomIntInclusive(11111, 44444));
        } else {
            $(this).parents('.addres-delivery-block').find('.index').val('');
        }

    }
    if (novaPochtaTrigger == 'adres') {
        console.log('nvadres')
        let idx = $('.addres-delivery-input').index(this);
        // if (el === null || lastIndex !== idx) {
        //     el = [...$(this).parents('.addres-delivery-block').find('.findAddres').find('div')];
        //     text = [...el.map(x => x.innerText)]
        // }
        // for (let index = 0; index < el.length; index++) {
        //     const element = el[index];
        //     if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
        //         $(element).css('display', 'none');
        //     } else {
        //         if ($('.addres-delivery-input')[idx].value !== "") {
        //             $(element).css('display', 'flex')
        //             countAdress += 1;
        //         } else {
        //             $(element).text(text[index]);
        //             $(element).css('display', 'flex')
        //             countAdress += 1;
        //         }
        //     }
        // }
        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[0]).val(), "gui");

            data.forEach(x => {
                count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).length
                x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                    let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    goroda += '<div>' + text_pr + '</div>'
                });
            });
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            goroda += '</div>';
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length

            ulica += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;

        } else if (idx === 2) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
            let dom = '<b class="count-addres"></b><div class="doma findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                    let text_pr = x.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    dom += '<div>' + text_pr + '</div>'
                });
            });
            dom += '</div>';

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
        }

    } else if (novaPochtaTrigger == 'otdel') {
        console.log('nvotdel')
        let idx = $('.addres-delivery-input').index(this);
        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[0]).val(), "gui");

            data.forEach(x => {
                count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).length
                x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                    let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    goroda += '<div>' + text_pr + '</div>'
                });
            });

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            goroda += '</div>';
            // $(this).val($(this).val());
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', '0px');
            $(this).parents('.addres-delivery-block').find('.otdelenie').val('');
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let otdelenie = '<b class="count-addres"></b><div class="otdelenie findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                    let text_pr = y.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    otdelenie += '<div>' + text_pr + '</div>'
                });
            });
            otdelenie += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(otdelenie);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', '28px');
            if ($(this).parents('.addres-delivery-block').find('.gorod').val() == '') {
                $(this).val('');
                $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
                $('#tooltipBtn').html(`Выберите город!`);
                let posElement = this.getBoundingClientRect();
                $("#tooltipBtn").css("left", posElement.x - 4 + "px").css("top", posElement.y + 22 + "px");
                $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });
                timeOutCopy = setTimeout(function() {
                    $("#tooltipBtn").css({ 'animation': '' });
                }, 1500);

            }
        }
    }
    if (ukrPochtaTrigger == 'otdel') {
        console.log('ukrotdel')
        let idx = $('.addres-delivery-input').index(this);

        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[0]).val(), "gui");

            data.forEach(x => {
                count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).length
                x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                    let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    goroda += '<div>' + text_pr + '</div>'
                });
            });
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            goroda += '</div>';
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length

            ulica += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;

        } else if (idx === 2) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
            let dom = '<b class="count-addres"></b><div class="doma findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                    let text_pr = x.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    dom += '<div>' + text_pr + '</div>'
                });
            });
            dom += '</div>';

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
        }
    } else if (ukrPochtaTrigger == 'adres') {
        let idx = $('.addres-delivery-input').index(this);

        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let strana = '<b class="count-addres"></b><div class="strana findAddres">';
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[0]).val(), "gui");

            data.forEach(x => {
                count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).length
                x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                    let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    strana += '<div>' + text_pr + '</div>'
                });
            });
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(strana);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            strana += '</div>';
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<b class="count-addres"></b><div class="goroda findAddres">';
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");

            data.forEach(x => {
                count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length
                x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                    let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    goroda += '<div>' + text_pr + '</div>'
                });
            });
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(goroda);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
            goroda += '</div>';
        } else if (idx === 2) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
            let ulica = '<b class="count-addres"></b><div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length

            ulica += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;

        } else if (idx === 3) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[3]).val(), "gui");
            let dom = '<b class="count-addres"></b><div class="doma findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).map(y => {
                    let text_pr = y.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    dom += '<div>' + text_pr + '</div>'
                });
            });
            dom += '</div>';

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            count = 0;
        }
    }





});
// $('.btn-order-search').on('keyup', function(e) {
//     btnOrderCount = 0;
//     let idx = $('.btn-order-search').index(this);
//     if (el === null || lastIndex !== idx) {
//         el = [...$(this).parents('.order-dropdown').find('.btn-menu-list')];
//         text = [...el.map(x => $(x).find('.findFunction')[0].innerText)]
//     }
//     for (let index = 0; index < el.length; index++) {
//         const element = el[index];
//         if (!text[index].toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
//             $(element).css('display', 'none');
//         } else {
//             if ($('.btn-order-search')[idx].value !== "" && idx !== 1) {
//                 let re = new RegExp($('.btn-order-search')[idx].value, "gui");
//                 let text_pr = text[index].replace(re, x => '<span class="findUnderline">' + x + '</span>');
//                 btnOrderCount += 1;
//                 $(element).css('display', 'flex')
//                 $($(element).find('.findFunction')[0]).html(textToHTML(text_pr));
//                 console.log('1')
//             } else {
//                 btnOrderCount += 1;
//                 $($(element).find('.findFunction')[0]).text(text[index]);
//                 $(element).css('display', 'flex')
//                 console.log('2')
//             }

//         }
//     }
//     $(this).parents('.order-dropdown').find('.btn-order-count').html('(' + btnOrderCount + ')');
//     btnOrderCount = 0;
//     lastIndex = idx;
// });