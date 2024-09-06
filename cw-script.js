"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Get the current year to automatically update copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}); 


// Set dark mode button, body and logo
const darkModeBtn = document.getElementById("dark-mode-btn");
const logoSwitch = document.getElementById("logo-switch");
const arrowSwitch = document.getElementById("arrow-switch");
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
};

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
    darkModeBtn.dataset.mode = "light";
    localStorage.setItem("dark-mode", "disabled");
};

// Set dark mode when page loads
if (darkMode === "enabled") {
    enableDarkMode();
}

// Click event to update the state
darkModeBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    darkMode === "disabled" ? enableDarkMode() : disableDarkMode();
});

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

