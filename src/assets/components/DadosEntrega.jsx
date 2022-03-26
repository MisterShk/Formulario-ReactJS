import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState("");

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, cidade, estado })
            }}
        >
            <TextField
                id="cep"
                fullWidth
                label="CEP"
                margin="normal"
                value={cep}
                onChange={(event) => { setCep(event.target.value) }}
                type="number"
                variant="outlined"
            />

            <TextField
                id="endereco"
                fullWidth
                label="endereco"
                margin="normal"
                onChange={(event) => { setEndereco(event.target.value) }}
                type="text"
                value={endereco}
                variant="outlined"
            />

            <TextField
                id="numero"
                fullWidth
                label="numero"
                margin="normal"
                onChange={(event) => { setNumero(event.target.value) }}
                type="number"
                value={numero}
                variant="outlined"
            />

            <TextField
                id="cidade"
                fullWidth
                label="Cidade"
                margin="normal"
                onChange={(event) => { setCidade(event.target.value) }}
                type="number"
                value={cidade}
                variant="outlined"
            />

            <TextField
                id="estado"
                fullWidth
                label="Estado"
                margin="normal"
                onChange={(event) => { setEstado(event.target.value) }}
                type="number"
                value={estado}
                variant="outlined"
            />

            <Button
                color="primary"
                type="submit"
                variant="contained"
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega;