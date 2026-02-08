const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');
const faqItems = document.querySelectorAll('.faq-item');


// Toggle del menú de navegación

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Toggle de preguntas frecuentes

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Slider de imágenes 

document.addEventListener('DOMContentLoaded', () => {

    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach((slider) => {
        let slideIndex = 0;
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.display = 'none';
            });

            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            slides[slideIndex].style.display = 'block';
            slides[slideIndex].classList.add('active');
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                slideIndex++;
                showSlide(slideIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                slideIndex--;
                showSlide(slideIndex);
            });
        }

        showSlide(slideIndex);

        const randomTime = Math.floor(Math.random() * (6000 - 4000 + 1) + 4000);
        setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, randomTime);
    });
});