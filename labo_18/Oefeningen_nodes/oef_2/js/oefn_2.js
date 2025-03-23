const setup = () => {
    const oudeli = document.querySelectorAll("li");
    for( let i = 0; i < oudeli.length; i++){
        oudeli[i].classList.add("listitem");
    }

    const style = document.createElement("style");
    style.textContent = `
    .listitem {
      color: red;
    }
  `;


    document.head.appendChild(style)

    const img = document.createElement("img");
    img.setAttribute("src","imgs/manunt.png" )
    const newLi = document.createElement("li");
    newLi.appendChild(img);


    const ul = document.querySelector("ul");
    ul.appendChild(newLi);

}

window.addEventListener("load", setup);