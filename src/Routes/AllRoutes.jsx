import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Common-Component/Navbar";
import Items from "../Pages/Items";
import ItemDetail from '../Pages/ItemsDetail';
import Header from '../Common-Component/Header';

const AllRoutes = () => {
  return (
    <div className="AllRoutes">
      <BrowserRouter>
        <Navbar />
        <Header/>
        <Routes>
          <Route path="/" element={<Items/>} />
          <Route path="/product/:productId" element={<ItemDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
