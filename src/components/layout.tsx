import React from "react";
import { Header } from "../../src/components/header";
import { Footer } from "../../src/components/footer";
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
