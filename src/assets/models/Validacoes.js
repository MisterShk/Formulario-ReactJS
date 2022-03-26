import React from "react";

const Validacoes = React.createContext({
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao
});

function semValidacao(dados) {
    return { valido: true, texto: "" };
}

export default Validacoes;

