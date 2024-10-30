document.querySelectorAll('.nav-icon').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Navigating to ${button.innerText}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Optionally add dynamic score logic or interactivity here
    const scoreValue = document.getElementById('score-value');
    scoreValue.innerText = '780'; // Set score dynamically if needed
});
