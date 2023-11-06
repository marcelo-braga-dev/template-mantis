import LayoutAdmin from "@/Layouts/AdminLayout/LayoutAdmin";

import * as React from 'react';
import {Grid, TextField} from "@mui/material";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StatusIcons from "@/Components/Partials/StatusIcons.jsx";

export default function ({galerias}) {

    return (
        <LayoutAdmin menu="galerias">
            <section className="mb-4">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <TextField label="Pesquisar"/>
                    </div>
                    <div className="col-auto">
                        <a href={route('admin.galerias.create')} className="btn btn-primary">Nova Galeria</a>
                    </div>
                </div>
            </section>
            <section>
                {galerias.map((item, index) => {
                    return (
                        <Card key={index} className="mb-4" sx={{display: 'flex'}}>
                            <a href={route('admin.galerias.show', item.id)}>
                                <CardMedia
                                    component="img"
                                    sx={{height: 200, width: 200}}
                                    image={item.capa}
                                    title={item.titulo}
                                    alt="Imegem do Evento"
                                />
                            </a>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1 0 auto'}}>
                                    <Typography component="a" variant="h5"
                                                href={route('admin.galerias.show', item.id)}
                                                sx={{
                                                    color: "inherit",
                                                    textDecoration: 'none',
                                                    ":hover": {textDecoration: 'underline'}
                                                }}>
                                        {item.titulo}
                                    </Typography>

                                    <Typography className="mb-2" variant="caption" color="text.secondary"
                                                component="div">
                                        {item.data} | <StatusIcons status={item.status} />
                                    </Typography>
                                    <Typography className="mb-2" variant="subtitle1" color="text.secondary"
                                                component="div">
                                        {item.descricao}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" component="div">
                                        Evento: {item.evento.nome}
                                    </Typography>
                                    <Typography className="mb-2" variant="body1" color="text.secondary" component="div">
                                        Localidade: {item.evento.localidade}
                                    </Typography>
                                </CardContent>

                                {/*<Box sx={{alignItems: 'center', pl: 1, pb: 1}}>*/}
                                {/*    <button className="mx-2">*/}
                                {/*        <ShareOutlinedIcon sx={{fontSize: 15}}/> Compartilhar*/}
                                {/*    </button>*/}
                                {/*</Box>*/}
                            </Box>
                        </Card>
                    )
                })}
            </section>
        </LayoutAdmin>
    )
}
