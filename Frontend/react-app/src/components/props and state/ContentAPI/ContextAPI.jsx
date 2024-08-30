import { useContext, useState } from "react";
import { CountContext } from "./CountContext";

function ContextApi() {
  const [count, setCount] = useState(0);
  console.log("main component rendered");

  /*
    Context is the half solution to prop driling
    with it, we don't have to pass state variables as props, we just use this context(in which our state is declared)
    in the component we need that state in

    but it doesn't stops the re-rendering, it just a cleaner way to write code
   */
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

function Counter() {
  console.log("counter rendered");
  return (
    <div>
      <ShowCount />
      <ChangeCounter />
    </div>
  );
}

function ShowCount() {
  console.log("show rendered");

  const { count } = useContext(CountContext);
  return <h1>{count}</h1>;
}

function ChangeCounter() {
  console.log("change counter rendered");

  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default ContextApi
