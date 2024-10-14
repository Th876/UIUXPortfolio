"use strict";
// carousel
document.addEventListener("DOMContentLoaded", () => {
let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Use backticks for template literals
    slides.style.transform = `translateX(-${slideIndex * 100}%)`; 

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Initialize carousel
showSlide(slideIndex);
}); 

// User Persona Carousel
"use strict";
// carousel
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelector('.userPersonaWrapper'); // Targets the panel wrapper
    const totalSlides = document.querySelectorAll('.userPersonaWrapper div').length; // Counts the divs

    // Function to show the current slide based on the selected radio button
    function showSlide(index) {
        slideIndex = index;
        slides.style.transform = `translateY(-${slideIndex * 100}%)`; 
    }

    // Update slide index when a radio button is selected
    document.querySelectorAll('input[name="userPersonaControl"]').forEach((radio, index) => {
        radio.addEventListener('change', () => {
            showSlide(index);
        });
    });

    // Initialize carousel to show the first slide
    showSlide(slideIndex);
});



// Spy Nav Scroll
// Select elements
const spyNav = document.getElementById('spyNav');
const progressIndicator = document.getElementById('progress-indicator');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

let sticky = spyNav.offsetTop; // Get the initial position of the navbar

// Function to make the navbar sticky
function stickyNav() {
    if (window.scrollY >= sticky) {
        spyNav.classList.add('sticky');
    } else {
        spyNav.classList.remove('sticky');
    }
}

// Function to update the progress bar as the user scrolls
function updateProgressIndicator() {
    const scrollTop = window.scrollY; // Current scroll position
    const windowHeight = window.innerHeight; // Height of the viewport
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document

    // Calculate progress percentage based on scroll position
    const totalScrollableHeight = documentHeight - windowHeight;
    const progressWidth = (scrollTop / totalScrollableHeight) * 100;

    // Ensure progressWidth is between 0 and 100
    progressIndicator.style.width = `${Math.min(Math.max(progressWidth, 0), 100)}%`;
}

// Highlight the active navigation link
function highlightNav() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

    // Find which section is currently in the viewport
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if the scroll position is within the current section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Highlight the current nav link
            navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
            navLinks[index].classList.add('active'); // Add active class to the current link
        }
    });
}

// Handle scroll events
window.onscroll = function() {
    stickyNav();
    updateProgressIndicator();
    highlightNav();
};


   // Get the current year to automatically update copyright year
//   document.addEventListener('DOMContentLoaded', function() {
//     const currentYear = new Date().getFullYear();
//     document.getElementById('current-year').textContent = currentYear;
//  }) 


