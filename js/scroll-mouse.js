const slider = document.querySelectorAll('.simplebar-content-wrapper');
slider.forEach((el) => {
    let isDown = false;
    let startX;
    let scrollLeft;
    // let wrapHide = document.querySelector('.wrap-hide');

    el.addEventListener('mousedown', (e) => {
        if (el.closest('.wrap-hide') == null) {
            isDown = true;
            // slider.classList.add('active');
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        } else {
            isDown = false;
        }
    });
    el.addEventListener('mouseleave', () => {
        isDown = false;

        // slider.classList.remove('active');
    });
    el.addEventListener('mouseup', () => {
        isDown = false;
        // slider.classList.remove('active');
    });
    el.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 5 //scroll-fast
        el.scrollLeft = scrollLeft - walk;
        // console.log(walk);
        // if (el.closest('.toggle') == null) {
        //     e.isDown = false;
        // }
    });
})


// const slider2 = document.querySelector('.scroll-wrap2');
// let isDown2 = false;
// let startX2;
// let scrollLeft2;

// slider2.addEventListener('mousedown', (e) => {
//     isDown2 = true;
//     // slider.classList.add('active');
//     startX2 = e.pageX - slider2.offsetLeft;
//     scrollLeft2 = slider2.scrollLeft2;
// });
// slider2.addEventListener('mouseleave', () => {
//     isDown2 = false;
//     // slider.classList.remove('active');
// });
// slider2.addEventListener('mouseup', () => {
//     isDown2 = false;
//     // slider.classList.remove('active');
// });
// slider2.addEventListener('mousemove', (e) => {
//     if (!isDown2) return;
//     e.preventDefault();
//     const x2 = e.pageX - slider2.offsetLeft;
//     const walk2 = (x2 - startX2) * 5; //scroll-fast
//     slider2.scrollLeft2 = scrollLeft2 - walk2;
//     console.log(walk2);
// });

// jQuery(function ($) {
//   var $doc = $(document),
//       ratio = $doc.width() / $(window).width(), //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//       mousepos, to;
//   $doc.on('mousedown', '.f', dragstart);

//   function dragstart(e) {
//       e.preventDefault();
//       mousepos = e.screenX;
//       $doc.on('mousemove.drag', drag);
//       $doc.one('mouseup.drag mouseout.drag', dragstop);
//   }

//   function drag(e) {
//       clearTimeout(to);
//       var delta = (e.screenX - mousepos) * ratio;
//       to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//           $doc.scrollLeft($doc.scrollLeft() - delta);
//           mousepos = e.screenX;
//       }, 1);
//   }

//   function dragstop(e) {
//       $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//   }


// });