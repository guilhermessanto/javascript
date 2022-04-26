/* Sintaxe 1 (tradicional)
Função literal/anônima*/
let exemplo1 = function(){
    console.log("Função anônima / literal");
};
exemplo1(); //chamando a função

/* Sintaxe 2 (tradicional)
Função nomeada*/
function exemplo2(){
    console.log("Função nomeada")
};
exemplo2(); //chamando a função

/* Sintaxe 3 (moderna)
Função Seta/Flecha (Arrow Function)*/
let exemplo3 = () =>{
    console.log('Arrow function');
};
exemplo3(); //chamando a função

let exemplo3b = () => console.log("Arrow function B");
exemplo3b();


//exemplos

function dobra(valor){
    return valor * 2;
}

console.log(dobra(25));
document.write(dobra(25));

//arrow function 
let dobraB = (valor)=> {
    return valor * 2;
}
console.log(dobraB(15));

let dobraC = valor => valor * 2 ;
console.log(dobraC(65));

console.log("--------------------")

let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor){
    return valor.toLocaleString('en',{
        style: 'currency',
        currency:'USD'
    });
};

//arrow
let formataValor = valor => {
    return valor.toLocaleString('pt-br',{
        style: 'currency',
        currency:'BRL'
    });
};

console.log(formataValor(preco));
console.log(formataValor(desconto));
console.log(formataValor(precoFinal));