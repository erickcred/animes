const header = document.querySelector(".header");
const topup = document.querySelector(".topup");
const alturaHeader = header.clientHeight;

window.addEventListener("scroll", function() {
    if ((alturaHeader + 250) < this.scrollY) {
        showTopup();
    } else {
        hiddenTopup();
    }
});
topup.addEventListener("click", function() {
    window.scroll(0, 0);
});

function showTopup() {
    topup.classList.add("topup--is-show");
}
function hiddenTopup() {
    topup.classList.remove("topup--is-show");
}