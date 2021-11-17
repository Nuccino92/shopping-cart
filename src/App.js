import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import Electronics from "./components/shop/Electronics";
import Jewelery from "./components/shop/Jewelery";
import MensClothing from "./components/shop/MensClothing";
import WomensClothing from "./components/shop/WomensClothing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/electronics" element={<Electronics />} />
          <Route path="/shop/jewelery" element={<Jewelery />} />
          <Route path="/shop/men's%20clothing" element={<MensClothing />} />
          <Route path="/shop/women's%20clothing" element={<WomensClothing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
