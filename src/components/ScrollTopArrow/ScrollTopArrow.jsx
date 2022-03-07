import React, { useState } from "react";
import styles from "./ScrollTopArrow.module.css";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollTopArrow({ color, bgColor, borderRadius }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div
          onClick={() => {
            scroll.scrollToTop();
            setIsOpen(true);
          }}
          className={styles.arrow}
          style={{
            backgroundColor: bgColor,
            borderRadius: borderRadius,
          }}
        >
          <span style={{ color: color, fontSize: "42px" }} className="material-icons">
            &#62;
          </span>
          {isOpen && <h2 className={styles.headline}>Хехе найобка</h2>}
        </div>
    </>
  );
}

ScrollTopArrow.defaultProps = {
  color: "#fff",
  bgColor: "#333",
  borderRadius: "50%",
};

ScrollTopArrow.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
};
