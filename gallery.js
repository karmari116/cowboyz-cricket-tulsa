console.log("Gallery Script Loaded - v3 (Robust)");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded - Initializing Lightbox");

    // 1. Select the modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (!modal) {
        console.error("Critical Error: Modal element not found! Is it in index.html?");
        return;
    } else {
        console.log("Modal element found.");
    }

    // 2. Select all images in the photo gallery
    const galleryImages = document.querySelectorAll('.photo-gallery-grid img');
    console.log("Found " + galleryImages.length + " images in gallery.");

    if (galleryImages.length === 0) {
        console.error("No images found in .photo-gallery-grid! Check HTML class.");
    }

    galleryImages.forEach((img, index) => {
        // Force the cursor to pointer so user knows it's clickable
        img.style.cursor = "pointer";

        img.addEventListener('click', function () {
            console.log("Image clicked: " + this.src);
            modal.style.display = "block";
            modalImg.src = this.src;

            // Extract just the filename for the user
            const fullPath = this.src;
            const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);

            // Display filename so user knows what to delete
            captionText.innerHTML = `<span style="color: #bbb; font-size: 0.9rem;">${filename}</span>`;
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
