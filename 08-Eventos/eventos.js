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