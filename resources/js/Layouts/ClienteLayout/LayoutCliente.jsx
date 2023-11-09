import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container} from "@mui/material";
import {Head} from "@inertiajs/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuPrincipal from "@/Layouts/ClienteLayout/Menus/MenuPrincipal/MenuPrincipal.jsx";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function LayoutCliente({titlePage, voltar, children}) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (<>
            <AppBar position="static" sx={{bgcolor: 'var(--main-color)', color: 'var(--main-text-color)'}}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <img className="me-5" alt="logo" style={{maxWidth: 150}} src="/storage/app/logo.png"/>

                        <MenuPrincipal/>

                        <Box sx={{flexGrow: 0}}>
                            <button className="btn"
                                    style={{background: 'var(--main-text-color)', color: 'var(--main-color)'}}>
                                Contato
                            </button>
                            {/*<Tooltip title="Open settings">*/}
                            {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                            {/*        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            {/*<Menu*/}
                            {/*    sx={{ mt: '45px' }}*/}
                            {/*    id="menu-appbar"*/}
                            {/*    anchorEl={anchorElUser}*/}
                            {/*    anchorOrigin={{*/}
                            {/*        vertical: 'top',*/}
                            {/*        horizontal: 'right',*/}
                            {/*    }}*/}
                            {/*    keepMounted*/}
                            {/*    transformOrigin={{*/}
                            {/*        vertical: 'top',*/}
                            {/*        horizontal: 'right',*/}
                            {/*    }}*/}
                            {/*    open={Boolean(anchorElUser)}*/}
                            {/*    onClose={handleCloseUserMenu}*/}
                            {/*>*/}
                            {/*    {settings.map((setting) => (*/}
                            {/*        <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                            {/*            <Typography textAlign="center">{setting}</Typography>*/}
                            {/*        </MenuItem>*/}
                            {/*    ))}*/}
                            {/*</Menu>*/}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


            <Box sx={{display: 'flex', width: '100%'}}>
                <Head title={titlePage}/>
                <Box component="main" sx={{display: 'block', width: '100%', flexGrow: 1, p: {xs: 2, sm: 3}}}>
                    <Container maxWidth="md">
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
            <div className="row justify-content-center bg-dark pt-3 ">
                <div className="col-auto">
                    <a href={route('login')} style={{textDecoration: "none", color: 'white'}}>Login</a>
                </div>
            </div>
        </>
    );
}
