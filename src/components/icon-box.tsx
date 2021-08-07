import React, { useState } from "react";
type Props = {
  id: string;
  title: string;
  svg: string;
  image: string;
};
export const IconBox = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const toggleIsForcus = () => setIsFocus(!isFocus);
  const toggleClass = () => {
    if (isFocus === false) {
      return "";
    } else {
      return "is-focus";
    }
  };
  const copyClipboad = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        const modalClass: any = document.getElementById(`${props.id}-modal`);
        modalClass.classList.add("is-visible");
        modalClass.textContent = "Copied";
        setTimeout(() => {
          modalClass.classList.remove("is-visible");
        }, 2000);
      },
      () => {
        const modalClass: any = document.getElementsByClassName(
          `${props.id}-modal`
        );
        modalClass.classList.add("is-visible");
        modalClass.textContent = "Error";
        setTimeout(() => {
          modalClass.classList.remove("is-visible");
        }, 2000);
      }
    );
  };
  return (
    <React.Fragment>
      <div className={"l-grid-extra-small"}>
        <button
          id={props.id}
          onClick={toggleIsForcus}
          className={`c-box-square ${toggleClass()}`}
        >
          <i className={`c-box-square-icon i-${props.id}`}>
            <img src={props.image} alt={props.id} />
          </i>
        </button>
      </div>
      <div className={`c-modal ${toggleClass()}`}>
        <div className={"c-modal-body"}>
          <div className={"c-nav-horizonal"}>
            <i className={`c-modal-icon i-${props.id}`}>
              <img src={props.image} alt={props.title} />
            </i>
            <div id={"s"} className={"c-modal-title"}>
              {props.title}
            </div>
            <div id={`${props.id}-modal`} className={"c-modal-alert"}></div>
          </div>
          <div>
            <button
              onClick={() => copyClipboad(props.svg)}
              className={"c-button-border"}
            >
              Copy SVG
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={toggleIsForcus}
        className={`c-modal-background ${toggleClass()}`}
      ></div>
    </React.Fragment>
  );
};
