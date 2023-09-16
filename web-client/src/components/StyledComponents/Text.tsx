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

}
export const Text = styled.span<ITextProps>`
display: block;
font-family: ${({fontFamily}) => fontFamily ? fontFamily : 'Roboto'};
width: ${({width}) => width ? width : ""}; 
color: ${({color}) => color ? color : "#000"}; 
font-size: ${({fontSize}) => fontSize ? fontSize : "16px"};
font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "400"};
margin: ${({margin}) => margin ? margin : ""};
text-transform: ${({textDecoration}) => textDecoration && textDecoration}; 
text-align: ${({textAlign}) => textAlign ? textAlign : "left"}; 
white-space: normal;
`

// @media (max-width:480px){
//   font-size: ${props => props.fontSizeMobile && props.fontSizeMobile};
//   width: 307px;
//   height: ${props => props.heightMobile ? props.heightMobile : ""};
//   text-align: center;
// }
export default Text