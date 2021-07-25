import React from "react";
type Props = {
    link: string;
    cta: string;
};
export const LinkButton = (props: Props) => {
    return (
        <a className={"c-button"} href={props.link}>
            {props.cta}
        </a>
    );
};
