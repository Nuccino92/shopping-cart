import { useEffect, useState } from "react";

const useCart = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCartActive = () => {
    setIsCartActive(!isCartActive);
  };

  function handleInputField(title, quantity, e) {
    let newCart = [...cart];
    const { value } = e.target;

    if (value < 0) {
      return;
    }

    newCart.map((product) => {
      return product.title === title ? (product.quantity = value) : product;
    });
    setCart(newCart);
  }

  const handleCartIncrements = (title, quantity, e) => {
    const { innerText } = e.target;
    let newCart = [...cart];

    function checkInnerText(product) {
      if (innerText === "←" && product.quantity <= 0) {
        return;
      }
      if (innerText === "→") {
        product.quantity++;
      } else product.quantity--;

      return product;
    }

    newCart.map((product) => {
      return product.title === title
        ? (product = checkInnerText(product))
        : product;
    });
    setCart(newCart);
  };

  const addToCart = (title, quantity, price, image) => {
    let newCart = [...cart];
    const alreadyAdded = cart.find((product) => product.title === title);

    if (alreadyAdded) {
      newCart.map((product) => {
        return product.title === title
          ? (product.quantity += 1)
          : product.quantity;
      });
      return setCart(newCart);
    } else {
      setCart((prev) => [...prev, { title, quantity, price, image }]);
    }
  };

  const removeFromCart = (title) => {
    const newCart = cart.filter((product) => product.title !== title);
    setCart(newCart);
  };

  const getTotalCost = () => {
    let total = 0;
    cart.map((product) => {
      return (total += product.quantity * product.price);
    });
    return total.toFixed(2);
  };

  const getNumberOfProducts = () => {
    let total = 0;
    cart.map((product) => {
      // converts inputfield string into number for use
      return (total += parseFloat(product.quantity));
    });
    return total;
  };

  const toggleCartModal = (e) => {
    if (e.target.className === "shopping-cart-image") setIsCartActive(true);
    if (e.target.parentNode.className === "App") setIsCartActive(false);
    if (e.target.className === "checkout-btn") setIsCartActive(false);
  };

  useEffect(() => {
    setNumberOfItems(getNumberOfProducts());
    setTotalCost(getTotalCost());
  }, [cart]);

  return {
    toggleCartModal,
    numberOfItems,
    handleCartActive,
    addToCart,
    totalCost,
    cart,
    removeFromCart,
    handleCartIncrements,
    handleInputField,
    isCartActive,
  };
};

export default useCart;
