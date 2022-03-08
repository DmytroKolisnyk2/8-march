import "./Main.scss";
import React from "react";

import { GirlsSection, MiddleSection } from "../GirlsSection/GirlsSection";
import VideoSection from "../VideoSection/VideoSection";
import Introduction from "../Introduction/Introduction";
import CardWrapper from "../CardWrapper/CardWrapper";

import { Parallax } from "react-parallax";
import { UseEffectScroll } from "react-use-smooth-scroll";

import parallaxGuns from "../../images/parallax_bg-first.jpg";
import parallaxUkraine from "../../images/UkraineBg.jpg";
import brickWall from "../../images/brickWall.jpg";

const Main = () => {
  return (
    <main className="main">
      <UseEffectScroll>
        <Parallax strength={500} bgImage={parallaxGuns}>
          <Introduction />
        </Parallax>
        <Parallax strength={1400} bgImage={brickWall}>
          <GirlsSection></GirlsSection>
        </Parallax>
        <CardWrapper />
        <Parallax strength={300} bgImage={parallaxUkraine}>
          <MiddleSection />
        </Parallax>
        <VideoSection />
      </UseEffectScroll>
    </main>
  );
};

export default Main;
