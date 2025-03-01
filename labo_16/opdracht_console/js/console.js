window.addEventListener("load", setup);

function setup() {
    let button = document.getElementById("submitButton");
    if (button) {
        button.addEventListener("click", printToConsole);
    } else {
        console.error("Knop niet gevonden!");
    }
}

function printToConsole() {
    let inputText = document.getElementById("userInput").value;
    let spacedText = inputText.split('').join(' ');
    console.log(spacedText);
}