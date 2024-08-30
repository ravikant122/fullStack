import { useEffect, useState } from "react";
import axios from "axios"

function UseEffectHook() {
  // useEffect only runs when component get rendered for the first time
  // it can run again if we mention some states and whenever any of that state changes
  const [id, setId] = useState(1);

  return (
    <>
      <div>
        <button onClick={() => setId(1)}>1</button>
        <button onClick={() => setId(2)}>2</button>
        <button onClick={() => setId(3)}>3</button>
        <button onClick={() => setId(4)}>4</button>
      </div>
      <BookTitle id={id} />
    </>
  );
}
function BookTitle({ id }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get(`https://fakerapi.it/api/v1/books?_quantity=${id}`)
    .then(response => {
      setTitle(response.data.data[id-1].title)
    })
  }, [id]) // this array is dependency array, we can put states in this and whenever any state changes, the useEffect will re run
  // if this arary is empty, then it will only run when this components gets rendered for the first time
  // if we want to run this with id change, we've to do [id]
  return (
    <div>
      Id: {id}
      <h1>{title}</h1>
    </div>
  )
}

export default UseEffectHook;
