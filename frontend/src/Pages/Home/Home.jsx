import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import FruitDisplayMenu from "../../components/FruitDisplayMenu/FruitDisplayMenu";
import FruitDisplay from "../../components/FruitDisplay/FruitDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Hero />
      <FruitDisplayMenu category={category} setCategory={setCategory} />
      <FruitDisplay category={category} />
    </div>
  );
};

export default Home;
