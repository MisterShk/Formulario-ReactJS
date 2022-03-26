import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({})
  const formularios = [
    <DadosUsuario aoEnviar={validarSubmit} />,
    <DadosPessoais aoEnviar={validarSubmit} />,
    <DadosEntrega aoEnviar={validarSubmit} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  })

  function validarSubmit(dados, erros) {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }

    coletarDados(dados);
    return true;
  }

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    ProximoFormulario();
  }

  function ProximoFormulario() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>

  );
}

export default FormularioCadastro;
