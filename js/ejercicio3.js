const $ = (selector) => document.querySelector(selector);

const correcto = $('.correcto');
const incorrecto = $('.incorrecto');
const blanco = $('.blanco');
const btn3 = $('.btn3');
const r3 = $('.resultadoEj3');
const c3 = $('.contadorEj3');
let participante =0;
let rc=0, ri=0, rb=0;
/*Elaborar una aplicación que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a postulantes, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0.*/

btn3.addEventListener('click', sumarInputValues);

 function sumarInputValues(){
    let a = parseInt(correcto.value), b=parseInt(incorrecto.value), c=parseInt(blanco.value);
    participante+=1;
    rc+=parseInt(correcto.value);
    ri+=parseInt(incorrecto.value);
    rb+=parseInt(blanco.value);
    const puntaje = (a*4)+(b*-1)+(c*0);

   r3.innerText= `Postulante N° ${participante}
    puntaje final:  ${puntaje}` ;
  c3.innerText= `N° de participantes: ${participante}
  total respuestas correctas = ${rc}
  total respuestas incorrectas = ${ri}
  total respuestas en blanco = ${rb}
  `;
  

 }