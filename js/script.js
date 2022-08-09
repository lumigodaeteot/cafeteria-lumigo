// MOSTRAR E ESCONDER DIVS SEGUNDA TELA 

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");


function showHideDiv1() {
    let aba = document.querySelector("#aba1");

    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn1.classList.remove("active");
        
    } else {
        aba.style.display = "block";

        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv2() {
    let aba = document.querySelector("#aba2");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn2.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.add("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv3() {
    let aba = document.querySelector("#aba3");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn3.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv4() {
    let aba = document.querySelector("#aba4");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn4.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.add("active");
        btn5.classList.remove("active");

        
    }
}
function showHideDiv5() {
    let aba = document.querySelector("#aba5");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";


    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn5.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.add("active");
    }
}
/////////////////////////////////////////////////////////////////////