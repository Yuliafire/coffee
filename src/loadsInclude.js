// src/loadIncludes.js
function loadHTML(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadHTML('../layout/header.html', 'header-placeholder');
    loadHTML('../layout/footer.html', 'footer-placeholder');
  });