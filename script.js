"use strict";
 // jQuery code
// Set tooltip to slide down, track and customize appearance
$(function() {
    $("#tooltip").tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        },
        track: true
    });
});
// Ajax/jQuery API call for stickers
$(function() {
    // State to track stickers. Set to off on page load
    let stickersVisible = false;
    // Function to hide or display stickers
    const displayStickers = () => {
        // If stickers are visible, remove them
        if (stickersVisible) {
            $("#sticker-container").empty();
        }
        // If stickers are hiding, display them
        else {
            // Ajax request
            $.ajax({
                url: "https://820a62d9-b07f-4e0f-a439-02b5301c2420.mock.pstmn.io/all-stickers",
                method: "GET",
                dataType: "json",
                success: function(data) {
                    // Loop through array to display each sticker
                    data.forEach(function(item) {
                        const img = new Image();
                        // Set image source to its json file location
                        img.src = item.ImagePath;
                        // Add stickers from json file to the stickers' container
                        document.getElementById("sticker-container").appendChild(img);
                    });
                },
                // Handle errors
                error: function(status, error) {
                    console.error("Error fetching fun facts data: ", status, error);
                }
            });
        }
        // Toggle to keep track of stickers when button is clicked
        stickersVisible = !stickersVisible;
    }
    // Add event listener to display the stickers when user clicks the fun facts button
    $("#fun-facts-lightmode").click(function() {
        displayStickers();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the current year to automatically update copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
 }) 

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
    darkModeBtn.innerText = "light mode";
    // Switch logo to dark mode logo
    logoSwitch.src = "images/logo-white.svg";
    //Switch black down arrow to white down arrow
    arrowSwitch.src = "images/white-down-arrow.png";
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
    darkModeBtn.innerText = "dark mode";
    // Switch logo to light mode logo
    logoSwitch.src = "images/logo-black.svg";
    //Switch white down arrow to black down arrow
    arrowSwitch.src = "images/blk-down-arrow.png";
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

//Create words for greetings array in hero section
const greetings = ["Hola", "Hallo", "Salut", "Olá", "مرحبًا", "नमस्ते", "Ciao", "你好", "Jambo", "Hej", "Cześć", "Molo", "שלום", "ሰላም", "Hi"];
// Target element in html
const greetingSwitch = document.getElementById("greeting-switch");
// Keep track of the words from the array
let currentGreetingIndex = 0;
const greet = () => {
    // Set the placeholder's content to the word at the current index in the array so that it stays updated
    greetingSwitch.textContent = greetings[currentGreetingIndex];
    // Set current word index to increment but stay within the array's range (i.e. create an infinite loop with the modulo operator) 
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}
// Set greetings to display every (one) second
setInterval(greet, 1000);




