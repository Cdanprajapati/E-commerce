import React from "react";
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
          <HeaderNav/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
