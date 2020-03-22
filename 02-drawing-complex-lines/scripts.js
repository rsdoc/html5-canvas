// drawing complex lines on canvas
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // drawing zig zag lines
  // drawZigZagLines();

  // short cut for above code
  shortDrawZigZagLines(context);
};

function shortDrawZigZagLines(context) {
  // line one
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth = 5;
  context.moveTo(10, 10);
  context.lineTo(50, 50);
  context.lineTo(80, 10);
  context.lineTo(110, 50);
  context.lineTo(150, 10);
  context.stroke();
}

function drawZigZagLines(context) {
  // line one
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth = 5;
  context.moveTo(10, 10);
  context.lineTo(50, 50);
  context.stroke();

  // line two
  context.beginPath();
  context.strokeStyle = 'salmon';
  context.lineWidth = 5;
  context.moveTo(50, 50);
  context.lineTo(80, 10);
  context.stroke();

  // line 3
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 5;
  context.moveTo(80, 10);
  context.lineTo(110, 50);
  context.stroke();
}
