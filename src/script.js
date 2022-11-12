

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
//FEEDBACK
var feedbackResultado = document.getElementById('feedback')

    if ( imc <= 18.4){
        feedbackResultado.innerHTML = "Abaixo do peso normal ⚠️"
    }else if(imc <= 24.9){
        feedbackResultado.innerHTML = "Seu peso está normal ✅"
    }else if(imc <= 29.9){
        feedbackResultado.innerHTML = "Excesso de peso ⚠️"
    }else if(imc <= 34.9){
        feedbackResultado.innerHTML = "Obesidade classe I ⚠️"
    }else if(imc <= 39.9){
        feedbackResultado.innerHTML = "Obesidade classe II ⚠️"
    }else if(imc >= 40.0){
        feedbackResultado.innerHTML = "Obesidade classe III (Mórbida) ⚠️"
    }else{
        alert("Insira corretamente seu Peso e Altura.")
    }
}



/*var inputs = document.getElementsByTagName('input');
var caracteres = ' abcdefghijklmnopqrstuvwxyz';
if(inputs.value = caracteres){
    alert("Insira apenas números.")
}*/
