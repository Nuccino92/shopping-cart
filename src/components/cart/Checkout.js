import CheckoutItem from "./CheckoutItem";

const confirmOrder = () => {
  alert("Your order will arrive... when pigs fly");
};

const Checkout = (props) => {
  const {
    cart,
    removeFromCart,
    totalCost,
    handleCartIncrements,
    handleInputField,
  } = props;

  return (
    <div className="checkout">
      <div className="checkout-inner-container">
        <div className="checkout-inner">
          {cart.map((product, index) => {
            return (
              <CheckoutItem
                removeFromCart={removeFromCart}
                handleCartIncrements={handleCartIncrements}
                handleInputField={handleInputField}
                product={product}
                key={index}
              />
            );
          })}
        </div>
        <div className="confirm-purchase">
          <p>Your Total: ${totalCost}</p>
          <button onClick={confirmOrder}>Confirm Order</button>
        </div>
      </div>{" "}
      <a
        href="https://www.youtube.com/watch?v=UxGn2Egekic&ab_channel=therealvinceoffer"
        target="_blank"
        className="checkout-ad-image"
      ></a>
    </div>
  );
};

export default Checkout;
