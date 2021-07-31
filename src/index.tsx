import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/layout";
import { Section } from "./components/section";
import { IconBox } from "./components/icon-box";
import { LinkButton } from "./components/link-button";
import { LinkButtonBorder } from "./components/link-button-border";
import { Loop } from "./components/Loop";
import "./styles/reset.css";
import "./styles/style.scss";

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Loop />
            <Section title={"cat"} desc={"こんにちは"}>
                <div className={"l-grid-full"}>
                    <ul className={"c-nav-horizonal"}>
                        <li className={"c-nav-item"}>
                            <LinkButton link={"/"} cta={"Download"} />
                        </li>
                        <li className={"c-nav-item"}>
                            <LinkButtonBorder
                                link={"/"}
                                cta={"Open in Github"}
                            />
                        </li>
                    </ul>
                </div>
            </Section>
            <Section title={"cat"} desc={"こんにちは"}>
                <IconBox
                    id={"a"}
                    svg={"<></>"}
                    image={"https://h"}
                    title={"a"}
                    icon={"a"}
                />
            </Section>
        </Layout>
    </React.StrictMode>,
    document.getElementById("root")
);
