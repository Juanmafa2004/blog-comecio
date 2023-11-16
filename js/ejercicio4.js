const $ = (selector) => document.querySelector(selector);
const unidades = $('.unidades');
const btn4 = $('.btn4');
const r4 = $('.resultadoEj4');

btn4.addEventListener('click', calcularSalario);

/*Se tiene registrado la producción (unidades) logradas por un operario a lo largo de la semana (lunes a sábado). Elabore una solución que nos muestre si el operario recibirá incentivos, y cuanto es su salario semanal, de acuerdo a la siguiente tabla, sabiendo que el promedio de producción mínima es de 100 unidades.*/


function calcularSalario(){
const a =unidades.value;
if(a>=0 && a<=99){
    let b= (a*2);
    r4.innerText = `El operario no recibe incentivo y su salario semanal es de $ ${b}`

}else if (a>=100 && a<= 199){
    b=(a*2)+(a*0.10);
    r4.innerText = `El operario recibe incentivo y su salario semanal es de $ ${b}`

}else if (a>=200 && a<=299){
    b=(a*2.5)+(a*0.12);
    r4.innerText = `El operario recibe incentivo y su salario semanal es de $ ${b}`


}else if (a>=300&&a<=399){
    b=(a*3)+(a*0.14);
    r4.innerText = `El operario recibe incentivo y su salario semanal es de $ ${b}`


}else if (a>=400){
    b=(a*3.5)+(a*0.16);
    r4.innerText = `El operario recibe incentivo y su salario semanal es de $ ${b}`

}
}
