const pagina = document.querySelector('body');
const titulo = pagina.querySelector('h1');
const msg = pagina.querySelector('#mensagem');
const sub01 = pagina.querySelector('#subtitulo-exemplo01');

sub01.addEventListener('mouseover',function(){
    msg.textContent = "Olá! você passou o mouse acima...";
});
sub01.addEventListener('mouseout',function(){
    msg.textContent = ""
});

//exemplo 02

const btn = pagina.querySelector('#noturno');
btn.addEventListener('click',function(){
    pagina.classList.toggle('modo-noturno');
    //desafio: mudar o rótulo do botão a medida em que o usuário clica

    if(btn.textContent == 'Ativar'){
        btn.textContent = 'Desativar';
    }else{
        btn.textContent = 'Ativar';
    }
});

// Exemplo 3: formulário
const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event){
    //previne o comportamento padrão do formulário
    event.preventDefault();
    // capturando os dados digitados
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    
    //Calculando a média
    let media = calculaMedia(nota1,nota2);

    //Verificando a situação
    let situacao = verificaSituacao(media);

    //Montafem do resumo do aluno
    montarResumo(nome , media , situacao);

    //resetando o formulário
    formulario.reset();

    // levando o foco para o campo nome
    campoNome.focus();
});

function calculaMedia(nota1,nota2){
    return (nota1 + nota2)/2;
};
function verificaSituacao(media){
    if(media >= 7 ){
        return 'aprovado'
    }else{
        return 'reprovado'
    };
};
function montarResumo(nome , media, situacao){
    //1. Criar o elemento dinamicamente 
    let linha = document.createElement('tr');
    //2. Montar o conteúdo do elemento criado
    linha.innerHTML = `<td>${nome}</td>
                        <td>${media}</td>
                        <td>${situacao}</td>`;

   //3. Adicionar o elemento ao DOM (corpoTabela)
   corpoTabela.appendChild(linha);                     
};