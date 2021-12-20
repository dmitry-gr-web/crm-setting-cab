$('body').on('mouseenter', '.count-addres', function() {
    let text = $(this).text();
    let result = text.substring(1, text.length - 1)
    let posElement = this.getBoundingClientRect();
    $('#tooltipBtn').html(`Элементов в фильтре:<br>- найдено ${result}`);
    $("#tooltipBtn").css("left", posElement.x + 0 + "px").css("top", posElement.y + 28 + "px");
    $("#tooltipBtn").css({ 'animation': 'delay-another 0.5s forwards' });
});
$('body').on('mouseleave', '.count-addres', function() {
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});
$('body').on('mouseenter', '.findAddres div', function() {
    if ($(this)[0].scrollWidth > $(this)[0].offsetWidth) {
        let text = $(this).text();
        let posElement = this.getBoundingClientRect();
        $("#tooltipBtn").html(text);
        let blockWidth = $(this).width();
        $("#tooltipBtn").css("left", posElement.x + blockWidth + 30 + "px").css("top", posElement.y - 4 + "px");
        $("#tooltipBtn").css({ 'animation': 'delay-btn 0.3s forwards' });
    }
});

$('body').on('mouseleave', '.findAddres div', function() {
    $("#tooltipBtn").css({ 'animation': '' }).css('font-size', '12px');
});

$('body').on('click', '.btn-find-otdel', function() {
    btnAddresActive = false;
    btnOtdelActive = true;
    $('.addres-delivery-block').css({
        'top': '25px',
        'visibility': 'visible',
        'opacity': '1'
    });
    $('.podlozhka-order').css({
        'display': 'block'
    });
    $('.delivery-chose-btn').css('z-index', '-1');

    if (novaPochtaSelect == true) {


        if (novaPochtaTrigger == 'adres') {
            if (window.deliveries.np.otdel !== '') {
                $('.addres-result').html('');
                $('.addres-result').html(window.deliveries.np.otdel)
            } else {
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');
            }

        } else {}
        novaPochtaTrigger = 'otdel';
        ukrPochtaSelect = false;
        ukrPochtaTrigger = '';
        let gorodText = $('.gorod-text span').text();
        let otdelText = $('.otdel-text span').text();
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListOtdelenie = `<div class="addres-delivery-list"><div>Отд-ние:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="otdelenie addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListOtdelenie);
        let data = json.areas;
        let goroda = '<div class="goroda findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';
        $('.gorod-text span').text(gorodText);
        $('.otdel-text span').text(otdelText);
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(goroda);
        countAdress = $('.findAddres div').length;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        // $(this)$()
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', '0px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).find('.addres-delivery-block').find('.addres-delivery-input').css('width', '105px');
        setTimeout(() => {
            $('.gorod').focus();
        }, 200);
        $(this).parents('.delivery-description').find('.addres-delivery-block .addres-delivery-list:first-child').find('input').siblings('.underline').css('width', '100%');

        if ($('.addres-result-text').text() !== '') {

            $('.gorod').val(gorodText);
            $('.otdelenie').val(otdelText);
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.underline').css('width', '0%');

        }

    }
    if (ukrPochtaSelect == true) {
        if (ukrPochtaTrigger == 'adres') {
            if (window.deliveries.ukr.otdel !== '') {
                $('.addres-result').html('');
                $('.addres-result').html(window.deliveries.ukr.otdel)
            } else {
                $('.addres-result-text b').text('');
                $('.addres-result-text span').text('');
            }

        } else {}
        ukrPochtaTrigger = 'otdel';
        novaPochtaSelect = false;
        novaPochtaTrigger = '';
        let gorodText = $('.gorod-text span').text();
        let ulicaText = $('.ulica-text span').text();
        let domText = $('.dom-text span').text();
        let indexText = $('.index-text span').text();
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListIndex = `<div class="addres-delivery-list"><div>Индекс:</div> <div class="underline-animation"><span class=""></span><input autocomplete="new-password" class="index addres-delivery-input" type="text" readonly></div></div>`;
        // const deliveryListKvartira = `<div class="addres-delivery-list"><div>Кв-ра:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text"maxlength="10"></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListIndex);
        let data = json.areas;
        let goroda = '<div class="goroda findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';

        // $('.gorod').focus();
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(goroda);
        countAdress = $('.findAddres div').length;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        // $(this)$()
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', '0px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).find('.addres-delivery-block').find('.addres-delivery-input').css('width', '105px');
        // $('.gorod').focus();
        setTimeout(() => {
            $('.gorod').focus();
        }, 200);
        $(this).parents('.delivery-description').find('.addres-delivery-block .addres-delivery-list:first-child').find('input').siblings('.underline').css('width', '100%');
        if ($('.addres-result-text').text() !== '') {

            $('.gorod').val(gorodText);
            $('.ulica').val(ulicaText);
            $('.dom').val(domText);
            $('.index').val(indexText);
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.underline').css('width', '0%');

        }
    }


});
var btnOtdelActive = true;
var btnAddresActive = false;

