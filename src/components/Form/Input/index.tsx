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
  placeholder?: string;
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
  placeholder,
}: IInputProps) => (
  <div className="form-group">
    <label>{text}</label>
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      checked={checked}
    />
    {errors?.title || errors?.description ? (
      <span className="error">{errors.title}</span>
    ) : null}
  </div>
);

export default Input;
