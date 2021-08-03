import React from "react";
type Props = {
  link: string;
  cta: string;
};
export const LinkButtonBorder = (props: Props) => {
  return (
    <a className={"c-button-border"} href={props.link}>
      {props.cta}
    </a>
  );
};
