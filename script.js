
const textSizeInput = document.getElementById("text-size-input");
const loremIpsum = document.getElementById("lorem-ipsum");
const brightnessSlider = document.getElementById("color-slider");
const infotext = document.getElementById("info-text")
const textToggleButton = document.getElementById("text-toggle-button");

textSizeInput.addEventListener("input", function(event) {
  loremIpsum.style.fontSize = textSizeInput.value + "px";
  infotext.style.fontSize = textSizeInput.value + "px";

});

brightnessSlider.addEventListener("input", function(event) {
  const colorValue = brightnessSlider.value;
  const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  document.body.style.backgroundColor = backgroundColor;
});


textToggleButton.addEventListener("click", disableAll);
const body = document.body;
let textSize;


const newButton = document.createElement("button");
newButton.textContent = "Fertig";
newButton.style.display = "block";
newButton.style.margin = "0 auto";
newButton.style.padding = "1rem";
newButton.style.textAlign = "center";
newButton.addEventListener("click", stopTimer);

//removes all elements, displays the text and starts the timer
function disableAll() {
    textSize = textSizeInput.value + "px";
  //removes elements
  const elements = document.querySelectorAll("h3, p, form,button, input");
  elements.forEach((element) => {
    element.remove()
  })
  //testText();
  displayText();
  //starts the timer
    const timer = document.createElement("p");
    timer.id="timer";
    body.appendChild(timer);
    body.appendChild(newButton);
    startTimer();
    
    
}
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
    newPara.style.fontSize = textSize;
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