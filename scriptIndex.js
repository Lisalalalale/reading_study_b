
const textSizeInput = document.getElementById("text-size-input");
const loremIpsum = document.getElementById("lorem-ipsum");
const infotext = document.getElementById("info-text")
const textToggleButton = document.getElementById("text-toggle-button");


textSizeInput.addEventListener("input", function(event) {
  loremIpsum.style.fontSize = textSizeInput.value + "px";
  infotext.style.fontSize = textSizeInput.value + "px";
  
});



textToggleButton.addEventListener("click", changeToText);
console.log(`textA.html?textSize= ${textSizeInput.value}`);


function changeToText() {
  
  window.location.href = `textB.html?textSize= ${textSizeInput.value}`;
}
