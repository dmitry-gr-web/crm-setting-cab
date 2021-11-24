let arr = ["0 сек", "30 сек", "45 сек", "1 мин", "2 мин", "3 мин", "4 мин", "5 мин", "6 мин", "7 мин", "8 мин", "9 мин", "10 мин", "11 мин", "12 мин", "13 мин", "14 мин", "15 мин", "20 мин", "25 мин", "30 мин", "35 мин", "40 мин", "45 мин", "50 мин", "55 мин", "1 час", "2 час", "3 час", "4 час", "5 час", "6 час", "7 час", "8 час", "9 час", "10 час", "12 час", "14 час", "16 час", "18 час", "20 час", "22 час", "1 дн", "2 дн", "3 дн", "4 дн", "5 дн", "7 дн", "10 дн", "15 дн", "20 дн", "25 дн", "30+ дн"];
console.log(arr.length)

// function rangeInputChangeEventHandler(e) {

// }

// $('input[type="range"]').on('input', function(e) {
//     let rangeGroup = $(this).attr('name');
//     let minBtn = $(this).parents('.rangeslider').find('.min');
//     let maxBtn = $(this).parents('.rangeslider').find('.max');
//     let range_min = $(this).parents('.rangeslider').find('.range_min');
//     let range_max = $(this).parents('.rangeslider').find('.range_max');
//     let minVal = $(minBtn).val();
//     let maxVal = $(maxBtn).val();
//     // let origin = $(this).context.className;
//     // console.log(origin)
//     if ($(this).hasClass('min') && minVal > maxVal - 1) {
//         $(minBtn).val(parseInt(maxVal) - 1);
//     }
//     minVal = $(minBtn).val();
//     $(range_min).val(minVal);
//     $('.inc span').text(arr[minVal])

//     if ($(this).hasClass('max') && maxVal - 1 < minVal) {
//         $(maxBtn).val(1 + parseInt(minVal));

//     }
//     console.log(e)
//     maxVal = $(maxBtn).val();
//     $(range_max).val(maxVal);
//     $('.dec span').text(arr[maxVal])
//     $(this).parents('.rangeslider').find('.minBG').css('width', +minVal / 0.4 + '%');
//     $(this).parents('.rangeslider').find('.maxBG').css('width', +100 - maxVal / 0.4 + '%');
// });

$('.inc').on('mouseenter', function(e) {
    document.addEventListener('keydown', inputKeyUp, false)
    document.self = this;
    $(this).find('.arrowsInc').css('opacity', '1');
    // $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
    // $(this).find('.arrowsInc .arrowDown').css('top', '3px');
    $(this).parents('.rangeslider').find('.min').addClass('inputThumbColor');
    // $(this).find('.arrowsDecInc').addClass('arrowsUpHide').addClass('arrowsPosition');
    // $(document).on('keydown', e => inputKeyUp(e, this))
});
$('.inc').on('mouseleave', function(e) {
    document.removeEventListener('keydown', inputKeyUp, false)
    document.self = this;
    $(this).find('.arrowsInc').css('opacity', '0');
    // $(this).find('.arrowsInc .arrowUp').css('opacity', '0.8');
    // $(this).find('.arrowsInc .arrowDown').css('top', '7px');
    $(this).parents('.rangeslider').find('.min').removeClass('inputThumbColor');

    // $(document).off('keydown', inputKeyUp)
});
$('.dec').on('mouseenter', function(e) {
    document.addEventListener('keydown', inputKeyDown, false)
    document.self = this;
    $(this).find('.arrowsDec').css('opacity', '1');
    $(this).parents('.rangeslider').find('.max').addClass('inputThumbColor');
    // $(document).on('keydown', e => inputKeyUp(e, this))
});
$('.dec').on('mouseleave', function(e) {
    document.removeEventListener('keydown', inputKeyDown, false)
    document.self = this;
    $(this).find('.arrowsDec').css('opacity', '0');
    $(this).parents('.rangeslider').find('.max').removeClass('inputThumbColor');
    // $(document).off('keydown', inputKeyUp)
});


