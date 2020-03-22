/**
 * line caps
 * - line attribute
 * - functinality how the end points should look like
 * - context.lineCap = ""
 * 1. butt - default value
 * 2. round
 * 3. square
 */
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // draw 3 parallel lines
  // line 1
  context.beginPath();
  context.lineCap = 'butt';
  context.strokeStyle = 'lightgreen';
  context.lineWidth = 10;
  context.moveTo(10, 10);
  context.lineTo(100, 10);
  context.stroke();

  // line 2
  context.beginPath();
  context.lineCap = 'round'; // this adds height/2 - extra radius semicircle both sides
  context.strokeStyle = 'salmon';
  context.lineWidth = 10;
  context.moveTo(10, 30);
  context.lineTo(100, 30);
  context.stroke();

  // line 3
  context.beginPath();
  context.lineCap = 'square'; // this add height/2 - extra half square both sides
  context.strokeStyle = 'lightpink';
  context.lineWidth = 10;
  context.moveTo(10, 50);
  context.lineTo(100, 50);
  context.stroke();
};
