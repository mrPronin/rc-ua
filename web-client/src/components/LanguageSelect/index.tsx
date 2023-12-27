import { CSSProperties } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FlexBox from "components/StyledComponents/FlexBox";
import { useSettingsStore } from "store/useSettings";
import useWindowSize from "hooks/useMobileSize";

interface LangSelectProps {
  style: CSSProperties;
}
const LangSelect: React.FC<LangSelectProps> = ({ style }) => {
  const { language, setLanguage } = useSettingsStore();
  const isMobile = useWindowSize();

  return (
    <FlexBox width={isMobile ? "100px" : "140px"} height="40px">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={style}
          value={language}
          label="Language"
          onChange={(event: SelectChangeEvent) => {
            setLanguage(event.target.value as string);
          }}
        >
          <MenuItem value="ua">UA</MenuItem>
          <MenuItem value="en">En</MenuItem>
        </Select>
      </FormControl>
    </FlexBox>
  );
};

export default LangSelect;
