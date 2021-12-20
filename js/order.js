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
        ukrPochtaSelect = false;
        samovivoz = false;
        justin = false;
        $('.delivery-table tr:nth-child(4)').css('display', 'flex');
        $('.delivery-table tr:nth-child(5)').css('display', 'flex');
        // $('.addres-result').html('');
        // $($('.delivery-description')[1]).children('.underline-animation').remove();
        $('.samovivoz-block').css('display', 'none');

        $('.delivery-chose-btn').css('display', 'flex');
        // $('.addres-result').html('');
        if (window.deliveries.np.otdel !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.np.otdel)
        } else if (window.deliveries.np.address !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.np.address)
        } else {
            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');
        }

    } else {
        novaPochtaSelect = false;
    }

    //ukr
    if ($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-ukrposhta')) {
        ukrPochtaSelect = true;
        novaPochtaSelect = false;
        samovivoz = false;
        justin = false;
        $('.delivery-table tr:nth-child(4)').css('display', 'flex');
        $('.delivery-table tr:nth-child(5)').css('display', 'flex');
        // $('.addres-result').html('');
        // $($('.delivery-description')[1]).children('.underline-animation').remove();
        $('.samovivoz-block').css('display', 'none');

        $('.delivery-chose-btn').css('display', 'flex');
        // $('.addres-result').html('');
        if (window.deliveries.ukr.otdel !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.ukr.otdel)
        } else if (window.deliveries.ukr.address !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.ukr.address)
        } else {
            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');
        }
    } else {
        ukrPochtaSelect = false;
    }
    //justin
    if ($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-Vector-2')) {
        ukrPochtaSelect = false;
        novaPochtaSelect = false;
        samovivoz = false;
        justin = true;
        $('.delivery-table tr:nth-child(4)').css('display', 'flex');
        $('.delivery-table tr:nth-child(5)').css('display', 'flex');
        // $($('.delivery-description')[1]).children('.underline-animation').remove();
        // $('.addres-result').html('');
        // $('.samovivoz-block').html('');

        $('.samovivoz-block').css('display', 'none');


        $('.delivery-chose-btn').css('display', 'none');
    } else {
        justin = false;
    }

    //samovivoz
    if ($(this).parents('.delivery-mail').find('.btn-order .icons').hasClass('icon-Union-4')) {
        ukrPochtaSelect = false;
        novaPochtaSelect = false;
        justin = false;
        samovivoz = true;

        // let blockUnderline = ' <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" type="text" class="input-order" placeholder=""></div>';
        // $('.addres-result').html(blockUnderline);
        // $($('.delivery-description')[1]).html(blockUnderline);
        // if (window.deliveries.samovivoz !== '') {
        //     // $('.samovivoz-block').html('');
        //     $('.samovivoz-block').html(window.deliveries.samovivoz);
        // }
        $('.delivery-table tr:nth-child(4)').css('display', 'none');
        $('.delivery-table tr:nth-child(5)').css('display', 'none');
        $('.delivery-chose-btn').css('display', 'none');
        $('.samovivoz-block').css('display', 'block');
        // $('.samovivoz-block').html(blockUnderline);
        // if ($('.samovivoz-block').html() !== '') {
        //     $('.samovivoz-block').html(window.deliveriwindow.deliveries.samovivozes.samovivoz);
        // }
        if (window.deliveries.samovivoz !== '') {
            $('.samovivoz-block input').val('');
            $('.samovivoz-block input').val(window.deliveries.samovivoz)
        } else {
            $('.samovivoz-block input').val('');
        }
        $('.addres-result').html('');

    } else {
        justin = false;
    }
    console.log(novaPochtaSelect)
    console.log(ukrPochtaSelect)

});
// console.log(window.deliveries.samovivoz)
var novaPochtaSelect = true;
var ukrPochtaSelect = false;
var justin = false;
var samovivoz = false;

