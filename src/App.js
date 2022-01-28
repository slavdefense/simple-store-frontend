import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
