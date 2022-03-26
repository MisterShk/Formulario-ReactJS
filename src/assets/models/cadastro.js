function validarCpf(cpf) {
    let valido = true
    let msg = ""

    if (cpf.length !== 11) {
        valido = false
        msg = "O CPF deve conter 11 digitos."
    } else {

        if (!ChecaCpfRepetido(cpf)) {
            valido = false
            msg = "O CPF informado é invalido."
        }

    }

    return { valido: valido, texto: msg }
}

function ChecaCpfRepetido(cpf) {
    let valido = true
    const cpfRepetido = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    cpfRepetido.forEach(valor => {
        if (valor === cpf) { valido = false }
    })

    return valido
}

function validarNome(nome) {
    if (nome.length < 4 || nome.length > 72) {
        return { valido: false, texto: "Nome deve ter entre 4 e 72 dígitos." }
    } else {
        return { valido: true, texto:"" };
    }
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos." }
    } else {
        return { valido: true, texto:"" };
    }
}

export {validarCpf, validarNome, validarSenha}