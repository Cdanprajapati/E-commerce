import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputSignUp } from "../ReduxTool/counterSlice";
import { postRequest } from "../Axios/axiosClient";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {firstName, lastName, email, password, confirmPassword};
  const userRegistration = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(userRegistration)

  const HandleSubmit = async() => {
    dispatch(inputSignUp(data));
    try {
      const user = await postRequest("user/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      console.log(user,"here ---->");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font px-6 mb-4 text-gray-900">
              SignUp
            </h1>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-2 col-span-4">
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-900 " />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-1 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Firts Name
                  </label>
                  <input
                    value={firstName}
                    type="text"
                    name="name"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div className="relative">
                  <label for="text" className="leading-7 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="ConfirmPassword"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    value={confirmPassword}
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-r mx-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none my-3 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                onClick={HandleSubmit}
              >
                Sign Up
              </button>
              <div className="p-2 w-full py-3 border-t border-gray-200 text-center">
                <p className="leading-normal text-red-600 my-5">
                  Already have account...? Go to Login
                  <br />
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
