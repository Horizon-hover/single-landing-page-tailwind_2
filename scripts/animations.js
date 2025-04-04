// Lazy loading with Intersection Observer
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '200px' });

lazyImages.forEach(img => imageObserver.observe(img));

// Scroll animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .showcase-item').forEach(el => {
    animateOnScroll.observe(el);
});