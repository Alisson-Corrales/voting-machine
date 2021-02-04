"use strict";

//let main = document.getElementsByTagName("body");
//main = main[0];

let nixonVotes = 0;
let mcGovernVotes = 0;

//Nixon's Section
//function yesPickMe(){
//    document.appendChild("nixonVotes++");
//}
//for(let i=0; i < 1){
//    let vote4Nixon = document.getElementById("voteNixon");
//    voteNixon.addEventListener("click", voteNixon);
//    main.appendChild(voteNixon);
//}
//
//console.log(yesPickMe(0));



//McGovern's Section

voteGovern.onclick = function () {
    let button = document.getElementById("voteGovern"); //grabs the McGovern button
    // let bodySize = window.getBoundingClientRect(); //should get the size of the body

    //let moveToTop = (Math.random() * (button.clientHeight - screen.height) - screen.height); //takes a random number * (the height of the button - the height of the body)
    //let moveToLeftnRight = (Math.random() * (button.width - screen.width) - screen.width); //the same but with width
    let moveToTop = (Math.random() * (screen.height - Math.random()));
    let moveToLeftnRight = (Math.random() * (screen.width - screen.height));
    button.style.top = moveToTop + "px";
    console.log(moveToTop + "px");
    //writes in CSS: button{margin-top: "the number that comes out of moveToTop" px}
    button.style.left = moveToLeftnRight + "px";
    console.log(moveToLeftnRight + "px");
    //same as above but in margin-left
    //this part is very closely based on https://codepen.io/ardoba/pen/ZNodRK by bert bus
}

