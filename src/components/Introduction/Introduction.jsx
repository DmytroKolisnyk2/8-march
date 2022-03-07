import React from "react";
import "./Introduction.scss";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__wrapper-content">
        <Fade cascade duration={3500}>
          <h2 className="introduction__headline">У такі часи святковий настрій</h2>
          <p className="introduction__text">
            Але є особи в цьому житті які дають наснагу рухатися далі...
          </p>
        </Fade>
      </div>
    </section>
  );
}
