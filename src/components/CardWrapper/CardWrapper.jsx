import React from "react";
import CardDeck from "../CardDeck/CardDeck";
import "./CardWrapper.scss";
import bgCards from "../../images/coffeeTable.jpg";
import { Fade } from "react-awesome-reveal";

const CardWrapper = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.15) 90%,rgba(0, 0, 0, 0.80) 100%), url("${bgCards}")`,
      }}
      className="cards"
    >
      <Fade cascade>
        <h2 className="cards__headline">Але ми ще встигнемо потанцювати в рубашечках на пляжі</h2>
      </Fade>
      <div className="cards__content-wrapper">
        <CardDeck />
      </div>
    </section>
  );
};

export default CardWrapper;
