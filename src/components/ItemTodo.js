const ItemTodo = ({ text, id, completed, removeTodo, toggleTodo }) => {
  return (
    <li className="itemTodo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{text}</span>
      <button onClick={() => removeTodo(id)}>delete</button>
    </li>
  );
};

export default ItemTodo;
