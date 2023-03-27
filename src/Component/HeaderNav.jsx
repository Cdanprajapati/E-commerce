import React from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import DropMenu from "./DropMenu";
import SearchBar from "../Common-Component/SearchBar";
import CountrySelector from "../Common-Component/CountrySelector";

function HeaderNav() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-content: center">
            <h1 className="text-4xl text-slate-50 px-2">
              <FaBars />
            </h1>
            <h1 className="text-3xl text-slate-50 px-2 hidden lg:block">
              <DropMenu />
            </h1>
            <h1 className="text-3xl text-slate-50 px-2">
              <SearchBar />
            </h1>
            <h1 className="text-3xl text-slate-50 px-2">
              <CountrySelector />
            </h1>
            <a className="ps-1 flex text-3xl text-slate-50 hover:text-orange-300">
              <FaShoppingCart /> <span className="px-2">Cart</span>
            </a>
            <a className="flex text-3xl text-slate-50 lg:float-right hover:text-orange-300">
              <IoIosContact /> <span className="px-2">Cart</span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
