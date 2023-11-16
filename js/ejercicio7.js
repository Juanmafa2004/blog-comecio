const $ = (selector) => document.querySelector(selector);

const btn7 = $('.btn7');

let niños = { total: 0 };
let jóvenes = { total: 0 };
let adultos = { total: 0 };
let viejos = { total: 0 };

btn7.addEventListener('click', agregarPersona);

function agregarPersona() {
    const edad = parseInt($(".edad").value);

    if (isNaN(edad)) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    if (edad >= 0 && edad <= 13) {
        niños.total++;
    } else if (edad >= 14 && edad <= 30) {
        jóvenes.total++;
    } else if (edad >= 31 && edad <= 60) {
        adultos.total++;
    } else  if(edad >=31 && edad <=120){
        viejos.total++;
    }else{
        alert("coloca una edad menor a 120")
    }

    $(".edad").value = "";

    actualizarResultados();
}

function actualizarResultados() {
   $(".totalNiños").innerText = niños.total;
    $(".totalJovenes").innerText = jóvenes.total;
    $(".totalAdultos").innerText = adultos.total;
    $(".totalViejos").innerText = viejos.total;
}
