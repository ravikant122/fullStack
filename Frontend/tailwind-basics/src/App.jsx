import RevenueCard from "./components/RevenueCard"

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <RevenueCard title={"Next Payout"} amount={"₹2,312.23"} orders={"23"} nextPaymentDate={"Today, 4:00PM"} shouldHighlight={true} />
      <RevenueCard title={"Next Payout"} amount={"₹2,312.23"} orders={"23"} nextPaymentDate={"Today, 4:00PM"} shouldHighlight={false} />
    </div>
  )
}

export default App
