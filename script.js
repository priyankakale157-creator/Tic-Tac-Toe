let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

let scoreX = document.getElementById("scoreX");
let scoreO = document.getElementById("scoreO");

let currentPlayer = "X";
let gameActive = true;

let xScore = 0;
let oScore = 0;

let winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
cell.addEventListener("click",()=>{

if(cell.textContent !== "" || !gameActive) return;

cell.textContent = currentPlayer;

checkWinner();

currentPlayer = currentPlayer === "X" ? "O" : "X";

statusText.textContent = "Player " + currentPlayer + " Turn";

});
});

function checkWinner(){

for(let pattern of winPatterns){

let a = cells[pattern[0]].textContent;
let b = cells[pattern[1]].textContent;
let c = cells[pattern[2]].textContent;

if(a === "" || b === "" || c === "") continue;

if(a === b && b === c){

statusText.textContent = "Player " + a + " Wins!";
gameActive = false;

if(a === "X"){
xScore++;
scoreX.textContent = xScore;
}else{
oScore++;
scoreO.textContent = oScore;
}

return;
}

}

let draw = [...cells].every(cell => cell.textContent !== "");

if(draw){
statusText.textContent = "Game Draw!";
gameActive = false;
}

}

function restartGame(){

cells.forEach(cell => cell.textContent = "");

currentPlayer = "X";
gameActive = true;

statusText.textContent = "Player X Turn";

}
