// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



// Contact Form Validation

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
}


/*about section*/

document.addEventListener("DOMContentLoaded", function () {
    // Testimonials animation
    let testimonials = document.querySelectorAll(".testimonial-item");
    let index = 0;

    function showNextTestimonial() {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });

        index = (index + 1) % testimonials.length;
    }

    setInterval(showNextTestimonial, 3000);
    showNextTestimonial();
});

//FAQ

document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
        details.addEventListener("toggle", function () {
            if (this.open) {
                this.style.border = "2px solid #0073e6";
            } else {
                this.style.border = "1px solid #ddd";
            }
        });
    });
});







