const $ = (selector) => document.querySelector(selector);

const numMaterias1 = $('.numMaterias');
const numEstudiantes1 = $('.numEstudiantes');
const btn9 = $('.btn9')
const btn9a = $('.btn9a')
const inputMatrix = $(".inputMatrix");
const outputMatrix = $(".outputMatrix");

let numMaterias;
let numEstudiantes;
let matrizCalificaciones = [];


btn9.addEventListener('click', crearMatriz);
btn9a.addEventListener('click', calcularPromedios);

function crearMatriz() {
    numMaterias = parseInt(numMaterias1.value);
    numEstudiantes = parseInt(numEstudiantes1.value);

    inputMatrix.innerHTML = '';

    for (let i = 0; i < numEstudiantes; i++) {
        matrizCalificaciones[i] = new Array(numMaterias);
        for (let j = 0; j < numMaterias; j++) {
            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("placeholder", `Estudiante ${i + 1}, Materia ${j + 1}`);
            matrizCalificaciones[i][j] = input;
            inputMatrix.appendChild(input);
        }
    }
}

function calcularPromedios() {

    outputMatrix.innerHTML = '';

    for (let i = 0; i < numEstudiantes; i++) {
        let promedioEstudiante = 0;
        for (let j = 0; j < numMaterias; j++) {
            promedioEstudiante += parseFloat(matrizCalificaciones[i][j].value);
        }
        promedioEstudiante /= numMaterias;
        outputMatrix.innerHTML += `Promedio Estudiante ${i + 1}: ${promedioEstudiante.toFixed(2)}<br>`;
    }

    for (let j = 0; j < numMaterias; j++) {
        let promedioMateria = 0;
        for (let i = 0; i < numEstudiantes; i++) {
            promedioMateria += parseFloat(matrizCalificaciones[i][j].value);
        }
        promedioMateria /= numEstudiantes;
        outputMatrix.innerHTML += `Promedio Materia ${j + 1}: ${promedioMateria.toFixed(2)}<br>`;
    }
}