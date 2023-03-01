import Input from "../Input";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../Modal";
import "./style.css";

interface ITask {
  handleChange: (e: any) => void;
}

const Task = ({ handleChange }: ITask) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const tasks = useSelector<any>((state) => state.tasksList.tasks);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        {tasks.map((task: any, index: number) => (
          <tbody key={index} onClick={() => handleItemClick(task)}>
            <tr>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <Input
                  type="checkbox"
                  checked={task.status}
                  onChange={handleChange}
                  name="status"
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {showModal ? (
        <Modal data={selectedItem} onClose={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default Task;
