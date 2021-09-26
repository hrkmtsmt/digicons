import { Switch, Route } from "react-router-dom";
import { About } from "../../src/pages/about";
import { Home } from "../../src/pages";

export const path = {
  home: "/",
  about: "/about",
};
export const Router = () => {
  return (
    <Switch>
      <Route exact={true} path={path.home}>
        <Home />
      </Route>
      <Route exact={true} path={path.about}>
        <About />
      </Route>
    </Switch>
  );
};
