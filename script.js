const game = document.getElementById("game");

const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");

let score1 = 0;
let score2 = 0;

const keys = {};

document.addEventListener("keydown",(e)=>{
keys[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
keys[e.key]=false;
});

const player1 = {

x:100,
y:100,
speed:4

}

const player2 = {

x:600,
y:300,
speed:4

}

function reset(){

player1.x=100;
player1.y=100;

player2.x=600;
player2.y=300;

}

function update(){

// Player1

if(keys["w"]) player1.y-=player1.speed;
if(keys["s"]) player1.y+=player1.speed;
if(keys["a"]) player1.x-=player1.speed;
if(keys["d"]) player1.x+=player1.speed;

// Player2

if(keys["ArrowUp"]) player2.y-=player2.speed;
if(keys["ArrowDown"]) player2.y+=player2.speed;
if(keys["ArrowLeft"]) player2.x-=player2.speed;
if(keys["ArrowRight"]) player2.x+=player2.speed;

// Limites

player1.x=Math.max(0,Math.min(760,player1.x));
player1.y=Math.max(0,Math.min(460,player1.y));

player2.x=Math.max(0,Math.min(760,player2.x));
player2.y=Math.max(0,Math.min(460,player2.y));

p1.style.left=player1.x+"px";
p1.style.top=player1.y+"px";

p2.style.left=player2.x+"px";
p2.style.top=player2.y+"px";

// Colisão

if(

player1.x<player2.x+40 &&
player1.x+40>player2.x &&
player1.y<player2.y+40 &&
player1.y+40>player2.y

){

score1++;

document.getElementById("p1").innerHTML=score1;

reset();

}

requestAnimationFrame(update);

}

reset();

update();
