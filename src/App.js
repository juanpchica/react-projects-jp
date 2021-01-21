import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
import BirthdayReminder from "./pages/simple/BirthdayReminder";
import Tours from "./pages/simple/Tours";
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
        <Route path="/birthdayReminder">
          <BirthdayReminder />
        </Route>
        <Route path="/tours">
          <Tours />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
