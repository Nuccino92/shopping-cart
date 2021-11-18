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
    <div>
      {mensClothing.map((product) => {
        return <Product addToCart={addToCart} key={uniqid()} info={product} />;
      })}
    </div>
  );
};
export default MensClothing;
