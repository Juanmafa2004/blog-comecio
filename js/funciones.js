const $ = (selector) => document.querySelector(selector);
// funcion 1
const f1 =$('.f1');
const btn1 =$('.btnf1');
const r1 =$('.r1');


btn1.addEventListener('click', valorAbsoluto);

function valorAbsoluto(){
    const a= Math.abs(f1.value);
    r1.innerText= `El valor absoluto de  ${f1.value}  es: ${a} `;
}

//funcion 2
const f2=$('.f2');
const btn2=$('.btnf2');
const r2=$('.r2');

btn2.addEventListener('click', ceilNumber);

function ceilNumber(){
    const a= Math.ceil(f2.value);
    r2.innerText= `Su resultado es: ${a}`;
    
}


//funcion 3
const f3=$('.f3');
const btn3=$('.btnf3');
const r3=$('.r3');

btn3.addEventListener('click', floorNumber);

function floorNumber(){
    const a= Math.floor(f3.value);
    r3.innerText= `Su resultado es: ${a}`;
    
}

//funcion 4
const f4=$('.f4');
const f4E=$('.f4E');
const btn4=$('.btnf4');
const r4=$('.r4');

btn4.addEventListener('click', powNumber);

function powNumber(){
    const a= Math.pow(f4.value, f4E.value);
    r4.innerText= `Su resultado es: ${a}`;
    
}

//funcion 5
const btn5=$('.btnf5');
const r5=$('.r5');

btn5.addEventListener('click', randomNumber);

function randomNumber(){
    let a= Math.floor(Math.random() * 10) + 1;
    r5.innerText= a;
    
}

//funcion 6
const f6=$('.f6');
const btn6=$('.btnf6');
const r6=$('.r6');

btn6.addEventListener('click', roundNumber);

function roundNumber(){
    const a= Math.round(f6.value);
    r6.innerText= `Su resultado es: ${a}`;
    
}

//funcion 7
const f7=$('.f7');
const btn7=$('.btnf7');
const r7=$('.r7');

btn7.addEventListener('click', sqrtNumber);

function sqrtNumber(){
    if(f7.value<0){
    r7.innerText= `pon un numero positivo`;
    return;
    }
    const a= Math.sqrt(f7.value);
    r7.innerText= `Su resultado es: ${a.toFixed(2)}`;
    
}

//funcion 8
const f8=$('.f8');
const f8a=$('.f8a');
const f8b=$('.f8b');
const f8c=$('.f8c');
const btn8=$('.btnf8');
const r8=$('.r8');

btn8.addEventListener('click', maxNumber);

function maxNumber(){
    const a= Math.max(f8.value, f8a.value, f8b.value, f8c.value);
    r8.innerText= `Su resultado es: ${a}`;
    
}

//funcion 9
const f9=$('.f9');
const f9a=$('.f9a');
const f9b=$('.f9b');
const f9c=$('.f9c');
const btn9=$('.btnf9');
const r9=$('.r9');

btn9.addEventListener('click', minNumber);

function minNumber(){
    const a= Math.min(f9.value, f9a.value, f9b.value, f9c.value);
    r9.innerText= `Su resultado es: ${a}`;
    
}

//funcion 10
const f10=$('.f10');
const btn10=$('.btnf10');
const r10=$('.r10');

btn10.addEventListener('click', logNumber);

function logNumber(){
    if(f10.value<=0){
    r10.innerText= `pon un numero mayor a 0`;
    return;
    }

    const a= Math.log(f10.value);
    r10.innerText= `Su resultado es: ${a.toFixed(2)}`;
    
}