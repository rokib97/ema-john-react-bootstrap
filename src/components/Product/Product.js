import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="col-lg-4 col-md-4 col-12 g-4 single-cart">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name.slice(0, 20)}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Seller: {seller}</Card.Text>
          <Card.Text>Ratings: {ratings} star</Card.Text>
          <button
            onClick={() => handleAddToCart(product)}
            className="w-100 btn cart-btn"
          >
            Add to Cart
            <FontAwesomeIcon
              className="ms-2"
              icon={faShoppingCart}
            ></FontAwesomeIcon>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
