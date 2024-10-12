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

   // Get the current year to automatically update copyright year
  document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
 }) 


