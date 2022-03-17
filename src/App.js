import React, { Component } from 'react';
import FormularioCadastro from './assets/components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import './assets/css/App.css';
import 'fontsource-roboto';

class App extends Component {
  render() {

    return (
      <Container component='article' maxwidth='sm'>
        <Typography variant='h3' component='h1' align='center' >Formulário de cadastro.</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
