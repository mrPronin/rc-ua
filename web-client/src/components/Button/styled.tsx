import styled from 'styled-components';
interface IButtonComponent{
    hooverBackgroundColor?: string;
}
const ButtonComponent = styled.button<IButtonComponent>`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    margin-left: 16px;
    &:hover{
        cursor: pointer;
        background-color: ${({hooverBackgroundColor}) => hooverBackgroundColor ? hooverBackgroundColor : "transparent"}; 
        border: 2px solid #1976d2;
        background-color: white;
      }
`
export default ButtonComponent;