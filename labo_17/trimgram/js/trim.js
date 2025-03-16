const setup = () => {
    let button = document.getElementById("submit");
    if (button) {
        button.addEventListener("click", trimen);
    } else {
        console.error("Knop niet gevonden!");
    }
}

const trimen = () => {
    let woord = document.getElementById("trim").value.trim(); // Verwijder onnodige spaties
    if (woord.length < 3) {
        console.log("Voer een woord in met minstens 3 letters.");
        return;
    }

    for (let i = 0; i <= woord.length - 3; i++) { // Fix de looplimiet
        let stuk = woord.slice(i, i + 3); // Trigram van 3 letters
        console.log(stuk);
    }
}

window.addEventListener("load", setup);
