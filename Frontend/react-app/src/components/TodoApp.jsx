import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  let [todoCounter, setTodoCounter] = useState(1);

  function addTodo() {
    // we've to call set method to set a state because react listens to call made to the set function
    // and then call the components that uses that state or update the part where that state is being used
    setTodos([
      ...todos,
      {
        title: `title is react ${todoCounter}`,
        description: "description is react",
      },
    ]);
    setTodoCounter(todoCounter + 1);
  }

  return ( // this paranthesis is just to show that returned value is written in multi lines, if we can write in single line, we can remove paranthesis
    <div>
      <button onClick={addTodo}>Add a random TODO</button>
      {todos.map((todo) => <Todo key={todo.title} title={todo.title} description={todo.description}/> )}
    </div>
  );
}

function Todo(props) {
  return (
    // here we need to return a single parent means we can't return two heading, we've to wrap them in some div
    // or some Fragment(like a template in vue)
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    /*
      <Fragment>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </Fragment> 

      <>  // we can just write <> 
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </> 
     */
    // but the main point is, JSX(Java script XML) function should have a single parent or we can return a single tag
    // why we should have one parent - logic is in 'imp notes.txt' file
  );
}

export default TodoApp;