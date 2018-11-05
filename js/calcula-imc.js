// Fórmula IMC => peso / altura * altura


var trsPacientes = document.getElementsByClassName('paciente');

for(cont = 0, cont < trsPacientes.length, cont++){

    var pacienteTr = trsPacientes[cont];

    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

    var paciente = {
        nome : tdNome.textContent,
        peso : tdPeso.textContent,
        altura : tdAltura.textContent
    }
    
    if(paciente.altura != 0){
        var imc = paciente.peso / (paciente.altura*paciente.altura);
       
        var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
        tdImc.textContent = imc;

        console.log(imc);
    }else{
        console.log("A altura deve ser diferente de zero!");
    }

}
