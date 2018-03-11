var hours = document.getElementById("hours");
var countstart = 8;
var countend = 10.5;
var count = countstart;
var goingup = true;

setInterval(function () {
  if (count >= countend) {
    goingup = false;
  }
  if (count <= countstart) {
    goingup = true;
  }
  if (goingup) {
    count += .1;
  } else {
    count -= .1;
  }

  hours.innerText = count.toFixed(1) + "hrs";
}, 20);
