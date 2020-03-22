/**
 * line joins
 * - line attribute
 * - functinality - how line meets at endpoints
 * - context.lineJoin = ""
 * 1. miter - default value
 * 2. bevel
 * 3. round
 */
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // draw 3 parallel lines
  // question mark 1
  context.beginPath();
  context.lineJoin = 'miter';
  context.strokeStyle = 'black';
  context.lineWidth = 10;
  context.moveTo(10, 10);
  context.lineTo(60, 10);
  context.lineTo(60, 60);
  context.lineTo(10, 60);
  context.lineTo(10, 110);
  context.stroke();

  // question mark 2
  context.beginPath();
  context.lineJoin = 'bevel';
  context.strokeStyle = 'green';
  context.lineWidth = 10;
  context.moveTo(30, 30);
  context.lineTo(80, 30);
  context.lineTo(80, 80);
  context.lineTo(30, 80);
  context.lineTo(30, 130);
  context.stroke();

  // question mark 3
  context.beginPath();
  context.lineJoin = 'round';
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.moveTo(50, 50);
  context.lineTo(100, 50);
  context.lineTo(100, 100);
  context.lineTo(50, 100);
  context.lineTo(50, 150);
  context.stroke();
};
