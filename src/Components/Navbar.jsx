import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Assets from '../Assets/Images/Asset 1 1.png'

function NavBar() {
    const drawerWidth = 120;
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            }),
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='none'>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                <img src={Assets} className='comptoir_img2' />
                            </Typography>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                sx={{ ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                            },
                        }}
                        variant="persistent"
                        anchor="right"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon className='chevron' /> : <ChevronRightIcon className='chevron' />}
                            </IconButton>
                        </DrawerHeader>
                        <List>
                            {[<a className='anchor' href="#Accueil">Accueil</a>, <a className='anchor' href="#produits">Produits</a>, <a className='anchor' href="#Services">Services</a>,
                            <a className='anchor' href="#Actualités">Actualités</a>, <a className='anchor' href="#Contact">Contact</a>].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            </div>
            <header>
                <nav>
                    <div>
                        <img src={Assets} className='comptoir_img' />
                    </div>
                    <div>
                        <ul>
                            <li>  <a href="#Accueil" className='anchor'>Accueil</a> </li>
                            <li> <a className='anchor' href="#produits">Produits</a> </li>
                            <li><a className='anchor' href="#Services">Services</a> </li>
                            <li> <a className='anchor' href="#Actualités"> Actualités</a></li>
                            <li> <a className='anchor' href="#Contact">Contact</a> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default NavBar