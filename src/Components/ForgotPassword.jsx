import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import axios from "../api/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { csrf } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/api/forgot-password", { email });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response && e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <section className="bg-white-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-center">Forgot Password</h2>
            {status && (
              <div className="bg-red-700 m-2 p-2 rounded text-white">
                {status}
              </div>
            )}
            <form
              className="space-y-4 md:space-y-6 text-center"
              onSubmit={handleForgotPassword}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                  autoFocus
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@example.com"
                />
                {errors.email && <span>{errors.email[0]}</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-yello-700 text-white font-medium focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
