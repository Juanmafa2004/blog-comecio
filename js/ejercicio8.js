const $ = (selector) => document.querySelector(selector);

const btn8 =$('.btn8');
const r8 =$('.resultadoProduccion');
const gallinasInput = $('.gallinasInput');
const diasInput = $('.diasInput');


btn8.addEventListener('click', calcularProduccion);

function calcularProduccion() {
    var x = gallinasInput.value;
    var n = diasInput.value;

    x = parseInt(x);
    n = parseInt(n);

    if (!isNaN(x) && !isNaN(n) && x > 0 && n > 0) {
        var produccion = 1;
        var factorial = 1;
        for (var i = 1; i <= n; i++) {
            factorial *= i;
            produccion += Math.pow(x, i) / factorial;
        }
        r8.innerText = `La producción estimada de huevos es: ${produccion.toFixed(2)}`;
    } else {
        r8.innerText = 'Por favor, ingrese números válidos y mayores a cero.';
    }
}
