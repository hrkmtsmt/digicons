import React, { useState } from "react";
type Props = {
    id: string;
    title: string;
    icon: string;
    svg: string;
};

export const IconBox = (props: Props) => {
    const [isFocus, setIsFocus] = useState(false);
    const toggleOnForcus = () => setIsFocus(!isFocus);
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
                const copiedSuccsesed: any =
                    document.getElementById("copied_successed");
                copiedSuccsesed.classList.add("is-visible");
                setTimeout(() => {
                    copiedSuccsesed.classList.remove("is-visible");
                }, 4000);
            },
            () => {
                const copiedFailed: any =
                    document.getElementById("copied_failed");
                copiedFailed.classList.add("is-visible");
                setTimeout(() => {
                    copiedFailed.classList.remove("is-visible");
                }, 4000);
            }
        );
    };
    return (
        <React.Fragment>
            <div className={"l-grid-extra-small"}>
                <button
                    id={props.id}
                    onFocus={toggleOnForcus}
                    onBlur={toggleOnForcus}
                    className={"c-icon-box "}
                >
                    <i className={`c-icon-box-icon ${props.icon}`}>
                        {props.svg}
                    </i>
                    <span className={"c-icon-box-title"}>{props.title}</span>
                </button>
                <div className={`c-icon-bord is-focus ${toggleClass()}`}>
                    <div className={"c-icon-bord-body"}>
                        <div className={"c-nav-horizonal"}>
                            <i className={` ${props.icon}`}>{props.svg}</i>
                            <span id={"s"} className={"c-icon-bord-title"}>
                                {props.title}
                            </span>
                            <div
                                id={"copied_successed"}
                                className={"c-icon-bord-alert"}
                            >
                                Copied
                            </div>
                            <div
                                id={"copied_failed"}
                                className={"c-icon-bord-alert"}
                            >
                                Error
                            </div>
                        </div>
                        <button
                            onClick={() => copyClipboad(props.svg)}
                            className={"c-button"}
                        >
                            Copy SVG
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
