const Product = (props) => {
  const { info, addToCart } = props;
  return (
    <div>
      {info.id} +{info.price}
      <button onClick={() => addToCart(info.title, 1, info.price)}>
        add to cart
      </button>
    </div>
  );
};
export default Product;
