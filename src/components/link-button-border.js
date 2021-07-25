import React from "react";
export const LinkButtonBorder = (props) => {
    return (
        <a className={"c-button-border"} href={props.link}>
            {props.cta}
        </a>
    );
};