window.deliveries = {
    np: {
        otdel: '',
        address: ''
    },
    ukr: {
        otdel: '',
        address: ''
    },
    samovivoz: ''
}
$('.podlozhka-order').on('click', function(e) {

    $(".btn-menu").removeClass('toggle');
    $(".btn-order-input").removeClass('toggle');
    $('.findFunction').find('.findUnderline').removeClass('findUnderline');
    $('.input-order').removeClass('inputOpenFlag');
    // $('.podlozhka-order').css('display', 'none');
    $('body').on('mouseleave', '.input-order', inputFocus2);
    $('body').on('mouseenter', '.input-order', inputOrderFocus);
    // $('.comment-block').on('mouseleave', commentBlur);
    $('.underline').css('width', '0%');
    $('.input-order').css('z-index', '');
    $('.podlozhka-order').css('display', 'none');

    // commentBlur();

    $('.input-order').css('opacity', '1');
    // $(this).keyup(function() {
    //     if ($(this).hasClass('input-ttn')) {
    //         if ($(this).val().length > 0) {
    //             $(this).parents('.delivery-description').find('.add-ttn').css('display', 'none');
    //             $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'inline-block');
    //         } else if ($(this).val().length == 0) {
    //             $(this).parents('.delivery-description').find('.add-ttn').css('display', 'inline-block');
    //             $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'none');
    //         }
    //     }
    // });
    // console.log($('.input-ttn.input-order').length)
    // if ($('.input-ttn.input-order').val().length == 0) {
    //     $('.back-ttn').css('display', 'none');
    // } else if ($('.input-ttn.input-order').val().length >= 1) {
    //     $('.back-ttn').css('display', 'flex');
    // }
    $('.input-ttn.input-order').each(function(e) {
        // if (e.keyCode == 8) {
        //     console.log('aga')
        // }
        // console.log()
        // $(this).addClass('inputOpenFlag');
        if ($(this).hasClass('input-ttn')) {
            if ($(this).val().length == 0) {
                $('.back-ttn').css('display', 'none');
                $(this).parents('.delivery-description').find('.add-ttn').css('display', 'inline-block');
                $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'none');
            } else {
                $('.back-ttn').css('display', 'flex');
                $(this).parents('.delivery-description').find('.add-ttn').css('display', 'none');
                $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'inline-block');

            }
        }
        // if ($(this).val().length >= 1) {
        //     $(this).parents('.delivery-description').find('.add-ttn').css('display', 'none');
        //     $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'inline-block');
        // } else {
        //     $(this).parents('.delivery-description').find('.add-ttn').css('display', 'inline-block');
        //     $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'none');
        // }

    });
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
    $('.dom').removeClass('active-input');
    $('.kvartira').removeClass('active-input');
    $('.addres-menu-find').removeClass('menu-find-active');
    // $('.addres-result').children().remove();
    $('.delivery-chose-btn').css('z-index', '');
    $('.addres-delivery-input').css('width', '125px');
    // $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    // $('.btn-find-addres').removeClass('active-btn-addres');
    btnAddresActive = false;
    // if (btnAddresActive == false) {
    //     $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    //     $('.btn-find-addres').removeClass('active-btn-addres');
    // } else if (btnAddresActive == true) {
    //     $('.btn-find-addres').addClass('active-btn-addres');
    //     $('.btn-find-otdel').addClass('active-btn-otdelenie');
    // }
    // $('.btn-find-otdel').addClass('active-btn-otdelenie');
    if (novaPochtaSelect == true) {
        if (novaPochtaTrigger == 'adres') {
            // let result = "г. " + $('.gorod').val() + " ул. " + $('.ulica').val() + " д." + $('.dom').val() + ($('.kvartira').val() == '' ? '' : ' кв ') + $('.kvartira').val();
            const gorodText = $('.gorod').val();
            const ulicaText = $('.ulica').val();
            const domText = $('.dom').val();
            const kvartiraText = $('.kvartira').val();
            if (flagUserClick == true && $('.gorod').val() !== '' && $('.dom').val() !== '' && $('.ulica').val() !== '') {
                // $('.addres-result').find('div').remove();
                // $('.addres-result').append(`<div>${result}</div>`);
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');
                $('.gorod-text b').text('г. ');
                $('.ulica-text b').text(' ул. ');
                $('.dom-text b').text(' д. ');
                // $('.kvartira-text b').text(' кв. ');
                // let kvartiraEles = (kvartiraText !== '' ? ' кв. ' : '');
                // $('.kvartira-text b').text('');
                // $('.kvartira-text b').text((kvartiraText !== '' ? ' кв. ' : ''));
                if ($('.kvartira').val() !== '') {
                    // $('.kvartira-text b').text('');
                    $('.kvartira-text b').text(' кв. ');
                } else {
                    $('.kvartira-text b').text('');
                }

                $('.gorod-text span').text(gorodText);
                $('.ulica-text span').text(ulicaText);
                $('.dom-text span').text(domText);
                $('.kvartira-text span').text(kvartiraText);
                console.log($('.addres-result').html());
                window.deliveries.np.address = $('.addres-result').html()

            } else if (flagUserClick == true && $('.gorod').val() == '' && $('.kvartira').val() == '' && $('.dom').val() == '' && $('.ulica').val() == '') {

                // $('.btn-find-addres').removeClass('active-btn-addres');
                // $('.btn-find-otdel').removeClass('active-btn-otdelenie');

                // $('.btn-find-addres').removeClass('active-btn-addres');
                // $('.btn-find-otdel').removeClass('active-btn-otdelenie');
                // $('.kvartira-text b').text('');
            } else {

                // $('.addres-result').find('div').remove();
                // $('.addres-result').append(`<div></div>`);
                // $('.kvartira-text b').text('');
                // $('.btn-find-addres').removeClass('active-btn-addres');
                // $('.btn-find-otdel').removeClass('active-btn-otdelenie');


            }

        } else if (novaPochtaTrigger == 'otdel') {
            const gorodText = $('.gorod').val();
            const otdelText = $('.otdelenie').val();
            if (flagUserClick == true && $('.gorod').val() !== '' && $('.otdelenie').val() !== '') {
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');
                $('.gorod-text b').text('г. ');
                $('.otdel-text b').text(' отд. ');
                $('.gorod-text span').text(gorodText);
                $('.otdel-text span').text(otdelText);
                console.log($('.addres-result').html());
                window.deliveries.np.otdel = $('.addres-result').html()
            } else if (flagUserClick == true && $('.gorod').val() == '' && $('.otdelenie').val() == '') {
                // $('.btn-find-addres').addClass('active-btn-addres');
                // $('.btn-find-otdel').addClass('active-btn-otdelenie');
            } else {
                // $('.btn-find-addres').addClass('active-btn-addres');
                // $('.btn-find-otdel').addClass('active-btn-otdelenie');
            }
        }
    }
    if (ukrPochtaSelect == true) {


        if (ukrPochtaTrigger == 'adres') {
            const stranaText = $('.strana').val();
            const gorodText = $('.gorod').val();
            const ulicaText = $('.ulica').val();
            const kvartiraText = $('.kvartira').val();
            const domText = $('.dom').val();
            const indexText = $('.index').val();
            if (flagUserClick == true && $('.strana').val() !== '' && $('.gorod').val() !== '' && $('.kvartira').val() !== '' && $('.dom').val() !== '' && $('.ulica').val() !== '' && $('.index').val() !== '') {
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');

                $('.strana-text b').text('');
                $('.gorod-text b').text(' г. ');
                $('.ulica-text b').text(' ул. ');
                $('.dom-text b').text(' д. ');
                $('.kvartira-text b').text(' кв. ');
                $('.index-text b').text(' ин. ');

                $('.strana-text span').text(stranaText);
                $('.gorod-text span').text(gorodText);
                $('.kvartira-text span').text(kvartiraText);
                $('.ulica-text span').text(ulicaText);
                $('.dom-text span').text(domText);
                $('.index-text span').text(indexText);
                window.deliveries.ukr.address = $('.addres-result').html()
            } else if (flagUserClick == true && $('.strana').val() == '' && $('.gorod').val() == '' && $('.kvartira').val() == '' && $('.dom').val() == '' && $('.ulica').val() == '' && $('.index').val() == '') {} else {}

        } else if (ukrPochtaTrigger == 'otdel') {
            const gorodText = $('.gorod').val();
            const ulicaText = $('.ulica').val();
            const domText = $('.dom').val();
            const indexText = $('.index').val();
            if (flagUserClick == true && $('.gorod').val() !== '' && $('.dom').val() !== '' && $('.ulica').val() !== '' && $('.index').val() !== '') {
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');

                $('.gorod-text b').text('г. ');
                $('.ulica-text b').text(' ул. ');
                $('.dom-text b').text(' д. ');
                $('.index-text b').text(' ин. ');

                $('.gorod-text span').text(gorodText);
                $('.ulica-text span').text(ulicaText);
                $('.dom-text span').text(domText);
                $('.index-text span').text(indexText);
                window.deliveries.ukr.otdel = $('.addres-result').html()
            } else if (flagUserClick == true && $('.gorod').val() == '' && $('.dom').val() == '' && $('.ulica').val() == '' && $('.index').val() == '') {} else {}
        }
    }
    if (samovivoz == true) {
        window.deliveries.samovivoz = $('.samovivoz-block input').val();
    }
});

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
            $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 26 + "px");
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
        // $('.addres-result div').text();
        // let count = $('.back-ttn-tooltip').children('.count').text();
        if ($(this).find('div')[0].scrollWidth > $(this).find('div')[0].offsetWidth) {
            $('#tooltipBtn').html($('.addres-result div').text());
            let posElement = this.getBoundingClientRect();
            $("#tooltipBtn").css("left", posElement.x - 0 + "px").css("top", posElement.y + 22 + "px");
            $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
        }

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

    if (flagImgLockNet == true) {
        $(this).find('.second').css('display', 'flex').css('left', '-1px');
        $(this).find('.first').css('display', 'none');
        let text = $(this).siblings('.info-ip').text();
        $('#tooltipBtn').html(`Заблокирован`);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });

        flagImgLockNet = false;
    } else {
        clearTimeout(timeOutCopy);
        $("#tooltipBtn").css({ 'animation': '' });

        $(this).find('.second').css('display', 'none');
        $(this).find('.first').css('display', 'flex');
        let text = $(this).siblings('.info-ip').text();
        // $('#tooltipBtn').html(`Блокировать пользователя с IP ${text}`);
        $('#tooltipBtn').html(`Разблокирован`);

        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });

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
        $(this).find('.second').css('display', 'none');
        $(this).find('.first').css('display', 'flex');
        let textUnderline = $(this).siblings('.info-ip').text().replaceAll('X', '<b style="font-size:11px;font-weight:300;text-decoration:underline;">X</b>');

        // $('#tooltipBtn').html(`Блокировать пользователя и всю подсеть ${textUnderline}`);
        $('#tooltipBtn').html(`Разблокировано`);
        $("#tooltipBtn").css({ 'animation': 'delay-btn-copy 1.5s forwards' });

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
});

