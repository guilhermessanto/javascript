// estrudutras de controle condicional
// if/else, esle if
let nome = "Guilherme";
let idade = 18;

// Verificar a idade da pessoa 
//Condicional Encadeada
let mensagem; 

//if (condição){ comando}

/*if(idade > 18){
    mensagem = "maior";
}else{
    mensagem = "menor";
}

console.log(`Você é ${mensagem} de idade`);
document.write(`Você é ${mensagem} de idade`);
*/

if(idade >= 60){
    mensagem = "idoso";
} else if(idade >= 18){
    mensagem = "adulto, mas não idoso";
}else{
    //mensagem = "menor de idade";
    if(idade >=12 && idade < 18){
        mensagem = "adolescente";
    }else{
        mensagem = "criança";
    }
}



console.log(`${nome} você é ${mensagem}.`);
document.write(`${nome} você é ${mensagem}.`);
console.log("--------------------");

let nota1 = 10 ;
let nota2 = 6;
let media = (nota1 + nota2)/2;

// if(media >=7 ){
//     mensagem = "Aprovado";
// }else{
//     mensagem = "Reprovado";
// }

//ternario
//media>=7? mensagem = "Aprovado" : mensagem = "Reprovado";
mensagem = media>=7? "Aprovado" : "Reprovado";
console.log(`${nome} sua media é ${media} e você esta ${mensagem}`);

console.log("--------------------");

let opcao =4;
let textoOpcao;

switch(opcao){
    case 1: 
        textoOpcao = "Legal, o que deseja saber?";
        break;    
    case 2: 
        textoOpcao = "Que pena, o que aconteceu?";
        break;    
    case 3: 
        textoOpcao = "Certo, qual sua dúvida?";
        break;    
    default: 
        textoOpcao = "Hum, não entendi... vou te transferir.";
        break;    
};

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);

/* Operadores de comparação*/ 

let a = 10;
let b = "10";

console.log(a === b);