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

