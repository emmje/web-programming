const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle button icon based on mode
    modeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});
