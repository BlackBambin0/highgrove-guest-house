'use strict';

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Scroll Effects
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animate').forEach(section => {
    gsap.from(section, { 
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    });
});

// Form Handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form data submission
    console.log('Form submitted!', formData);
    // Reset form after submission
    form.reset();
});