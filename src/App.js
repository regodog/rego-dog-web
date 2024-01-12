// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" />
      </Routes>
    </HashRouter>
  );
}

export default App;
