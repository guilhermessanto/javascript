//Solução 01
/*function converteDolar(){
    //pegando o valor digitado no campo valorDolar do HTML
    let valorDolar = document.getElementById('valorDolar').value;
    let converteReal = valorDolar * 4.97;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convetido em Reais é R$ ${converteReal}`;
    resultado.style.color = "red";
};*/
//solução 02
function converteDolar(){
    //pegando o valor digitado no campo valorDolar do HTML
    let valorDolar = document.getElementById('valorDolar').value;
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let converteReal = valorDolar * cotacaoDolar;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convetido em Reais é R$ ${converteReal}`;
    resultado.style.color = "red";
};
