const canvas = document.getElementById('hello-world');
const context = canvas.getContext('2d');

// drawing blue rectangle on canvas
context.fillStyle = 'blue'; // brush color
context.fillRect(10, 10, 50, 70); // (x,y, width, height)

// salmon rectangle
context.fillStyle = 'salmon';
context.fillRect(70, 10, 50, 70);
