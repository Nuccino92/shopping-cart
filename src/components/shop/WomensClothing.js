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
    <div>
      {womensClothing.map((product) => {
        return <Product addToCart={addToCart} key={uniqid()} info={product} />;
      })}
    </div>
  );
};
export default WomensClothing;
