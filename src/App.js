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
import News from "./components/News";
import news from "./news.json";
import News1 from "./utils/News1";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route path="/about" element={<About />} />
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
        {news.news.map((newsItem) => {
          let newsComponent;

          switch (newsItem.template) {
            case "News1":
              newsComponent = (
                <News1
                  header={newsItem.header}
                  date={newsItem.date}
                  img={newsItem.img}
                  paragraph={newsItem.paragraph}
                />
              );
              break;
            default:
              newsComponent = (
                <News1
                  header={newsItem.header}
                  date={newsItem.date}
                  img={newsItem.img}
                  paragraph={newsItem.paragraph}
                />
              );
          }
          return (
            <Route
              key={newsItem.link + "-news"}
              path={`/${newsItem.link}`}
              element={newsComponent}
            />
          );
        })}
        <Route path="/contact"/>
      </Routes>
      <Contact />
    </HashRouter>
  );
}

export default App;
