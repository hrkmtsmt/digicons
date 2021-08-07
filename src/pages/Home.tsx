import React from "react";
import { Section } from "../components/section";
import { LinkButton } from "../components/link-button";
import { LinkButtonBorder } from "../components/link-button-border";
import { Loop } from "../components/Loop";
export const Home = () => {
  return (
    <React.Fragment>
      <Section
        title={"cat"}
        category={null}
        desc={
          "digiconsは日本のエンジニア向けに最適化されたアイコンを提供します。"
        }
      >
        <div className={"l-grid-full"}>
          <ul className={"c-nav-horizonal"}>
            <li className={"c-nav-horizonal-item"}>
              <LinkButton link={"/"} cta={"Download"} />
            </li>
            <li className={"c-nav-horizonal-item"}>
              <LinkButtonBorder link={"/"} cta={"Open in Github"} />
            </li>
          </ul>
        </div>
      </Section>
      <Loop />
    </React.Fragment>
  );
};
