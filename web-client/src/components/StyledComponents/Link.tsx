import styled from "styled-components";
// import { Link as LinkComponent } from '@mui/material';

interface ILinkProps {
  hoverColor?: string;
}

export const Link = styled.a<ILinkProps>`
  display: flex;
  align-items: center;
  color: inherit;
  font-family: 'Manrope';

  &:hover {
    color: ${({ hoverColor }) => hoverColor ? hoverColor : ""};
    cursor: pointer;
  }
`;

export default Link;