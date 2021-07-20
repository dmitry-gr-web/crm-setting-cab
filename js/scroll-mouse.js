// (function() {
//     let speed = 2; // Скорость скролла.

//     let scroll = document.querySelector('.container-info-settings');

//     let left = 0; // отпустили мышку - сохраняем положение скролла
//     let drag = false;
//     let coorX = 0; // нажали мышку - сохраняем координаты.

//     scroll.addEventListener('mousedown', function(e) {
//         drag = true;
//         coorX = e.pageX - this.offsetLeft;
//     });
//     document.addEventListener('mouseup', function() {
//         drag = false;
//         left = scroll.scrollLeft;
//     });
//     scroll.addEventListener('mousemove', function(e) {
//         if (drag) {
//             this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX) * speed;
//         }
//     });

// })();
// jQuery(function($) {
//     var $doc = $('.container-info-settings'),
//         ratio = $doc.width() / $(window).width(), //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '.simplebar-content-wrapper', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenX;
//         $doc.on('mousemove.drag', drag);
//         $doc.one('mouseup.drag mouseout.drag', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenX - mousepos) * ratio;
//         to = setTimeout(function() { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollLeft($doc.scrollLeft() - delta);
//             mousepos = e.screenX;
//         }, 1);
//     }

//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }


// });
// {
//     var lastX = 0; //последняя координата x мыши
//     var SliderScroll = false; //требуется ли анимация?


//     $(document).mousemove(function(e) {
//         lastX = e.clientX; //обновили горизонтальное положение курсора
//     });

//     //как только курсор оказывается в элементе news-slider начинаем анимацию прокрутки
//     $(".container-info-settings").mouseenter(function(e) {
//         SliderScroll = true;
//         NewsSliderScroll(); //запуск самой анимации
//     });

//     $(".container-info-settings").mouseenter(function(e) {
//         SliderScroll = false; //сбрасываем для выхода из рекурсии
//     });


//     function NewsSliderScroll() {
//         setTimeout(function() {
//             var speed = (0.5 - ($(window).width() - lastX) / $(window).width()).toFixed(2); //не суть важно, нужно для расчета шага прокрутки
//             var step = $(".container-info-settings").scrollLeft() + 200 * speed; //шаг прокрутки
//             $(".crm-table").stop().animate({ scrollLeft: step }, 100); // останавливаем предыдущую анимацию и сразу же запускаем следующую. на скрол шага 100 милисекунд
//             if (SliderScroll) NewsSliderScroll(); //рекурсивно вызываем саму себя
//         }, 100); //все это дело запускаем с отсрочкой в 100 мс, требующиеся на анимацию. 
//     }
// }