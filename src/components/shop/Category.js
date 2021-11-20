const Category = (props) => {
  const { category } = props;
  console.log(category);

  const getId = (category) => {
    if (category === "electronics") return "electronics-img";
    if (category === "jewelery") return "jewelery-img";
    if (category === `men's clothing`) return "mens-clothing-img";
    if (category === `women's clothing`) return "womens-clothing-img";
  };

  return (
    <div className="category-container">
      <div className="category-img-container">
        <div className="category-img" id={getId(category)}></div>
      </div>
      <h3>{category}</h3>
    </div>
  );
};
export default Category;
