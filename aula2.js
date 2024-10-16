//Instanciando váriavies strings

let nome = 'Erick'; //Preciso somar nome + sobrenome para obter a informação completa
let sobreNome ='Carvalho' //Preciso somar nome + sobrenome para obter a informação completa 
let email = 'ErickCarvalhoSousa@hotmail.com'

//Instanciando váriaveis number
let idade= 68; //Não Precisa juntar 
let altura = 1.81;
let peso = 102;
let saldoBancario = 300;


let tipoConta = 'Bancaria';
let emprego = 'Aposentado'
let rgDocumento = '09.995.261-0';
let cpfDocumento = '684.993.063-06'
let nascDocumento = '27/05/1956'

let nomeCompleto = nome + ' ' + sobreNome;
let informacoesFisicas = `Idade: ${idade} \n Altura: ${altura} \n Peso: ${peso}`
let documentosCompletos = `RG: ${rgDocumento} \n CPF: ${cpfDocumento} \n Data de Nascimento: ${nascDocumento} \n Trabalho: ${emprego} \n Tipo De Conta: ${tipoConta} \n Saldo Bancario: ${saldoBancario}` ;





let informationTemplate =` Nome: ${nomeCompleto} \n ${informacoesFisicas} \n ${documentosCompletos} \n E-mail: ${email}`;

console.log(informationTemplate)
