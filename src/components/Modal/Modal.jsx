import React, { Component } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
import { Oval } from "react-loader-spinner";

const modalRef = document.querySelector("#root-modal");

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <div className="Modal__content-wrapper">
            <div>
              <div className="Modal__spinner Modal__spinner--first">
                <Oval
                  ariaLabel="loading-indicator"
                  height={86}
                  width={86}
                  strokeWidth={5}
                  color="yellow"
                  secondaryColor="rgb(0, 132, 255)"
                />
              </div>
              <div className="Modal__spinner Modal__spinner--second">
                <Oval
                  ariaLabel="loading-indicator"
                  height={100}
                  width={100}
                  strokeWidth={5}
                  color="yellow"
                  secondaryColor="rgb(0, 132, 255)"
                />
              </div>
            </div>
            <h2>Вітаємо)</h2>
          </div>
        </div>
      </div>,
      modalRef
    );
  }
}
