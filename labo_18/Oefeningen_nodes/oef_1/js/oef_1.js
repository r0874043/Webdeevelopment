const setup = () => {
    let para = document.querySelectorAll("p")
    if(para.length > 0){
        para[0].textContent = "Good job!"
    }
}

window.addEventListener("load", setup);