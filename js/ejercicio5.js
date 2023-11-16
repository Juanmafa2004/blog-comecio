const $ = (selector) => document.querySelector(selector);

let temperaturas = [];
let errores = 0;


const btn5=$('.btn5');
const a =$(".num-dias");
const b = $(".max-temp");
const c = $(".min-temp");
const d =$('.media-maxima');
const e =$('.media-minima');
const f =$('.num-errores');
const g =$('.porcentaje-errores');


btn5.addEventListener('click', agregar_temperatura);

function agregar_temperatura (){
    const maxTemp = parseFloat($('.max-temp').value);
    const minTemp = parseFloat($(".min-temp").value);
    if (!isNaN(maxTemp) && !isNaN(minTemp) && maxTemp !== 9 && minTemp !==9) {
        temperaturas.push({ max: maxTemp, min: minTemp});
        actualizarEstadisticas();
    } else {
        errores++;
    }
    a.textContent = temperaturas.length;
    b.value = "";
    c.value = "";
}

function actualizarEstadisticas() {
    let sumMax = 0;
    let sumMin = 0;

    for (const temperatura of temperaturas) {
        sumMax += temperatura.max;
        sumMin += temperatura.min;
    }
    const mediaMaxima = sumMax / temperaturas.length;
    const mediaMinima = sumMin / temperaturas.length;

    d.innerText = mediaMaxima.toFixed(2);
    e.innerText = mediaMinima.toFixed(2);
    f.innerText = errores;
    g.innerText = ((errores / (temperaturas.length + errores)) *100 ).toFixed(2);
}