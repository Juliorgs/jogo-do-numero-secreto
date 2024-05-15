let listaDeNumerosSorteados = [];
let numeroSecreto;
let tentativas;
let mensagemTentativas=1;
let numeroMaximo= 10;

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um numero entre 1 e ${numeroMaximo}`);
}

function exibirTextoNaTela(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;  
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        mensagemTentativas =  mensagemTentativas > 1? 'Tentativas': 'Tentativa';
        let textoParaATela = (`Você conseguiu descobrir o número secreto com ${tentativas} ${mensagemTentativas}`);
        exibirTextoNaTela('p', textoParaATela);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('botaochutar').setAttribute('disabled',true);
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
        }else {
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);            
        }
        tentativas++;
        mensagemTentativas++;
        limparCampo();
    }
} 

function novoJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemTentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('botaochutar').removeAttribute('disabled');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == numeroMaximo){
        listaDeNumerosSorteados=[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

novoJogo();