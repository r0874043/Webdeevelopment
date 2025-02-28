const setup = () => {

    const pElement = document.getElementsByClassName('belangerijk');

    for(let i = 0 ; i < pElement.length ; i++){

        pElement[i].classList.add('opvallend');
    }

}
window.addEventListener("load", setup);