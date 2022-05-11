import { Todos } from "./Todos.js";
import { useReducer } from "react";
import "./styles.css";
const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("ADDED TO TODOLIST");
      console.log(todos);
      return [...todos, newTodos(action.payload.name)];
    case "delete_todo":
      console.log("deleted TO TODOLIST");
      console.log(action.payload.id);
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      break;
  }
};
const newTodos = (name) => {
  return {
    id: Date.now(),
    name: name
  };
};
export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    dispatch({ type: "ADD_TODO", payload: { name } });
    e.target.name.value = "";
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <u>TODO APP</u>
      </h1>
      <form className="" onSubmit={submitHandler}>
        <input
          className="form-control"
          name="name"
          placeholder="Whats for today"
        ></input>
        <button
          className="btn btn-outline-primary form-control mt-4"
          type="submit"
        >
          ADD_TO_TODOLIST
        </button>
      </form>

      {todos.map((todo) => {
        return <Todos todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
