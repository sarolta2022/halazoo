import React from "react";
import HomeCard from "../components/HomeCard";

import "./Home.css";

import Store from "../images/store.jpg";
import SmartDog from "../images/smartdog.jpg";
import Aquarium from "../images/aquarium.jpg";

const homecards = [
  { key: 0, title: "Bolt", image: Store },
  { key: 1, title: "Tanácsadás", image: SmartDog },
  { key: 2, title: "Építés, karbantartás", image: Aquarium },
];

const Home = () => {
  return (
    <div className="homecards-container">
      {homecards.map((homecard) => (
        <HomeCard
          key={homecard.key}
          image={homecard.image}
          title={homecard.title}
        />
      ))}
    </div>
  );
};

export default Home;
