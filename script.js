"use strict";

//let main = document.getElementsByTagName("body");
//main = main[0];

let nixonVotes = 0;
let mcGovernVotes = 0;

//Nixon's Section
function yesPickMe(){
    nixonVotes++

}

console.log(nixonVotes);



//McGovern's Section

voteGovern.onclick = function () {
    let button = document.getElementById("voteGovern"); //grabs the McGovern button

    let moveToTop = (Math.random() * (screen.height - screen.width)); //takes a random number * (the height of the screen - the width of the screen)
    let moveToLeftnRight = (Math.random() * (screen.width - screen.height));//same as above but with width

    //prevents button from going outside the margin of the screen
    if(moveToLeftnRight >= 300){
        moveToLeftnRight =- 50;
    }
    if(moveToLeftnRight <= -400){
        moveToLeftnRight =+ 50
    }

    if(moveToTop >= 300){
        moveToTop =- 100;
    }
    if(moveToTop <= -400){
        moveToTop =+ 50
    }

    button.style.top = moveToTop + "px";
    console.log(moveToTop + "px");
    //writes in CSS: button{margin-top: "the number that comes out of moveToTop" px}
    button.style.left = moveToLeftnRight + "px";
    console.log(moveToLeftnRight + "px");
    //same as above but in margin-left


    //counts the votes so the code can do a funny
    mcGovernVotes++;
    console.log(mcGovernVotes);

    return;
    //the button moving part is very closely based on https://codepen.io/ardoba/pen/ZNodRK by bert bus
}


//switches McGovern's img to the stonk meme
function switchToStonks(){
    let picture = document.getElementById("mcgovern");
    if(picture.src.match("images/mcGovern-toon.png")){
        picture.src = "images/stonks.png"
    }
    picture.addEventListener("mouseover", switchToStonks);
    return
}
function switchToPres(){
    let picture = document.getElementById("mcgovern");
    if(picture.src.match("images/stonks.png")){
        picture.src = "images/mcGovern-toon.png"
    }
    picture.addEventListener("mouseleave", switchToPres);
    return
}
