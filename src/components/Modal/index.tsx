import { useState } from "react";
import { Button, Input } from "../Form";
import Portal from "./Portal";
import "./style.css";

interface IModalProps {
  data: any;
  onClose: () => void;
}

const Modal = ({ data, onClose }: IModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Portal>
      <div className="modal">
        <div className="modal-content">
          <h3>{data.title}</h3>
          <h5>Description</h5>
          <p>{data.description}</p>
          <div className="wrapper">
            <label htmlFor="">Status:</label>
            <Input
              type="checkbox"
              checked={data.status}
              onChange={handleCheckboxChange}
              name="status"
            />
          </div>
          <Button type="button" text="Close" onClick={onClose} />
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
