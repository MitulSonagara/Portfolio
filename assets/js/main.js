/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_menu");
    })
}

if (navToggle) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    navMenu.classList.remove("show_menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm("service_qak1u6o", "template_fkmpgxb", "#contact-form", "G3lQ5ij9PxPfiGlry")
        .then(() => {
            contactMessage.textContent = "Message sent successfully"

            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)

            contactForm.reset();
        }, () => {
            contactMessage.textContent = "Message not sent (Service error)"
        })
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    this.scrollY >= 350 ? scrollUp.classList.add("show_scroll") : scrollUp.classList.remove("show_scroll")
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 60,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".nav_menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active_link")
        } else {
            sectionsClass.classList.remove("active_link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 200,
    reset: true
})

sr.reveal(`.home_data,.home_social,.contact_container,.footer_container`);
sr.reveal(`.home_image`, { origin: "bottom" });
sr.reveal(`.about_data,.skills_data`, { origin: "left" });
sr.reveal(`.about_image,.skills_content`, { origin: "right" });
sr.reveal(`.service_card,.project_card`, { interval: 100 });


