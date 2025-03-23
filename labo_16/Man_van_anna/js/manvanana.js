window.addEventListener("load", function () {
    const tekst = document.getElementById("tekst").textContent; // Haal de tekst op
    const zoekSequentie = "an";

    // Functie met indexOf
    function telMetIndexOf() {
        let teller = 0;
        let index = tekst.indexOf(zoekSequentie);

        while (index !== -1) {
            teller++;
            index = tekst.indexOf(zoekSequentie, index + 1);
        }

        document.getElementById("result").textContent = teller; // Toon resultaat
    }

    // Functie met lastIndexOf
    function telMetLastIndexOf() {
        let teller = 0;
        let index = tekst.lastIndexOf(zoekSequentie);

        while (index !== -1) {
            teller++;
            index = tekst.lastIndexOf(zoekSequentie, index - 1);
        }

        document.getElementById("result2").textContent = teller; // Toon resultaat
    }

    // Voeg event listeners toe aan de knoppen
    document.getElementById("button").addEventListener("click", telMetIndexOf);
    document.getElementById("button2").addEventListener("click", telMetLastIndexOf);
})