$('.rangesList').on('click', function() {
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');
    $(this).toggleClass('select-btn');
    $('.inputDataMin,.inputDataMax').removeClass('select-btn');
    if ($(this).hasClass('p-p')) {
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
        if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
            $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
        }
    }
    console.log($('.rangesList.select-btn').length)
    $(this).parent().find('.rangesList.all').removeClass('select-btn');
    if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
        $(this).parents('.rangeslider').find('.all').addClass('select-btn');
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
        if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
            $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
            $(this).parents('.rangeslider').find('.all').removeClass('select-btn');
        } else {
            $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
            if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
                $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
            }
        }
    }
});
$('.rangesList.all').on('click', function() {
    $(this).parents('.rangesBtnBlock').find('.select-btn').removeClass('select-btn');
    $(this).addClass('select-btn');
    $(this).parents('.block1').removeClass('toggle');
    $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
    //Сброс Инпутов и значений
    $(this).parents('.rangeslider').find('.min').val('0');
    $(this).parents('.rangeslider').find('.max').val('52');
    $(this).parents('.rangeslider').find('.minBG,.maxBG').css('width', '0%');
    $(this).parents('.rangeslider').find('.inputDataMin').text(arr[0]);
    $(this).parents('.rangeslider').find('.inputDataMax').text(arr[52]);
    //Сброс Инпутов и значений
    $('.btn-wrap').css('visibility', 'visible');
    $('.btn-wrap-large').css('visibility', 'visible');
    $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
    $('.sort-btn').css('visibility', 'visible');
    $('.block-calendary').css('visibility', 'visible');
    $('.border-sort').css('opacity', '1');

    $('.podlozhka').css('z-index', '0').css('display', 'none');
    $('.input-style').css('visibility', 'visible');
    $(".sort-menu").on('mouseleave', sortMenuOff);
    $(".sort-menu").on('mouseenter', sortMenu);
    changesInput();
});

function inputKeyUp(e) {
    e.preventDefault();
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    let self = e.currentTarget.self;

    $(self).parents('.btn-wrap-medium').css('visibility', 'visible');
    $(self).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    $(self).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

    let rangeGroup = $(self).attr('name');
    let minBtn = $(self).parents('.rangeslider').find('.min');
    let maxBtn = $(self).parents('.rangeslider').find('.max');
    let range_min = $(self).parents('.rangeslider').find('.range_min');
    let range_max = $(self).parents('.rangeslider').find('.range_max');
    let minVal = $(minBtn).val();
    let maxVal = $(maxBtn).val();
    if (38 === e.keyCode) {
        minVal = $(minBtn).val();
        if ($(self).parents('.rangeslider').find('input').hasClass('min')) {
            $(minBtn).val(parseInt(minVal) - 1);
            console.log('t')
            $(self).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
            $(self).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
            if ($(self).parents('.rangeslider').find('.min').val() === '0') {
                $(self).find('.arrowsInc .arrowUp').css('opacity', '0');
                $(self).find('.arrowsInc .arrowDown').css('top', '5px');
            }
        } else {
            $(self).find('.arrowsInc .arrowUp').css('top', '5px').css('opacity', '0.8');
            $(self).find('.arrowsInc .arrowDown').css('opacity', '0');
        }
        $(range_min).val(parseInt(minVal) - 1);
        $(self).find('.inputDataMin').text(arr[parseInt(minVal) - 1])
        console.log('ttt')
    }
    if (40 === e.keyCode) {
        if ($(self).parents('.rangeslider').find('input').hasClass('min') && parseInt(minVal) + 1 < maxVal) {
            $(minBtn).val(parseInt(minVal) + 1);
            $(self).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
            $(self).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
            console.log('z')
        } else {
            $(self).find('.arrowsInc .arrowUp').css('top', '5px').css('opacity', '0.8');
            $(self).find('.arrowsInc .arrowDown').css('opacity', '0');
        }
        minVal = $(minBtn).val();
        $(range_min).val(parseInt(minVal));
        $(self).find('.inputDataMin').text(arr[minVal])
        console.log('zzz')
    }
    $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
    if ($(self).parents('.rangeslider').find('.min').val() !== '0' || $(self).parents('.rangeslider').find('.max').val() !== '52') {
        $(self).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
    } else {
        $(self).parents('.btn-wrap-medium').find('.btn-medium').text('');
        if ($(self).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
            $(self).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
        }
        if ($(self).parents('.rangeslider').find('.select-btn').length == 1) {
            $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
        }
        if ($(self).parents('.rangeslider').find('.select-btn').length == 0) {
            $(self).parents('.rangeslider').find('.all').addClass('select-btn');
        }
    }
    $(self).parents('.rangeslider').find('.minBG').css('width', Math.round(minBtn.val() / 0.52, 2) + '%');
}

