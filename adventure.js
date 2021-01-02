// Buttons
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
//Buttons

//Text
var title = document.getElementById('title');
var desc = document.getElementById('description');
//Text

//Objects 
var invItem = document.getElementById('inventoryItem');
//Objects

//Div
var div = document.getElementById('game-container');
    div.style.width = "100%";
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

    title.addEventListener("click", function() {
        mainMenu();
    });
}
//Title screen

//Main menu
function mainMenu() {
    div.style.border = "none";

    btn1.style.display = "block";
    btn1.innerHTML = "Start";
    btn1.style.fontSize = "50px";
    btn1.style.margin = "2% 29.5% 0 45%";
    btn2.style.display = "block";
    btn2.innerHTML = "How to play";
    btn2.style.fontSize = "50px";
    btn2.style.margin = "2% 29.5% 2% 41%";
    btn3.style.display = "block";
    btn3.innerHTML = "Credits";
    btn3.style.fontSize = "50px";
    btn3.style.margin = "0 29.5% 0 45%";

    title.innerText = "Unknown";
    title.style.fontSize = "120px";
    title.style.margin = "2%";
    title.style.textAlign = "center";

    desc.style.display = "none";

    title.addEventListener("click", function() {
        mainScreen();
    });
    btn1.addEventListener("click", function() {
        startGame();
    });
}
//Main menu

//Start
function startGame() {
    div.style.border = "4px solid white";
    div.style.width = "100%";
    div.style.height = "630px";

    btn1.style.display = "block";
    btn1.innerHTML = "Back";
    btn1.style.fontSize = "35px";
    btn1.style.margin = "23% 2%";
    btn2.style.display = "none";
    btn3.style.display = "none";

    title.innerText = "Prologue..";
    title.style.fontSize = "40px";
    title.style.margin = "2% 77% 2% 2%";
    title.style.textAlign = "left";

    desc.style.display = "block";
    desc.style.textAlign = "center";
    desc.style.margin = "14% 0px";
    desc.innerText = "In the beginning of time there was light and darkness, life and death. Two beings with just one simple purpose. ";
    
    btn1.addEventListener("click", function() {
        mainMenu();
    });
}
//Start