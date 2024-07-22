import React from "react";
import "./Home.scss";

const Home = ({ dishes }) => {
  return (
    <>
      {dishes.map(({ id, name, description, price }) => (
        <div key={id} className="dish-card">
          <p className="dish-card__name">{name}</p>
          <p className="dish-card__desc">{description}</p>
          <p className="dish-card__price">${price}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
