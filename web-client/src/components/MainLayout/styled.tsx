import styled from 'styled-components';
import { NavLink as NavLinkElement } from 'react-router-dom';

const NavLinkLogo = styled(NavLinkElement)`
  text-decoration: none;
  font-size: 20px;
`
const NavLink = styled(NavLinkLogo)`
  font-family: 'Manrope';
  font-size: 16px;
  color: var(--header-text-color);
  &.active{
    color: var(--main-red-color);
  }
`
export {
    NavLink, NavLinkLogo
}