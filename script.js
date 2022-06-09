let scrollpos = window.scrollY;
let navigation = document.querySelector(".navigation");

function addClassOnScroll() {
    navigation.classList.add("navigation_tiny");
}

function removeClassOnScroll() {
    navigation.classList.remove("navigation_tiny");
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos > 60) {
        addClassOnScroll();
    }
    else {
        removeClassOnScroll();
    }
    // console.log(scrollpos);
});