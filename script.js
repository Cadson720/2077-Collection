document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slideshow-image');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 10000); // Change slide every 10 seconds
    showSlide(currentSlide); // Initialize the first slide
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.showcase-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Carousel functionality
let currentIndex = 0;

function showCarouselSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-image');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showCarouselSlide(currentIndex + 1);
}

function prevSlide() {
    showCarouselSlide(currentIndex - 1);
}
