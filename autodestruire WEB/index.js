//creation and display the key code
var key = "code1234";
console.log("Key code pour auto-déstruire est: " + key);
var navbar = document.querySelector(".navbar");
var test = document.querySelector(".navList");
var list = [];

window.addEventListener("keypress", function (event) {
  let e = event.keyCode;
  list.push(e);
  console.log(list);
  //make array to string
  string = list.join("-");
  console.log(string);

  // there is string of CODE1234
  var stringKey = "99-111-100-101-49-50-51-52";

  //find if there are stringKey. i===1 means there is not stringKey in string
  var i = string.indexOf(stringKey);
  if (i !== -1) {
    alert("Ce site va auto-déstruire dans 1s quand vous cliquer OK");
    setTimeout(() => {
      window.close();
    }, 1000);
  }
});
