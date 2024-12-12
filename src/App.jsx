import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/product-show";
import Home from "./components/home";

import { SkeletonTheme } from "react-loading-skeleton";
import Cart from "./components/user-cart";

function App() {
  return (
    <div>
      <Navbar />
      <SkeletonTheme>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </SkeletonTheme>
      <ToastContainer />
    </div>
  );
}

export default App;
