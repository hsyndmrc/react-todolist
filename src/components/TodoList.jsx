import { ListGroup, Form } from "react-bootstrap";
import "../style/style.css";

import { BiSolidTrashAlt } from "react-icons/bi";
const TodoList = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  };

  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>

      <ListGroup className="w-50 d-flex mx-auto">
        {/* <ListGroup.Item variant="danger">Danger</ListGroup.Item> */}

        {todos.map((todo) => (
          <ListGroup.Item
            onDoubleClick={() => toggleTodo(todo.id)}
            variant="danger"
            role="button"
            className="m-2 text-capitalize rounded-4 d-flex justify-content-between p-3 todo"
          >
            <span
              className={
                todo.completed
                  ? "text-decoration-line-through"
                  : "text-decoration-none"
              }
            >
              {" "}
              {todo.text}{" "}
            </span>
            <BiSolidTrashAlt
              className="text-white my-auto list-icon"
              onClick={() => handleDeleteTodo(todo.id)}
              role="button"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
