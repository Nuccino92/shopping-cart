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

  function handleInputField(title, quantity, e) {
    let newCart = [...cart];
    const { value } = e.target;

    if (value < 0) {
      return;
    }

    newCart.map((product) => {
      return product.title === title ? (product.quantity = value) : product;
    });
    setCart(newCart);
  }

  const handleCartIncrements = (title, quantity, e) => {
    const { innerText } = e.target;
    let newCart = [...cart];

    function checkInnerText(product) {
      if (innerText === "←" && product.quantity <= 0) {
        return;
      }
      if (innerText === "→") {
        product.quantity++;
      } else product.quantity--;

      return product;
    }

    newCart.map((product) => {
      return product.title === title
        ? (product = checkInnerText(product))
        : product;
    });
    setCart(newCart);
  };

  const addToCart = (title, quantity, price, image) => {
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
      setCart((prev) => [...prev, { title, quantity, price, image }]);
    }
  };

  const removeFromCart = (title) => {
    const newCart = cart.filter((product) => product.title !== title);
    setCart(newCart);
  };

  const getTotalCost = () => {
    let total = 0;
    cart.map((product) => {
      return (total += product.quantity * product.price);
    });
    return total.toFixed(2);
  };

  const getNumberOfProducts = () => {
    let total = 0;
    cart.map((product) => {
      // converts inputfield string into number for use
      return (total += parseFloat(product.quantity));
    });
    return total;
  };

  const toggleCartModal = (e) => {
    if (e.target.className === "shopping-cart-image") setIsCartActive(true);
    if (e.target.parentNode.className === "App") setIsCartActive(false);
  };

  useEffect(() => {
    setNumberOfItems(getNumberOfProducts());
    setTotalCost(getTotalCost());
  }, [cart]);

  return (
    <BrowserRouter>
      <div onClick={(e) => toggleCartModal(e)} className="App">
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
          totalCost={totalCost}
          cart={cart}
          active={isCartActive}
          removeFromCart={removeFromCart}
          handleCartIncrements={handleCartIncrements}
          handleInputField={handleInputField}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
