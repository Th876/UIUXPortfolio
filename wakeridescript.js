// Quick links button
document.getElementById('revealButtonWakeRide').addEventListener('click', function() {
    var stickyTab = document.getElementById('sticky-tab');
    stickyTab.style.display = (stickyTab.style.display === 'none' || stickyTab.style.display === '') ? 'block' : 'none';
  });
  
// Back-to-top button
$(function() {
  $(window).scroll(function() {
      // Set button to appear on body if scrolled passed 450px vertical
      if ($(this).scrollTop() > 450) {
          $("#back-to-top-wr").fadeIn();
      }
      // If the body isn't scrolled to those pixels, don't make it appear
      else {
          $("#back-to-top-wr").fadeOut();
      }
  });
  //Add event listener to smooth scroll back to the top when user clicks the 'Top' button
  $("#back-to-top-wr").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
  })
});

// Dark mode
// Set dark mode button, body and logo
const darkModeBtn = document.getElementById("dark-mode-btn");
const logoSwitch = document.getElementById("logo-switch");
const arrowSwitch = document.getElementById("arrow-switch");
//Select :root to apply dark feature
const darkFeature = document.querySelector(":root");
const wheelSwitch = document.getElementById("fun-facts-lightmode");
let darkMode = localStorage.getItem("dark-mode");
//Function for dark mode
const enableDarkMode = () => {
    darkFeature.classList.add("dark-mode-theme");
    // Set dark mode logo
    darkModeBtn.classList.remove("dark-mode-toggle");
    // Set button text to light mode when in dark mode
    darkModeBtn.innerText = "Light Mode";
    // Switch logo to dark mode logo
    logoSwitch.src = "images/unicorn-darkmode.png";
    //Switch black down arrow to white down arrow
    arrowSwitch.src = "images/white-down-arrow.png";
    //Change highlighted text color
    const highlight = document.querySelector(".highlight");
    highlight.style.backgroundColor = "var(--cottoncandy)";
    // Change fun facts wheel to dark mode view
    wheelSwitch.src = "images/fun-facts-darkmode.png";
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
    darkModeBtn.innerText = "Dark Mode";
    // Switch logo to light mode logo
    logoSwitch.src = "images/unicorn-lightmode.png";
    //Switch white down arrow to black down arrow
    arrowSwitch.src = "images/blk-down-arrow.png";
    //Change highlighted text color
    const highlight = document.querySelector(".highlight");
    highlight.style.backgroundColor = "var(--highlight)";
    // Change fun facts wheel to light mode view
    wheelSwitch.src = "images/fun-facts-lightmode.png";
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


