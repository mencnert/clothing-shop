import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route, Switch } from "react-router-dom";

//TODO: create HatsPage in pages
const HatsPage = () => {
  return <div>Hats page</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/shop/hats"} component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
