import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./atoms/count"

function Counter () {
  console.log('main component rendered')
  /*
    Benifit of using state management
    1. code is clean and easy to modify
    2. only components using the state changes other parent components doesn't change
   */
  return (
    <div>
      <RecoilRoot> {/* we've to wrap the components that uses the recoil state  */}
        <CounterComp />
      </RecoilRoot>
    </div>
  )
}

function CounterComp() {
  console.log('counter comp rendered')
  return (
    <div>
      <ShowCount />
      <ChangeCounter />
    </div>
  )
}

function ShowCount () {
  console.log('show rendered')

  const count = useRecoilValue(countAtom) // to get only value
  return <h1>{count}</h1>
}

function ChangeCounter () {
  console.log('change counter rendered')

  // const [count, setCount] = useRecoilState(countAtom) // to get both value and set function
  // above is a bad approach because it takes count state and the button gets rerendered, only ShowCount should rerender
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter;