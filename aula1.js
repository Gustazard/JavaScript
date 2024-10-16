let aspasSimples ='Testando o código'
//String em resumo são texto que podem ser utilizados no JavaScript
//e para utiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "String com aspas Duplas";
//Exemplo de string com aspas Duplas.

let templateLiteral = `A Resposta para este calculo matemático é = ${1 + 1}.`;
//Essa é uma String Template, basicamente usado em casos onde há necessidades de
//relizar uma ação aritimética (como no exemplo) ou quando guardamos alguma variavel dentro dela.
//O simbolo ${} em JavaScript é usado para interpolar variaveis, ou seja para retomar o valor dela.
console.log(templateLiteral);

//Veha abauxi exenoki de cini e qyabdi ysar as crases
let nome = 'Gusta';
let idade = 24; //Numneros usados sem aspas (Simples ou duplas)
let funcao = 'Entry'

let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos, e atualmente minha função é ser ${funcao}
no cs2`;

console.log(mensagem);

let primeiroNome ='Gustavo'
let segundoNome = 'Xavier'
let nomeCompleto = primeiroNome + ' ' + segundoNome; //Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${segundoNome}`; //Usando Template literal

console.log(nomeCompleto);