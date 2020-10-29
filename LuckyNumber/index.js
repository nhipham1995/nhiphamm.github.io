var info = document.querySelector(".info");
var button1 = document.getElementsByClassName("confirmation")[0];
var button2 = document.querySelector(".restart");
var noneDisplay = document.querySelector(".noneDisplay");
var tryagain = document.querySelector(".tryagain");
var x = 0;
var randomNum;

random();

//quand appuyant le bouton, la function éxécute
button1.addEventListener("click", function () {
  reset();
  // prendre le value et nécessaire d"ensurer le type Number de input
  var guessNum = Number(document.getElementById("numGuess").value);
  if (guessNum > 6 || guessNum < 0 || guessNum % 1 !== 0 || guessNum == "") {
    info.classList.add("animated");
    info.textContent =
      "Vous devrez choisir un nombre integrate entre 1 et 6!!!";
    return;
  }
  console.log("Guessnum is " + guessNum);

  //vérifier si le nombre est diférrent le Key Num
  if (guessNum !== randomNum) {
    info.classList.add("infoAnimation");
    tryagain.style.display = "block";
    if (guessNum < randomNum) {
      info.textContent = "Votre nombre est trop petit!";
    } else {
      info.textContent = "Votre nombre est trop grand!";
    }
    //augmentation x
    x++;
    console.log("Value x is " + x);

    //éxécuter si le nombre est le key Num
  } else {
    info.classList.add("rightChoice");
    info.textContent = "Bravo! Vous avez deviné ce nombre en " + x + " essais";
    noneDisplay.style.display = "block";
    button2.style.display = "inline-block";
  }
});

//quand cliquer le bouton JOUER
button2.addEventListener("click", function () {
  //disparation de button JOUER
  button2.style.display = "none";
  //reprendre le nouveau randomNum
  random();
  x = 0;
  //reset le programmation
  reset();
  //disparation le value de input
  document.getElementById("numGuess").value = "";
});

// choisir random un nombre entre 1 et 6
function random() {
  randomNum = Math.floor(Math.random() * 6 + 1);
  console.log("KeyNum is " + randomNum);
}

//disparation des infos pour renouveler le jeu
function reset() {
  noneDisplay.style.display = "none";
  tryagain.style.display = "none";
  info.classList.remove("rightChoice");
  info.classList.remove("animated");
  info.textContent = "";
}
