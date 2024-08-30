import { useState } from "react";

function PropDriling () {
  const [count, setCount] = useState(0);
  console.log('main component rendered')

  /*
    prop driling means passing down the props to the childs and their childs and so on.
    two problems with this are:
    1. whenever a child changes the state, all the components in which that state is there, all will be rendered again
    2. very unmanageble code to write and hard to modify 
   */
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  )
}

function Counter({ count, setCount }) {
  console.log('counter rendered')
  return (
    <div>
      <ShowCount count={count} />
      <ChangeCounter count={count} setCount={setCount} />
    </div>
  )
}

function ShowCount ({ count }) {
  console.log('show rendered')
  return <h1>{count}</h1>
}

function ChangeCounter ({ count, setCount }) {
  console.log('change counter rendered')
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default PropDriling;