let h3=document.querySelector('h3');
let startbtn=document.querySelector("button");
let gameSeq=[];
let userSeq=[];

let btns=['yellow','red','purple','green'];

let started=false;
let level=0;
highestScore=level;

let startgame=()=>{
    if(started==false){
        console.log('game started');
        started=true;

    }
    levelup();
    startbtn.style.display="none";
};

document.addEventListener('keypress',startgame);
startbtn.addEventListener('click',startgame);

let h2=document.querySelector('h2');

function gameFlash(btnFlash){
    btnFlash.classList.add('flash');
    setTimeout(function (){
btnFlash.classList.remove('flash');
    },250)
}

function userFlash(btnFlash){
    btnFlash.classList.add('userflash');
    setTimeout(function (){
btnFlash.classList.remove('userflash');
    },250)
}

function levelup(){
    userSeq=[];
    level++;
h2.innerText=`level ${level}`;

let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let randbtn=document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randbtn);
}


function checkAns(idx){

if(gameSeq[idx]===userSeq[idx]){
   if(userSeq.length==gameSeq.length){
   setTimeout(levelup,1000);
   }
}else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start again `;
    document.querySelector('body').style.backgroundColor='red';
    setTimeout(()=>{
        document.querySelector('body').style.backgroundColor='white';
    },150)
if(highestScore<level){
    highestScore=level;
    h3.innerText=`Your higest score is ${highestScore}`;
}else{
    highestScore=highestScore;
h3.innerText=`Your higest score is ${highestScore}`;
}
   
    reset();
}
}

function btnpress(){
let btn=this;
userFlash(btn);

let userColor=btn.getAttribute('id');
console.log(`uaer clicked ${userColor} button`);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    startbtn.style.display="inline-block";
}