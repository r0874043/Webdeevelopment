
let familieleden = ["Jan", "Piet", "Kees", "Marie", "Anna"];


console.log("Aantal elementen in de array: " + familieleden.length);


console.log("Eerste element: " + familieleden[0]);
console.log("Derde element: " + familieleden[2]);
console.log("Vijfde element: " + familieleden[4]);


function voegNaamToe(array) {
    let nieuweNaam = prompt("Voer een nieuwe naam in:");
    if (nieuweNaam) {
        array.push(nieuweNaam);
    }
}

voegNaamToe(familieleden);

console.log("Array na toevoegen van nieuwe naam: " + familieleden);
let arrayAlsString = familieleden.join(", ");
console.log("Array als string: " + arrayAlsString);