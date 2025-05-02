document.addEventListener("DOMContentLoaded", () => {

    // Animation de chargement (main fade-in)
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('visible');
    }

    // Gestion des boutons "Voir plus"
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

    // Galerie d'images : clique sur miniatures
    const galleryImages = document.querySelectorAll(".gallery-thumbs img");
    const mainImage = document.querySelector(".gallery-main img");

    if (galleryImages.length > 0 && mainImage) {
        galleryImages.forEach(img => {
            img.addEventListener("click", () => {
                mainImage.src = img.src;
            });
        });
    }

    // Validation formulaire
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

    // === Gestion du menu mobile ===
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        // Toggle menu
        hamburger.addEventListener("click", (e) => {
            navLinks.classList.toggle("show");
            e.stopPropagation(); // Stopper propagation du clic sur le bouton
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener("click", (e) => {
            if (navLinks.classList.contains("show") && !navLinks.contains(e.target) && e.target !== hamburger) {
                navLinks.classList.remove("show");
            }
        });
    }
});
