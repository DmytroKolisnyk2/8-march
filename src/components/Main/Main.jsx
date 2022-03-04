import "./Main.scss";
import React from "react";
import GirlsPart from "../GirlsPart/GirlsPart";
import { UseEffectScroll } from "react-use-smooth-scroll";

const Main = () => {
  return (
    <main className="main">
      <section className="girls">
        <UseEffectScroll>
          <GirlsPart orientation="left" />
          <GirlsPart orientation="right" />
          <GirlsPart orientation="left" />
          <GirlsPart orientation="right" />
          <GirlsPart orientation="left" />
          <GirlsPart orientation="right" />
          <GirlsPart orientation="left" />
          <GirlsPart orientation="right" />
        </UseEffectScroll>
      </section>
    </main>
  );
};

export default Main;
