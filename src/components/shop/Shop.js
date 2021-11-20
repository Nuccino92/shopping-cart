import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import uniqid from "uniqid";

const Shop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json(response);
    setCategories(data);
  };

  return (
    <div className="categories-container">
      <div className="child-for-image"></div>
      <div className="categories-container-inner">
        {categories.map((category) => {
          return (
            <Link style={style} to={`/shop/${category}`} key={uniqid()}>
              <Category category={category} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const style = {
  color: "black",
};
export default Shop;
