// Hamburger menu toggle
document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    
    if (window.innerWidth <= 768) {
        menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
    } else {
        // Remove inline style for larger screens
        menu.style.display = '';
    }
});

// Close menu when the screen size is larger than 768px
window.addEventListener('resize', function() {
    const menu = document.getElementById('menu');
    
    if (window.innerWidth > 768) {
        menu.style.display = '';
    }
});



// Text animation
document.addEventListener("DOMContentLoaded", function () {
    const switchText = document.querySelector(".switch-text");

    const textArray = ["Distant lands ⛰️", "Close friends 🤝🏼"];
    let textIndex = 0;

    function updateText() {
        switchText.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
        switchText.style.color = "var(--lilac)";
    }

    // Initial update
    updateText();

   // Change text every 2 seconds
    setInterval(updateText, 2000); 
});
