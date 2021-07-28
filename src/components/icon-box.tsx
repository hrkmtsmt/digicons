import React, { useState } from "react";
type Props = {
    id: string;
    title: string;
    icon: string;
    svg: string;
};

export const IconBox = (props: Props) => {
    const [onFocus, setOnFocus] = useState(false);
    const toggleOnForcus = () => setOnFocus(!onFocus);
    const toggleClass = () => {
        if (onFocus === false) {
            return "";
        } else {
            return "is-focus";
        }
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
                    <i className={`c-icon-box-content ${props.icon}`}>
                        {props.svg}
                    </i>
                    <span className={"c-icon-box-title"}>{props.title}</span>
                </button>
                <div className={`c-icon-bord ${toggleClass()}`}>
                    <div className={"c-icon-bord-inner"}>
                        <ul className={"c-nav-horizonal"}>
                            <li className={"c-nav-item"}>
                                <button className={"c-button"}>a</button>
                            </li>
                            <li className={"c-nav-item"}>
                                <button className={"c-button-border"}>a</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
