document.getElementById("language-toggle").addEventListener("click", function() {
    const isTamil = this.textContent === "தமிழ்";
    const elements = document.querySelectorAll("[data-en], [data-ta]");

    elements.forEach(element => {
        if (element.hasAttribute("data-en")) {
            element.textContent = isTamil ? element.getAttribute("data-ta") : element.getAttribute("data-en");
        }

        if (element.hasAttribute("placeholder")) {
            element.setAttribute("placeholder", isTamil ? element.getAttribute("data-ta") : element.getAttribute("data-en"));
        }
    });

    this.textContent = isTamil ? "English" : "தமிழ்";
});

// Toggle menu functionality
function toggleMenu() {
    const navList = document.getElementById("navList");
    if (navList.classList.contains("hidden")) {
        navList.classList.remove("hidden");
        navList.classList.add("slide-from-logo");
    } else {
        navList.classList.add("hidden");
        navList.classList.remove("slide-from-logo");
    }
}

// Ensure nav list is visible on page load
document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById("navList");
    navList.classList.remove("hidden");
    navList.classList.add("slide-from-logo");
});

// Add event listener to logo for toggling menu
document.querySelector(".logo").addEventListener("click", toggleMenu);

// Scrolling effect for navbar
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-50px"; // Hide the navbar
    } else {
        navbar.style.top = "0px"; // Show the navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});