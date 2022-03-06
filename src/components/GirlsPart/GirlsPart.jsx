import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
// import polaroidFrame from '../../images/polaroid.png';
import darkFrame from "../../images/darkFrame.PNG";

const GirlsPart = ({ orientation, img, children, relation }) => {
  return (
    <div
      className={`girls__content-wrapper girls__content-wrapper--${orientation} ${
        !img && "girls__content-wrapper--text"
      }`}
    >
      {img && (
        <Slide duration={500} className="girls__photo-wrapper" direction={orientation}>
          <img
            style={{
              borderImage: `url("${darkFrame}") 30  / 40px / 23px round`,
              paddingTop: `${relation * 100}%`,
            }}
            className="girls__photo"
            src={img}
            alt="no-phot"
          />
        </Slide>
      )}

      <div className="girls__text-wrapper">
        <Fade fraction={0.85} direction="down">
          <div>{children}</div>
        </Fade>
      </div>
    </div>
  );
};

export default GirlsPart;
