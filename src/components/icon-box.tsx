import React, { useState } from "react";
type Props = {
  id: string;
  title: string;
  svg: string;
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
    const modalId = document.getElementById(`${props.id}-modal`)!;
    navigator.clipboard.writeText(text).then(
      () => {
        modalId.classList.add("is-success");
        modalId.textContent = "Copied";
        setTimeout(() => {
          modalId.classList.remove("is-success");
        }, 2000);
      },
      () => {
        modalId.classList.add("is-faild");
        modalId.textContent = "Error";
        setTimeout(() => {
          modalId.classList.remove("is-faild");
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
          <i
            className={`c-box-square-icon i-${props.id}`}
            dangerouslySetInnerHTML={{
              __html: `${props.svg}`,
            }}
          ></i>
        </button>
        <div className={`c-modal ${toggleClass()}`}>
          <div className={"c-modal-body"}>
            <div className={"c-nav-horizonal"}>
              <li className={"c-nav-horizonal-item"}>
                <i
                  className={`c-modal-icon i-${props.id}`}
                  dangerouslySetInnerHTML={{
                    __html: `${props.svg}`,
                  }}
                ></i>
              </li>
              <li className={"c-nav-horizonal-item"}>
                <div id={"s"} className={"c-modal-title"}>
                  {props.title}
                </div>
              </li>
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
      </div>
    </React.Fragment>
  );
};
