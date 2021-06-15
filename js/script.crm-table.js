// const btnOrders = document.querySelector('.btn-link');
// const btnWrap = document.querySelector('.crm-header-link');
// btnWrap.addEventListener('click', (event) => {
//     btnOrders.classList.toggle('btn-toggle');
// });
// btnOrders.forEach(btnOrders => {
//     btnwrap.addEventListener('click', () => {
//         btnOrders.classList.toggle('btn-toggle');
//     })
// });
// btnWrap.forEach(btnWrap => {
//     btnWrap.addEventListener('click', () => {
//         btnOrders.classList.toggle('btn-toggle');
//     })
// });
// $(".crm-header-link").click(function() {
//     let btnArr = $('.crm-header-link .btn-link');
//     btnArr.map(x => $(".crm-header-link .btn-link").removeClass('btn-toggle'));
//     $('.btn-link').toggleClass('btn-toggle');
// });w
[...document.querySelectorAll('.crm-header-link')].map(x => {
    // x.removeClass('btn-toggle');
    x.addEventListener('click', () => {
        x.classList.toggle('btn-toggle');
    });
})