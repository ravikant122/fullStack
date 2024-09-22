import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isError, setIsError] = useState(false);

  async function onLogin() {
    try {
      const data = await axios.post("http://localhost:3000/", {
        email: emailInput,
        password: passInput,
      });

      localStorage.setItem('token', data.token);
    } catch (e) {
      console.error("Some error occurred while login", e);
      setIsError(true);
    }
  }
  return (
    <div
      className={`w-full h-full flex justify-center items-center ${
        isError ? "bg-transparent" : ""
      }`}
      onClick={() => setIsError(false)}
    >
      <div className="w-1/4 h-1/2 rounded shadow-lg bg-gray-300">
        <div
          className={`m-6 flex flex-col items-center ${
            isError ? "hidden" : "block"
          }`}
        >
          <div className="mb-2 font-bold text-2xl">Paytm Dashboard</div>
          <div className="my-4">
            <input
              type="email"
              placeholder="Email"
              className="rounded-md shadow-md p-2"
              onInput={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder="Password"
              onInput={(e) => setPassInput(e.target.value)}
              className="rounded-md shadow-md p-2"
            />
          </div>
          <div className="my-4 py-3 px-8 rounded-md font-semibold shadow-md bg-blue-400 text-lg">
            <button onClick={onLogin}>Sign In</button>
          </div>
          <div className="my-4 underline text-blue-700">
            <a href="">Don't have acccount?</a>
          </div>
        </div>
        <div
          className={`z-10 rounded shadow-lg flex flex-col items-center ${
            isError == false ? "hidden" : "block"
          }`}
        >
          <div>Some Error occurred while login</div>
          <div className="my-4 py-3 px-8 rounded-md font-semibold shadow-sm bg-red-400 text-lg">
            <button onClick={() => setIsError(false)}>
              Dismiss this modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
