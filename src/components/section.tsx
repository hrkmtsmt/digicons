import React from "react";
type Props = {
  title: string | null;
  category: string | null;
  desc: string | null;
  children?: React.ReactNode;
};
export const Section = (props: Props) => {
  const titleJSX = <h2 className={"c-section-title"}>{props.title}</h2>;
  const categoryJSX = (
    <h3 className={"c-section-category"}>{props.category}</h3>
  );
  const descJSX = <p className={"c-section-desc"}>{props.desc}</p>;
  return (
    <section className={"l-grid l-inner"}>
      <div className={"l-grid-full"}>
        <div className={"c-section"}>
          {props.title === null ? null : titleJSX}
          {props.category === null ? null : categoryJSX}
          {props.desc === null ? null : descJSX}
        </div>
      </div>
      {props.children}
    </section>
  );
};
