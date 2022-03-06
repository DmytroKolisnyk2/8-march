import React from "react";
import { Fade } from "react-awesome-reveal";
import { Parallax } from "react-parallax";
// import polaroidFrame from '../../images/polaroid.png';
import darkFrame from "../../images/darkFrame.png";

const GirlsPart = ({ orientation, img, children }) => {
  return (
    <div
      className={`girls__content-wrapper girls__content-wrapper--${orientation} ${
        !img && "girls__content-wrapper--text"
      }`}
    >
      {img && (
        <Fade
          // fraction={0.3}
          duration={500}
          className="girls__photo-wrapper"
          direction={orientation}
        >
          {/* <img className="girls__photo" src={img} alt="no-phot" /> */}
          <Parallax
            style={{ borderImage: `url("${darkFrame}") 30 fill / 30px / 30px space` }}
            strength={1000}
            bgImage={img}
          >
            <div
              className="girls__photo"
            ></div>
          </Parallax>
        </Fade>
      )}

      <div className="girls__text-wrapper">
        <Fade fraction={0.8} direction="down">
          <div>{children}</div>
        </Fade>
      </div>
    </div>
  );
};

export default GirlsPart;
