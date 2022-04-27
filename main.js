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
// let i = 1;

let svg = document.querySelector('.hiding-button__svg')
hidingButton.onclick = function () {
    for (let el of elems) {
        el.classList.toggle('hidden-elem');
    }
    let i=1;
    let b = i+1;
    console.log(b)

    // svg.style.transform = 'rotate(180deg)'
    if (elem.classList.contains("hidden-elem") != true) {
        view.style.display = 'none';
        hide.style.display = 'flex';
        svg.style.transform = 'rotate(180deg)'
    } else {
        view.style.display = 'flex';
        hide.style.display = 'none';
        svg.style.transform = 'rotate(0deg)'
    }


}
// if (elem.classList.contains("hidden-elem") != true) {
//     hidingButtonSpan.innerText = "Скрыть"
// } else {hidingButtonSpan.innerText = "Показать все"}

// if (elem.classList.contains("hidden-elem") != true) {
//     hidingButton.textContent = "Скрыть"
// } else {hidingButton.textContent = "Показать все"}

