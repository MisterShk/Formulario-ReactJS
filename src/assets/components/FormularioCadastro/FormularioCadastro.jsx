import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import ValidarCpf from "../ValidaCpf/ValidaCpf"

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState({cpf:{valido:true,texto:""}})
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();    
      }}
    >
      <TextField
        id="nome"
        fullWidth
        label="Nome completo:"
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
          }
        }
        value = {nome}
        variant="outlined"
      />      

      <TextField
        id="cpf"
        error={!cpfValido.cpf.valido}
        fullWidth
        helperText={cpfValido.cpf.texto}
        label="CPF:"
        margin="normal"
        onBlur={(event) => {
          const cpfValido = ValidarCpf(cpf);
          setCpfValido({cpf:cpfValido})          
        }}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
