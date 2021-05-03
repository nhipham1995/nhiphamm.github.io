var item = document.getElementsByClassName("item");
var notification = document.getElementById("notification");
var buttonHard = document.querySelector("#hard");
var buttonEasy = document.querySelector("#easy");
var newcolor = document.querySelector("#newcolor");
var wrapper = document.querySelector(".wrapper");
var head = document.querySelector(".head");

var message = document.getElementById("message");
var three = document.querySelectorAll(".three");
var Key = 6;
var color;
var colorKey;

doit();

function numKey() {
  colorKey = Math.ceil(Math.random() * Key + 1) - 2;
}

function makeColor() {
  for (var i = 0; i < Key; i++) {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);
    item[i].style.background = "rgb(" + r + ", " + g + ", " + b + ")";
    if (i === colorKey) {
      color = "rgb(" + r + ", " + g + ", " + b + ")";
      notification.innerHTML = color;
    }
  }
}

function doit() {
  numKey();
  makeColor();
}

buttonHard.addEventListener("click", function () {
  message.innerHTML = "";
  head.style.background = "#112240";
  for (var i = 0; i < three.length; i++) {
    three[i].style.display = "block";
  }
  Key = 6;
  doit();
});

newcolor.addEventListener("click", function () {
  message.innerHTML = "";
  head.style.background = "#112240";
  for (var i = 0; i < three.length; i++) {
    three[i].style.display = "block";
  }
  Key = 6;
  doit();
});

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    if (this.style.background === color) {
      message.innerHTML =
        '<div class="alert alert-success">You have picked rightly!</div> ';
      head.style.background = color;
      for (var j = 0; j < item.length; j++) {
        item[j].style.background = color;
        item[j].style.boxShadow =
          "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
      }
    } else {
      message.innerHTML = '<div class="alert alert-danger">Try again!</div> ';
      this.style.background = "white";
      this.style.boxShadow = "none";
    }
  });
}

buttonEasy.addEventListener("click", function () {
  head.style.background = "#112240";
  for (var i = 0; i < three.length; i++) {
    three[i].style.display = "none";
  }
  Key = 3;
  numKey();
  makeColor();
});

if (screen.width > 600) {
  if (wrapper.childNodes) {
    wrapper.removeChild(wrapper.childNodes[0]);
  }
  var image = document.createElement("img");
  image.src = "./official1.svg";
  wrapper.appendChild(image);
} else if (screen.width < 590) {
  if (wrapper.childNodes) {
    wrapper.removeChild(wrapper.childNodes[0]);
  }
  var image1 = document.createElement("img");
  image1.src = "./Group.svg";
  wrapper.appendChild(image1);
}
