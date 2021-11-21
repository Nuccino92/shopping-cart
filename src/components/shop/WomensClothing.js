import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";
import { useState, useEffect } from "react";

const WomensClothing = (props) => {
  const { addToCart } = props;
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setWomensClothing(await fetchProducts("women's%20clothing"));
    };
    getData();
  }, []);

  return (
    <div className="product-outer">
      <div className="child-for-image"></div>
      <h3>Women's Clothing</h3>
      <div className="product-graph">
        {womensClothing.map((product) => {
          return (
            <Product addToCart={addToCart} key={uniqid()} info={product} />
          );
        })}
      </div>
    </div>
  );
};
export default WomensClothing;
