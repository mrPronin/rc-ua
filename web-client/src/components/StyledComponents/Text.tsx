import styled from "styled-components";
interface ITextProps{
    fontFamily?: string;
    width?: string;
    color?:string;
    fontSize?:string;
    fontWeight?:string;
    margin?:string;
    textDecoration?:string;
    textAlign?:string;
    hoverColor?:string;
    cursor?:string;
}
const Text = styled.span<ITextProps>`
  display: block;
  font-family: ${({fontFamily}) => fontFamily ? fontFamily : 'Manrope'};
  width: ${({width}) => width ? width : ""}; 
  color: ${({color}) => color ? color : "var(--main-text-color)"}; 
  font-size: ${({fontSize}) => fontSize ? fontSize : "14px"};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "400"};
  margin: ${({margin}) => margin ? margin : ""};
  text-decoration: ${({textDecoration}) => textDecoration && textDecoration}; 
  text-align: ${({textAlign}) => textAlign ? textAlign : "left"}; 
  white-space: normal;

  &:hover{
    color: ${({hoverColor}) => hoverColor ? hoverColor : ""}; 
    cursor: ${({cursor}) => cursor ? cursor : "default"};
  }
`
export default Text;
