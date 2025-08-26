import React, { useState } from "react";
import "./FruitDisplay.css";
import { product_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
const FruitDisplay = ({ category }) => {
  return (
    <div className="fruit-display">
      <h2>
        Category: <input type="text" placeholder={category} disabled />
      </h2>
      <div className="product-items">
        {product_list.map((product, index) => {
          if (category === "All" || category === product.category) {
            return (
              <FoodItem
                key={index}
                id={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FruitDisplay;
