import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Electronics from "./components/shop/Electronics";
import Jewelery from "./components/shop/Jewelery";
import MensClothing from "./components/shop/MensClothing";
import WomensClothing from "./components/shop/WomensClothing";
import Checkout from "./components/cart/Checkout";
import Cart from "./components/cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCartActive = () => {
    setIsCartActive(!isCartActive);
  };

  const addToCart = (title, quantity, price) => {
    let newCart = [...cart];
    const alreadyAdded = cart.find((product) => product.title === title);

    if (alreadyAdded) {
      newCart.map((product) => {
        return product.title === title
          ? (product.quantity += 1)
          : product.quantity;
      });
      return setCart(newCart);
    } else {
      setCart((prev) => [...prev, { title, quantity, price }]);
    }
  };

  const removeFromCart = (title) => {
    const newCart = cart.filter((product) => product.title !== title);
    setCart(newCart);
  };

  const getNumberOfProducts = () => {
    let total = 0;
    cart.map((product) => {
      return (total += product.quantity);
    });
    return total;
  };

  useEffect(() => {
    setNumberOfItems(getNumberOfProducts());
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          numberOfItems={numberOfItems}
          handleCartActive={handleCartActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/electronics"
            element={<Electronics addToCart={addToCart} />}
          />
          <Route
            path="/shop/jewelery"
            element={<Jewelery addToCart={addToCart} />}
          />
          <Route
            path="/shop/men's%20clothing"
            element={<MensClothing addToCart={addToCart} />}
          />
          <Route
            path="/shop/women's%20clothing"
            element={<WomensClothing addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Cart
          cart={cart}
          active={isCartActive}
          removeFromCart={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
