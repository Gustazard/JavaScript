const input = document.getElementById("taskInput")
const ul = document.getElementById("taskList")

//Aqui estamos criando uma função para ser atribuida dentro do botão Adicionar Tarefas.
function addTask() {
    if (input.value !== "") //Se o Valor do input for diferente de "Vazio" ele irá criar um elemento(createElement) de 'li', o texto que ela possui é igual o input value, ou seja o valor do input que será digitado.

    {
        const li = document.createElement("Li");
        li.textContent = input.value; //Esta linha estamos criando um texto para listar, e este texto sera o valor preenchido pelo usuário dentro do imput.

        //Aqui estamos criando um botão(button) para remover esses itens de (li) 
        const removerBotao = document.createElement("button");

        //Chamamos nossa const removerBotao e inserindo um texto chamado "Remover"
        removerBotao.textContent = "Remover";

        //Criamos aqui uma função que ao clicar neste botão ele irá  executar uma função de remover o filho da nossa ul ou seja a "li".
        removerBotao.onclick = function(){
            ul.removeChild(li); //Removendo o "li" 
        };

        ul.appendChild(li); //Estamos adicionando um filho para nossa (ul)
        li.appendChild(removerBotao); //Aqui, chamamos nossa const "li" e estamos adicionando a ela um filho(appendChild)

        input.value = ""; //Usado para limpar o campo de input após ter adicionado o item de lista

    }  

    else { //Caso o campo input estiver vazio, ele irá aparecer está mensagem de alerta.
        alert("Por favor, insira uma tarefa!")
    }
}