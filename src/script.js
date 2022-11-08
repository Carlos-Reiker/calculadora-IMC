var peso = document.querySelector('#seuPeso');
var altura = document.querySelector('#suaAltura');
var resultado = document.querySelector('#resultado'); 

function calcIMC(){
    var imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    resultado.innerHTML = imc;
}
