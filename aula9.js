const usuario ={
    nome:"Gustavo",
    sobreNome:"Xavier",
    Idade: 21,
    Equipe: "Aston Martin"
};

const mensagem1 = "Bem-Vindo à Ferrari";
const mensagem2 = "Bem-vindo à Williams";
const mensagem3 = "Bem-vindo à McLaren";
const mensagem4 = "Bem-vindo à Mercedes";
const mensagem5 = "Bem-vindo à RedBull Racing";
const mensagem6 = "Bem-vindo à Aston Martin";
const mensagem7 = "Bem-vindo à Alpine";
const mensagem8 = "Bem-vindo à Toro Rosso";
const mensagem9 = "Bem-vindo à Sauber";
const mensagem10 = "Bem-vindo à Haas";

const mensagemERRO = "ERRO! Por favor, Insira uma equipe válida.";

if (usuario.Equipe === 'Ferrari'){
    console.log(`${mensagem1} ${usuario.nome} ${usuario.sobreNome}`);
}
else if (usuario.Equipe === 'Williams'){
    console.log(`${mensagem2} ${usuario.nome} ${usuario.sobreNome}`);
}
else if (usuario.Equipe === 'McLaren'){
    console.log(`${mensagem3} ${usuario.nome} ${usuario.sobreNome}`);
}
else if (usuario.Equipe === 'Mercedes'){
    console.log(`${mensagem4} ${usuario.nome} ${usuario.sobreNome}`);
}
else if (usuario.Equipe === 'RedBull Racing'){
    console.log(`${mensagem5} ${usuario.nome} ${usuario.sobreNome}`);
}
else if (usuario.Equipe === 'Aston Martin'){
    console.log(`${mensagem6} ${usuario.nome} ${usuario.sobreNome}`);
}
else {
console.log(`${mensagemERRO}`);
}
