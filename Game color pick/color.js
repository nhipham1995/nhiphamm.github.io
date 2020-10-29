
 var item= document.getElementsByClassName("item");
 var notification = document.getElementById("notification");
 var buttonHard = document.querySelector("#hard");
 var buttonEasy = document.querySelector("#easy");
 var newcolor = document.querySelector("#newcolor");

 var message = document.getElementById("message");
 var three = document.querySelectorAll(".three");
 var Key=6;
 var color;
 var colorKey;

 doit();


function numKey(){
    colorKey = Math.ceil(Math.random()*(Key)+1)-2; 
}


function makeColor() {
    for(var i=0; i<Key; i++){
        var r = Math.floor(Math.random()*255 +1);
        var g = Math.floor(Math.random()*255 +1);
        var b = Math.floor(Math.random()*255 +1);
        item[i].style.background= "rgb("+r+", "+g+", "+b+")";
        if (i === colorKey){
            color = "rgb("+r+", "+g+", "+b+")";
            notification.innerHTML = color;
    }}
};

 function doit() {
    numKey();
    makeColor();
 };
 

 buttonHard.addEventListener("click", function(){
     message.innerHTML='';
     for (var i =0; i<three.length; i++){
        three[i].style.display ="block";
     }
     Key=6;
     doit();

 });    

 newcolor.addEventListener("click", function(){
     message.innerHTML='';
    for (var i =0; i<three.length; i++){
       three[i].style.display ="block";
    }
    Key=6;
    doit();

}); 
 for(var i=0; i<item.length; i++){
    item[i].addEventListener("click", function(){
        if( this.style.background === color){
            message.innerHTML= 'You have picked rightly';
        } else {
            message.innerHTML = 'Wrong';
        }
    })
};


buttonEasy.addEventListener("click", function(){
    for (var i =0; i<three.length; i++){
        three[i].style.display ="none";
     }
    Key = 3
    numKey();
    makeColor();
});