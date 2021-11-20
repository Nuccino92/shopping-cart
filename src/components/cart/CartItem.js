const CartItem = (props) => {
  const { product, removeFromCart, handleCartIncrements, handleInputField } =
    props;

  return (
    <div>
      {product.title} --
      {product.price}
      <button
        onClick={(e) =>
          handleCartIncrements(product.title, product.quantity, e)
        }
      >
        -
      </button>
      <input
        id="cartInput"
        onChange={(e) => handleInputField(product.title, product.quantity, e)}
        type="number"
        value={product.quantity}
      ></input>
      <button
        onClick={(e) =>
          handleCartIncrements(product.title, product.quantity, e)
        }
      >
        +
      </button>
      <div onClick={() => removeFromCart(product.title)}>X</div>
    </div>
  );
};
export default CartItem;
