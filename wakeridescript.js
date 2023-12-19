document.getElementById('revealButton').addEventListener('click', function() {
    var stickyTab = document.getElementById('sticky-tab');
    stickyTab.style.display = (stickyTab.style.display === 'none' || stickyTab.style.display === '') ? 'block' : 'none';
  });
  
