// jQuery(function ($) {
//     var $doc = $(document),
//         ratio = $doc.width() / $(window).width()*1.5, //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '.crm-table', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenX;
//         $doc.on('mousemove.drag', drag);
//         $doc.one('mouseup.drag mouseout.drag', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenX - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollLeft($doc.scrollLeft() - delta);
//             mousepos = e.screenX;
//         }, 0);
//     }

//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }


// });
// mc = new Hammer.Manager('.container-info-settings', {
//     touchAction: 'auto',
//     recognizers: [
//         [Hammer.Pan,{ direction: Hammer.DIRECTION_HORIZONTAL }],
//     ]
// });
const container = document.querySelector('.crm-table');
                
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop; 
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}