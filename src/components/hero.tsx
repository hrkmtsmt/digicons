import React from "react";
import { Full } from "../../src/components/layout/grid";
import { Section } from "../../src/components/layout/section";
import { LinkButtonBorder } from "../../src/components/link-button-border";
export const Hero = () => {
  return (
    <Section
      id={"hero"}
      title={"Hello World!"}
      desc={"digiconsは手の届かなないアイコンを提供するサービスです。"}
    >
      <Full>
        <ul className={"c-nav-horizonal"}>
          <li className={"c-nav-horizonal-item"}>
            <LinkButtonBorder
              link={"https://github.com/hrkmtsmt/digicons-file"}
              cta={"Open in Github"}
            />
          </li>
        </ul>
      </Full>
    </Section>
  );
};
