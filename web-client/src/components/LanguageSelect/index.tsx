import { useState, CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import settings from 'store/settings';

interface LangSelectProps {
    style: CSSProperties;
  }
const LangSelect: React.FC<LangSelectProps> = observer(({ style }) =>{
    const {language, isMobile}=settings;

    return(
        <Box sx={{width: isMobile ? '100px' : '140px', height: '40px'}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={style}
                value={language}
                label="Language"
                onChange={(event: SelectChangeEvent) => {
                    // setLang(event.target.value as string);
                    settings.setLanguage(event.target.value as string)
                }}
            >
                <MenuItem value="ua">UA</MenuItem>
                <MenuItem value="en">En</MenuItem>
            </Select>
        </FormControl>
    </Box>
    )
});

export default LangSelect;