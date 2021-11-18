import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import uniqid from "uniqid";

const Cart = (props) => {
  const { active, cart, removeFromCart } = props;
  return (
    <div className={active ? "cartSticky active" : "cartSticky"}>
      Cart
      {cart.map((product) => {
        return (
          <CartItem
            removeFromCart={removeFromCart}
            product={product}
            key={uniqid()}
          />
        );
      })}
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};
export default Cart;
