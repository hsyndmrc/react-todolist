import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Header = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const addTodo = () => {
    console.log(task);

    const newTodo = {
      id: uuidv4(),
      text: task,
      completed: false,
    };

    console.log(newTodo);

    setTodos([...todos, newTodo]);

    // ekleme yaptiktan sonra state'imizi sifirladik.
    setTask("");
  };
  return (
    <div className="container">
      <h1 className="text-center text-white p-3 rounded-3 m-5 bg-black">
        Todo App
      </h1>

      <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter New Todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          className="input-group-text bg-danger bg-black"
          onClick={addTodo}
          id="basic-addon2"
          disabled={!task.trim()}
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
