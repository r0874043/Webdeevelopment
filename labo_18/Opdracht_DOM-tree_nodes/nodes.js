const setup = () => {


        let para = document.getElementById("abc");


        console.log(para);


        console.log("Child nodes van <p>:", para.childNodes);


        console.log("Child nodes van <body>:", document.body.childNodes);




}
window.addEventListener("load", setup);