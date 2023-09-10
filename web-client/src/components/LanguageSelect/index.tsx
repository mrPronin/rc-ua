import { useState, CSSProperties } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

interface LangSelectProps {
    style: CSSProperties;
  }
const LangSelect: React.FC<LangSelectProps> = ({ style }) =>{
    const [lang, setLang] = useState("ua");
    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };
    return(
        <Box sx={{ width: '100px', height: '40px' }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={style}
                value={lang}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value="ua">UA</MenuItem>
                <MenuItem value="en">En</MenuItem>
            </Select>
        </FormControl>
    </Box>
    )
};

export default LangSelect;