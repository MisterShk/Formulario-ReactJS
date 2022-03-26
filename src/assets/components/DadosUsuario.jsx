import React, { useState , useContext } from 'react';
import { TextField, Button } from "@mui/material";
import Validacoes from '../models/Validacoes.js'
import useErros from '../hooks/useErros.js';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(Validacoes);   
    const [erros, validarCampos] = useErros(validacoes);     

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ email, senha }, erros);
        }}>
            <TextField
                id="email"
                fullWidth
                label="email"
                margin="normal"
                name="email"
                onChange={(event) => { setEmail(event.target.value) }}
                required
                type="email"
                value={email}
                variant="outlined"
            />

            <TextField
                id="senha"
                error={!erros.senha.valido}
                fullWidth
                helperText={erros.senha.texto}
                label="Senha"
                margin="normal"
                name="senha"
                onBlur={validarCampos}
                onChange={(event) => { setSenha(event.target.value) }}
                required
                type="password"
                value={senha}
                variant="outlined"
            />

            <Button
                color="primary"
                type="submit"
                variant="contained"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;