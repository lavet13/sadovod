import { FC } from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  children?: any;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton variant='contained'>{children}</StyledButton>;
};

export default Button;
