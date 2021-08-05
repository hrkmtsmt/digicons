import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { Section } from "./components/section";
import { LinkButton } from "./components/link-button";
import { LinkButtonBorder } from "./components/link-button-border";
import { Loop } from "./components/Loop";
import "./styles/reset.css";
import "./styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Section
        title={"cat"}
        category={null}
        desc={
          "digiconsは日本のエンジニア向けに最適化されたアイコンを提供します。"
        }
      >
        <div className={"l-grid-full"}>
          <ul className={"c-nav-horizonal"}>
            <li className={"c-nav-item"}>
              <LinkButton link={"/"} cta={"Download"} />
            </li>
            <li className={"c-nav-item"}>
              <LinkButtonBorder link={"/"} cta={"Open in Github"} />
            </li>
          </ul>
        </div>
      </Section>
      <Loop />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
