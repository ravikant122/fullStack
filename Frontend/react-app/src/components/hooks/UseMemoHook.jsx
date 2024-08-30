import { useEffect, useMemo, useState } from "react";

function UseMemoHook () {
  const [firstVal, setFirstVal] = useState(100);
  const [secondVal] = useState(100);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setFirstVal(200); // when this executes, the sum will be calculated again
    }, 2000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1); // when this executes the component renders again but this time sum won't be calculated again
    }, 4000);
  }, [])

  const sum = useMemo(() => { 
    console.log('calculation is happening')
    return firstVal + secondVal
  }, [firstVal, secondVal]);

  /*
    useMemo is to memoize the value,
    if u have some calculation which happens every time your component re-renders
    but u don't want to run it everytime component renders, here we can use useMemo
    useMemo returns a value and only do the calculation when one of the state variable changes

    useCallback returns a function and saves that function to get re-render everytime the component renders
    useMemo returns a value and saves the calculation to get computed everytime the component renders
   */

  return (
    <div>
      <h1>Sum is {sum}</h1>
    </div>
  )
}

export default UseMemoHook;