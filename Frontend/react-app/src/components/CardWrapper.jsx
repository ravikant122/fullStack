function CardWrapper () {
  return (
    <div>
      {/* so we are dynamically passing the components in the some other component which is the wrapper component
          and yeah if all your components need to have something then we can use this way
      */}
      <Wrapper>
        <Card title="ravi" description="kant" />
      </Wrapper>
      <Wrapper>
        {/* if we have more than one child then they will just get rendered one after the other */}
        <Card2 title="abhi" description="shek"/>
        <Card2 title="Babu" description="lal"/>
      </Wrapper>
    </div>
  )
}
function Wrapper ({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  )
}
function Card ({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

function Card2 ({ title, description }) {
  return (
    <div>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  )
}

export default CardWrapper;