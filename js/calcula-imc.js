// Fórmula IMC => peso / altura * altura

var tdPeso = document.getElementById('peso-1');
var tdAltura = document.getElementById('altura-1');
var tdImc = document.getElementById('imc-1');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente = {
    peso : peso,
    altura : altura
}

if(altura != 0){
    var imc = paciente.peso / (paciente.altura*paciente.altura);
    tdImc.textContent = imc;
    console.log(imc);
}else{
    console.log("A altura deve ser diferente de zero!");
}

console.log(peso);