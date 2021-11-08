alert("The dragon has been captured by the hero you have to save him");
let run_or_woods = prompt("do you (1) go into the woods or (2) run away?");
if (run_or_woods==1){
    let left_right_stay = prompt("when you run into the woods do you (1) go into the dark woods or (2) go into the battlefeild oor (3) stay where you are?")
if (left_right_stay==1){
    alert("You kill the hero and wed the dragon. You win. You did bad which is good.")
} else if (left_right_stay==2){
    alert("A Reborn grabs your leg and the undead kill you as well")
} else {
    alert("You have starved to death and have failed your master. The wirkd is happy and you are very dead.")
}
} else {
alert("You have failed your master. You are sad and the world is happy.")
}
