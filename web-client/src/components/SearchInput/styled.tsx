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
    &:focus {
        border: 1px solid #1976d2!important; /* Додаємо бордер при фокусі */
      }
  }


// .MuiOutlinedInput-input{
//     height: 40px;
//     padding: 0px;
//     border: none;
//     padding: 8px;
//         }

// .MuiInputLabel-root {
// color:red
// cursor: pointer;
// }

`

export default InputSearchComponent;
