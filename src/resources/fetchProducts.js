const fetchProducts = async (category) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await response.json(response);
  return data;
};
export default fetchProducts;
