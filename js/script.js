/* ===================================
   SEA HAWK TECH SOLUTIONS
   MAIN JAVASCRIPT
=================================== */

// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#071b38";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";
        navbar.style.padding = "10px 0";
    } else {
        navbar.style.background = "#0b2c5f";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "15px 0";
    }
});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }

    });

});

document.querySelectorAll(".card,.section-title,.hero img").forEach(el => {
    observer.observe(el);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Image Hover Effect
document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.05)";
        img.style.transition = ".4s";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});

// Loading Screen
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// Current Year
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

console.log("Sea Hawk Tech Solutions Website Loaded Successfully");
