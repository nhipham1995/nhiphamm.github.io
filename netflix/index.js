const columnNoneDisplay = document.getElementById("noneDisplay");
const itemList = document.getElementsByClassName("question-item");
const iconList = document.querySelectorAll("li button svg .svg-icon-thin-x");

if(window.innerWidth < 992){
    columnNoneDisplay.style.display = "none";
} else {
    columnNoneDisplay.style.display ="block";
}

