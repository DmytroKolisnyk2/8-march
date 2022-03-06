import React from "react";
import "./GirlsSection.scss";
import GirlsPart from "../GirlsPart/GirlsPart";
import Img from "../../images/photo_2022-02-26_15-22-29.jpg";

export function GirlsSection() {
  return (
    <section className="girls">
      <GirlsPart orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart styles img={Img} orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart img={Img} orientation="right">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart img={Img} orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart img={Img} orientation="right">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart img={Img} orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart img={Img} orientation="right">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
      <GirlsPart orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
    </section>
  );
}
export function MiddleSection() {
  return (
    <section className="girls">
      <GirlsPart orientation="left">
        <p className="girls__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </GirlsPart>
    </section>
  );
}
