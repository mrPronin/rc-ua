import CircularProgress from '@mui/material/CircularProgress';
import FlexBox from 'components/StyledComponents/FlexBox';

const Spinner = () => {
    return (
        <FlexBox margin="50px 0" justify="center">
        <CircularProgress />
    </FlexBox>)
}
export default Spinner;