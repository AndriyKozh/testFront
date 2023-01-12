import ItemTodo from "./ItemTodo";

const ListTodo = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ItemTodo
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default ListTodo;
