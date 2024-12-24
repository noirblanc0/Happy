const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const bench = document.getElementById('bench');
const humanIcon = document.getElementById('human-icon');
const countdownDisplay = document.getElementById('countdown');
const messageDisplay = document.getElementById('message');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to create stars
function createStar() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    return { x, y, size };
}

// Draw stars
function drawStars(stars) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
    });
}

// Create and animate stars
const stars = Array.from({ length: 100 }, createStar);
setInterval(() => drawStars(stars), 100);

// Change cursor to human icon when the human icon is clicked
humanIcon.addEventListener('click', () => {
    document.body.style.cursor = 'url(human_cursor.png), auto'; // Change cursor to human image
});

// Bench click event
bench.addEventListener('click', () => {
    countdownDisplay.style.display = 'block';
    messageDisplay.style.display = 'none';
    let countdown = 5;

    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.style.display = 'none';
            messageDisplay.textContent = "Happy Night!";
            messageDisplay.style.display = 'block';
            launchFireworks(); // Call the fireworks function here
            // Reset after a delay
            setTimeout(() => {
                messageDisplay.style.display = 'none';
            }, 3000);
        }
    }, 1000);
});

// Fireworks function (placeholder)
function launchFireworks() {
    // You can implement a fireworks animation here
    // For now, we'll just log to the console
    console.log("Fireworks launched!"); // Replace this with your fireworks code
}