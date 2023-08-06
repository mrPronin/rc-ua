import styled  from 'styled-components';
interface FlexBoxProps {
  justify?: string;
  direction?: string;
  align?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  textAlign?: string;
}
  // flex-shrink: 0;

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex:1;
  justify-content ${ ({justify})=> justify ? justify : null};
  flex-direction: ${({direction}) => direction ? direction : null};
  align-items: ${({align}) => align ? align : null};
  width: ${({width}) => width ? width : "100%"};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ""};
  box-sizing: border-box;
  text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
`
export default FlexBox;