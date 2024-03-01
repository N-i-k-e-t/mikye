const eyes = document.querySelectorAll('.eye'); // Select both eyes
const cursor = { x: 0, y: 0 }; // Store cursor position

// Update cursor position on mouse movement
document.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Move each eye towards the cursor
    eyes.forEach(eye => {
        let eyeX = eye.offsetLeft + eye.offsetWidth / 2;  // Eye's center X
        let eyeY = eye.offsetTop + eye.offsetHeight / 2;  // Eye's center Y

        let dx = cursor.x - eyeX; // Distance from cursor horizontally
        let dy = cursor.y - eyeY; // Distance from cursor vertically

        // Apply an offset to make the eyes look slightly off-center
        const offset = 10; 
        eye.style.transform = `translate(${dx / offset}px, ${dy / offset}px)`; 
    });
}

animate(); 
