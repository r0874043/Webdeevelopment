let setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", kleurMaken);
        sliders[i].addEventListener("input", kleurMaken);
    }
    kleurMaken();

    // Voeg een event listener toe aan de "Save"-knop
    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", save);
};

let kleurMaken = () => {
    const sliderR = document.getElementById("rood").value;
    const sliderG = document.getElementById("groen").value;
    const sliderB = document.getElementById("blau").value;
    const swatchKleur = document.getElementById("swatch");

    let rgbKleur = `rgb(${sliderR}, ${sliderG}, ${sliderB})`;

    let tekstR = document.getElementById("tekstRood");
    tekstR.textContent = " Red " + sliderR;
    let tekstG = document.getElementById("tekstGroen");
    tekstG.textContent = " Green " + sliderG;
    let tekstB = document.getElementById("tekstBlau");
    tekstB.textContent = " Blue " + sliderB;
    swatchKleur.style.backgroundColor = rgbKleur;
};

const save = () => {
    const sliderR = document.getElementById("rood").value;
    const sliderG = document.getElementById("groen").value;
    const sliderB = document.getElementById("blau").value;
    const rgbKleur = `rgb(${sliderR}, ${sliderG}, ${sliderB})`;


    const savedSwatch = document.createElement("div");
    savedSwatch.classList.add("saved-swatch");
    savedSwatch.style.backgroundColor = rgbKleur;
    savedSwatch.style.display = "inline-block";


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        savedSwatch.remove();
    });


    savedSwatch.addEventListener("click", () => {
        document.getElementById("rood").value = sliderR;
        document.getElementById("groen").value = sliderG;
        document.getElementById("blau").value = sliderB;
        kleurMaken();
    });


    savedSwatch.appendChild(deleteButton);
    document.getElementById("saved-swatches").appendChild(savedSwatch);
};

window.addEventListener("load", setup);