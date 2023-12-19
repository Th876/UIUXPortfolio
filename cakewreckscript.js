//   revealButtonCakeWrecks
document.getElementById('revealButtonCakeWrecks').addEventListener('click', function() {
    var stickyTabCake = document.getElementById('sticky-tab-cake');
    stickyTabCake.style.display = (stickyTabCake.style.display === 'none' || stickyTabCake.style.display === '') ? 'block' : 'none';
  });
