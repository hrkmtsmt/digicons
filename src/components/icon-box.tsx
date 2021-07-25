import React from "react";
type Props = {
    id: string;
    title: string;
    icon: string;
    svg: string;
};
export const IconBox = (props: Props) => {
    return (
        <div className={"l-grid-extra-small"}>
            <button className={"c-icon-box"}>
                <i id={props.id} className={`c-icon-box-content ${props.icon}`}>
                    {props.svg}
                </i>
                <span className={"c-icon-box-title"}>{props.title}</span>
            </button>
        </div>
    );
};
