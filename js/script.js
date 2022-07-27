// MOSTRAR E ESCONDER DIVS SEGUNDA TELA 

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

function showHideDiv1() {
    let aba = document.querySelector("#aba1");

    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn1.classList.remove("active");
        
    } else {
        aba.style.display = "block";

        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
    }
}

function showHideDiv2() {
    let aba = document.querySelector("#aba2");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba3").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn2.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.add("active");
        btn3.classList.remove("active");
    }
}

function showHideDiv3() {
    let aba = document.querySelector("#aba3");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn3.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
    }
}

/////////////////////////////////////////////////////////////////////