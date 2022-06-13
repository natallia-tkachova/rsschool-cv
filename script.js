let scrollpos = window.scrollY;
let navigation = document.querySelector(".navigation");

function addClassOnScroll() {
    navigation.classList.add("navigation__size_tiny");
}

function removeClassOnScroll() {
    navigation.classList.remove("navigation__size_tiny");
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos > 60) {
        addClassOnScroll();
    }
    else {
        removeClassOnScroll();
    }
});

const hamburger = document.querySelector('.hamburger');
const navigationItems = document.querySelector('.navigation__items');

function toggleMenu() {
    hamburger.classList.toggle('hamburger__state_active');
    navigationItems.classList.toggle('navigation__items_opened');
}

hamburger.addEventListener('click', toggleMenu);

const navigationLinks = document.querySelectorAll('.navigation__link');
navigationLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('navigation__link')) {
        hamburger.classList.remove('hamburger__state_active');
        navigationItems.classList.remove('navigation__items_opened');
    }
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("navigation__link_active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("navigation__link_active");
        }
    });
}
