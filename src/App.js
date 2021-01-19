import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";

//CSS Styles
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Simple />
        </Route>
        <Route path="/advanced">
          <Advanced />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
