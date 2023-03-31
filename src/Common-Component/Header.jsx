import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/Header2.jpg";
import HeaderNav from "../Component/HeaderNav";

function Header() {
  return (
    <div>
      <div className="w-full h-96 relative">
        <img className="w-full h-full object-cover" src={img} />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
          <h1 className="text-center text-slate-50 mb-9 text-7xl">Eflyer</h1>
          <div className="text-center text-slate-50 mb-9 pb-8">
            <HeaderNav />
          </div>
          <Link to="/signUp">
            <button
              type="button"
              className="text-white font-semibold bg-gradient-to-r mx-auto from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-8 py-2 text-center mb-2"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="text-white font-semibold bg-gradient-to-r mx-auto from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-8 py-2 text-center mb-2"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
