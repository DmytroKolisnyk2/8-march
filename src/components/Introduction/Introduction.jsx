import React from "react";
import "./Introduction.scss";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__wrapper-content">
        <Fade cascade duration={5400}>
          <h2 className="introduction__headline">
            Складно зберегти святковий настрій у такі часи
          </h2>
          <p className="introduction__text">
            Але в цьому житті є люди, які дають наснагу рухатися далі...
          </p>
        </Fade>
      </div>
    </section>
  );
}
