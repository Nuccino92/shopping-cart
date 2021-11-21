import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";
import { useState, useEffect } from "react";

const MensClothing = (props) => {
  const { addToCart } = props;
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setMensClothing(await fetchProducts("men's%20clothing"));
    };
    getData();
  }, []);

  return (
    <div className="product-outer">
      <div className="child-for-image"></div>
      <h3>Men's Clothing</h3>
      <div className="product-graph">
        {mensClothing.map((product) => {
          return (
            <Product addToCart={addToCart} key={uniqid()} info={product} />
          );
        })}
      </div>
    </div>
  );
};
export default MensClothing;
