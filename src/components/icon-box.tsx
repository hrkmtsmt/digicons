import React from "react";
type Props = {
    title: string;
    icon: string;
};
export const IconBox = (props: Props) => {
    return (
        <div className={"l-grid-extra-small"}>
            <button className={"c-icon-box"}>
                <i className={`c-icon-box-content ${props.icon}`}></i>
                <span className={"c-icon-box-title"}>{props.title}</span>
            </button>
        </div>
    );
};
