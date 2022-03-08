import React from "react";
import "./VideoSection.scss";
import mp4Video from "../../images/bgVideo.mp4";
import webmVideo from "../../images/bgVideo.webm";
import ogvVideo from "../../images/bgVideo.ogx";
import ScrollTopArrow from "../ScrollTopArrow/ScrollTopArrow";
import { Fade } from "react-awesome-reveal";
import poster from '../../images/poster.jpg'

export default function VideoSection() {
  return (
    <section className="video">
      <div className="video__gradient"></div>
      <video poster={poster} preload autoPlay loop muted className="video__bg-video">
        <source
          src="https://raw.githubusercontent.com/DmytroKolisnyk2/8-march/master/src/images/bgVideo.mp4"
          type="video/mp4"
        />
        {/* <source src={ogvVideo} type="video/ogg" />
        <source src={webmVideo} type="video/webm" /> */}
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
