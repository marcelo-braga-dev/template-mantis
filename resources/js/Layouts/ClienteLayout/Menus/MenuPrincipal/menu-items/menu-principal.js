import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const dashboard = [
        {
            id: 'eventos',
            nome: 'Eventos',
            url: route('clientes.eventos.index', 'jh5s')
        }, {
            id: 'galerias',
            nome: 'Galerias',
            url: route('home')
        }, {
            id: 'instruções',
            nome: 'Instruções de Uso',
            url: route('clientes.instrucoes-uso'),
        }
    ]
;

export default dashboard;
