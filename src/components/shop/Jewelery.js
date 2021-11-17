import { useState, useEffect } from "react";
import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";

const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setJewelery(await fetchProducts("jewelery"));
    };
    getData();
  }, []);

  return (
    <div>
      {jewelery.map((product) => {
        return <Product key={uniqid()} info={product} />;
      })}
    </div>
  );
};
export default Jewelery;
