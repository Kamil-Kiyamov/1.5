if (document.documentElement.scrollWidth < 768) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },
    });
}

let elem = document.querySelectorAll('.hidden-elem');
let hidingButton = document.querySelector('.brands__hiding-button');

for (let el of elem) {
    hidingButton.onclick = function () {
        el.classList.toggle('hidden-elem');
    }
}

// if (hidingButton.onclick === true) {
//     elem.classList.toggle('hidden-elem')
// }

