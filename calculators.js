function calcCylinder() {
  let r = parseFloat(document.getElementById("radiusCyl").value);
  let h = parseFloat(document.getElementById("heightCyl").value);
  let volume = Math.PI * r * r * h;
  document.getElementById("cylResult").innerText = "الحجم = " + volume.toFixed(2);
}
function calcCircle() {
  let r = parseFloat(document.getElementById("radiusCircle").value);
  let area = Math.PI * r * r;
  document.getElementById("circleResult").innerText = "المساحة = " + area.toFixed(2);
}
function solveQuadratic() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let delta = b * b - 4 * a * c;
  let result;
  if (delta < 0) {
    result = "لا يوجد حل حقيقي.";
  } else if (delta === 0) {
    let x = -b / (2 * a);
    result = "حل واحد: x = " + x.toFixed(2);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    result = "الحلين هما: x1 = " + x1.toFixed(2) + " و x2 = " + x2.toFixed(2);
  }
  document.getElementById("quadResult").innerText = result;
}