function inputKeyDown(e) {
    e.preventDefault();
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    let self = e.currentTarget.self;

    $(self).parents('.btn-wrap-medium').css('visibility', 'visible');
    $(self).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    $(self).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

    let rangeGroup = $(self).attr('name');
    let minBtn = $(self).parents('.rangeslider').find('.min');
    let maxBtn = $(self).parents('.rangeslider').find('.max');
    let range_min = $(self).parents('.rangeslider').find('.range_min');
    let range_max = $(self).parents('.rangeslider').find('.range_max');
    let minVal = $(minBtn).val();
    let maxVal = $(maxBtn).val();
    if (38 === e.keyCode) {
        maxVal = $(maxBtn).val();
        if ($(self).parents('.rangeslider').find('input').hasClass('max') && parseInt(maxVal) - 1 > minVal) {
            $(maxBtn).val(parseInt(maxVal) - 1);
            $(self).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
            $(self).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');

        } else {
            $(self).find('.arrowsDec .arrowDown').css('top', '5px').css('opacity', '0.8');
            $(self).find('.arrowsDec .arrowUp').css('opacity', '0');
        }

        $(range_max).val($(maxBtn).val());
        $(self).find('.inputDataMax').text(arr[$(maxBtn).val()])
    }
    if (40 === e.keyCode) {
        maxVal = $(maxBtn).val();
        if ($(self).parents('.rangeslider').find('input').hasClass('max')) {
            $(maxBtn).val(parseInt(maxVal) + 1);
            $(self).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
            $(self).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
            if ($(self).parents('.rangeslider').find('.max').val() === '52') {
                $(self).find('.arrowsDec .arrowUp').css('top', '5px');
                $(self).find('.arrowsDec .arrowDown').css('opacity', '0');
            }
        } else {
            $(self).find('.arrowsDec .arrowDown').css('top', '5px').css('opacity', '0.8');
            $(self).find('.arrowsDec .arrowUp').css('opacity', '0');
        }
        $(range_max).val(parseInt(maxVal) + 1);
        $(self).find('.inputDataMax').text(arr[parseInt(maxVal) + 1])
    }
    $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
    if ($(self).parents('.rangeslider').find('.min').val() !== '0' || $(self).parents('.rangeslider').find('.max').val() !== '52') {
        $(self).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
    } else {
        $(self).parents('.btn-wrap-medium').find('.btn-medium').text('');
        if ($(self).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
            $(self).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
        }
        if ($(self).parents('.rangeslider').find('.select-btn').length == 1) {
            $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
        }
        if ($(self).parents('.rangeslider').find('.select-btn').length == 0) {
            $(self).parents('.rangeslider').find('.all').addClass('select-btn');
        }
    }

    console.log('olen')
    $(self).parents('.rangeslider').find('.maxBG').css('width', 100 - Math.round(maxBtn.val() / 0.52, 2) + '%');
}

$('.inc, .dec').on('mousewheel', function(e) {
    $(".sort-menu").off('mouseleave', sortMenuOff);
    $(".sort-menu").off('mouseenter', sortMenu);
    $('.btn-wrap').css('visibility', 'hidden');
    $('.btn-wrap-large').css('visibility', 'hidden');
    $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    $('.sort-btn').css('visibility', 'hidden');
    $('.block-calendary').css('visibility', 'hidden');
    $('.border-sort').css('opacity', '0');
    $('.input-style').css('visibility', 'hidden');
    $('.podlozhka').css('z-index', '998').css('display', 'block');

    $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

    wDelta = e.originalEvent.wheelDelta < 0 ? 'down' : 'up';
    let minBtn = $(this).parents('.rangeslider').find('.min');
    let maxBtn = $(this).parents('.rangeslider').find('.max');
    if ($(this).hasClass('range_min') && wDelta === 'down' && parseInt(minBtn.val()) + 1 < maxBtn.val()) {
        minBtn.val(parseInt(minBtn.val()) + 1)
        $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
    } else {
        if ($(this).parents('.rangeslider').find('.min').val() === '0') {
            $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
            $(this).find('.arrowsInc .arrowDown').css('top', '5px');
        } else {
            $(this).find('.arrowsInc .arrowUp').css('top', '5px');
            $(this).find('.arrowsInc .arrowDown').css('opacity', '0');
        }
    }
    if ($(this).hasClass('range_min') && wDelta === 'up' && parseInt(minBtn.val()) - 1 >= 0) {
        minBtn.val(parseInt(minBtn.val()) - 1)
            // console.log('a')
        $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.min').val() === '0') {
            $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
            $(this).find('.arrowsInc .arrowDown').css('top', '5px');
        }
    }
    if ($(this).hasClass('range_max') && wDelta === 'down' && parseInt(maxBtn.val()) + 1 <= 52) {
        maxBtn.val(parseInt(maxBtn.val()) + 1)
        console.log('r')
        $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    } else {
        console.log('rrrr')
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px')
        }
        if ($(this).parents('.rangeslider').find('.max').val() !== '52') {
            $(this).find('.arrowsDec .arrowUp').css('opacity', '0');
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '5px');
        }
    }
    if ($(this).hasClass('range_max') && wDelta === 'up' && minBtn.val() < maxBtn.val() - 1) {
        maxBtn.val(parseInt(maxBtn.val()) - 1)
        console.log('z')
        $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    } else {
        console.log('zzzz')
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    }
    $(this).find('.inputDataMin').text(arr[minBtn.val()])
    $(this).find('.inputDataMax').text(arr[maxBtn.val()])
    $(this).parents('.rangeslider').find('.minBG').css('width', Math.round(+minBtn.val() / 0.52, 2) + '%');
    $(this).parents('.rangeslider').find('.maxBG').css('width', +100 - Math.round(maxBtn.val() / 0.52, 2) + '%');

    $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
    if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
    } else {
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
        if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
            $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
        }
        if ($(this).parents('.rangeslider').find('.select-btn').length == 1) {
            $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
        }
        if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
            $(this).parents('.rangeslider').find('.all').addClass('select-btn');
        }
    }
    e.preventDefault();
});

