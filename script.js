// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.innerText = body.classList.contains('light-mode') 
        ? 'Dark Mode' 
        : 'Light Mode';
});
