document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.querySelector('.close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentImageIndex;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxContent.src = item.src;
            currentImageIndex = index;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : galleryItems.length - 1;
        lightboxContent.src = galleryItems[currentImageIndex].src;
    });

    next.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < galleryItems.length - 1) ? currentImageIndex + 1 : 0;
        lightboxContent.src = galleryItems[currentImageIndex].src;
    });

    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});