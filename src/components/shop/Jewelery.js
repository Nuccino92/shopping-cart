import { useState, useEffect } from "react";
import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";

const Jewelery = (props) => {
  const { addToCart } = props;
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setJewelery(await fetchProducts("jewelery"));
    };
    getData();
  }, []);

  return (
    <div className="product-outer">
      <div className="child-for-image"></div>
      <h3>Jewelery</h3>
      <div className="product-graph">
        {jewelery.map((product) => {
          return (
            <Product addToCart={addToCart} key={uniqid()} info={product} />
          );
        })}
      </div>
    </div>
  );
};
export default Jewelery;
