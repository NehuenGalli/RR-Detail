const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');
const faqItems = document.querySelectorAll('.faq-item');


menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.1
});

const elementosOcultos = document.querySelectorAll('.oculto');
elementosOcultos.forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const priceButtons = document.querySelectorAll('.price-button');

    priceButtons.forEach(button => {
        const cardContainer = button.closest('.service-card');
        if (cardContainer) {
            const cardTitle = cardContainer.querySelector('h3');
            if (cardTitle) {
                const titleText = cardTitle.textContent.trim();
                const message = `Hola, me gustaría consultar el precio para el servicio de "${titleText}".`;
                const whatsappUrl = `https://wa.me/5491123924862?text=${encodeURIComponent(message)}`;

                button.href = whatsappUrl;
                button.target = '_blank';
            }
        }
    });
});