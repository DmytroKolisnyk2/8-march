import React from "react";
import "./Introduction.scss";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
  return (
    <section className="introduction">
     <div className="introduction__wrapper-content">
        <Fade cascade>
          <h2 className="introduction__headline">Lorem ipsum dolor sit amet.</h2>
          <p className="introduction__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </Fade>
     </div>
    </section>
  );
}
