import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';
import FormularioCadastro from './assets/components/FormularioCadastro';
import { validarCpf, validarSenha, validarNome } from "./assets/models/cadastro.js";
import Validacoes from "./assets/models/Validacoes.js"
import './assets/css/App.css';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <Validacoes.Provider
          value={{ cpf: validarCpf, senha: validarSenha, nome: validarNome }}
        >
          <FormularioCadastro />
        </Validacoes.Provider>
      </Container>
    );
  }
}

export default App;
