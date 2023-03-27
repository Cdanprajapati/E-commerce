import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Common-Component/Navbar";
import Items from "../Pages/Items";
import ItemDetail from "../Pages/ItemsDetail";
import Header from "../Common-Component/Header";
import Footer from '../Common-Component/Footer';
import NotFound from "../Pages/NotFound";

const Router = () => (
  <Routes>
    <Route path="/" element={<Items />} />
    <Route path="/product/:productId" element={<ItemDetail />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
  
);

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <div className="AllRoutes">
        <Navbar />
        <Header />
        <Router />  
        <Footer />      
      </div>
      
    </BrowserRouter>
  );
};

export default AllRoutes;
