import { Link } from "react-router-dom";

const Header = (props) => {
  let numItemsText = "";
  const { handleCartActive, numberOfItems } = props;

  numberOfItems > 99 ? (numItemsText = "99+") : (numItemsText = numberOfItems);

  return (
    <header>
      <div className="headerContentContainer">
        <h1>shamazon</h1>
        <nav>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Categories</li>
          </Link>
          <li className="cart-container" onClick={() => handleCartActive()}>
            <img
              className="shopping-cart-image"
              src="../shopping-cart.png"
              alt="shopping cart"
            ></img>
            <div
              className={
                numberOfItems > 0
                  ? "total-items-container active"
                  : "total-items-container"
              }
            >
              {numItemsText}
            </div>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
