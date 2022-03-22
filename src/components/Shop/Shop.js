import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="row cards-container">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-lg-3 cart-summary">
          <h3 className="mb-5 mt-3 text-center">Order Summary</h3>
          <h6>Selected Items: {cart.length}</h6>
          <h6>Total Price: {}</h6>
          <h6>Total Shipping Charge: {}</h6>
          <h6>Tax: {}</h6>
          <h4 className="mb-5">Grand Total: {}</h4>
          <div className="text-center">
            <button className="btn btn-lg text-white clear-cart-btn my-3">
              Clear Cart
              <FontAwesomeIcon
                className="mx-2"
                icon={faTrashCan}
              ></FontAwesomeIcon>
            </button>
            <button className="btn btn-lg text-white review-order cart-btn">
              Review Order
              <FontAwesomeIcon
                className="mx-2"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
