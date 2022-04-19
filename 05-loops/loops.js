/* Estruturas de controle de repetição

while (enquanto)
do/while (faça/enquanto)
for ( para uma determinada quantidade de vez)
*/

// Exemplo 1: while
// while(condicao){comandos};
let i = 1;
while(i< 20){
    console.log(`O valor de i é: ${i}`);
    i++;
}
console.log("--------------------");
// Exemplo 2: do/while
let j = 1;
do{
    console.log(`J é ${j}`);
    j++;
}while(j < 10);
console.log("--------------------");
// Exemplo 3: for
for(let k = 1; k <= 5; k++){
    console.log(`K vale: ${k}`)
}
console.log("--------------------");
// Exemplo 4: loop iterando sobre os dados do array
let alunos = [
    "Chiquinha","Chaves","Madruga","Kiko","inhonho","seu barriga","jaiminho"
];
//Cache do tamanho array
let tamanho = alunos.length;

for(let i = 0; i < tamanho; i++){
    console.log(alunos[i]);
}
