var peso;
var altura;
var imc;
var resultado;

// Função para calcular IMC recebendo o evento
function calcular(event){
    // Evitar refresh da página ao submeter o formulário
    event.preventDefault();

    // Recebendo os dados digitados pelo usuário
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    // Calculando o IMC
    imc = peso / (altura * altura);

    // Testando a recepção dos valores de peso e altura e o cálculo do IMC
    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    
    // Verificando os intervalos do IMC e exibindo o resultado correspondente
    if(imc < 17) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Cuidado, você está muito abaixo do peso';
    } 
    else if(imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Você está abaixo do peso';
    }
    else if(imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Você está no peso normal';
    }
    else if(imc >= 25 && imc < 29.99) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Você está acima do peso';
    }
    else if(imc >= 30) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Você está obeso';
    }
}
