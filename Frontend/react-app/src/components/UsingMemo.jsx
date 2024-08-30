import { memo, useState } from "react";

function UsingMemo() {
  const [title, setTitle] = useState("Ravikant");

  return (
    <>
      {/* don't do like otherwise you'll get error - re-renderes too many times
        onClick={setTitle(title + "ab")} - onclick expects a function reference so don't call your function, just use its name
        like
        function changeTitle() {
          setTitle(title + "ab")
        }
        onClick={changeTheTitle}

        or 
        onClick={() => setTitle(title+"ab")}
       */}
      <button onClick={() => setTitle(title + "ab")}>Change the string</button>
      <Heading title={title} />
      <Heading title="ravi" />
      {/* this won't be rendered when title gets changed because of memo, more info in imp_notes.txt */}
    </>
  );
}

const Heading = memo(({ title }) => {
  console.log("heading created");
  return <div   >{title}</div>;
});
// here we are just giving name to component inside memo, ESLint error duh
Heading.displayName = Heading;

export default UsingMemo;
