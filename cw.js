// Scroll spy
$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
  
      // Loop through each navigation link
      $('.nav-link').each(function() {
        var targetId = $(this).attr('href');
        var targetOffset = $(targetId).offset().top;
  
        if (scrollTop >= targetOffset - 100) {
            // Remove 'active' class from all links
          $('.nav-link').removeClass('active'); 
          // Add 'active' class to the current link
          $(this).addClass('active'); 
  
          // If the current link has nested sublinks, mark the parent as active
          $(this).parents('ul').prev('a').addClass('active');
        }
      });
    });
  });
  
   // Get the current year to automatically update copyright year
  document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
 }) 

//  Back to top button

window.addEventListener('scroll', function() {
  const button = document.getElementById('back-to-top');
  if (window.scrollY > 1350) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark Mode button


// Set dark mode button, body, back to top button and logo
const darkModeBtn = document.getElementById("dark-mode-btn");
const logoSwitch = document.getElementById("logo-switch");
const topBtn = document.getElementById("back-to-top");

//Select :root to apply dark feature
const darkFeature = document.querySelector(":root");
let darkMode = localStorage.getItem("dark-mode");
//Function for dark mode
const enableDarkMode = () => {
  darkFeature.classList.add("dark-mode-theme");
  // Set dark mode logo
  darkModeBtn.classList.remove("dark-mode-toggle");
  // Set button text to light mode when in dark mode
  darkModeBtn.innerText = "light mode";
  // Switch logo to dark mode logo
  logoSwitch.src = "images/logo-white.svg";
    // Switch back to top button
    topBtn.querySelector('img').src = "images/top-btn-darkmode.png";
     // Change data-mode attribute to dark
  darkModeBtn.dataset.mode = "dark";
  localStorage.setItem("dark-mode", "enabled");
}
//Function for light mode
const disableDarkMode = () => {
  darkFeature.classList.remove("dark-mode-theme");
  darkModeBtn.classList.remove("dark-mode-toggle");
  // Set button margin for lightmode toggle
  darkModeBtn.style.marginRight = "30px";
  // Set button text to light mode when in dark mode
  darkModeBtn.innerText = "dark mode";
  // Switch logo to light mode logo
  logoSwitch.src = "images/logo-black.svg";
      // Switch back to top button
      topBtn.querySelector('img').src = "images/top-btn-lightmode.png";
  // Change data-mode attribute to dark
  darkModeBtn.dataset.mode = "light";
  localStorage.setItem("dark-mode", "disabled");
}
// Set dark mode when page loads
if (darkMode === "enabled") {
  enableDarkMode();
}
// Add click event to update the state
darkModeBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  darkMode === "disabled" ? enableDarkMode() : disableDarkMode();
});



