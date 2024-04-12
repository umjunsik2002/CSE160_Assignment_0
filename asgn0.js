// DrawRectangle.js
function main() {
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
  }
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var v1x, v1y, v2x, v2y;

function handleDrawEvent() {
  v1x = parseFloat(document.getElementById("v1x").value);
  v1y = parseFloat(document.getElementById("v1y").value);
  v2x = parseFloat(document.getElementById("v2x").value);
  v2y = parseFloat(document.getElementById("v2y").value);

  var canvas = document.getElementById('example');
  if (!canvas) {
    console.error('Failed to retrieve the <canvas> element');
    return;
  }

  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var originX = canvas.width / 2;
  var originY = canvas.height / 2;

  if (!isNaN(v1x) && !isNaN(v1y)) {
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + v1x * 20, originY - v1y * 20);
    ctx.strokeStyle = 'rgba(255, 0, 0, 1.0)';
    ctx.stroke();
  }

  if (!isNaN(v2x) && !isNaN(v2y)) {
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + v2x * 20, originY - v2y * 20);
    ctx.strokeStyle = 'rgba(0, 0, 255, 1.0)';
    ctx.stroke();
  }
}

function handleDrawOperationEvent() {
  handleDrawEvent();
  var operation = document.getElementById("operation").value;
  var scalar = parseFloat(document.getElementById("scalar").value);

  var canvas = document.getElementById('example');
  if (!canvas) {
    console.error('Failed to retrieve the <canvas> element');
    return;
  }

  var ctx = canvas.getContext('2d');

  var originX = canvas.width / 2;
  var originY = canvas.height / 2;

  if (operation === "add") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);
    var resultVector = vec1.add(vec2);
    var resultX = resultVector.elements[0];
    var resultY = resultVector.elements[1];
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultX * 20, originY - resultY * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();
  }
  else if (operation === "subtract") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);
    var resultVector = vec1.sub(vec2);
    var resultX = resultVector.elements[0];
    var resultY = resultVector.elements[1];
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultX * 20, originY - resultY * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();
  }
  else if (operation === "multiply") {
    if (isNaN(scalar)) {
      console.error('Scalar value is missing.');
      return;
    }

    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);

    var resultVector1 = vec1.mul(scalar);
    var resultVector2 = vec2.mul(scalar);

    var resultv1x = resultVector1.elements[0];
    var resultv1y = resultVector1.elements[1];
    var resultv2x = resultVector2.elements[0];
    var resultv2y = resultVector2.elements[1];

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv1x * 20, originY - resultv1y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv2x * 20, originY - resultv2y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();
  }
  else if (operation === "divide") {
    if (isNaN(scalar)) {
      console.error('Scalar value is missing.');
      return;
    } else if (scalar === 0) {
      console.error('Division by zero is not allowed.');
      return;
    }

    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);

    var resultVector1 = vec1.div(scalar);
    var resultVector2 = vec2.div(scalar);

    var resultv1x = resultVector1.elements[0];
    var resultv1y = resultVector1.elements[1];
    var resultv2x = resultVector2.elements[0];
    var resultv2y = resultVector2.elements[1];

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv1x * 20, originY - resultv1y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv2x * 20, originY - resultv2y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();
  }
  else if (operation === "magnitude") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);
    var magnitudeV1 = vec1.magnitude();
    var magnitudeV2 = vec2.magnitude();
    console.log("Magnitude v1: " + magnitudeV1);
    console.log("Magnitude v2: " + magnitudeV2);
  }
  else if (operation === "normalize") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);

    var resultVector1 = vec1.normalize();
    var resultVector2 = vec2.normalize();

    var resultv1x = resultVector1.elements[0];
    var resultv1y = resultVector1.elements[1];
    var resultv2x = resultVector2.elements[0];
    var resultv2y = resultVector2.elements[1];

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv1x * 20, originY - resultv1y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + resultv2x * 20, originY - resultv2y * 20);
    ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    ctx.stroke();
  }
  else if (operation === "angle between") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);
    let dotProduct = Vector3.dot(vec1, vec2);
    let magnitudeV1 = vec1.magnitude();
    let magnitudeV2 = vec2.magnitude();
    let cosineAngle = dotProduct / (magnitudeV1 * magnitudeV2);
    let angleRadians = Math.acos(cosineAngle);
    let angleDegrees = angleRadians * (180 / Math.PI);
    console.log("Angle: " + angleDegrees);
  }
  else if (operation === "area") {
    var vec1 = new Vector3([v1x, v1y, 0]);
    var vec2 = new Vector3([v2x, v2y, 0]);
    let crossProduct = Vector3.cross(vec1, vec2);
    let area = crossProduct.magnitude() / 2;
    console.log("Area: " + area);
  }
}
