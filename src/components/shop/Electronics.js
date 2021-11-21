import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";
import { useState, useEffect } from "react";

const Electronics = (props) => {
  const { addToCart } = props;

  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setElectronics(await fetchProducts("electronics"));
    };
    getData();
  }, []);

  return (
    <div className="product-outer">
      <div className="child-for-image"></div>
      <h3>Electronics</h3>
      <div className="product-graph">
        {electronics.map((product) => {
          return (
            <Product addToCart={addToCart} key={uniqid()} info={product} />
          );
        })}
      </div>
    </div>
  );
};
export default Electronics;
