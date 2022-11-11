/*var peso = document.querySelector('#seuPeso');
var altura = document.querySelector('#suaAltura');
var resultado = document.querySelector('#resultado'); 

function calcIMC(){
    var imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    resultado.innerHTML = imc;}*/

//CALCULO DE IMC
window.onload = iniciar;

function iniciar(){
    var btnCalcular = document.getElementById('btnCalc');
    btnCalcular.addEventListener("click", calcIMC)
}

function calcIMC(){
    var textPeso = document.getElementById("seuPeso");
        var peso = textPeso.value;
    var textAltura = document.getElementById("suaAltura");
        var altura = textAltura.value;
var imc = (peso / (altura * altura)).toFixed(2);

var resultado = document.getElementById('resultado');
resultado.innerHTML = imc;   

var feedbackResultado = document.getElementById('feedback')

if ( imc < 18.5){
    feedbackResultado.innerHTML = "Você está abaixo do peso."
} else if( imc == 18.5){
    feedbackResultado.innerHTML = "Seu peso está normal"
}else if(imc >= 25.0){
    feedbackResultado.innerHTML = "Você está em sobrepeso"
}
}

//FEEDBACK


