import "./style.css";

interface TError {
  title: string;
  description: string;
}

interface IInputProps {
  type: string;
  name: string;
  value?: string;
  checked?: boolean;
  errors?: TError;
  required?: boolean;
  disabled?: boolean;
  text?: string;
  onChange?: (value: any) => void;
}

const Input = ({
  type,
  name,
  text,
  value,
  required,
  onChange,
  disabled,
  checked,
  errors,
}: IInputProps) => (
  <div className="form-group">
    <label>{text}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      checked={checked}
    />
    {errors?.title || errors?.description ? <span className="error">{errors.title}</span> : null}
  </div>
);

export default Input;
