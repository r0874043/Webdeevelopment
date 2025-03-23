const setup = () => {

    const botton = document.createElement("button");
    botton.textContent = "druk"
    let eerstepara = document.querySelector("p")
    eerstepara.appendChild(botton)

    eerstepara.addEventListener("click", newParagraaf)
}
const newParagraaf = () =>{
    let newpara = document.createElement("p");
    let voeg = document.createTextNode("Dit is een paragraaf");
    const mydiv = document.getElementById("myDIV");
    mydiv.appendChild(voeg)
}
window.addEventListener("load", setup);