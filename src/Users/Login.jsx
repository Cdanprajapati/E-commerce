import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputlogin } from "../ReduxTool/counterSlice";
import { postRequest } from '../Axios/axiosClient';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password }
  const userlogin = useSelector((state) => state.data)
  const dispatch = useDispatch();
  console.log(userlogin)

  const handlelogin = async() => {
    dispatch(inputlogin(data));
    try {
      const user = await postRequest("user/login", {
        email,
        password,
      });
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font px-6 mb-4 text-gray-900">
              Login
            </h1>
            <hr />
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="password" className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    id="password"
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={handlelogin} className="flex mx-auto text-white bg-indigo-400 hover:bg-pink-500 border-0 py-1 px-8 focus:outline-none  rounded text-lg">
                  Login
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="leading-normal text-red-500 my-5">
                  Already have account                  
                </p>
                <p className='text-center font-medium'>Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
