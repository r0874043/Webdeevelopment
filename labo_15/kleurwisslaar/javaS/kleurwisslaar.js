//
// const setup = () => {
//     const veranderen = document.getElementsByTagName("button");
//     for (let i = 0; i < veranderen.length; i++){
//         veranderen[i].addEventListener("click", kleurverandeer);
//
//     }
// }
// const kleurverandeer = () =>{
//     const button = document.getElementsByClassName("botton");
//     button.classList.add("aan")
// }
// const kleurnrml = () =>{
//     button.classList.remove("aan")
// }
//
// window.addEventListener("load", setup);
// const setup = () => {
//     const knoppen = document.getElementsByTagName("button");
//
//     for (let i = 0; i < knoppen.length; i++) {
//         let btn = knoppen[i];
//
//         btn.addEventListener("click", function() {
//             if (btn.classList.contains("aan")) {
//                 verwijderKlasse(btn);
//             } else {
//                 voegKlasseToe(btn);
//             }
//         });
//     }
// }
//
// const voegKlasseToe = (knop) => {
//     knop.classList.add("aan");
// }
//
// const verwijderKlasse = (knop) => {
//     knop.classList.remove("aan");
// }
//
// window.addEventListener("load", setup);
const setup = () => {
    const knoppen = document.getElementsByTagName("button");

    for (let i = 0; i < knoppen.length; i++) {
        let btn = knoppen[i];

        btn.addEventListener("click", function() {
            if (btn.classList.contains("aan")) {
                btn.classList.remove("aan"); // Verwijder de klasse als deze er al is
            } else {
                btn.classList.add("aan"); // Voeg de klasse toe als deze er niet is
            }
        });
    }
}

window.addEventListener("load", setup);