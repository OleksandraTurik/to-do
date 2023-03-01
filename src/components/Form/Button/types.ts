export interface IButtonProps {
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
    text: string;
    onClick?: () => void;
  }
  