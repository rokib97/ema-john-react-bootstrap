import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce((pre, curr) => pre + curr.price, 0);
  const shipping = cart.reduce((pre, curr) => pre + curr.shipping, 0);
  const tax = parseFloat(total * 0.1);
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart my-5">
      <h2 className="text-center my-5">Order Summary</h2>
      <h6>Selected Items: {cart.length}</h6>
      <h6>Total: ${total}</h6>
      <h6>Total Shipping Charge: ${shipping}</h6>
      <h6>Tax: ${tax.toFixed(2)}</h6>
      <h4 className="my-5">Grand Total: ${grandTotal.toFixed(2)}</h4>
      <div className="w-75 mx-auto">
        <button className="clear-btn btn text-white">
          Clear Cart
          <FontAwesomeIcon className="ms-2" icon={faTrash}></FontAwesomeIcon>
        </button>
        <button className="review-btn btn text-white">
          Review Order
          <FontAwesomeIcon
            className="ms-2"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Cart;
