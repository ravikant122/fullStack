import { memo, useCallback, useState } from "react";

function UseCallbackHook() {
  const [counter, setCounter] = useState(0);

  let a = useCallback(() => {
    console.log('hi there');
  }, []);

  /*
    when counter changes, this component re-renders and
    if we define a normal function like
    function a () {
      console.log('hi there');
    }
    then its reference changes when components get rerenders
    and we are passing this function in some component and that component also gets re-renders
    because function's reference got change

    we don't want that, so we use useCallback which doesn't let variables(other than state variables) to get a new reference

    in case of primitive types like int, string - we don't need useCallback because then it compares the value
    but in case of objects(functions are objects) we need useCallback

    So basic use of useCallback is preventing variables/objects, that are not state variables/objects, from getting a new
    reference, means they won't get created every time the component gets re-render
    and this successively prevent the components from re-rending which are using these variables/objects 

    dependecy array is to create these variables again on re-render when the state variables inside dependency array changes

    the same concept also gets applied if we use anonymous function, directly pass anonymous fn as props
   */

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Counter is {counter}
      </button>
      <br />
      <Demo a={a} />
    </div>
  );
}

const Demo = memo(({ a }) => {
    console.log("demo rendered", a);
    return <div><h1>Demo is here</h1></div>
})
Demo.displayName = "Demo"

export default UseCallbackHook;
