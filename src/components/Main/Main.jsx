import "./Main.scss";
import React from "react";
import GirlsPart from "../GirlsPart/GirlsPart";
import { UseEffectScroll } from "react-use-smooth-scroll";
import Img from "../../images/photo_2022-02-26_15-22-29.jpg";
import { Parallax } from "react-parallax";
import Introduction from "../Introduction/Introduction";

import parallaxSecond from "../../images/parallax_bg.jpg";
import parallaxFirst from "../../images/parallax_bg-first.jpg";

const Main = () => {
  return (
    <main className="main">
      <Parallax strength={500} bgImage={parallaxFirst}>
       <Introduction/>
      </Parallax>
      <Parallax strength={1400} bgImage={parallaxSecond}>
        <section className="girls">
          <UseEffectScroll>
            <GirlsPart img={Img} orientation="left">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
            <GirlsPart img={Img} orientation="right">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
            <GirlsPart img={Img} orientation="left">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
            <GirlsPart img={Img} orientation="right">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
            <GirlsPart img={Img} orientation="left">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
            <GirlsPart img={Img} orientation="right">
              <p className="girls__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </p>
            </GirlsPart>
          </UseEffectScroll>
        </section>
      </Parallax>
    </main>
  );
};

export default Main;