$('body').on('click', '.btn-find-addres', function() {
    $('.delivery-chose-btn')
    $('.delivery-chose-btn').css('z-index', '-1');
    btnAddresActive = true;
    btnOtdelActive = false;
    $('.addres-delivery-block').css({
        'top': '25px',
        'visibility': 'visible',
        'opacity': '1'
    });
    $('.podlozhka-order').css({
        'display': 'block'
    });
    $('.delivery-chose-btn').css('z-index', '-1');
    if (btnAddresActive == true) {
        $('.btn-find-addres').addClass('active-btn-addres');
        $('.btn-find-otdel').addClass('active-btn-otdelenie');
    }
    // $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    // $('.btn-find-addres').addClass('active-btn-addres');
    // $('.btn-find-otdel').addClass('decl-btn');
    // $(this).addClass('active-btn');
    // novaPochtaAdress = false;
    if (novaPochtaSelect == true) {

        // novaPochtaAdress = true;
        if (novaPochtaTrigger == 'otdel') {

            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');

        } else {
            // if ($('.kvartira').val() == '') {
            // }
            // $('.kvartira-text b').text('');
        }
        // if ($('.kvartira').val() !== '') {
        //     // $('.kvartira-text b').text('');
        //     $('.kvartira-text b').text('');
        //     $('.kvartira-text b').text(' кв. ');
        // } else {
        //     $('.kvartira-text b').text('');
        // }
        ukrPochtaSelect = false;
        novaPochtaTrigger = 'adres';
        ukrPochtaTrigger = '';
        if (window.deliveries.np.address !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.np.address)
        } else {
            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');
        }
        let gorodText = $('.gorod-text span').text();
        let ulicaText = $('.ulica-text span').text();
        let domText = $('.dom-text span').text();
        let kvartiraText = $('.kvartira-text span').text();




        // ukrPochtaTrigger = false;
        // console.log(novaPochtaOtdel)
        // console.log(novaPochtaAdress)
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text" maxlength="10"><b class="count-addres"></b></div></div>`;
        const deliveryListKvartira = `<div class="addres-delivery-list"><div>Кв-ра:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text" maxlength="10"><b class="count-addres"></b></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListKvartira);
        let data = json.areas;
        let goroda = '<div class="goroda findAddres">';
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
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        // $(this)$()
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', '0px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).find('.addres-delivery-block').find('.addres-delivery-input').css('width', '105px');
        // $('.gorod').focus();
        setTimeout(() => {
            $('.gorod').focus();
        }, 200);

        if ($('.addres-result-text').text() !== '') {
            // let removeB = $('.addres-result-text b').remove();
            // let gorodText = $('.gorod-text span').html();
            // let otdelText = $('.otdel-text span').html();
            // if($('.kvartira').val() !==)
            // let kvartiraEles = ($('.kvartira').val() !== '' ? ' кв. ' : '');
            $('.gorod').val(gorodText);
            $('.ulica').val(ulicaText);
            $('.dom').val(domText);
            $('.kvartira').val(kvartiraText);
            // $('.otdelenie').val(otdelText);
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.underline').css('width', '0%');
            // $('.gorod').siblings('.underline').css('width', '100%');
        }
        $(this).parents('.delivery-description').find('.addres-delivery-block .addres-delivery-list:first-child').find('input').siblings('.underline').css('width', '100%');

    }
    if (ukrPochtaSelect == true) {
        if (ukrPochtaTrigger == 'otdel') {

            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');

        }

        novaPochtaSelect = false;
        ukrPochtaTrigger = 'adres';
        novaPochtaTrigger = '';

        if (window.deliveries.ukr.address !== '') {
            $('.addres-result').html('');
            $('.addres-result').html(window.deliveries.ukr.address)
        } else {
            $('.addres-result-text b').text('');
            $('.addres-result-text span').text('');
        }

        let stranaText = $('.strana-text span').text();
        let gorodText = $('.gorod-text span').text();
        let ulicaText = $('.ulica-text span').text();
        let kvartiraText = $('.kvartira-text span').text();
        let domText = $('.dom-text span').text();
        let indexText = $('.index-text span').text();
        // novaPochtaTrigger = false;
        const deliveryListStrana = `<div class="addres-delivery-list"><div>Страна:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="strana addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListGorod = `<div class="addres-delivery-list"><div>Город:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="gorod addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListUlica = `<div class="addres-delivery-list"><div>Улица:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="ulica addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListDom = `<div class="addres-delivery-list"><div>Дом:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="dom addres-delivery-input" type="text"><b class="count-addres"></b></div></div>`;
        const deliveryListKvartira = `<div class="addres-delivery-list"><div>Кв-ра:</div> <div class="underline-animation"><span class="underline"></span><input autocomplete="new-password" class="kvartira addres-delivery-input" type="text"maxlength="10"></div></div>`;
        const deliveryListIndex = `<div class="addres-delivery-list"><div>Индекс:</div> <div class="underline-animation"><span class=""></span><input autocomplete="new-password" class="index addres-delivery-input" type="text" readonly></div></div>`;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.addres-delivery-list').remove()
        $(this).parents('.delivery-description').find('.addres-delivery-wrapper').find('.simplebar-content').append(deliveryListStrana + deliveryListGorod + deliveryListUlica + deliveryListDom + deliveryListIndex + deliveryListKvartira);
        // let data = json.areas;
        let strana = '<div class="strana findAddres"><div>Украина</div><div>Россия</div><div>Египет</div></div>';
        // data.forEach(x => {
        //     // goroda += '<div>' + x.name + '</div>'
        //     x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
        //         strana += '<div>' + y.name + '</div>'
        //     });
        // });
        // strana += '</div>';
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(strana);
        countAdress = $('.findAddres div').length;
        $(this).parents('.delivery-description').find('.addres-delivery-block').find('.strana').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        // $(this)$()
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', '0px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).find('.addres-delivery-block').find('.addres-delivery-input').css('width', '105px');
        // $('.gorod').focus();
        setTimeout(() => {
            $('.strana').focus();
        }, 200);
        if ($('.addres-result-text').text() !== '') {
            // let removeB = $('.addres-result-text b').remove();
            // let gorodText = $('.gorod-text span').html();
            // let otdelText = $('.otdel-text span').html();
            $('.strana').val(stranaText);
            $('.gorod').val(gorodText);
            $('.ulica').val(ulicaText);
            $('.dom').val(domText);
            $('.index').val(indexText);
            $('.kvartira').val(kvartiraText);
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.underline').css('width', '0%');
            // $('.gorod').siblings('.underline').css('width', '100%');
        }
        $(this).parents('.delivery-description').find('.addres-delivery-block .addres-delivery-list:first-child').find('input').siblings('.underline').css('width', '100%');
    }

});
var novaPochtaTrigger;
var ukrPochtaTrigger;

$('.delivery-chose-btn').on('mouseenter', function() {
    $('.addres-result div').css('width', '135px');
    if (btnOtdelActive == true) {
        $('.btn-find-addres').addClass('active-btn-addres');
        $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    } else {
        $('.btn-find-addres').addClass('active-btn-addres');
        $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    }

});
$('.delivery-chose-btn').on('mouseleave', function() {
    $('.addres-result div').css('width', '155px');
    if (btnOtdelActive == true) {
        $('.btn-find-addres').removeClass('active-btn-addres');
        // $('.btn-find-otdel').removeClass('active-btn-otdelenie');
    } else {
        $('.btn-find-addres').addClass('active-btn-addres');
        $('.btn-find-otdel').addClass('active-btn-otdelenie');
    }
    if (btnAddresActive == true) {
        $('.btn-find-addres').addClass('active-btn-addres');
        $('.btn-find-otdel').addClass('active-btn-otdelenie');
    }
});
var countAdress = 0;

$('body').on('mouseenter', '.addres-delivery-list', function(e) {
    clearTimeout(timeOutCopy);
    $("#tooltipBtn").css({ 'animation': '' });
    let posElement = this.getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y;

    if (novaPochtaTrigger == 'adres' || novaPochtaTrigger == 'otdel') {
        console.log('novapochta adres')
        if ($('.addres-menu-find').hasClass('menu-find-active') || $('.dom').hasClass('active-input') || $('.kvartira').hasClass('active-input')) {

        } else {
            $(this).find('.addres-delivery-input').focus();
            this.children[1].children[1].select();
            // $('.underline').css('width', '0%');
            $(this).find('.underline').css('width', '100%');
        }
        // || $('.kvartira').hasClass('active-input')
    }
    //UKRPOCHTA

    if (ukrPochtaTrigger == 'otdel' || ukrPochtaTrigger == 'adres') {
        // if (!$('.addres-menu-find').hasClass('menu-find-active')) {
        //     $(this).find('.addres-delivery-input').focus();
        //     this.children[1].children[1].select();
        //     $('.underline').css('width', '0%');
        //     $(this).find('.underline').css('width', '100%');

        // }
        if ($('.addres-menu-find').hasClass('menu-find-active') || $('.kvartira').hasClass('active-input')) {

        } else {
            $(this).find('.addres-delivery-input').focus();
            this.children[1].children[1].select();
            $('.underline').css('width', '0%');
            $(this).find('.underline').css('width', '100%');
        }


    }


});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
$('body').on('mouseleave', '.addres-delivery-list', function() {
    if ($('.addres-menu-find').hasClass('menu-find-active') || $('.dom').hasClass('active-input') || $('.kvartira').hasClass('active-input')) {

    } else {
        // this.children[1].children[1].blur(); $(this).find('.underline')
        $(this).find('input').blur();
        $('.underline').css('width', '0%');
    }
    // if ($('.addres-menu-find').hasClass('menu-find-active') || $('.dom').hasClass('active-input')) {

    // } else {
    //     $(this).find('.addres-delivery-input').focus();
    //     this.children[1].children[1].select();
    //     $('.underline').css('width', '0%');
    //     $(this).find('.underline').css('width', '100%');
    // }
});
$('.addres-delivery-block').on('click', function() {
    $('.addres-menu-find').removeClass('menu-find-active');
    $('.count-addres').css('visibility', 'hidden');
    $('.addres-delivery-input').css('width', '125px');
    $('.dom').removeClass('active-input');
    $('.kvartira').removeClass('active-input');
    if (flagUserClick == false) {
        if (otdelChange == true) {
            $('.otdelenie').val('');
        }
        if (gorodChange == true) {
            $('.gorod').val('');
        }
        if (domChange == true) {
            $('.dom').val('');
        }
        if (ulicaChange == true) {
            $('.ulica').val('');
        }
        if (stranaChange == true) {
            $('.strana').val('');
        }
    }
    $('.underline').css('width', '0%');
});
$('body').on('click', '.goroda div', function() {
    $('.gorod').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    $(this).parents('.addres-delivery-block').find('.otdelenie').val('');
    $(this).parents('.addres-delivery-block').find('.ulica').val('');
    $(this).parents('.addres-delivery-block').find('.dom').val('');
    $(this).parents('.addres-delivery-block').find('.kvartira').val('');

    let posElement = document.querySelectorAll('.addres-delivery-input')[1].getBoundingClientRect();
    // let posElement2 = document.querySelectorAll('.addres-delivery-input')[2].getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y - 10;
    // let resultBlocks2 = posElement2.y - blockPos.y - 10;

    if (novaPochtaSelect == true) {
        if (novaPochtaTrigger == 'otdel') {

            if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('otdelenie')) {
                let data = json.areas;
                let otdelenie = '<div class="otdelenie findAddres">';
                data.forEach(x => {
                    x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                        otdelenie += '<div>' + y.key + '</div>'
                    });
                });
                otdelenie += '</div>';
                $('.otdelenie.addres-delivery-input').focus();
                $('.underline').css('width', '0%');
                $('.otdelenie.addres-delivery-input').siblings('.underline').css('width', '100%');
                $('.addres-menu-find').find('.simplebar-content').children().remove();
                $('.addres-menu-find').find('.simplebar-content').append(otdelenie);
                $('.addres-menu-find').addClass('menu-find-active');
                $('.menu-find-active').css('top', resultBlocks + 'px');
                countAdress = $('.findAddres div').length;
                $('.count-addres').css('visibility', 'hidden');
                $('.otdelenie').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
                $('.addres-delivery-input').css('width', '125px');
                $(this).css('width', '105px');
            }
        }
        if (novaPochtaTrigger == 'adres')
            if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('ulica')) {
                let data = json.areas;
                let ulica = '<div class="ulici findAddres">';
                data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                    ulica += '<div>' + x.name + '</div>'
                });
                ulica += '</div>';
                $('.ulica.addres-delivery-input').focus();
                $('.underline').css('width', '0%');
                $('.ulica.addres-delivery-input').siblings('.underline').css('width', '100%');
                $('.addres-menu-find').find('.simplebar-content').children().remove();
                $('.addres-menu-find').find('.simplebar-content').append(ulica);
                $('.addres-menu-find').addClass('menu-find-active');
                $('.menu-find-active').css('top', resultBlocks + 'px');
                countAdress = $('.findAddres div').length;
                $('.count-addres').css('visibility', 'hidden');
                $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
                $('.addres-delivery-input').css('width', '125px');
                $(this).css('width', '105px');
            }
    }
    if (ukrPochtaSelect == true) {
        if (ukrPochtaTrigger == 'otdel') {
            if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('ulica')) {
                let data = json.areas;
                let ulica = '<div class="ulici findAddres">';
                data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                    ulica += '<div>' + x.name + '</div>'
                });
                ulica += '</div>';
                $('.ulica.addres-delivery-input').focus();
                $('.underline').css('width', '0%');
                $('.ulica.addres-delivery-input').siblings('.underline').css('width', '100%');
                $('.addres-menu-find').find('.simplebar-content').children().remove();
                $('.addres-menu-find').find('.simplebar-content').append(ulica);
                $('.addres-menu-find').addClass('menu-find-active');
                $('.menu-find-active').css('top', resultBlocks + 'px');
                countAdress = $('.findAddres div').length;
                $('.count-addres').css('visibility', 'hidden');
                $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
                $('.addres-delivery-input').css('width', '125px');
                $(this).css('width', '105px');
            }
        }
        if (ukrPochtaTrigger == 'adres') {
            // let posElement = document.querySelectorAll('.addres-delivery-input')[1].getBoundingClientRect();
            let posElement2 = document.querySelectorAll('.addres-delivery-input')[2].getBoundingClientRect();
            let block = document.querySelector('.addres-delivery-block');
            let blockPos = block.getBoundingClientRect();
            // let resultBlocks = posElement.y - blockPos.y - 10;
            let resultBlocks2 = posElement2.y - blockPos.y - 10;
            // let data = json.areas;
            let data = json.areas;
            let ulica = '<div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).forEach(x => {
                ulica += '<div>' + x.name + '</div>'
            });
            ulica += '</div>';
            $('.ulica.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.ulica.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(ulica);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks2 + 'px');
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');

        }

    }

    flagUserClick = true;
});
$('body').on('click', '.strana div', function() {
    $('.strana').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    $(this).parents('.addres-delivery-block').find('.goroda').val('');
    $(this).parents('.addres-delivery-block').find('.otdelenie').val('');
    $(this).parents('.addres-delivery-block').find('.ulica').val('');
    $(this).parents('.addres-delivery-block').find('.dom').val('');
    $(this).parents('.addres-delivery-block').find('.kvartira').val('');
    // $('.addres-menu-find').css('opacity', '0').css('visibility', 'hidden');
    let posElement = document.querySelectorAll('.addres-delivery-input')[1].getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y - 10;
    flagUserClick = true;
    if (ukrPochtaTrigger = 'adres') {
        let data = json.areas;
        let goroda = '<div class="goroda findAddres">';
        data.forEach(x => {
            // goroda += '<div>' + x.name + '</div>'
            x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                goroda += '<div>' + y.name + '</div>'
            });
        });
        goroda += '</div>';
        $('.gorod.addres-delivery-input').focus();
        $('.underline').css('width', '0%');
        $('.gorod.addres-delivery-input').siblings('.underline').css('width', '100%');
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(goroda);
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', resultBlocks + 'px');
        countAdress = $('.findAddres div').length;
        $('.count-addres').css('visibility', 'hidden');
        $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        $('.addres-delivery-input').css('width', '125px');
        $(this).css('width', '105px');

    }
});
$('body').on('click', '.ulici div', function() {
    let posElement = document.querySelectorAll('.addres-delivery-input')[2].getBoundingClientRect();
    let posElement2 = document.querySelectorAll('.addres-delivery-input')[3].getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y - 10;
    let resultBlocks2 = posElement2.y - blockPos.y - 10;
    $('.ulica').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    // $(this).parents('.addres-delivery-block').find('.ulica').val('');
    $(this).parents('.addres-delivery-block').find('.dom').val('');
    $(this).parents('.addres-delivery-block').find('.kvartira').val('');
    // $(this).parents('.addres-delivery-block').find('.ulica').val('');
    if (novaPochtaSelect == true) {
        if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('dom')) {
            // let data = json.areas;
            // let dom = '<div class="doma findAddres">';
            // data.forEach(x => {
            //     x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
            //         dom += '<div>' + y.key + '</div>'
            //     });
            // });
            // dom += '</div>';
            // $('.dom.addres-delivery-input').focus();
            // $('.underline').css('width', '0%');
            // $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
            // $('.addres-menu-find').find('.simplebar-content').children().remove();
            // $('.addres-menu-find').find('.simplebar-content').append(dom);
            // $('.addres-menu-find').addClass('menu-find-active');
            // $('.menu-find-active').css('top', resultBlocks + 'px');
            // countAdress = $('.findAddres div').length;
            // $('.count-addres').css('visibility', 'hidden');
            // $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            // $('.addres-delivery-input').css('width', '125px');
            // $(this).css('width', '105px');
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.dom').addClass('active-input');
            $('.dom.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-delivery-input').css('width', '125px');

        }
    }
    if (ukrPochtaSelect == true) {
        if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('dom')) {
            let data = json.areas;
            let dom = '<div class="doma findAddres">';
            data.forEach(x => {
                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                    dom += '<div>' + y.key + '</div>'
                });
            });
            dom += '</div>';
            $('.dom.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(dom);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');

            $('.index').val(getRandomIntInclusive(11111, 44444));

        }
        if (ukrPochtaTrigger == 'adres') {
            // let data = json.areas;
            let data = json.areas;
            let dom = '<div class="doma findAddres">';
            data.forEach(x => {
                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).map(y => {
                    dom += '<div>' + y.key + '</div>'
                });
            });
            dom += '</div>';
            $('.dom.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(dom);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks2 + 'px');
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');

        }
    }
    flagUserClick = true;
});
$('body').on('click', '.doma div', function() {
    $('.dom').val($(this).text());
    // $('.dom').addClass('active-input');
    // $(this).parents('.addres-delivery-block').find('.ulica').val('');
    // $(this).parents('.addres-delivery-block').find('.dom').val('');
    $(this).parents('.addres-delivery-block').find('.kvartira').val('');
    if (novaPochtaSelect == true) {
        if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('kvartira')) {
            $('.kvartira.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.kvartira.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-delivery-input').css('width', '125px');
        }
    }
    if (ukrPochtaSelect == true) {
        if ($(this).parents('.addres-delivery-block').find('.addres-delivery-list').find('.addres-delivery-input').hasClass('kvartira')) {
            $('.kvartira').addClass('active-input');
            $('.kvartira.addres-delivery-input').focus();
            $('.underline').css('width', '0%');
            $('.kvartira.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').removeClass('menu-find-active');
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-delivery-input').css('width', '125px');
        }
    }
    flagUserClick = true;
});
// $('body').on('click', '.kvartiri div', function() {
//     $('.kvartira').val($(this).text());
// });
$('body').on('click', '.otdelenie div', function() {
    $('.otdelenie').val($(this).text());
    $('.addres-menu-find').removeClass('menu-find-active');
    $('.underline').css('width', '0%');
    $('.count-addres').css('visibility', 'hidden');
    flagUserClick = true;
});
$('body').on('click', '.addres-delivery-input', function() {
    // flagUserClick = false;
    $('.underline').css('width', '0%');
    $(this).siblings('.underline').css('width', '100%');
    if ($(this).hasClass('index')) {
        // $(this).find('.addres-delivery-input').focus();
        // this.children[1].children[1].select();
        $('.underline').css('width', '0%');
        // $(this).find('.index.addres-delivery-input').blur();
        // $(this).find('.underline').css('width', '100%');
    }
    let posElement = this.getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y - 10;
    if ($(this).hasClass('strana')) {
        let strana = '<div class="strana findAddres"><div>Украина</div><div>Россия</div><div>Египет</div></div>';

        // let data = json.areas;
        // let strana = '<div class="strana findAddres">';
        // data.forEach(x => {
        //     // goroda += '<div>' + x.name + '</div>'
        //     x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
        //         strana += '<div>' + y.name + '</div>'
        //     });
        // });
        // strana += '</div>';
        // if (ukrPochtaTrigger == 'otdel') {
        //     data.forEach(x => {
        //         // goroda += '<div>' + x.name + '</div>'
        //         x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
        //             goroda += '<div>' + y.name + '</div>'
        //         });
        //     });
        // }

        // $('.gorod').focus();
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(strana);
        countAdress = $('.findAddres div').length;
        $('.count-addres').css('visibility', 'hidden');
        $('.strana').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', resultBlocks + 'px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).css('width', '105px');
    }
    if ($(this).hasClass('gorod')) {
        if (ukrPochtaTrigger == 'otdel' || novaPochtaSelect == true) {
            let data = json.areas;
            let goroda = '<div class="goroda findAddres">';
            data.forEach(x => {
                // goroda += '<div>' + x.name + '</div>'
                x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
                    goroda += '<div>' + y.name + '</div>'
                });
            });
            goroda += '</div>';
            // if (ukrPochtaTrigger == 'otdel') {
            //     data.forEach(x => {
            //         // goroda += '<div>' + x.name + '</div>'
            //         x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
            //             goroda += '<div>' + y.name + '</div>'
            //         });
            //     });
            // }

            // $('.gorod').focus();
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(goroda);
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');
        }
        if (ukrPochtaTrigger == 'adres') {
            let data = json.areas;
            let goroda = '<div class="goroda findAddres">';
            data.forEach(x => {
                // goroda += '<div>' + x.name + '</div>'
                x.areas.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                    goroda += '<div>' + y.name + '</div>'
                });
            });
            goroda += '</div>';
            // $('.gorod').focus();
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(goroda);
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');
        }

    }
    if ($(this).hasClass('otdelenie')) {
        let data = json.areas;
        let otdelenie = '<div class="otdelenie findAddres">';
        data.forEach(x => {
            x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                otdelenie += '<div>' + y.key + '</div>'
            });
        });
        otdelenie += '</div>';
        // $('.otdelenie.addres-delivery-input').focus();
        $('.underline').css('width', '0%');
        $('.otdelenie.addres-delivery-input').siblings('.underline').css('width', '100%');
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').children().remove();
        // $(this).parents('.addres-delivery-block').find('.addres-menu-find').append(ulica);
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(otdelenie);
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', resultBlocks + 'px');
        countAdress = $('.findAddres div').length;
        $('.count-addres').css('visibility', 'hidden');
        $('.otdelenie').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        // $('.count-addres').html(countAdress);
        $('.addres-delivery-input').css('width', '125px');
        $(this).css('width', '105px');
    }
    if ($(this).hasClass('ulica')) {

        let data = json.areas;
        // let data = json.areas;
        let ulica = '<div class="ulici findAddres">';
        data.filter(y => y.name.toLowerCase().includes($($('.ulica.addres-delivery-input')).val().toLowerCase())).forEach(x => {
            ulica += '<div>' + x.name + '</div>'
        });
        ulica += '</div>';

        // $('.gorod').focus();
        $('.addres-menu-find').find('.simplebar-content').children().remove();
        $('.addres-menu-find').find('.simplebar-content').append(ulica);
        countAdress = $('.findAddres div').length;
        $('.count-addres').css('visibility', 'hidden');
        $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        $('.addres-menu-find').addClass('menu-find-active');
        $('.menu-find-active').css('top', resultBlocks + 'px');
        $('.addres-delivery-input').css('width', '125px');
        $(this).css('width', '105px');

        // if (ukrPochtaTrigger == 'adres') {
        //     let data = json.areas;
        //     // let data = json.areas;
        //     let ulica = '<div class="ulici findAddres">';
        //     data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
        //         ulica += '<div>' + x.name + '</div>'
        //     });
        //     ulica += '</div>';

        //     // $('.gorod').focus();
        //     $('.addres-menu-find').find('.simplebar-content').children().remove();
        //     $('.addres-menu-find').find('.simplebar-content').append(ulica);
        //     countAdress = $('.findAddres div').length;
        //     $('.count-addres').css('visibility', 'hidden');
        //     $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
        //     $('.addres-menu-find').addClass('menu-find-active');
        //     $('.menu-find-active').css('top', resultBlocks + 'px');
        //     $('.addres-delivery-input').css('width', '125px');
        //     $(this).css('width', '105px');
        // }

    }
    if ($(this).hasClass('dom')) {
        $('.dom').addClass('active-input');
        if (ukrPochtaTrigger == 'adres' || ukrPochtaTrigger == 'otdel') {
            let data = json.areas;
            let dom = '<div class="doma findAddres">';
            data.forEach(x => {
                x.areas.filter(y => y.key.toLowerCase().includes($($('.dom.addres-delivery-input')).val().toLowerCase())).map(y => {
                    dom += '<div>' + y.key + '</div>'
                });
            });
            dom += '</div>';
            // $('.dom.addres-delivery-input').focus();
            // $('.underline').css('width', '0%');
            // $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
            $('.addres-menu-find').find('.simplebar-content').children().remove();
            $('.addres-menu-find').find('.simplebar-content').append(dom);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            countAdress = $('.findAddres div').length;
            $('.count-addres').css('visibility', 'hidden');
            $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
            $('.addres-delivery-input').css('width', '125px');
            $(this).css('width', '105px');

            // $('.index').val(getRandomIntInclusive(11111, 44444));
        }
    } else {
        $('.dom').removeClass('active-input');
    }
    if ($(this).hasClass('kvartira')) {
        $('.kvartira').addClass('active-input');
    } else {
        $('.kvartira').removeClass('active-input');
    }

    // if ($(this).hasClass('dom')) {
    //     let data = json.areas;
    //     let dom = '<div class="doma findAddres">';
    //     data.forEach(x => {
    //         x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
    //             dom += '<div>' + y.key + '</div>'
    //         });
    //     });
    //     dom += '</div>';
    //     // $('.dom.addres-delivery-input').focus();
    //     // $('.underline').css('width', '0%');
    //     // $('.dom.addres-delivery-input').siblings('.underline').css('width', '100%');
    //     $('.addres-menu-find').find('.simplebar-content').children().remove();
    //     $('.addres-menu-find').find('.simplebar-content').append(dom);
    //     $('.addres-menu-find').addClass('menu-find-active');
    //     $('.menu-find-active').css('top', resultBlocks + 'px');
    //     countAdress = $('.findAddres div').length;
    //     $('.count-addres').css('visibility', 'hidden');
    //     $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${countAdress})`);
    //     $('.addres-delivery-input').css('width', '125px');
    //     $(this).css('width', '105px');

    //     // $('.index').val(getRandomIntInclusive(11111, 44444));

    // }

});
var flagUserClick = false;
var otdelChange;
var gorodChange;
var domChange;
var ulicaChange;
var stranaChange;

