import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [userData, setUserData] = useState({});
  const [otherUsersData, setOtherUsersData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/dashboard");
        setUserData(data.userData);
        setOtherUsersData(data.otherUsersData);
      } catch (e) {
        console.log("some error occurred while fetching dashboard details", e);
      }
    }
    fetchData();
  });

  return (
    <div className="w-full h-full">
      <div className="w-10/12 m-auto p-2 px-8 flex justify-between items-center">
        <div className="font-bold text-2xl">Payment App</div>
        <div>Hello, {userData?.name}</div>
      </div>
      <hr />
      <div className="w-1/2 mx-auto my-8">
        <div className="mb-4 font-bold text-lg">
          Your Balance: {userData?.money}
        </div>
        <div className="font-bold text-lg">Users</div>
      </div>
    </div>
  );
}

export default Dashboard;
