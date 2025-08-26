import React from "react";
import "./FruitDisplay.css";
import { menu_list } from "../../assets/assets";
const FruitDisplayMenu = ({ category, setCategory }) => {
  return (
    <div className="fruit-menu">
      <div className="menu-content" id="products">
        <h2>Find Your Favorite Fruits and Vegetables</h2>
        <p>
          Whether you're looking for everyday essentials or seasonal specialties, our Fruit and
          Vegetable categories make shopping simple and delicious.
        </p>
      </div>
      <div className="menu-items">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="menu-item">
              <img
                onClick={() =>
                  setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
                }
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FruitDisplayMenu;
