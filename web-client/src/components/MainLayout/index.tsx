import { ReactNode, useState, useEffect } from 'react';
import { NavLink, NavLinkLogo } from './styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FlexBox from 'components/StyledComponents/FlexBox';
import Paper from '@mui/material/Paper';
import { appRoutesMap } from 'routes/appRotesMap';
import { useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
interface IMainLayout {
    children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {
        if (window) {
            const checkIsMobile = () => {
                setIsMobile(window.innerWidth <= 600);
            };

            window.addEventListener('resize', checkIsMobile);
            checkIsMobile();

            return () => {
                window.removeEventListener('resize', checkIsMobile);
            };
        }
    }, []);

    return (
        isMobile ? (
            <Paper sx={{
                position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: "#eaeaed",
                padding: '8px'
            }}>
                <FlexBox direction="column" padding="16px 8px 8px 8px">
                    {children}
                </FlexBox>
                <BottomNavigation
                    sx={{
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', 
                        borderRadius: '15px'
                    }}>
                    <FlexBox justify="space-between">
                        {appRoutesMap.map((route) => (
                            <NavLink to={route.to} key={route.name}>
                                <BottomNavigationAction
                                    label={route.name}
                                    icon={route.icon}
                                    sx={{
                                        color: pathname === route.to ? '#ff5050' : 'grey',
                                    }}
                                />
                            </NavLink>
                        ))}
                    </FlexBox>
                </BottomNavigation>
            </Paper>
        ) : (
            <FlexBox backgroundColor="#eaeaed">
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
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
                                            <FlexBox align="center">
                                                <span>{route.icon}</span><span style={{ marginLeft: '10px' }}>{route.name}</span>
                                            </FlexBox>
                                        </NavLink>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
                <FlexBox direction="column" padding="24px" width="100%">
                    <Toolbar />
                    {children}
                </FlexBox>
            </FlexBox>
        ))
};

export default MainLayout;