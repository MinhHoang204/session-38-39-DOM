window.onload = function() {
    const overlay = document.getElementById('overlay');
    const backgroundImage = document.getElementById('background-image');

    setTimeout(function() {
      overlay.style.opacity = '1';
      overlay.style.fontSize = '100px';
      setTimeout(function() {
        overlay.style.opacity = '0';
        backgroundImage.style.opacity = '1';
      }, 1000);
    }, 1000);
};