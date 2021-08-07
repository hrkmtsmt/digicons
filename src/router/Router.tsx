import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
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
