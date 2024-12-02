"use strict";
// Select elements
const nav = document.getElementById('scrollspyNav');
const progressBar = document.getElementById('progress-bar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.scrollspy-nav a');

let sticky = nav.offsetTop; // Get the initial position of the navbar


// Function to make the navbar sticky
function stickyNav() {
    if (window.scrollY >= sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

// Function to update the progress bar as the user scrolls
function updateProgressBar() {
    let scrollTop = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progressWidth = (scrollTop / documentHeight) * 100;
    progressBar.style.width = progressWidth + '%';
}

function highlightNav() {
  console.log("highlightNav called"); // Check if this logs

  console.log(navLinks, sections); // Check navLinks and sections

  let scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    // Check if current scroll position is within section bounds
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
      navLinks[index].classList.add('active'); // Add active class to the current link
    }
  });
}

window.onscroll = function() {
  stickyNav();
  updateProgressBar();
  highlightNav();
};

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



//    Get the current year to automatically update copyright year
  document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
 }) 


