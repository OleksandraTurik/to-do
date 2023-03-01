import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/action";
import { Button, Input } from "../components/Form";
import Task from "../components/Form/Task";
import "./style.css";

interface Error {
  title: string;
  description: string;
}

const ToDoList = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    status: false,
    id: Date.now().toString(),
  });

  const [errors, setErrors] = useState<Error>({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errors: any = {};
    if (!value.title) {
      errors.title = "This field is required";
    }
    if (!value.description) {
      errors.description = "This field is required";
    }
    return errors;
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(addTask(value));
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter Title"
          type="text"
          name="title"
          text="Title:"
          value={value.title}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          placeholder="Enter description"
          type="text"
          name="description"
          text="Description:"
          value={value.description}
          onChange={handleChange}
          errors={errors}
        />
        <Button type="submit" text="Create" />
      </form>
      <Task handleChange={handleChange} />
    </>
  );
};

export default ToDoList;
