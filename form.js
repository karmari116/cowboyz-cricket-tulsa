// Handle the form submission without refreshing the page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="contact"]');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            // Send data to FormSubmit.co (Free for GitHub Pages)
            fetch('https://formsubmit.co/ajax/karmari116@gmail.com', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            })
                .then(response => response.json())
                .then(data => {
                    // Success! Replace form with thank you message
                    form.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <h3 style="color: #FF6600; font-size: 1.5rem; margin-bottom: 1rem;">Message Sent! 🏏</h3>
                        <p style="font-size: 1.1rem;">Thanks for reaching out. We will get back to you soon!</p>
                    </div>
                `;
                })
                .catch((error) => {
                    console.error('Form error:', error);
                    alert('Oops! Something went wrong. Please try again.');
                });
        });
    }
});
