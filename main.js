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

let elem = document.querySelector('.hidden-elem')
let elems = document.querySelectorAll('.hidden-elem');
let hidingButton = document.querySelector('.brands__hiding-button');
let hidingButtonSpan = document.querySelector('brands__hiding-button-span')
console.log(elem.classList.contains("hidden-elem"))
let view = document.querySelector('.brands__hiding-button-view')
let hide = document.querySelector('.brands__hiding-button-hide')

hidingButton.onclick = function () {
    for (let el of elems) {
        el.classList.toggle('hidden-elem');
    }
    // if (elem.classList.contains("hidden-elem") != true) {
    //     hidingButtonSpan.innerText = "Скрыть"
    // } else {hidingButtonSpan.innerText = "Показать все"}

    // if (elem.classList.contains("hidden-elem") != true) {
    //     hidingButton.textContent = "Скрыть"
    // } else {hidingButton.textContent = "Показать все"}

    if (elem.classList.contains("hidden-elem") != true) {
        view.style.display = 'flex';
        hide.style.display = 'none';
    } else {
        view.style.display = 'none';
        hide.style.display = 'flex';
    }
}

// if (clicks % 2 === 0) {
//     hidingButton.textContent = "Показать всё";
// } else (hidingButton.textContent = "Скрыть")
//

//
// if (elem.classList.contains('hidden-elem')){
// } else {hidingButton.textContent = "Скрыть всё"}


