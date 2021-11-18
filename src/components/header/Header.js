import { Link } from "react-router-dom";

const Header = (props) => {
  const { handleCartActive, numberOfItems } = props;
  return (
    <header>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Categories</li>
        </Link>
        <li onClick={() => handleCartActive()}>Cart {numberOfItems}</li>
      </nav>
    </header>
  );
};

export default Header;
