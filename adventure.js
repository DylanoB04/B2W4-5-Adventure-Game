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

//Title screen
document.getElementById('game-container').onload = mainScreen();
function mainScreen() {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    

    invItem.style.display = "none";

    title.innerText = "Wastelands";
    title.style.fontSize = "200px";
    title.style.margin = "14% 17% 0 16%";

    desc.innerHTML = "Brought to you by the creators of Exodus!";
    desc.style.display = "inline";
    desc.style.fontSize = "30px";
    desc.style.marginLeft = "31%";

    title.addEventListener("click", function() {
        mainMenu();
    });
}
//Title screen

//Main menu
function mainMenu() {
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

    title.style.fontSize = "120px";
    title.style.margin = "2% 29.5% 0px 30%";

    desc.style.display = "none";

    title.addEventListener("click", function() {
        mainScreen();
    });
}
//Main menu