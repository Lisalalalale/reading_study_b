
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


textToggleButton.addEventListener("click", changeToText);



const newButton = document.createElement("button");
newButton.textContent = "Fertig";
newButton.style.display = "block";
newButton.style.margin = "0 auto";
newButton.style.padding = "1rem";
newButton.style.textAlign = "center";
newButton.addEventListener("click", stopTimer);

function changeToText() {
  window.location.href = "textA.html?textSize=${textSizeInput.value}";
}
