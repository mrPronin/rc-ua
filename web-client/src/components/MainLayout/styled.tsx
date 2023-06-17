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
  &.active{
    color: #16F2E7;
  }
`
export {
    NavLink, NavLinkLogo
}