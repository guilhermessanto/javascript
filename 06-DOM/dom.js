/* Métodos/fuções de acesso a seleção
getElementById() -> seleciona um elemento pelo ID
querySelector() -> seleciona um elemento de acordo com um seletor
querySelectorALL()-> seleciona VÁRIOS elementos de acordo com um seletor
*/

//selecionando pelo ID
const titulo= document.getElementById('titulo-principal');
console.log(titulo);

//selecionando pela TAG
const pagina = document.querySelector('body');
console.log(pagina);

//selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);

/* Modificando elementos*/
titulo.textContent = "Olá Mundo!";
subtitulo[1].textContent = "Full Stack";

const legenda = document.querySelector('figcaption');

legenda.innerHTML = "<b>Ilustração do DOM</b>";

//CSS via JS
titulo.style.textAlign = "center";
titulo.style.backgroundImage = "linear-gradient(lightyellow, lightblue)";

const listaEditores = document.querySelector('#lista-editores');

const primeiro = listaEditores.querySelector('li:first-child');
const outro = listaEditores.querySelector('li:nth-child(2)')
const ultimo = listaEditores.querySelector('li:last-child');

ultimo.classList.add('destaque-item');

//console.error(ultimo);

//adicionando o atributo target em todos os links da lista referências 
//Selecionando todos os links contidos na lista ul
const links = document.querySelectorAll('ul li a');

for (let i = 0; i< links.length; i++){
    links[i].setAttribute('target','_blank');
};