import { ReactNode, useEffect } from 'react';
import { NavLink, NavLinkLogo } from './styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FlexBox from 'components/StyledComponents/FlexBox';
import Paper from '@mui/material/Paper';
import { appRoutesMap } from 'routes/appRoutesMap';
import { useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Logo from 'assets/Logo.png';
import { observer } from 'mobx-react-lite';
import settings from 'store/settings';
import LangSelect from 'components/LanguageSelect';

interface IMainLayout {
    children: ReactNode;
}

const MainLayout = observer(({ children }: IMainLayout) => {
    const { isMobile } = settings;
    const { pathname } = useLocation();
    useEffect(() => {
        if (window) {
            const checkIsMobile = () => {
                settings.setIsMobile(window.innerWidth <= 600)
                console.log(window.innerWidth <= 600, 'checkIsMobile')
            };

            window.addEventListener('resize', checkIsMobile);

            return () => {
                window.removeEventListener('resize', checkIsMobile);
            };
        }
    }, []);

    return (
        isMobile ? (
            <Paper sx={{
                position: 'fixed',
                top: 0, bottom: 0, left: 0, right: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--main-background-color)'
            }}>
                <FlexBox justify="space-between" align="center" backgroundColor="var(--white-color)" padding="12px 16px 0 16px" height="75px">
                    <NavLinkLogo to="/"><img src={Logo} alt="Logo" /></NavLinkLogo>
                    <LangSelect style={{ height: '35px' }} />
                </FlexBox>
                <FlexBox direction="column" padding="16px 8px 8px 8px" scrollY="auto">
                    {children}
                </FlexBox>
                <BottomNavigation
                    sx={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                    <FlexBox justify="space-between">
                        {appRoutesMap.map((route) => (
                            <NavLink to={route.to} key={route.name}>
                                <BottomNavigationAction
                                    label={route.name}
                                    icon={route.icon}
                                    sx={{
                                        color: pathname === route.to ? 'var(--main-red-color)' : 'var(--main-text-color)',
                                    }}
                                />
                            </NavLink>
                        ))}
                    </FlexBox>
                </BottomNavigation>
            </Paper>
        ) : (
            <FlexBox backgroundColor="var(--white-color)">
                <AppBar component="nav" style={{ backgroundColor: 'var(--white-color)' }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <NavLinkLogo to="/"><img src={Logo} alt="Logo" style={{ marginTop: '12px' }} /></NavLinkLogo>
                        <FlexBox justify="space-between" width="360px">
                            {appRoutesMap.map((route) => (
                                <NavLink key={route.to} to={route.to} className={pathname === route.to ? "active" : ""}>
                                    <span>{route.name}</span>
                                </NavLink>
                            ))}
                        </FlexBox>
                        <LangSelect style={{ height: '40px' }} />
                    </Toolbar>
                </AppBar>
                <FlexBox direction="column">
                    <Toolbar />
                    <FlexBox justify='center' backgroundColor="var(--main-background-color)"
                        width="100%" height="100vh" padding='24px 0 0 0'>
                        {children}
                    </FlexBox>
                </FlexBox>
            </FlexBox >
        ))
});

export default MainLayout;