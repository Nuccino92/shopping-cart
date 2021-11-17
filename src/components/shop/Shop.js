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
    <div>
      {categories.map((category) => {
        return (
          <Link to={`/shop/${category}`} key={uniqid()}>
            <Category category={category} />
          </Link>
        );
      })}
    </div>
  );
};
export default Shop;
