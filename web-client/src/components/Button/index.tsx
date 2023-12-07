import { ReactNode } from 'react';
import ButtonComponent from './styled';

interface IButton {
    children: ReactNode;
    clickHandler: () => void;
    hooverBackgroundColor?: string;
}
const Button = ({ children, clickHandler, hooverBackgroundColor }: IButton) => {
    return (
        <ButtonComponent onClick={clickHandler}
            hooverBackgroundColor={hooverBackgroundColor}>{children}</ButtonComponent>
    )
}
export default Button;