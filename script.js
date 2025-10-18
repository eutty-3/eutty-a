const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const texts = ["Front-end Developer", "Virtual assistance", "Web Developer", "Graphics Designer"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = texts[index];
        let displayText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        textElement.innerHTML = displayText;

        let typingSpeed = isDeleting ? 100 : 150; // Typing slower, deleting a bit faster

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; // Move to next word
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').split('#')[1];
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    portfolioItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector("#hero");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(heroSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Show the confirmation message
    document.getElementById("confirmation-message").style.display = "block";

    // Optionally, you could hide the form after submission
    document.querySelector(".contact-form").style.display = "block";
});