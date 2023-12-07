import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const InputSearchComponent = styled(TextField)`
width: 100%;
border: none!important;

.MuiInputBase-root {
    background-color: white;
    height: 40px;
    border-radius: 5px; 
    padding-right: 8px;
}
.MuiOutlinedInput-notchedOutline, .Mui-focused {
    border: none;
  }
`

export default InputSearchComponent;
