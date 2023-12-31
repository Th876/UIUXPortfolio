

// Back to top button
$(function() {
  $(window).scroll(function() {
      // Set button to appear on body if scrolled passed 450px vertical
      if ($(this).scrollTop() > 450) {
          $("#back-to-top-cw").fadeIn();
      }
      // If the body isn't scrolled to those pixels, don't make it appear
      else {
          $("#back-to-top-cw").fadeOut();
      }
  });
  //Add event listener to smooth scroll back to the top when user clicks the 'Top' button
  $("#back-to-top-cw").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
  })
});

// Quick links reveal button
document.getElementById('revealButtonCakeWrecks').addEventListener('click', function() {
  var stickyTabCake = document.getElementById('sticky-tab-cake');
  stickyTabCake.style.display = (stickyTabCake.style.display === 'none' || stickyTabCake.style.display === '') ? 'block' : 'none';
});


// Set dark mode button, body and logo
const darkModeBtn = document.getElementById("dark-mode-btn");
const logoSwitch = document.getElementById("logo-switch");
// const arrowSwitch = document.getElementById("arrow-switch");
//Select :root to apply dark feature
const darkFeature = document.querySelector(":root");
// const wheelSwitch = document.getElementById("fun-facts-lightmode");
let darkMode = localStorage.getItem("dark-mode");

//Function for dark mode
const enableDarkMode = () => {
  // Debugging
  console.log("Enabling dark mode...");
    darkFeature.classList.add("dark-mode-theme");
    // Set dark mode logo
    darkModeBtn.classList.remove("dark-mode-toggle");
    // Set button text to light mode when in dark mode
    darkModeBtn.innerText = "light mode";
    // Switch logo to dark mode logo
    logoSwitch.src = "images/unicorn-darkmode.png";
    // Change data-mode attribute to dark
    darkModeBtn.dataset.mode = "dark";
    localStorage.setItem("dark-mode", "enabled");
}
//Function for light mode
const disableDarkMode = () => {
  // Debugging
  console.log("Disabling dark mode...");
    darkFeature.classList.remove("dark-mode-theme");
    darkModeBtn.classList.remove("dark-mode-toggle");
    // Set button margin for lightmode toggle
    darkModeBtn.style.marginRight = "30px";
    // Set button text to light mode when in dark mode
    darkModeBtn.innerText = "dark mode";
    // Switch logo to light mode logo
    logoSwitch.src = "images/unicorn-lightmode.png";
    // Change data-mode attribute to dark
    darkModeBtn.dataset.mode = "light";
    localStorage.setItem("dark-mode", "disabled");
    console.log("Initial dark mode state:", darkMode);

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

