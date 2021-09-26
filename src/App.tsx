import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Head } from "../src/components/helmet";
import { Layout } from "../src/components/layout";
import { Router } from "../src/router/router";
export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Head />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}
