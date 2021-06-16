[...document.querySelectorAll('.crm-header-link')].map(x => {
    x.addEventListener('click', () => {
        [...document.querySelectorAll('.crm-header-link')].map(y => y.classList.remove('btn-toggle'));
        x.classList.toggle('btn-toggle');
    });
});

[...document.querySelectorAll('.crm-main-table')].map(x => {
    x.addEventListener('click', () => {
        [...document.querySelectorAll('.crm-main-table')].map(y => y.classList.remove('select-toggle'));
        x.classList.toggle('select-toggle');
    });
});

const btnNot = document.querySelector('.btn-not');
const btnTech = document.querySelector('.btn-tech');

const blockNote = document.querySelector('.block-not');
const techNote = document.querySelector('.tech-note');

btnNot.addEventListener('click', () => {
    btnNot.classList.add('btn-style');
    blockNote.style.visibility = 'visible';
    techNote.style.visibility = 'hidden';
    btnTech.classList.remove('btn-style');

});
btnTech.addEventListener('click', () => {
    blockNote.style.visibility = 'hidden';
    techNote.style.opacity = '1';
    techNote.style.visibility = 'visible';

    btnTech.classList.add('btn-style');
    btnNot.classList.remove('btn-style');
});

const notificationBtn = document.querySelector('.notification-btn');
const notificationBlock = document.querySelector('.notifications');

notificationBtn.addEventListener('click', () => {
    notificationBlock.classList.toggle('notification-toggle');
});

// document.querySelector('.btn-not').addEventListener('click', () => {
//     document.querySelectorAll('.block-not').classList.toggle('toggle-display');
// });
// document.querySelector('.btn-tech').addEventListener('click', () => {
//     document.querySelectorAll('.tech-not').classList.toggle('toggle-display');
// });


// document.querySelectorAll('.crm-main-table').onclick = function(event) {
//     if (event.target.tagName != "div") return;

//     if (event.ctrlKey || event.metaKey) {
//         toggleSelect(event.target);
//     } else {
//         singleSelect(event.target);
//     }
// }

// document.querySelectorAll('.crm-main-table').onmousedown = function() {
//     return false;
// };

// function toggleSelect(div) {
//     div.classList.toggle('select-toggle');
// }

// function singleSelect(div) {
//     let selected = document.querySelectorAll('.crm-main-table');
//     for (let elem of selected) {
//         elem.classList.remove('select-toggle');
//     }
//     document.querySelectorAll('.crm-main-table').classList.add('select-toggle');
// }


// $(".crm-main-table").on("click", function(e) {
//     if (e.ctrlKey) {
//         $(this).addClass('select-toggle');
//     }
// });


// $(document).keydown(function(e) {
//     if (e.ctrlKey) {
//         $(".crm-main-table").click(function() {
//             let btn = $('.crm-main-table');
//             btn.map(x => $(".crm-main-table").removeClass('select-toggle'));
//             $('.crm-main-table').addClass('select-toggle');
//         });
//     }
// });


// const btn = document.querySelectorAll('.crm-main-table');
// btn.addEventListener('keydown', function(event) {
//     if (event.keyCode == 17) {
//         btn.classList.toggle('select-toggle');
//     }
// });

// x.addEventListener('keydown', (event) => {
//     if (event.keyCode == 17 && x) {
//         x.classList.toggle('select-toggle');
//     }
// });


// document.addEventListener('keydown', function() {
//     if (keyCode == 17) {
//         document.querySelectorAll('.crm-main-table').addEventListener('click', () => {
//             document.querySelectorAll('.crm-main-table').classList.toggle('select-toggle');
//         });
//     }
// });

// document.addEventListener("mousedown", function(event) {
//     if (event.ctrlKey && event.button == 1) {
//                 document.querySelectorAll('.crm-main-table').addEventListener('click', () => {
//             document.querySelectorAll('.crm-main-table').classList.toggle('select-toggle');
//     }
// });