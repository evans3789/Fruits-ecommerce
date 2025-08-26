import "./FoodItem.css";
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, description, image, price }) => {
  const { addToCart, removeCartItem, cartItems } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="image">
        <img src={image} alt="" />
        <div className="overlay">
          {(cartItems[id] ?? 0) < 1 ? (
            <div onClick={() => addToCart(id)} className="initial-add">
              <Plus />
            </div>
          ) : (
            <div className="add-minus-items">
              <div onClick={() => removeCartItem(id)} className="minus">
                <Minus />
              </div>
              <p>{cartItems[id]}</p>
              <div onClick={() => addToCart(id)} className="add">
                <Plus />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        <p className="name">{name}</p>
        <p className="desc">{description}</p>
        <p className="price">Ksh.{price} /=</p>
      </div>
    </div>
  );
};

export default FoodItem;
