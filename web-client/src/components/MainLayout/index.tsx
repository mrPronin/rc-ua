import React, { ReactNode } from 'react';
import { NavLink, NavLinkLogo } from './styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FlexBox from 'components/StyledComponents/FlexBox';

import { appRoutesMap } from 'routes/appRotesMap';
import { useLocation } from 'react-router-dom';

interface IMainLayout {
    children: ReactNode;
    window?: () => Window;
}

const drawerWidth = 240;

const MainLayout = ({ children, ...props }: IMainLayout) => {
    const { pathname } = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
         <FlexBox onClick={handleDrawerToggle} textAlign="center" justify="center" direction="column" align="center"> 
            <Typography variant="h6" sx={{ my: 2 }}>
                RC-UA
            </Typography>
            <Divider />
            <List>
                {appRoutesMap.map((route) => (
                    <ListItem key={route.to} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <NavLink
                                to={route.to}
                                color="#1976d2"
                                className={pathname === route.to ? "active" : ""}>{route.name}</NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </FlexBox>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <FlexBox>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        <NavLinkLogo to="/">RC-UA</NavLinkLogo>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Grid container spacing={2}>
                            {appRoutesMap.map((route) => (
                                <Grid item key={route.name}>
                                    <NavLink to={route.to} className={pathname === route.to ? "active" : ""}>
                                        {route.name}
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <FlexBox direction="column" padding="24px" width="100%">
                <Toolbar />
                {children}
            </FlexBox>
        </FlexBox>
    )
};

export default MainLayout;