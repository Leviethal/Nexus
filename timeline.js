const left = document.querySelector(".left");
const right = document.querySelector(".right");
window.addEventListener("scroll", appearOnScroll)

function appearOnScroll() {
    let textPosition = left.getBoundingClientRect().top;
    console.log(textPosition);
    let windowHeight = window.innerHeight / 1.5;
    if (windowHeight > textPosition) {
        left.classList.remove("push-left");
        right.classList.remove("push-right");
    }
    else {
        left.classList.add("push-left");
        right.classList.add("push-right");
    }
}
