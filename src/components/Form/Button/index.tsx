// Styled
// import StyledButton from './styled';

// Types
import { IButtonProps } from './types';

const Button = ({
  type,
  disabled,
  text,
  onClick
}: IButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
