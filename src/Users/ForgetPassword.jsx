import React from "react";

function ForgetPassword() {

  





  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font px-6 mb-4 text-gray-900">
              Forget Password
            </h1>
            <hr />
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button
                onClick={handlelogin}
                className="text-white bg-gradient-to-r mx-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none my-3 text-center focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Send OTP
              </button>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="leading-normal text-red-500 my-5">
                  Don't have account Go to
                </p>
                <Link to="/signUp">
                  {" "}
                  <p className="text-center font-medium">Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;