$('.another-opacity-ip').on('mouseleave', function() {
    $(this).css('height', '17px');
    $(this).find('.info-description-ip-block-all-network').css('height', '0px').css('padding-top', '0px');

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

$('body').on('mouseenter', '.input-order', inputOrderFocus);

function inputOrderFocus() {
    $(this).siblings('.underline').css('width', '100%');
    // if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
    //     $(this).siblings('.underline').css('width', '100%');
    // }
    // if ($(this).parents('.delivery-description').find('.samovivoz-block')) {
    //     $(this).siblings('.underline').css('width', '100%');
    //     // this.select();
    // }

    $(this).css('z-index', '9999');
    $(this).css('color', 'rgba(0, 0, 0, 0.5)');


    this.selectionStart = this.value.length;
    this.focus();
    if ($(this).parents('.delivery-description').find('.samovivoz-block')) {
        this.selectionStart = this.value.length;
        this.select();


    }


    // if ($(this).hasClass('inputOpenFlag')) {
    //     clearTimeout(delayFocus);
    // } else {
    //     delayFocus = setTimeout(() => {
    //         this.selectionStart = this.value.length;
    //         this.focus();
    //         if ($(this).parents('.delivery-description').find('.samovivoz-block')) {
    //             this.selectionStart = this.value.length;
    //             this.select();


    //         }
    //     }, 0);
    // }
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
    //comment blokc
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
    //comment blokc
    $(this).click(function() {
        $('.podlozhka-order').css('display', 'block');
        $('body').off('mouseleave', '.input-order', inputFocus2);
        $('body').off('mouseenter', '.input-order', inputOrderFocus);
        $(this).addClass('inputOpenFlag');
        $(this).css('color', 'rgba(0, 0, 0, 0.5)');
        $(this).siblings('.underline').css('width', '100%');
        // if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
        //     $(this).siblings('.underline').css('width', '100%');
        // }
        // if ($(this).parents('.delivery-description').find('.samovivoz-block').hasClass('samovivoz-block')) {

        //     $(this).siblings('.underline').css('width', '100%');

        // }

    });

    $(this).keypress(function(e) {
        $(this).addClass('inputOpenFlag');
        $('body').off('mouseleave', '.input-order', inputFocus2);
        $('body').off('mouseenter', '.input-order', inputOrderFocus);
        $(this).css('color', 'rgba(0, 0, 0, 0.5)');
        $(this).siblings('.underline').css('width', '100%');
        // if ($(this).hasClass('input-address') || $(this).hasClass('input-user')) {
        //     $(this).siblings('.underline').css('width', '100%');
        // }

        if ($(this).parents('.delivery-description').find('.samovivoz-block').hasClass('samovivoz-block')) {
            // $(this).siblings('.underline').css('width', '100%');
            // $(this).css('z-index', '19999');
            // $(this).siblings('.underline').css('width', '100%');

            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);
                // $(this).val(text.replace(/[0-9]/g, x => ""));
                $(this).val(text);
            }
        }
        $('.podlozhka-order').css('display', 'block');

        if (e.keyCode === 13 && !e.shiftKey) {

            window.deliveries.samovivoz = $('.samovivoz-block input').val();
            $('.podlozhka-order').css('display', 'none');
            $('body').on('mouseenter', '.input-order', inputOrderFocus);
            // $('.input-order').on('mouseleave', inputFocus2);
            $('body').on('mouseleave', '.input-order', inputFocus2);

            $('.underline').css('width', '0%');
            $(this).css('color', 'rgba(0, 0, 0, 1)');
            $(this).css('z-index', '');
            $(this).blur();
            $(this).removeClass('inputOpenFlag');

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
    });
    $(this).keydown(function(e) {
        if (e.keyCode == 8) {
            console.log('aga')
                // $(this).addClass('inputOpenFlag');
            $(this).addClass('inputOpenFlag');
            $('body').off('mouseleave', '.input-order', inputFocus2);
            $('body').off('mouseenter', '.input-order', inputOrderFocus);
            $(this).css('color', 'rgba(0, 0, 0, 0.5)');
            $(this).siblings('.underline').css('width', '100%');
            $('.podlozhka-order').css('display', 'block');
        }
        if (e.keyCode === 13) {
            if ($(this).hasClass('input-ttn')) {
                if ($(this).val().length == 0) {
                    $('.back-ttn').css('display', 'none');
                    $(this).parents('.delivery-description').find('.add-ttn').css('display', 'inline-block');
                    $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'none');
                } else {
                    $('.back-ttn').css('display', 'flex');
                    $(this).parents('.delivery-description').find('.add-ttn').css('display', 'none');
                    $(this).parents('.delivery-description').find('.gpsmetka').css('display', 'inline-block');

                }
            }
        }
        // console.log()



    });
}
$('body').on('mouseleave', '.input-order', inputFocus2);

function inputFocus2() {
    // $('body').on('mouseenter', '.input-order', inputOrderFocus);
    $(this).blur();
    $(this).css('z-index', '');
    // $().css('opacity', '1');
    $('.input-order').css('color', 'rgba(0, 0, 0, 1)');
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
    // clearTimeout(delayFocus);
};

//COPY IP
$(document).ready(function() {
    let link = 'https://offer.lp-crm.biz/crm-dlya-internet-magazina/';
    // console.log(link)
    $('.site-link').attr('href', link);
    link = link.replaceAll('https://', '');
    $('.site-link').text(link);
    // console.log($('.site-link').attr())
});

function tooltipOrderHeader(e) {
    let posElement = e.getBoundingClientRect();
    let screenHeight = document.body.clientHeight;
    let blockHeight = $(e).height();
    let heightTooltip = $('#tooltipBtn').height();
    $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
    if (screenHeight < posElement.y + heightTooltip + 30) {
        $("#tooltipBtn").css('top', posElement.y - blockHeight - 20 + 'px');
    }

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

    $(this).val((+cena).toFixed(2));
    console.log(+cena)

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