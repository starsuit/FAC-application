var down = document.querySelectorAll(".down-button");
var up = document.querySelectorAll(".up-button");
var slider = document.querySelectorAll(".img");

function slideDown(i) {
  slider[i].style.transform = `translatey(100%)`;
  window.setTimeout(function() {
    down[i].style.display = "none";
  }, 300);
  window.setTimeout(function() {
    up[i].style.display = "block";
  }, 600);
}

function tester(i) {
  if (window.getComputedStyle(up[i]).display === `none`) {
    slider[i].style.transform = `translatey(100%)`;
    window.setTimeout(function() {
      down[i].style.display = "none";
    }, 300);
    window.setTimeout(function() {
      up[i].style.display = "block";
    }, 600);
  }
}

function slideUp(i) {
  slider[i].style.transform = `translatey(0%)`;
  window.setTimeout(function() {
    up[i].style.display = "none";
  }, 240);
  window.setTimeout(function() {
    down[i].style.display = "block";
  }, 350);
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

for (let i = 0; i < slider.length; i++) {
  let choice = slider[i];
  choice.addEventListener("click", function() {
    tester(i);
  });
}

for (let i = 0; i < slider.length; i++) {
  let choice = slider[i];
  choice.addEventListener("mouseover", function() {
    down[i].style.background = `hsla(36, 100%, 33%, 0.5)`;
  });
}

for (let i = 0; i < slider.length; i++) {
  let choice = slider[i];
  choice.addEventListener("mouseout", function() {
    down[i].style.background = `transparent`;
  });
}

// down.addEventListener("click", slideDown);
// up.addEventListener("click", slideUp);
