
let di = document.querySelector(".container");
let ab = document.createElement('h1');
ab.id="countdown";
let initial = "5";
ab.innerHTML = '<h1 id="countdown">' + initial + '<h1>';
di.appendChild(ab);

let start= document.createElement('button')
start.textContent="Start";
start.id="start"
start.setAttribute('onclick','startcountdown()');
di.appendChild(start);

let replay= document.createElement('button')
replay.textContent="Replay";
replay.id="replay"
replay.setAttribute('onclick','replayc()');
replay.disabled=true

di.appendChild(replay);


let index =5;
let countdown1
let countdownRunning=false

function startcountdown()
{
    if (countdownRunning) {
        return;
    }

    countdownRunning = true;
    start.disabled = true;
    alert("S")
    
    let count=document.getElementById("countdown");
 setInterval(function() {
    
    count.textContent = index;
    index--;

    if(index<0)
    {
     
        count.textContent="Go"
        
        replay.disabled = false; 
        start.disabled = true;
        
    }


}, 1000);


}

function replayc()
{
    alert("R")
   
    let count=document.getElementById("countdown");
    const startButton = document.getElementById("start");
    const replayButton = document.getElementById("replay");
    count.textContent="5";
    replayButton.disabled=true;
    startButton.disabled=false;
    index=5

}