import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
interface ICopyIcon {
    text: string;
    isCopied: boolean;
    clickHandler: () => void;
}

export const CopyIcon = ({ text, isCopied, clickHandler }: ICopyIcon) => {
  
    const copyText = (text: string) => {
        navigator.clipboard.writeText(text)
    };

    return (
        <Tooltip title={isCopied ? 'Copied!' : 'Copy'} placement="top">
            <ContentCopyIcon
                style={{ fontSize: '20px', cursor: 'pointer' }}
                onClick={() => {
                    copyText(text);
                    clickHandler();
                }}
            />
        </Tooltip>
    )
}