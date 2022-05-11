export const Todos = ({ todo, dispatch }) => {
  return (
    <>
      <span>
        {" "}
        <h1>
          {" "}
          {todo.name}{" "}
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              dispatch({ type: "delete_todo", payload: { id: todo.id } });
            }}
          >
            Delete
          </button>
        </h1>
      </span>
    </>
  );
};
