import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import darkFrame from "../../images/darkFrame.png";

const GirlsPart = ({
  orientation,
  img,
  children,
  slavic,
  asia
  // relation
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`girls__content-wrapper girls__content-wrapper--${orientation} ${
        !img && "girls__content-wrapper--text"
      }`}
    >
      {img && (
        <Slide
          duration={500}
          className="girls__photo-wrapper"
          direction={orientation}
        >
          <img
            onClick={() => setIsOpen(true)}
            style={{
              borderImage: `url("${darkFrame}") 30  / 50px / 23px round`,
              // paddingTop: `${relation * 100}%`,
            }}
            className="girls__photo"
            src={img}
            alt="no-phot"
          />
        </Slide>
      )}

      <div className="girls__text-wrapper">
        <Fade fraction={0.9} direction="down">
          <div>
            {asia && isOpen && <h2 className="girls__headline">Блін, посуда ше грязна)</h2>}
            {slavic && isOpen && (
              <h2 className="girls__headline">Славік ну ми то знаєм шо ти найгарніший</h2>
            )}
            {children}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GirlsPart;
