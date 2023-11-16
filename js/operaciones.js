const $ = (selector) => document.querySelector(selector);

const value1 =$('.value1');
const value2 =$('.value2');
const btnsuma =$('.suma');
const btnresta =$('.resta');
const btnmultiplicacion =$('.multiplicacion');
const btndiv =$('.division');
const resultado=$('.resultadoEj1');



btnsuma.addEventListener('click', sumarInputValues);
btnresta.addEventListener('click', restaInputValues);
btnmultiplicacion.addEventListener('click', multInputValues);
btndiv.addEventListener('click', divInputValues);

 function sumarInputValues(){
  const a= parseInt(value1.value) + parseInt(value2.value);
  resultado.innerText= `Su resultado es: ${a}`;
 }

 function restaInputValues(){
    const a= parseInt(value1.value) - parseInt(value2.value);
    resultado.innerText= `Su resultado es: ${a}`;
   }

function multInputValues(){
    const a= parseInt(value1.value) * parseInt(value2.value);
    resultado.innerText= `Su resultado es: ${a}`;
   }

function divInputValues(){
    if(value2.value==0){
        resultado.innerText= `No se puede dividir por 0 cambia el valor`;
        return;
    }
    const a= parseInt(value1.value)/ parseInt(value2.value);
    resultado.innerText= `Su resultado es: ${a.toFixed(1)}`;
}