import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={"l-header"}>
      <div className={"l-header-inner"}>
        <BrowserRouter>
          <Link className={"c-logo"} to={"/"}>
            digicons
          </Link>
          <Link to={"/about"}>About</Link>
        </BrowserRouter>
      </div>
    </header>
  );
};
