import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const {
    active,
    cart,
    removeFromCart,
    totalCost,
    handleCartIncrements,
    handleInputField,
  } = props;

  return (
    <div className={active ? "cartSticky active" : "cartSticky"}>
      <div className="cart-sidebar">
        <h3>Your Total Cost </h3>
        <h4>${totalCost}</h4>
        <Link className="link-checkout" to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
        <div className="cart-items-container">
          {cart.map((product, index) => {
            return (
              <CartItem
                removeFromCart={removeFromCart}
                handleCartIncrements={handleCartIncrements}
                handleInputField={handleInputField}
                product={product}
                key={index}
              />
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};
export default Cart;
