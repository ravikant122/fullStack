import { useEffect, useState } from "react";

function useTodos(counter) {
  // everytime someone calls this hook, the whole code of this will get render again
  // the state variables won't get created again but all the code like some normal variable will be created again
  const [todos, setTodos] = useState([
    {
      title: "ravi",
      description: "kant",
    },
  ]);

  useEffect(() => {
    setTodos([
      ...todos,
      {
        title: `abhi${counter}`,
        description: `shek${counter}`,
      },
    ]);
  }, [counter]);

  return todos;
}

function CustomHook() {
  const [counter, setCounter] = useState(0);
  const todos = useTodos(counter);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter is {counter}</button>
      {todos.map((todo) => (
        <Todo
          key={todo.title}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}

export default CustomHook;
