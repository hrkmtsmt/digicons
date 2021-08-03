import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout: React.VFC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main className={"l-main"}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};
