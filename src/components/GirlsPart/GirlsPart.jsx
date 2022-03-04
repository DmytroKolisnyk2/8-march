import React from "react";
import Img from "../../images/photo_2022-02-26_15-22-29.jpg";
import { useParallax } from "react-scroll-parallax";

const GirlsPart = ({ orientation }) => {
  const { ref } = useParallax < HTMLDivElement > { speed: 10 };
  return (
    <div className={`girls__content-wrapper girls__content-wrapper--${orientation}`}>
      {orientation === "left" ? (
          <img className="girls__photo" src={Img} alt="no-phot" />
      ) : (
          <img className="girls__photo" src={Img} alt="no-phot" />
      )}
      <div className="girls__text-wrapper">
          <h2 className="girls__headline">Lorem, ipsum dolor.</h2>
          <p className="girls__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?
          </p>
      </div>
    </div>
  );
};

export default GirlsPart;
