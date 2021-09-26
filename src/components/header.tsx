import React from "react";
import { Link } from "react-router-dom";
import { path } from "../router/router";

export const Header = () => {
  return (
    <header className={"l-header"}>
      <div className={"l-header-inner"}>
        <Link className={"c-logo"} to={path.home}>
          digicons
        </Link>
        <Link to={path.about}>About</Link>
      </div>
    </header>
  );
};
