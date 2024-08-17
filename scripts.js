// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const imgSrc = this.href;
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');

        const img = document.createElement('img');
        img.src = imgSrc;
        lightboxOverlay.appendChild(img);

        document.body.appendChild(lightboxOverlay);
        lightboxOverlay.classList.add('active');

        // Close lightbox on click outside image or pressing Escape
        lightboxOverlay.addEventListener('click', function(e) {
            if (e.target === lightboxOverlay || e.key === "Escape") {
                lightboxOverlay.remove();
            }
        });

        // Close lightbox on Escape key press
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") {
                lightboxOverlay.remove();
            }
        });
    });
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Thank you for contacting us!");
            form.reset();
        } else {
            alert("There was a problem with your submission. Please try again.");
        }
    }).catch(error => {
        alert("There was a problem with your submission. Please try again.");
    });
});
