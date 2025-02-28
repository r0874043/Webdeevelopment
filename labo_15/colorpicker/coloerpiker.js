let setup = () =>{
    let slider = document.getElementsByClassName("slider");
    for (let i = 0; i < slider.length; i++ ){
        slider[i].addEventListener("change", kleurMaken);
        slider[i].addEventListener("input", kleurMaken);
    }
    kleurMaken();
}
let kleurMaken = () =>{
    const sliderR = document.getElementById("rood").value;
    const sliderG = document.getElementById("groen").value;
    const sliderB = document.getElementById("blau").value;
    const swatchKleur = document.getElementById("swatch");

    let rgbKleur = `rgb(${sliderR}, ${sliderG}, ${sliderB})`;

    let tekstR = document.getElementById("tekstRood");
    tekstR.textContent = " red " + sliderR
    let tekstG = document.getElementById("tekstGroen");
    tekstG.textContent = " Green " + sliderG
    let tekstB = document.getElementById("tekstBlau");
    tekstB.textContent = " Bleu " + sliderB
    swatchKleur.style.backgroundColor = rgbKleur;
}
window.addEventListener("load", setup)