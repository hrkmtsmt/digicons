import React from "react";
type Props = {
  title: string;
  desc: string;
  children?: React.ReactNode;
};
export const Section = (props: Props) => {
  return (
    <section className={"l-grid l-inner"}>
      <div className={"l-grid-full"}>
        <div className={"c-section"}>
          <h2 className={"c-section-title"}>{props.title}</h2>
          <p className={"c-section-desc"}>{props.desc}</p>
        </div>
      </div>
      {props.children}
    </section>
  );
};
