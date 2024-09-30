let a = document.querySelectorAll(`.divfade`);


var arr = Array.from(a);
var viewportHeight = window.innerHeight;


var arr = Array.from(a);

arr.forEach((t) => {
    document.addEventListener(`scroll`, ((event) => {
        var rect = t.getBoundingClientRect();
        var position = rect.top / viewportHeight;
        if (position <= 0.7 && position < 1) {
            t.classList.add(`fadein`);
            t.classList.remove(`fadeout`);

        }



        console.log(`heyyoo`);
        console.log(rect.top)
        console.log(viewportHeight)

    }))
})

function closedd() {
    document.querySelector(`.menubar`).classList.add(`closed`)
}
function openn() {
    document.querySelector(`.menubar`).classList.remove(`closed`)
}