//FIREFOX
$('.inc, .dec').on('DOMMouseScroll', function(e) {
    // $(".sort-menu").off('mouseleave', sortMenuOff);
    // $(".sort-menu").off('mouseenter', sortMenu);
    // $('.btn-wrap').css('visibility', 'hidden');
    // $('.btn-wrap-large').css('visibility', 'hidden');
    // $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
    // $('.sort-btn').css('visibility', 'hidden');
    // $('.block-calendary').css('visibility', 'hidden');
    // $('.border-sort').css('opacity', '0');
    // $('.input-style').css('visibility', 'hidden');
    // $('.podlozhka').css('z-index', '998').css('display', 'block');

    // $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
    // $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
    // $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');
     console.log('asdasdasasds')

    wDelta = e.originalEvent.detail > 0 ? 'down' : 'up';
    // let origin = $(this).context.className;
    let minBtn = $(this).parents('.rangeslider').find('.min');
    let maxBtn = $(this).parents('.rangeslider').find('.max');
    if ($(this).hasClass('range_min') && wDelta === 'down' && parseInt(minBtn.val()) + 1 < maxBtn.val()) {
        minBtn.val(parseInt(minBtn.val()) + 1)
        $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
    } else {
        if ($(this).parents('.rangeslider').find('.min').val() === '0') {
            $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
            $(this).find('.arrowsInc .arrowDown').css('top', '5px');
        } else {
            $(this).find('.arrowsInc .arrowUp').css('top', '5px');
            $(this).find('.arrowsInc .arrowDown').css('opacity', '0');
        }
    }
    if ($(this).hasClass('range_min') && wDelta === 'up' && parseInt(minBtn.val()) - 1 >= 0) {
        minBtn.val(parseInt(minBtn.val()) - 1)
            // console.log('a')
        $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.min').val() === '0') {
            $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
            $(this).find('.arrowsInc .arrowDown').css('top', '5px');
        }
    }
    if ($(this).hasClass('range_max') && wDelta === 'down' && parseInt(maxBtn.val()) + 1 <= 52) {
        maxBtn.val(parseInt(maxBtn.val()) + 1)
        console.log('r')
        $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    } else {
        console.log('rrrr')
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px')
        }
        if ($(this).parents('.rangeslider').find('.max').val() !== '52') {
            $(this).find('.arrowsDec .arrowUp').css('opacity', '0');
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '5px');
        }
    }
    if ($(this).hasClass('range_max') && wDelta === 'up' && minBtn.val() < maxBtn.val() - 1) {
        maxBtn.val(parseInt(maxBtn.val()) - 1)
        console.log('z')
        $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
        $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    } else {
        console.log('zzzz')
        if ($(this).parents('.rangeslider').find('.max').val() === '52') {
            $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
            $(this).find('.arrowsDec .arrowUp').css('top', '5px');
        }
    }
    $(this).find('.inputDataMin').text(arr[minBtn.val()])
    $(this).find('.inputDataMax').text(arr[maxBtn.val()])
    $(this).parents('.rangeslider').find('.minBG').css('width', Math.round(+minBtn.val() / 0.52, 2) + '%');
    $(this).parents('.rangeslider').find('.maxBG').css('width', +100 - Math.round(maxBtn.val() / 0.52, 2) + '%');

    $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
    if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
    } else {
        $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
        if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
            $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
        }
        if ($(this).parents('.rangeslider').find('.select-btn').length == 1) {
            $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
        }
        if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
            $(this).parents('.rangeslider').find('.all').addClass('select-btn');
        }
    }
    e.preventDefault();
});