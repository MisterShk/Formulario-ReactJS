import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro() {
    return (
        <form>
            <TextField id='nome' label='Nome completo: ' variant='outlined' margin='normal' ></TextField>
            <TextField id='cpf' label='CPF: ' variant='outlined' margin='normal' ></TextField>
            <FormControlLabel
                label='Promoções'
                control={<Switch id='promocoes' defaultChecked color='primary' />}
            />
            <FormControlLabel
                label='Novidades'
                control={<Switch id='novidades' defaultChecked color='primary' />}
            />
            <Button type='submit' variant='contained' color='primary' > Cadastrar </Button>
        </form>
    );
}

export default FormularioCadastro;