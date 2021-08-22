import React from "react";
import { Head } from "../src/components/helmet";
import { Layout } from "../src/components/layout";
import { Router } from "../src/router/router";
export default function App() {
  return (
    <React.Fragment>
      <Head />
      <Layout>
        <Router />
      </Layout>
    </React.Fragment>
  );
}
