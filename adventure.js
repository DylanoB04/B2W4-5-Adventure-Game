// Buttons
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
//Buttons

//Pics
var pic = document.createElement('IMG');
//Pics

//Text
var title = document.getElementById('title');
var desc = document.getElementById('description');
//Text

//Objects 
var invItem = document.getElementById('inventoryItem');
//Objects

//Div
var div = document.getElementById('game-container');
//Div

//Title screen
document.getElementById('game-container').onload = mainScreen();
function mainScreen() {
    div.style.border = "none";

    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";

    invItem.style.display = "none";

    title.innerText = "Unknown";
    title.style.fontSize = "200px";
    title.style.margin = "14% 16%";
    title.style.textAlign = "center";

    desc.style.display = "none";

    title.removeEventListener("click", mainScreen);
    title.addEventListener("click", mainMenu);
};
//Title screen

//Main menu
function mainMenu() {
    div.style.border = "none";

    btn1.style.display = "block";
    btn1.style.position = "static";
    btn1.innerHTML = "Start";
    btn1.style.fontSize = "50px";
    btn1.style.margin = "2% 29.5% 0 45%";

    btn2.style.display = "block";
    btn2.innerHTML = "How to play";
    btn2.style.fontSize = "50px";
    btn2.style.margin = "2% 29.5% 2% 40%";

    btn3.style.display = "block";
    btn3.style.position = "static";
    btn3.innerHTML = "Credits";
    btn3.style.fontSize = "50px";
    btn3.style.margin = "2% 29.5% 0 45%";
    btn3.style.float = "none";

    title.innerText = "Unknown";
    title.style.fontSize = "120px";
    title.style.margin = "2%";
    title.style.textAlign = "center";

    desc.style.display = "none";
//Event Remover
    title.removeEventListener("click", mainMenu);

    btn2.removeEventListener("click", ep1);
    btn2.removeEventListener("click", ep1Yes);

    btn3.removeEventListener("click", ep1No);
    btn3.removeEventListener("click", ep1No2);
//Event remover
    title.addEventListener("click", mainScreen);
    btn1.addEventListener("click", startGame);
    btn2.addEventListener("click", howtoplay);
};
//Main menu

//How to play
function howtoplay() {

};
//How to play

//Start
function startGame() {
    div.style.border = "4px solid white";
    div.style.width = "100%";
    div.style.height = "630px";

    btn1.style.display = "block";
    btn1.style.position = "absolute";
    btn1.innerHTML = "Back";
    btn1.style.fontSize = "35px";
    btn1.style.margin = "0 0 0 2%";

    btn2.style.display = "block";
    btn2.style.position = "relative";
    btn2.innerHTML = "Continue";
    btn2.style.fontSize = "35px";
    btn2.style.margin = "auto";

    btn3.style.display = "none";

    title.innerText = "Prologue..";
    console.log(title.innerText);
    title.style.fontSize = "40px";
    title.style.margin = "2% 77% 2% 2%";
    title.style.textAlign = "left";

    desc.style.display = "block";
    desc.style.textAlign = "center";
    desc.style.margin = "13.5% 0px";
    desc.style.padding = "0 4% 4% 4%";
    desc.innerText = "In the beginning of time there was Light and Darkness, life and death. Two beings with one purpose. They created a game they would call Gardening, Light would create life like a flower in a garden and Darkness would seek out the weeds and eradicate them making the garden bloom. Until eventually the Darkness got tired of the same thing over and over again and began destroying or corrupting innocent species. In a response to this, Light created Guardians, wielders of light and protectors of the universe.";

    btn1.addEventListener("click", startGame);
    btn2.removeEventListener("click", ep1Yes);
    btn2.addEventListener("click", ep1);
};
//Start

//Episode 1
function ep1() {
    desc.style.margin = "2% 0 8% 0";
    desc.style.padding = "0";
    desc.innerText = "Year 2076 - HQ | Commander Maxon: Ad victoriam guardian, have u been informed yet on why we requested you here?";

    document.getElementById("description").appendChild(pic);
    pic.src = "img/ep1.jpg";
    pic.style.width = "40%";
    pic.style.padding = "2% 0 0 0";

    title.innerText = "U.F.O"
    console.log(title.innerText);

    btn2.innerHTML = "Yes";
    btn2.style.display = "inline";
    btn2.style.marginLeft = "47%";

    btn3.innerHTML = "No";
    btn3.style.display = "block";
    btn3.style.position = "relative";
    btn3.style.fontSize = "35px";
    btn3.style.float = "right";
    btn3.style.margin = "0 2% 0 0";

    btn2.removeEventListener("click", ep1);
    btn2.addEventListener("click", ep1Yes);
    btn3.addEventListener("click", ep1No);
};
function ep1Yes() {
    alert("Mission Failed: Lying is a warcrime. Article 37. – Prohibition of perfidy | Geneva Conventions");
    mainMenu();
};
function ep1No() {
    desc.innerText = "Commander Maxon: Not a problem. The vanguard is tasking you with a recon mission not far away from this starsystem. Do you accept?" ;
    desc.appendChild(pic);

    btn2.removeEventListener("click", ep1Yes);
    btn2.addEventListener("click", ep1Yes2);
    btn3.addEventListener("click", ep1No2);
};
function ep1Yes2() {
    desc.innerText = "";
    desc.appendChild(pic);
};
function ep1No2() {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";

    desc.style.display = "none";

    title.innerText = "The End";
    title.style.fontSize = "100px";
    title.style.textAlign = "center";
    title.style.margin = "15% 0 0 0";
};
//Episode 1