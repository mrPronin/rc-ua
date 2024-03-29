import styled  from 'styled-components';
interface IFlexBoxProps {
  justify?: string;
  direction?: string;
  align?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  textAlign?: string;
  scrollY?: string;
  flexGrow?: number;
  deskWidth?: string;
}

const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  flex-grow: ${({flexGrow}) => flexGrow ? flexGrow : ''};
  justify-content ${ ({justify})=> justify ? justify : null};
  flex-direction: ${({direction}) => direction ? direction : null};
  align-items: ${({align}) => align ? align : null};
  width: ${({width}) => width ? width : "100%"};
  min-width: ${({minWidth}) => minWidth ? minWidth : ""};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ""};
  box-sizing: border-box;
  text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
  overflow-y: ${({scrollY}) => scrollY ? scrollY : ""};

  @media (min-width:480px){
width: ${({deskWidth})=>deskWidth ? deskWidth: ''}
}
`
export default FlexBox;