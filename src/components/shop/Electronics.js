import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";
import { useState, useEffect } from "react";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setElectronics(await fetchProducts("electronics"));
    };
    getData();
  }, []);

  return (
    <div>
      {electronics.map((product) => {
        return <Product key={uniqid()} info={product} />;
      })}
    </div>
  );
};
export default Electronics;
