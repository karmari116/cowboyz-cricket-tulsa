document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    // 2. Select all images in the team photos grid
    // We will update the HTML to give the parent div this specific ID
    const galleryImages = document.querySelectorAll('.photo-gallery-grid img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;

            // Extract just the filename for the user
            const fullPath = this.src;
            const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);

            // Display filename so user knows what to delete
            captionText.innerHTML = `Filename: <span style="color: white; font-weight: bold;">${filename}</span><br><small>(Look for this file in your folder to delete it)</small>`;
        });
    });

    // 3. Close Modal Logic
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Close on background click
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close on Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
