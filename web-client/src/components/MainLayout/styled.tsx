import styled from 'styled-components';
import { NavLink as NavLinkElement } from 'react-router-dom';

const NavLinkLogo = styled(NavLinkElement)`
  text-decoration: none;
  color: ${({ color }) => color ? color : '#ffffff'};
  font-size: 20px;
  
  &:hover{
    color: #CDE1E8;
  }
`
const NavLink = styled(NavLinkLogo)`
  font-size: 16px;
  color: #150000;
  &.active{
    color: #ff5050;
  }
`
export {
    NavLink, NavLinkLogo
}