import React, {useEffect, useState} from 'react';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Box, Container, Toolbar, useMediaQuery} from '@mui/material';

// project import
import Drawer from './Drawer/index.jsx';
import Header from './Header/index.jsx';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Head} from "@inertiajs/react";

const MainLayout = ({titlePage, menu, children, voltar}) => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

    const [open, setOpen] = useState(true);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setOpen(!matchDownLG);
    }, [matchDownLG]);

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Head title={titlePage} />
            <Header open={open} handleDrawerToggle={handleDrawerToggle}/>
            <Drawer open={open} menu={menu} handleDrawerToggle={handleDrawerToggle}/>
            <Box component="main" sx={{display: 'block', width: '100%', flexGrow: 1, p: {xs: 2, sm: 3}}}>
                <Container maxWidth="lg" className="p-0 mt-5">
                    {voltar &&
                        <div className="row justify-content-between mb-2 border-bottom mb-4">
                            <div className="col-auto mb-1">
                                <b>{titlePage}</b>
                            </div>
                            <div className="col-auto mb-1">
                                <a className="text-muted" href={voltar}><ArrowBackIcon sx={{fontSize: 15}}/></a>
                            </div>
                        </div>
                    }
                    {children}
                </Container>
            </Box>
        </Box>
    );
};

export default MainLayout;
