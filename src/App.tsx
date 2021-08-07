import React from "react";
import { Head } from "./components/head";
import { Layout } from "./components/layout";
import { Router } from "./router/Router";
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
