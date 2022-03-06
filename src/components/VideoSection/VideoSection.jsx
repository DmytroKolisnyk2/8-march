import React from "react";
import "./VideoSection.scss";
import mp4Video from "../../images/bgVideo.mp4";
import ScrollTopArrow from "../ScrollTopArrow/ScrollTopArrow";
import { Fade } from "react-awesome-reveal";

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
        <Fade cascade duration={2000}>
          <h2 className="video__headline">Lorem ipsum dolor sit amet.</h2>
          <p className="video__text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto nostrum
            porro!
          </p>
        </Fade>
      </div>
      {/* <Fade><ScrollTopArrow bgColor="whitesmoke" color="black"/></Fade> */}
      <ScrollTopArrow bgColor="#ccc" color="black" />
    </section>
  );
}
