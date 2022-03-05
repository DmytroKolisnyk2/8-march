import React from "react";
import { Fade} from "react-awesome-reveal";
import { Parallax } from "react-parallax";

const GirlsPart = ({ orientation, img, children }) => {
  return (
    <div className={`girls__content-wrapper girls__content-wrapper--${orientation}`}>
      {img && (
        <Fade duration={600} className="girls__photo-wrapper" direction={orientation}>
          {/* <img className="girls__photo" src={img} alt="no-phot" /> */}
          <Parallax strength={900} bgImage={img}>
            <div className="girls__photo"></div>
          </Parallax>
        </Fade>
      )}

      <div className="girls__text-wrapper">
        <Fade fraction={0.6} direction="down">
          <div>{children}</div>
        </Fade>
      </div>
    </div>
  );
};

export default GirlsPart;
