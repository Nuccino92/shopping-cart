import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="child-for-image"></div>
      <div className="shop-description-container">
        <div className="shop-description-inner">
          <p>
            Here at Shamazon we have a very limited supply of a very limited set
            of items that you would most likely not wish to purchase anyway!
          </p>
          <br></br>
          <p>
            But even if you did we're sorry to inform you that theres no way of
            actually purchasing any of the items listed.
          </p>
          <br></br>
          <p>So take a look around and start "shopping" with Shamazon now!</p>
          <br></br>
          <Link to="/shop">
            <button className="home-shop-button">Explore Shamazon!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
