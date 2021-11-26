import { useState, useEffect } from "react";
import Product from "./Product";
import fetchProducts from "../../resources/fetchProducts";
import uniqid from "uniqid";
import { useParams } from "react-router";

const EachCategory = (props) => {
  const { addToCart } = props;
  const [product, setProduct] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      setProduct(await fetchProducts(category));
    };
    getData();
  }, []);

  return (
    <div className="product-outer">
      <div className="child-for-image"></div>
      <h3>{category}</h3>
      <div className="product-graph">
        {product.map((each) => {
          return <Product addToCart={addToCart} key={uniqid()} info={each} />;
        })}
      </div>
    </div>
  );
};
export default EachCategory;
