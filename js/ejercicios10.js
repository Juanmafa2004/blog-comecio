const $ = (selector) => document.querySelector(selector);
// btn9.addEventListener('click', crearMatriz);



function calcular() {
    var tipo_documento = (document.getElementById('tipo_documento').value)
    var numero = (document.getElementById('numero').value)
    var nombre = (document.getElementById('nombre').value)
    var salario = parseFloat((document.getElementById('salario').value))
    var dias = parseInt((document.getElementById('dias').value))
    var hed = parseInt((document.getElementById('hed').value))
    var hen = parseInt((document.getElementById('hen').value))
    var hefd = parseInt((document.getElementById('hefd').value))
    var hefn = parseInt((document.getElementById('hefn').value))
    //Salarios Devengados por el empleado
    sueldo = salario / 30 * dias
    sueldo = sueldo.toFixed(2);
    document.getElementById('sueldo').value = sueldo
    if (salario <= 2320000)
        auxilio_transporte = 140600 / 30 * dias
    else
        auxilio_transporte = 0;
    auxilio_transporte = auxilio_transporte.toFixed(2);
    document.getElementById('auxilio_transporte').value = auxilio_transporte
    vhed = salario / 240 * 1.25 * hed
    vhed = vhed.toFixed(2);
    document.getElementById('vhed').value = vhed
    vhen = salario / 240 * 1.75 * hen
    vhen = vhen.toFixed(2);
    document.getElementById('vhen').value = vhen
    vhefd = salario / 240 * 2 * hefd
    vhefd = vhefd.toFixed(2);
    document.getElementById('vhefd').value = vhefd
    vhefn = salario / 240 * 2.5 * hefn
    vhefn = vhefn.toFixed(2);
    document.getElementById('vhefn').value = vhefn
    elementoActivo = document.querySelector('input[name="rn"]:checked');
    if (elementoActivo)
        recargo_nocturno = salario * 35 / 100
    else
        recargo_nocturno = 0
    recargo_nocturno = recargo_nocturno.toFixed(2);
    document.getElementById('recargo_nocturno').value = recargo_nocturno
    total_devengado = parseFloat(sueldo) + parseFloat(auxilio_transporte) +
        parseFloat(vhed) + parseFloat(vhen) + parseFloat(vhefd) + parseFloat(vhefn)
        + parseFloat(recargo_nocturno)
    total_devengado = total_devengado.toFixed(2);
    document.getElementById('total_devengado').value = total_devengado
    //Salarios Deducidos al empleado
    salud = (total_devengado - auxilio_transporte) * 4 / 100
    salud = salud.toFixed(2);
    document.getElementById('salud').value = salud
    pension = (total_devengado - auxilio_transporte) * 4 / 100
    pension = pension.toFixed(2);
    document.getElementById('pension').value = pension
    prestamos = salario * 0, 1
    prestamos = prestamos.toFixed(2);
    document.getElementById('prestamos').value = prestamos
    if (salario > 4640000 && salario <= 18560000)
        fondo_solidaridad = salario * 1 / 100
    else if (salario > 18560000 && salario <= 19720000)
        fondo_solidaridad = salario * 1.2 / 100
    else if (salario > 19720000 && salario <= 20880000)
        fondo_solidaridad = salario * 1.4 / 100
    else if (salario > 20880000 && salario <= 22040000)
        fondo_solidaridad = salario * 1.6 / 100
    else if (salario > 19720000 && salario <= 23200000)
        fondo_solidaridad = salario * 1.8 / 100
    else if (salario > 23200000)
        fondo_solidaridad = salario * 2 / 100
    else
        fondo_solidaridad = 0
    fondo_solidaridad = fondo_solidaridad.toFixed(2);
    document.getElementById('fondo_solidaridad').value = fondo_solidaridad
    total_deducido = parseFloat(salud) + parseFloat(pension) + parseFloat(prestamos) +
        parseFloat(fondo_solidaridad)
    total_deducido = total_deducido.toFixed(2);
    document.getElementById('total_deducido').value = total_deducido
    neto_pagado = parseFloat(total_devengado) + parseFloat(total_deducido)
    neto_pagado = neto_pagado.toFixed(2);
    document.getElementById('neto_pagado').value = neto_pagado
}



function limpiar() {
    document.getElementById('tipo_documento').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('salario').value = "";
    document.getElementById('dias').value = "";
    document.getElementById('hed').value = "";
    document.getElementById('hen').value = "";
    document.getElementById('hefd').value = "";
    document.getElementById('hefn').value = "";
    document.getElementById('sueldo').value = "";
    document.getElementById('auxilio_transporte').value = "";
    document.getElementById('vhed').value = "";
    document.getElementById('vhen').value = "";
    document.getElementById('vhefd').value = "";
    document.getElementById('vhefn').value = "";
    document.getElementById('total_devengado').value = "";
    document.getElementById('salud').value = "";
    document.getElementById('pension').value = "";
    document.getElementById('prestamos').value = "";
    document.getElementById('fondo_solidaridad').value = "";
    document.getElementById('total_deducido').value = "";
    document.getElementById('neto_pagado').value = "";
}