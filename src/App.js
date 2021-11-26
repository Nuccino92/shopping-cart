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
import useCart from "./hooks/useCart";

function App() {
  const {
    toggleCartModal,
    numberOfItems,
    handleCartActive,
    addToCart,
    totalCost,
    cart,
    removeFromCart,
    handleCartIncrements,
    handleInputField,
    isCartActive,
  } = useCart();

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
            element={
              <Checkout
                totalCost={totalCost}
                cart={cart}
                removeFromCart={removeFromCart}
                handleCartIncrements={handleCartIncrements}
                handleInputField={handleInputField}
              />
            }
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
