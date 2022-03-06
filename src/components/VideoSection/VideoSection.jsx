import React from "react";
import "./VideoSection.scss";
import mp4Video from "../../images/bgVideo.mp4";
import ScrollTopArrow from "../ScrollTopArrow/ScrollTopArrow";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function VideoSection() {
  return (
    <section className="video">
      <div className="video__gradient"></div>
      <video autoPlay loop muted className="video__bg-video">
        <source src={mp4Video} type="video/mp4" />
        {/* <source src="./video/bg_video.ogx" type="video/ogv" /> */}
        {/* <source src="./video/bg_video.webm" type="video/webm" /> */}
      </video>
      <div className="video__text-wrapper">
        <Fade damping={1.35} cascade duration={3000}>
          {/* <AttentionSeeker duration={3000} effect="heartBeat"> */}
          <h2 className="video__headline">Наші дорогенькі</h2>
          {/* </AttentionSeeker> */}
          <p className="video__text">Зі святом вас!</p>
          <p className="video__caption">До речі, ви зараз ддосите російські сайти)</p>
        </Fade>
      </div>
      {/* <Fade><ScrollTopArrow bgColor="whitesmoke" color="black"/></Fade> */}
      <ScrollTopArrow bgColor="#ccc" color="black" />
    </section>
  );
}