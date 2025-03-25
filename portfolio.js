// script.js

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            document.getElementById("form-status").textContent = "Message sent!";
            contactForm.reset();
        });
    }

    const projectUploadBtn = document.getElementById("projectUpload");
    if (projectUploadBtn) {
        // your uploadProject logic...
    }
});
