import React from "react";
export const LinkButton = (props) => {
    return(
        <a className={"c-button"} href={props.link}>
            {props.cta}
        </a>
    )
}