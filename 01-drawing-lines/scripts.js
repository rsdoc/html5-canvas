// drawing lines on canvas
// load all functions on page load
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  drawSimpleLine(context);
};

function drawSimpleLine(context) {
  // discard the previous path and create new path
  context.beginPath(); // reset the context state

  // choose brush color
  context.strokeStyle = 'salmon';

  // thickness of line
  context.lineWidth = 10;

  // starting point coordinates of line
  context.moveTo(30, 70);

  // end point coordinates of line
  context.lineTo(130, 70);

  // draw the line
  context.stroke();
}
