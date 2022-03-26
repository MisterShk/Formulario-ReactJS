import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import Validacoes from '../models/Validacoes.js';
import useErros from "../hooks/useErros.js";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(Validacoes);
  const [erros, validarCampos] = useErros(validacoes);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, cpf, promocoes, novidades }, erros);
      }}
    >
      <TextField
        id="nome"
        fullWidth
        label="Nome completo:"
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
        }}
        required
        value={nome}
        variant="outlined"
      />

      <TextField
        id="cpf"
        error={erros.cpf.valido}
        fullWidth
        helperText={erros.cpf.texto}
        label="CPF:"
        margin="normal"
        name="cpf"
        onBlur={validarCampos}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        required
        value={cpf}
        variant="outlined"
      />

      <FormControlLabel
        control={<Switch
          id="promocoes"
          checked={promocoes}
          color="primary" />}
        onChange={(event) => {
          setPromocoes(event.target.checked);
        }}
        label="Promoções"
      />

      <FormControlLabel
        control={<Switch
          id="novidades"
          checked={novidades}
          color="primary" />}
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
        label="Novidades"
      />

      <Button color="primary" type="submit" variant="contained" >
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
