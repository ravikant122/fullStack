function RevenueCard({ title, amount, orders, shouldHighlight, nextPaymentDate }) {
  return (
    <div className={`rounded m-2 shadow-md ${shouldHighlight ? 'bg-blue-600 text-white hover:bg-blue-800' : 'bg-white'}`}>
        <div className={`px-3 py-2`}>
          <div className="flex mb-1 items-center">
            <div className="mr-2">{title}</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-2xl">{amount}</div>
            <div className="text-sm">
              <a href="#" className={`underline ${shouldHighlight} ? 'text-white' : 'text-blue-500`}>{orders} Orders</a>
            </div>
          </div>
        </div>
        {shouldHighlight ?
          <div className={`rounded px-3 py-1 w-full flex justify-between ${shouldHighlight ? 'bg-blue-800' : 'bg-white'}`}>
            <div>Next Payment Date</div>
            <div>{nextPaymentDate}</div>
          </div> : null}
      </div>
  )
}

export default RevenueCard;