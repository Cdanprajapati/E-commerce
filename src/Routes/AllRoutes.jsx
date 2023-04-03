import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Common-Component/Navbar";
import Footer from "../Common-Component/Footer";
import Electronics from "../Pages/Electronics";
import Header from '../Common-Component/Header';
import Items from '../Pages/Items';
import Jwellery from "../Pages/Jwellery";

function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Header />}/>
          <Route path="items" element={<Items />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jwellery" element={<Jwellery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
