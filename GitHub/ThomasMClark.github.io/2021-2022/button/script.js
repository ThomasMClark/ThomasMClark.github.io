let myButton = document.getElementById("my-button");
let text = document.getElementById("thing");

myButton.onclick = function() {
    text.innerText += "\nYou clicked the button"; 
    text.style.backgroundColor = "green";
};
console.log("Hello world!");
