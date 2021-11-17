const Product = (props) => {
  const { info } = props;
  console.log(info);
  return <div>{info.title}</div>;
};
export default Product;
