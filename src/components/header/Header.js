import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Categories</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
