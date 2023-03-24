import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Common-Component/Navbar";
import Footer from "../Common-Component/Footer";
import Header from "../Common-Component/Header";
import Items from '../Pages/Items';
import Electronics from "../Pages/Electronics";
import Jwellery from "../Pages/Jwellery";

function Index() {
  return (
    <div class="App">
        <Navbar />
         <Header/>
          <Items />
          <Electronics/>
          <Jwellery />
        <Footer />
    </div>
  );
}

export default Index;
