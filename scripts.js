/*==================================================
    PORTFOLIO MAIN JAVASCRIPT
==================================================*/


/*==================================================
    1. DARK / LIGHT THEME TOGGLE
==================================================*/

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const themeIcon = themeToggle.querySelector("i");


    // Check previously saved theme
    const savedTheme = localStorage.getItem("theme");


    // Apply saved theme when page loads
    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        if (themeIcon) {
            themeIcon.classList.remove("ri-moon-line");
            themeIcon.classList.add("ri-sun-line");
        }

    }


    // Theme button click
    themeToggle.addEventListener("click", function () {

        // Toggle dark-theme class
        document.body.classList.toggle("dark-theme");


        // Check current theme
        const isDark =
            document.body.classList.contains("dark-theme");


        if (isDark) {

            // Change moon icon to sun
            if (themeIcon) {

                themeIcon.classList.remove(
                    "ri-moon-line"
                );

                themeIcon.classList.add(
                    "ri-sun-line"
                );

            }


            // Save dark theme
            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            // Change sun icon to moon
            if (themeIcon) {

                themeIcon.classList.remove(
                    "ri-sun-line"
                );

                themeIcon.classList.add(
                    "ri-moon-line"
                );

            }


            // Save light theme
            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}


/*==================================================
    2. MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show-menu");

        menuBtn.classList.toggle("active");

    });


    // Close menu after clicking a navigation link

    const navItems =
        document.querySelectorAll(".nav-links a");


    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show-menu");

            menuBtn.classList.remove("active");

        });

    });

}


/*==================================================
    3. TYPED TEXT
==================================================*/

if (typeof Typed !== "undefined") {

    const typingElement =
        document.querySelector(".typing");


    if (typingElement) {

        new Typed(".typing", {

            strings: [
                "Backend Developer",
                "Python Developer",
                "Django Developer",
                "Frontend Developer",
                "Web Developer"
            ],

            typeSpeed: 80,

            backSpeed: 50,

            backDelay: 1500,

            loop: true

        });

    }

}


/*==================================================
    4. SCROLL REVEAL ANIMATIONS
==================================================*/

if (typeof ScrollReveal !== "undefined") {

    const sr = ScrollReveal({

        distance: "60px",

        duration: 1200,

        delay: 150,

        reset: false

    });


    // Hero

    sr.reveal(
        ".hero-content",
        {
            origin: "left"
        }
    );


    sr.reveal(
        ".hero-image",
        {
            origin: "right",
            delay: 300
        }
    );


    // Section titles

    sr.reveal(
        ".section-title",
        {
            origin: "bottom"
        }
    );


    // About

    sr.reveal(
        ".about-image",
        {
            origin: "left"
        }
    );


    sr.reveal(
        ".about-content",
        {
            origin: "right"
        }
    );


    // Skills

    sr.reveal(
        ".skills-content",
        {
            origin: "left"
        }
    );


    sr.reveal(
        ".skill-card",
        {
            origin: "bottom",
            interval: 150
        }
    );


    // Statistics

    sr.reveal(
        ".stat-card",
        {
            origin: "bottom",
            interval: 150
        }
    );


    // Projects

    sr.reveal(
        ".project-card",
        {
            origin: "bottom",
            interval: 200
        }
    );


    // Contact

    sr.reveal(
        ".contact-card",
        {
            origin: "left",
            interval: 150
        }
    );


    sr.reveal(
        ".contact-form",
        {
            origin: "right"
        }
    );

}


/*==================================================
    5. STATISTICS COUNTER
==================================================*/

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }


    counterStarted = true;


    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const increment =
            target / 100;


        const updateCounter = function () {

            current += increment;


            if (current < target) {

                counter.innerText =
                    Math.ceil(current);


                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target + "+";

            }

        };


        updateCounter();

    });

}


/* Start counters when statistics section is visible */

const statsSection =
    document.querySelector("#stats");


if (statsSection) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounters();

                    }

                });

            },

            {
                threshold: 0.3
            }

        );


    observer.observe(statsSection);

}


/*==================================================
    6. BACK TO TOP BUTTON
==================================================*/

const scrollTop =
    document.querySelector(".scroll-top");


if (scrollTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show-scroll");

        } else {

            scrollTop.classList.remove(
                "show-scroll"
            );

        }

    });

}


/*==================================================
    7. ACTIVE NAVIGATION LINK
==================================================*/

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*==================================================
    8. CONTACT FORM
==================================================*/

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            alert(
                "Thank you! Your message has been received."
            );


            contactForm.reset();

        }
    );

}


/*==================================================
    9. SMOOTH SCROLL
==================================================*/

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});




/*==================================================
    10. PAGE LOADED
==================================================*/

console.log(
    "Portfolio JavaScript loaded successfully 🚀"
);
