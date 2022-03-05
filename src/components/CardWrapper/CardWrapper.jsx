import React from "react";
import CardDeck from "../CardDeck/CardDeck";
import "./CardWrapper.scss";
const CardWrapper = () => {
  return (
    <section className="cards">
      <div className="cards__content-wrapper">
        <CardDeck />
      </div>
    </section>
  );
};

export default CardWrapper;
