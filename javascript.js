var down = document.querySelector(".down-button");
var up = document.querySelector(".up-button");
var slider = document.querySelector(".img");

console.log(down, slider);
function slideDown() {
  slider.style.transform = `translatey(100%)`;
  window.setTimeout(function() {
    down.style.display = "none";
  }, 600);
  window.setTimeout(function() {
    up.style.display = "block";
  }, 800);
}

function slideUp() {
  slider.style.transform = `translatey(0%)`;
  window.setTimeout(function() {
    up.style.display = "none";
  }, 500);
  window.setTimeout(function() {
    down.style.display = "block";
  }, 700);
}

down.addEventListener("click", slideDown);
up.addEventListener("click", slideUp);
