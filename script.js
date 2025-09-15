// Toggle menu on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle contact form submission
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        status.textContent = "Thank you! Your message has been sent.";
        status.style.color = "green";
        form.reset();
    } else {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
    }
});