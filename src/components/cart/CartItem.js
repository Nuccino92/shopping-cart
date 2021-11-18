const CartItem = (props) => {
  const { product, removeFromCart } = props;
  return (
    <div>
      {product.title} --
      {product.quantity} --
      {product.price}
      <div onClick={() => removeFromCart(product.title)}>X</div>
    </div>
  );
};
export default CartItem;
