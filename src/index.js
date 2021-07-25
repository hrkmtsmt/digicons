import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { Section } from "./components/section";
import { IconBox } from "./components/icon-box";
import { LinkButton } from "./components/link-button";
import { LinkButtonBorder } from "./components/link-button-border";
import "./styles/reset.css";
import "./styles/style.scss";

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Section title={"cat"} desc={"こんにちは"}>
                <div className={"l-grid-full"}>
                    <LinkButton cta={"Download"} />
                    <LinkButtonBorder cta={"Open in Github"} />
                </div>
            </Section>
            <Section title={"cat"}>
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
            </Section>
        </Layout>
    </React.StrictMode>,
    document.getElementById("root")
);
