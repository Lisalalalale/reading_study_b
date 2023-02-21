
const urlParams = new URLSearchParams(window.location.search);
const textSize = urlParams.get('textSize');
console.log(textSize)
//const background = urlParams.get('background');
//document.body.style.backgroundColor = background;
const body = document.body;

function testText(){
    const newPara = document.createElement("p");
    newPara.textContent= "Das ist total unnötig und doof";
    newPara.style.fontSize = textSize;
    newPara.style.textAlign = "center";
    body.appendChild(newPara);
}
function displayText(){
fetch("text.txt")
.then(response => response.text())
.then(data => {
const newPara = document.createElement("p");
const textNode = document.createTextNode(data);
newPara.appendChild(textNode);
newPara.style.fontSize = textSize + 'px';
newPara.style.textAlign = "center";
body.appendChild(newPara);
})
.catch(error => console.error(error));
}

//timer methods
let startTime, endTime, elapsedTime;
let timerInterval;

function startTimer() {
// Store the start time
startTime = new Date();

// Start the timer
timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
// Stop the timer
clearInterval(timerInterval);
}

function updateTimer() {
// Calculate the elapsed time
endTime = new Date();
elapsedTime = Math.floor((endTime - startTime) / 1000);

// Format the time as HH:MM:SS
const hours = Math.floor(elapsedTime / 3600);
const minutes = Math.floor((elapsedTime % 3600) / 60);
const seconds = elapsedTime % 60;
const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

document.getElementById("timer").innerHTML = formattedTime;


}

function pad(value) {
// Add leading zeros to single-digit values
return value < 10 ? `0${value}` : value;
}

testText();
const timer = document.createElement("p");
timer.id="timer";
body.appendChild(timer);
startTimer();



