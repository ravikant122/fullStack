import { useEffect, useState } from "react";

function CleanUpUseEffect() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(1);

	/*
		now assume setTimeout is equal to time in which an API returns the result
 		sometimes API can take longer time or sometime they don't, we can never tell

		let's say there are product list and user clicks on product1 and quickly afte that clicks on product2
		now we've to fetch data for product2 not product1
		lets say data comes faster for product2 and data comes later for product1
		when the data comes for product2, we set the state according to product2'data
		but we again set the state according to product1, now here we've a race condition
		because user should've seen the data for product2 but its seeing for product1

		for this we've to return a function from useEffect, this is like a clean up function which removes the data for old state

		so when we call API for product2, we first stop the API call for product1 so that product1's data never get set
	 */
  useEffect(() => {
		const newCounter = timer == 2 ? 100 : timer == 1 ? 1 : 50 
    const timeout = setTimeout(() => {
      setCounter(newCounter);
    }, timer * 1000);

		// here we can clear old timeout so that only new timeout's result can take effect
		return () => {
			clearTimeout(timeout)
		}
  }, [timer]);

  return (
		<div>
			<button onClick={() => setTimer(2)}>Set Timer to 5 sec</button>
			<button onClick={() => setTimer(4)}>Set Timer to 10 sec</button>
			<br />
			<h1>Counter is {counter}</h1>
		</div>
	);
}

export default CleanUpUseEffect;
