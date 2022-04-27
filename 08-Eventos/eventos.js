let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

function clique(){
    resultado.textContent = nome.value;
}

let moeda = document.getElementById("moeda");
let resultadoMoeda = document.getElementById("resultadoMoeda");

function converter(){
    return  resultadoMoeda.textContent = moeda.value * 5;
    
}