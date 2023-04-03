import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Common-Component/Navbar";
import Items from "../Pages/Items";
import Login from "../Users/Login";
import ItemsDetail from "../Pages/ItemsDetail";
import Header from "../Common-Component/Header";
import Footer from "../Common-Component/Footer";
import NotFound from "../Pages/NotFound";
import SignUp from "../Users/SignUp";
import AddToCart from "../Pages/AddToCart";

const Router = () => (
  <Routes>
    <Route path="/" element={<Items />} />
    <Route path="/itemsDetail/:productsId" element={<ItemsDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/addToCart" element={<AddToCart />} />
    <Route path="/signUp" element={<SignUp />} />
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
