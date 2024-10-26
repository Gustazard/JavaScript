//Função que alterna a cor do fundo e do texto para garantir contraste.

function TrocarCor() {
    //Verifica a cor atual do fundo
    if (document.body.style.backgroundColor === "black") {
        //Se estiver preto, altera para branco, e muda o texto para preto
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        //Atualiza o texto do botão para indicar o "Modo Escuro"
        document.getElementById("toggleButton").textContent = "Modo Escuro";
        //Document === HTML

    }

    else 
    
    {
        //Se estiver branco, muda para preto, o else significando === CASO CONTRARIO
        //Alterando cor do fundo para preto
        document.body.style.backgroundColor = "black";
        //Alterando a cor da fonte para branco
        document.body.style.color = "white";

        document.getElementById("toggleButton").textContent = "Modo Claro";
    };
}