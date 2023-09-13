import styled from 'styled-components';
import { NavLink as NavLinkElement } from 'react-router-dom';

const NavLinkLogo = styled(NavLinkElement)`
  text-decoration: none;
  color: ${({ color }) => color ? color : '#ffffff'};
  font-size: 20px;
`
const NavLink = styled(NavLinkLogo)`
  font-size: 16px;
  color: var(--dark-grey);
  &.active{
    color: var(--main-red-color);
  }
`
export {
    NavLink, NavLinkLogo
}