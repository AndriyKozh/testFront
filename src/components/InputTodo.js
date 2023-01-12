const InputTodu = ({ text, setText, addTodo }) => {
  return (
    <div>
      <input value={text} onChange={(el) => setText(el.target.value)} />
      <button onClick={addTodo}> addTodo</button>
    </div>
  );
};

export default InputTodu;