$('body').on('keyup', '.addres-delivery-input', function(e) {
    // countAdress = 0;
    flagUserClick = false;
    gorodChange = false;
    otdelChange = false;
    domChange = false;
    ulicaChange = false;
    stranaChange = false;
    let posElement = this.getBoundingClientRect();
    let block = document.querySelector('.addres-delivery-block');
    let blockPos = block.getBoundingClientRect();
    let resultBlocks = posElement.y - blockPos.y - 10;
    $('.addres-delivery-input').css('width', '125px');
    $(this).css('width', '105px');
    if ($(this).hasClass('ulica')) {

        if ($(this).find('.ulica').val() !== '') {
            $(this).parents('.addres-delivery-block').find('.index').val(getRandomIntInclusive(11111, 44444));
        } else {
            $(this).parents('.addres-delivery-block').find('.index').val('');
        }

    }
    if (novaPochtaTrigger == 'adres') {
        console.log('nvadres')
        let idx = $('.addres-delivery-input').index(this);
        let data = json.areas;

        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let goroda = '<div class="goroda findAddres">';
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
            $('.count-addres').css('visibility', 'hidden');
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            goroda += '</div>';
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            gorodChange = true;
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', '0px');
            $(this).parents('.addres-delivery-block').find('.ulica').val('');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let ulica = '<div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length
            ulica += '</div>';
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            $('.count-addres').css('visibility', 'hidden');
            $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            ulicaChange = true;
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', '28px');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
        } else if ($(this).hasClass('dom')) {
            flagUserClick = true;
            $('.kvartira').val('');
        } else if ($(this).hasClass('kvartira')) {
            flagUserClick = true;
        }
        // else if (idx === 2) {
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
        //     let count = 0;
        //     let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
        //     let dom = '<div class="doma findAddres">';
        //     data.forEach(x => {
        //         count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length
        //         x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
        //             let text_pr = x.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
        //             dom += '<div>' + text_pr + '</div>'
        //         });
        //     });
        //     dom += '</div>';
        //     $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
        //     $('.count-addres').css('visibility', 'hidden');
        //     $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
        //     count = 0;
        //     domChange = true;
        //     $('.addres-menu-find').addClass('menu-find-active');
        //     $('.menu-find-active').css('top', '54px');
        //     $(this).parents('.addres-delivery-block').find('.kvartira').val('');
        // }

    } else if (novaPochtaTrigger == 'otdel') {
        console.log('nvotdel')
        let idx = $('.addres-delivery-input').index(this);
        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let goroda = '<div class="goroda findAddres">';
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
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            $('.count-addres').css('visibility', 'hidden');
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
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
            gorodChange = true;
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let otdelenie = '<div class="otdelenie findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).map(y => {
                    let text_pr = y.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    otdelenie += '<div>' + text_pr + '</div>'
                });
            });
            otdelenie += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(otdelenie);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            $('.count-addres').css('visibility', 'hidden');
            $('.otdelenie').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', '28px');
            otdelChange = true;
        }
    }
    if (ukrPochtaTrigger == 'otdel') {
        console.log('ukrotdel')
        let idx = $('.addres-delivery-input').index(this);

        let data = json.areas;
        if ($(this).hasClass('kvartira')) {
            flagUserClick = true;
        }
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<div class="goroda findAddres">';
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
            // $('.count-addres').html(count);
            $('.count-addres').css('visibility', 'hidden');
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            count = 0;
            goroda += '</div>';
            gorodChange = true;
            $(this).parents('.addres-delivery-block').find('.ulica').val('');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
            console.log(gorodChange)
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[1]).val(), "gui");
            let ulica = '<div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[1]).val().toLowerCase())).length

            ulica += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            $('.count-addres').css('visibility', 'hidden');
            $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            count = 0;

            ulicaChange = true;
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
            console.log(ulicaChange)

        } else if (idx === 2) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
            let dom = '<div class="doma findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).map(y => {
                    let text_pr = x.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    dom += '<div>' + text_pr + '</div>'
                });
            });
            dom += '</div>';

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            $('.count-addres').css('visibility', 'hidden');
            $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            count = 0;
            domChange = true;
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
        }
    } else if (ukrPochtaTrigger == 'adres') {
        let idx = $('.addres-delivery-input').index(this);
        if ($(this).hasClass('kvartira')) {
            flagUserClick = true;
        }

        let data = json.areas;
        if (idx === 0) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let strana = '<div class="strana findAddres"><div>Украина</div><div>Россия</div><div>Египет</div></div>';
            let count = 0;
            // let re = new RegExp($($('.addres-delivery-input')[0]).val(), "gui");

            // data.forEach(x => {
            //     count += x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).length
            //     x.areas.filter(y => (y.name.split('(').length > 0 ? y.name.split('(')[0] : y.name).toLowerCase().includes($($('.addres-delivery-input')[0]).val().toLowerCase())).map(y => {
            //         let text_pr = y.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
            //         strana += '<div>' + text_pr + '</div>'
            //     });
            // });
            // // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            // strana += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(strana);
            // $('.strana div').each(x => {
            //     count += $('.strana div').length;
            // });

            $('.strana').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            stranaChange = true;
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            // count = 0;
            // domChange = true;
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            $(this).parents('.addres-delivery-block').find('.gorod').val('');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.ulica').val('');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
        } else if (idx === 1) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()

            let goroda = '<div class="goroda findAddres">';
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
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            $('.gorod').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            goroda += '</div>';
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            // count = 0;
            gorodChange = true;
            // domChange = true;
            // $(this).parents('.addres-delivery-block').find('.gorod').val('');
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.ulica').val('');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
        } else if (idx === 2) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[2]).val(), "gui");
            let ulica = '<div class="ulici findAddres">';
            data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).forEach(x => {
                let text_pr = x.name.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                ulica += '<div>' + text_pr + '</div>'
            });
            count = data.filter(y => y.name.toLowerCase().includes($($('.addres-delivery-input')[2]).val().toLowerCase())).length

            ulica += '</div>';
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(ulica);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            $('.ulica').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            $('.count-addres').css('visibility', 'hidden');
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            // count = 0;
            ulicaChange = true;
            // domChange = true;
            let text = $(this).val();
            if ($(this).val() !== '') {
                text = text[0].toUpperCase() + text.slice(1);;
                $(this).val(text.replace(/[0-9]/g, x => ""));
            }
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
        } else if (idx === 3) {
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('div').remove()
            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').find('b').remove()
            let count = 0;
            let re = new RegExp($($('.addres-delivery-input')[3]).val(), "gui");
            let dom = '<div class="doma findAddres">';
            data.forEach(x => {
                count += x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).length

                x.areas.filter(y => y.key.toLowerCase().includes($($('.addres-delivery-input')[3]).val().toLowerCase())).map(y => {
                    let text_pr = y.key.replace(re, x => '<span class="findUnderline">' + x + '</span>');
                    dom += '<div>' + text_pr + '</div>'
                });
            });
            dom += '</div>';

            $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.simplebar-content').append(dom);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            // $(this).parents('.addres-delivery-block').find('.addres-menu-find').find('.count-addres').html(count);
            $('.dom').siblings('.count-addres').css('visibility', 'visible').html(`(${count})`);
            count = 0;
            domChange = true;

            $('.count-addres').css('visibility', 'hidden');
            $('.addres-menu-find').addClass('menu-find-active');
            $('.menu-find-active').css('top', resultBlocks + 'px');
            $(this).parents('.addres-delivery-block').find('.kvartira').val('');
            // $(this).parents('.addres-delivery-block').find('.dom').val('');
            $(this).parents('.addres-delivery-block').find('.index').val('');
        }
    }
});