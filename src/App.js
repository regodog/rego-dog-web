// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Textile from "./components/Textile";
import Food from "./components/Food";
import Product from "./utils/Product";
import "./App.css";
import products from "./products.json";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/textile" element={<Textile />} />
        <Route path="/shop/food" element={<Food />} />
        {products.textile.map((product) => (
          <Route
            key={product.link + "textile"}
            path={`/shop/textile/${product.link}`}
            element={
              <Product
                name={product.name}
                price={product.price}
                img={product.img}
                description={product.description}
              ></Product>
            }
          ></Route>
        ))}
        {products.food.map((product) => (
          <Route
            key={product.link + "food"}
            path={`/shop/food/${product.link}`}
            element={
              <Product
                name={product.name}
                price={product.price}
                img={product.img}
                description={product.description}
              ></Product>
            }
          ></Route>
        ))}
        <Route path="/contact" />
      </Routes>
    </HashRouter>
  );
}

export default App;
