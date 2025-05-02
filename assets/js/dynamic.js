
document.addEventListener("DOMContentLoaded", () => {

    
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('visible');
    }

    
    const toggleButtons = document.querySelectorAll(".project .toggle-details");

    toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const details = btn.nextElementSibling;
            if (details) {
                details.classList.toggle("visible");
                btn.textContent = details.classList.contains("visible") ? "Masquer les détails" : "Voir plus";
            }
        });
    });


    const galleryImages = document.querySelectorAll(".gallery-thumbs img");
    const mainImage = document.querySelector(".gallery-main img");

    if (galleryImages.length > 0 && mainImage) {
        galleryImages.forEach(img => {
            img.addEventListener("click", () => {
                mainImage.src = img.src;
            });
        });
    }

    
    const form = document.querySelector("form");
    if (form) {
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');
        const submitBtn = form.querySelector('button[type="submit"]');

        const validate = () => {
            const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
            const messageValid = messageInput.value.trim().length > 5;
            if (submitBtn) {
                submitBtn.disabled = !(emailValid && messageValid);
            }
        };

        if (emailInput && messageInput && submitBtn) {
            emailInput.addEventListener("input", validate);
            messageInput.addEventListener("input", validate);
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
