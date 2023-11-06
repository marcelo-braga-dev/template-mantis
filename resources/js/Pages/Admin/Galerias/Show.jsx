import LayoutAdmin from "@/Layouts/AdminLayout/LayoutAdmin.jsx";
import {Box} from "@mui/material";
import React, {useEffect, useMemo, useState} from "react";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import StatusIcons from "@/Components/Partials/StatusIcons";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import UploadIcon from '@mui/icons-material/Upload';

function Page({galeria, conteudos}) {

    const [valueObject, setValueObject] = useState({});
    const [inputValue, setInputValue] = useState();

    const toggleValue = () => {
        if (valueObject[inputValue]) {
            const updatedValueObject = {...valueObject};
            delete updatedValueObject[inputValue];
            setValueObject(updatedValueObject);
        } else {
            setValueObject((prevValue) => ({
                ...prevValue,
                [inputValue]: inputValue,
            }));
        }
        setInputValue();
    };

    useEffect(function () {
        if ((inputValue)?.toString()) toggleValue()
    }, [inputValue])

    return (
        <LayoutAdmin titlePage="Galeria" menu="galerias" voltar={route('admin.galerias.index')}>

            <section>
                <Card sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{flex: '1 0 auto'}}>
                            <h6>{galeria.titulo}</h6>
                            <Typography className="mb-2" variant="caption" color="text.secondary"
                                        component="div">
                                {galeria.data}
                            </Typography>
                            <Typography className="mb-2" variant="subtitle1" color="text.secondary"
                                        component="div">
                                {galeria.descricao}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="div">
                                Evento: {galeria.evento.nome}
                            </Typography>
                            <Typography className="mb-2" variant="body1" color="text.secondary" component="div">
                                Localidade: {galeria.evento.localidade}
                            </Typography>
                            <Typography className="me-5" variant="body1" color="text.secondary" component="span">
                                Status: {galeria.status_nome} <StatusIcons status={galeria.status}/>
                            </Typography>
                            <Typography variant="body1" color="error" component="span">
                                Última Atualização: {galeria.ultima_atualizacao}
                            </Typography>

                            <Typography className="mt-4" variant="h5" color="text.secondary" component="div">
                                Link: {route('admin.galerias.index')}
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{width: 250}}
                        image={galeria.capa}
                        alt="Imagem"
                    />
                </Card>
            </section>

            <section>
                <div className="row mt-4">
                    <div className="col-auto mb-0">
                        <a className="btn btn-success" href={route('admin.galerias.edit', galeria.id)}>
                            <UploadIcon/> Upload de Arquivos
                        </a>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <h5>Conteúdo da Galeria</h5>
                {conteudos.length ?
                    <div className="row">
                        <div className="col">
                            <span>Conteúdos Selecionados:</span>
                            {Object.keys(valueObject).map((value) => (
                                <span className="ms-2" key={value}> ID: {value},</span>
                            ))}
                            <span className="ms-2">
                                {(Object.values(valueObject)).length > 0 ? '' : 'Nenhum'}
                            </span>
                        </div>
                    </div>
                    : 'Não há conteúdo nessa galeria.'}

                <ImageList rowHeight={150} gap={5} cols={3}>
                    {conteudos.map((item) => {
                        return (
                            <ImageListItem key={item.id} cols={1} rows={2}
                                           className={valueObject[item.id] ? "border-4 border-success" : ''}
                                           onClick={() => setInputValue(item.id)}>
                                <img
                                    srcSet={`${item.url}?w=348&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.url}?w=348&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"

                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    // title={item.title}
                                    title={'ID: ' + item.id}
                                    position="top"
                                    actionIcon={
                                        <IconButton sx={{color: 'white'}}
                                                    onClick={() => setInputValue(item.id)}>
                                            {valueObject[item.id] ? <StarIcon/> : <StarBorderIcon/>}
                                        </IconButton>
                                    }
                                    actionPosition="right"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </section>
        </LayoutAdmin>
    )
}

export default Page
