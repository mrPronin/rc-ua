import { ReactNode, useState, useEffect } from 'react';
import { NavLink, NavLinkLogo } from './styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FlexBox from 'components/StyledComponents/FlexBox';
import Paper from '@mui/material/Paper';
import { appRoutesMap } from 'routes/appRotesMap';
import { useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Logo from 'assets/Logo.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface IMainLayout {
    children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [lang, setLang] = useState("1");
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

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };
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
            <FlexBox backgroundColor="white">
                <CssBaseline />
                <AppBar component="nav" style={{ backgroundColor: 'white' }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{display: { sm: 'block' } }}
                        >
                            <NavLinkLogo to="/"><img src={Logo} alt="Logo" /></NavLinkLogo>
                        </Typography>
                        <FlexBox justify="space-between" width="360px">
                                {appRoutesMap.map((route) => (
                                        <NavLink to={route.to} className={pathname === route.to ? "active" : ""}>
                                            {/* <FlexBox align="center"> */}
                                                {/* <span>{route.icon}</span> */}
                                                <span>{route.name}</span>
                                            {/* </FlexBox> */}
                                        </NavLink>
                                ))}
                        </FlexBox>
                        <Box sx={{ width: '100px', height: '40px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    style={{ height: '40px' }}
                                    value={lang}
                                    label="Language"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="1">En</MenuItem>
                                    <MenuItem value="2">UA</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Toolbar>
                </AppBar>
                <FlexBox direction="column" padding="24px" width="100%">
                    <Toolbar />
                    {children}
                </FlexBox>
            </FlexBox >
        ))
};

export default MainLayout;