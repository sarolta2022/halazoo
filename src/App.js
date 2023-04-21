import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
