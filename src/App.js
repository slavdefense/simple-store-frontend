import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Suites from "./pages/Suits/Suits";

function App() {
  const [navItems] = useState([
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "Cart",
      url: "/shop",
    },
  ]);

  return (
    <div className="App">
      <Navbar navItems={navItems} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/suits" element = {<Suites/>}/>
        <Route path="/home/MensShoe" element = {<Suites/>}/>
        <Route path="/home/WomenShoe" element = {<Suites/>}/>
        <Route path="/home/mens" element = {<Suites/>}/>
        <Route path="/home/womens" element = {<Suites/>}/>
      </Routes>
    </div>
  );
}

export default App;
