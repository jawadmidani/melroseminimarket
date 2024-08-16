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
