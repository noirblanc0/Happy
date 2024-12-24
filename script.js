const movingImage = document.getElementById('movingImage');
let position = { x: 0, y: 0 };
let isMoving = false;
let timer;

document.addEventListener('keydown', (event) => {
    isMoving = true;
    clearTimeout(timer);
    
    switch (event.key) {
        case 'ArrowUp':
            position.y -= 10;
            break;
        case 'ArrowDown':
            position.y += 10;
            break;
        case 'ArrowLeft':
            position.x -= 10;
            break;
        case 'ArrowRight':
            position.x += 10;
            break;
    }
    
    movingImage.style.transform = `translate(${position.x}px, ${position.y}px)`;
    movingImage.src = 'human.gif'; // Change to the moving image
});

document.addEventListener('keyup', () => {
    isMoving = false;
    timer = setTimeout(() => {
        movingImage.src = 'human.gif'; // Change to the stationary image
    }, 500); // Change image after 500ms of inactivity
});