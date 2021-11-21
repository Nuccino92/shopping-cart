const Product = (props) => {
  const { info, addToCart } = props;

  const { image } = info;
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div title={info.description} className="product">
      <div className="product-container">
        <div className="product-image-container">
          <div style={style} className="product-image"></div>
        </div>
        <h3>{info.title}</h3>
        <p> ${info.price}</p>
        <button
          onClick={() => addToCart(info.title, 1, info.price, info.image)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
