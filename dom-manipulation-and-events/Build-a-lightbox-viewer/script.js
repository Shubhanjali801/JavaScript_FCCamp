
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('close-btn');

  // Open lightbox when thumbnail clicked
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullSizeSrc = item.src.replace('-thumbnail', '');
      lightboxImage.src = fullSizeSrc;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox when clicking close button
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling to .lightbox
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking on the background
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});