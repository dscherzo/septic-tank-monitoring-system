// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeIcon.src = body.classList.contains('light-mode') 
        ? 'images/moon-icon.svg' 
        : 'images/sun-icon.svg';
});
