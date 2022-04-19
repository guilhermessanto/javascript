//Exemplo 1 objeto básico
let livro = {
    //propriedade: valor
    titulo : 'Senhor dos Anéis',
    ano : 1954,
    volumes : 3,
    autor : 'J.R.R Tolkien'
};

console.log(livro.ano);
console.log(`Meu livro preferido é o ${livro.titulo} que foi lançado em ${livro.ano}.`);

//Exemplo 2: objeto contendo array e outo objeto
let pessoa = {
    //propriedades
    nome : 'Certo Alguém',
    idade : 39,
    sexo : 'masculino',
    telefones : ['2222-3333','5555-6666'],
    cidade : 'São Paulo',
    medidas : {
        peso : 90,
        altura : 1.80
    }
};

console.log(pessoa.medidas.altura);
console.log(pessoa.telefones[0]);
console.log(`${pessoa.nome} é uma pessoa incrível, contrate através do telefone ${pessoa.telefones[1]}`);

//Exemplo 3: Array de Objeto

let livros = [
    {
        titulo : 'Senhor dos Anéis',
        autor : 'J.R.R Tolkien' 
    },
    {
        titulo : 'Ghost Rider',
        autor : 'Neil Peart'
    },
    {
        titulo : 'Game of Thrones',
        autor :'George R.R Martin' 
    }
];
    
console.log(`Meu livro favorito é ${livros[2].titulo}  do autor ${livros[2].autor}.`);