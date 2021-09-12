import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "../../src/pages/about";
import { Home } from "../pages/home";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} render={() => <Home />} />
        <Route exact path={"/about"} render={() => <About />} />
      </Switch>
    </BrowserRouter>
  );
};
