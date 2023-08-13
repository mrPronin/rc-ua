// import TextField from '@mui/material/TextField';
import InputSearchComponent from './styled';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const SearchInput = () => {
    return (
        <InputSearchComponent
            // label="Search"
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" sx={{cursor: 'pointer'}}>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            placeholder="Search"
        />
    );
};

export default SearchInput;






