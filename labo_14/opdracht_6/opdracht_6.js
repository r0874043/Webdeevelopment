const setup = () => {
    // Koppel de knop aan de event listener
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
};

// Kopieer functie
const kopieer = () => {
    // Haal de waarde uit het tekstveld
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;

    // Toon de tekst in het <p> element
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerText = tekst;
};

// Roep de setup functie aan wanneer de pagina geladen is
window.addEventListener("load", setup);