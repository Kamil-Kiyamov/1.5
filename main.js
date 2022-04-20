// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });
//
// function() {
//     'use strict';
//     // breakpoint where swiper will be destroyed
//     // and switches to a dual-column layout
//     const breakpoint = window.matchMedia('(min-width:320px)');
//     // keep track of swiper instances to destroy later
//     let mySwiper;
//     const breakpointChecker = function () {
//         // if larger viewport and multi-row layout needed
//         if (breakpoint.matches === true) {
//             // clean up old instances and inline styles when available
//             if (mySwiper !== undefined) mySwiper.destroy(true, true);
//             // or/and do nothing
//             return;
//             // else if a small viewport and single column layout needed
//         } else if (breakpoint.matches === false) {
//             // fire small viewport version of swiper
//             return enableSwiper();
//         }
//     };
// }
//
// const viewportWidth =

// const mediaQuery = window.matchMedia('(min-width: 768px)')
//
// if (mediaQuery.matches) {
//     swiper.destroy();
// }
//
// const mQuery = window.matchMedia('(max-width: 768px)')
//
// function handleMobilePhoneResize(e) {
//     // Проверяем, верен ли медиа-запрос
//     if (e.matches) {
//         // Затем выводим в консоль следующее сообщение
//         console.log('Media Query Matched!')
//     }
// }
//
// // Настраиваем слушателя событий
// mQuery.addEventListener(handleMobilePhoneResize)



// if (window.matchMedia("(min-width: 768px)").matches) {
//     mySwiper.destroy(true, true);
//
// // } else {
// //     enableSwiper();
// // }
//
// const breakpoint = window.matchMedia( '(max-width:768)' );
//
// const breakpointChecker = function() {
//     // if larger viewport and multi-row layout needed
//     if ( breakpoint.matches === true ) {
//         // clean up old instances and inline styles when available
//         if ( swiper !== undefined ) mySwiper.destroy( true, true );
//         // or/and do nothing
//         return;
//         // else if a small viewport and single column layout needed
//     } else if ( breakpoint.matches === false ) {
//         // fire small viewport version of swiper
//         return enableSwiper();
//     }
// };


// window.screen.width

if (document.documentElement.scrollWidth < 768) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}










