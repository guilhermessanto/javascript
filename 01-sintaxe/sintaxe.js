//comentário de uma linha - atalho CTRL ;
/*bloco de comentários - SHIFT ALT A*/


//comando de saída para o console
//alert("Olá, mundo!");
console.log("Olá, mundo!");

/*Variáveis
Palavras-chaves: var, let, const

var -> variavel de escopo global
let -> variavel de escopo de bloco
const -> const de escopo de bloco */

const nome = "Guilherme"; //constante
let ano = 2022; //variavel de escopo local
var curso = "Técnico em Informática para Internet"; //variavel global

/* 
    ano = 2025;
    curso = "padeiro"; 
    nome = "joão"; 
*/
 
//recuperando os valores
console.log (nome);
console.log (ano);
console.log (curso);

//concatenação

//console.log("Eu sou o " +nome+", e em " +ano+" estou estudando o curso "+curso+".");

//String literal - Tamplate string
console.log(`Eu sou o ${nome}, e em ${ano} estou estudando o curso ${curso}.`);
console.log(`Atualmente, estamos fazendo o curso de ${curso}`);

let produto = "TV led";
let preco = 6500;
let quantidade = 3;
let total = preco*quantidade;

let novoPreco = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
}).format(preco)
let novoTotal = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
}).format(total)


console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${novoPreco} e o valor total de ${novoTotal}. `);


