const CheckoutItem = (props) => {
  const { product, removeFromCart, handleCartIncrements, handleInputField } =
    props;

  return (
    <div className="checkout-items">
      <div
        className="checkout-image-container"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <h3> {product.title}</h3>
      <p>${product.price}</p>
      <div className="checkout-input-container">
        <button
          onClick={(e) =>
            handleCartIncrements(product.title, product.quantity, e)
          }
        >
          ←
        </button>
        <input
          id="checkoutInput"
          onChange={(e) => handleInputField(product.title, product.quantity, e)}
          type="number"
          value={product.quantity}
        ></input>
        <button
          onClick={(e) =>
            handleCartIncrements(product.title, product.quantity, e)
          }
        >
          →
        </button>
      </div>
      <div
        className="remove-btn"
        title="remove"
        onClick={() => removeFromCart(product.title)}
      >
        X
      </div>
    </div>
  );
};

export default CheckoutItem;
