import React from "react";
import { Section } from "../../src/components/section";
import { LinkButton } from "../../src/components/link-button";
import { LinkButtonBorder } from "../../src/components/link-button-border";
import { Loop } from "../../src/components/loop";
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
