import { ReactNode, useEffect } from 'react';
import { NavLink, NavLinkLogo } from './styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FlexBox from 'components/StyledComponents/FlexBox';
import { appRoutesMap } from 'routes/appRoutesMap';
import { useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Logo from 'assets/Logo.png';
import  { useSettingsStore } from 'store/useSettings';
import LangSelect from 'components/LanguageSelect';

interface IMainLayout {
    children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    const { isMobile, setIsMobile, language } = useSettingsStore();
    const { pathname } = useLocation();
    useEffect(() => {
        if (window) {
            const checkIsMobile = () => {
                setIsMobile(window.innerWidth <= 600)
                console.log(window.innerWidth <= 600, 'checkIsMobile')
            };

            window.addEventListener('resize', checkIsMobile);

            return () => {
                window.removeEventListener('resize', checkIsMobile);
            };
        }
    }, []);

    return (
        <FlexBox
            height="100vh"
            direction="column"
            backgroundColor='var(--main-background-color)'
        >
            {isMobile ? (
                <>
                    <FlexBox justify="space-between" align="center" backgroundColor="var(--white-color)" padding="12px 16px 0 16px" height="75px">
                        <NavLinkLogo to="/"><img src={Logo} alt="Logo" /></NavLinkLogo>
                        <LangSelect style={{ height: '35px' }} />
                    </FlexBox>
                    <FlexBox direction="column" padding="16px 8px 8px 8px" flexGrow={1} scrollY="auto">
                        {children}
                    </FlexBox>
                    <BottomNavigation
                        sx={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',padding:'16px 0px' }}>
                        <FlexBox justify="space-between" align="center">
                            {appRoutesMap.map((route) => (
                                <NavLink to={route.to} key={route.to}>
                                    <BottomNavigationAction
                                        icon={route.icon}
                                        sx={{
                                            color: pathname === route.to ? 'var(--main-red-color)' : 'var(--main-text-color)',
                                        }}
                                    />
                                </NavLink>
                            ))}
                        </FlexBox>
                    </BottomNavigation>
                </>
            ) : (
                <>
                    <AppBar component="nav" style={{ backgroundColor: 'var(--white-color)' }}>
                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <NavLinkLogo to="/"><img src={Logo} alt="Logo" style={{ marginTop: '12px' }} /></NavLinkLogo>
                            <FlexBox justify="space-between" width={language==='en' ? "360px" : "600px"}>
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
                        <FlexBox flexGrow={1} justify='center' backgroundColor="var(--main-background-color)"
                            width="100%" padding='24px 0 0 0'>
                            {children}
                        </FlexBox>
                    </FlexBox>
                </>
            )}
        </FlexBox >)
};

export default MainLayout;