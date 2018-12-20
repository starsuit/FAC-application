var down = document.querySelectorAll(".down-button");
var up = document.querySelectorAll(".up-button");
var slider = document.querySelectorAll(".img");

console.log(down);

function slideDown(i) {
  console.log("down");
  slider[i].style.transform = `translatey(100%)`;
  window.setTimeout(function() {
    down[i].style.display = "none";
  }, 600);
  window.setTimeout(function() {
    up[i].style.display = "block";
  }, 800);
}

function slideUp(i) {
  console.log("up");
  slider[i].style.transform = `translatey(0%)`;
  window.setTimeout(function() {
    up[i].style.display = "none";
  }, 500);
  window.setTimeout(function() {
    down[i].style.display = "block";
  }, 700);
}

for (let i = 0; i < down.length; i++) {
  let choice = down[i];
  choice.addEventListener("click", function() {
    slideDown(i);
  });
}

for (let i = 0; i < up.length; i++) {
  let choice = up[i];
  choice.addEventListener("click", function() {
    slideUp(i);
  });
}

// down.addEventListener("click", slideDown);
// up.addEventListener("click", slideUp);
