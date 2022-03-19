function ValidarCpf(cpf) {
    let valido=true
    let msg=""

    if(cpf.length !== 11) {
        valido=false
        msg="O CPF deve conter 11 digitos."
    }

    return {valido:valido, texto:msg}
}

export default ValidarCpf