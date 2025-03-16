const setup = () =>{
    let button = document.getElementById("submit");
    if (button) {
        button.addEventListener("click", printToConsole);
    } else {
        console.error("Knop niet gevonden!");
    }
}
const vervangDe = () => {
    // Haal de invoer op
    let tekst = document.getElementById("inputText").value;

    // Splits de tekst in woorden
    let woorden = tekst.split(" ");
    let aangepasteTekst = "";

    // Gebruik een for-loop in plaats van forEach
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i].toLowerCase() === "de") {
            aangepasteTekst += "het";
        } else {
            aangepasteTekst += woorden[i];
        }

        // Voeg een spatie toe tussen woorden, behalve bij het laatste woord
        if (i < woorden.length - 1) {
            aangepasteTekst += " ";
        }

        // Live output naar console per iteratie
        console.log(aangepasteTekst);
    }

    // Toon het resultaat op de pagina
    document.getElementById("output").textContent = aangepasteTekst;
}
window.addEventListener("load", setup);

