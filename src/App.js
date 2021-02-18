import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
import BirthdayReminder from "./pages/simple/BirthdayReminder";
import Tours from "./pages/simple/Tours";
import Reviews from "./pages/simple/Reviews";
import Accordion from "./pages/simple/Accordion";
import Menu from "./pages/simple/Menu";
import Tabs from "./pages/simple/Tabs";
import Slider from "./pages/simple/Slider";
import Loremp from "./pages/simple/Loremp";
import GroceryBud from "./pages/simple/GroceryBud";
import ColorGenerator from "./pages/simple/ColorGenerator";
import NavbarIn from "./pages/simple/NavbarIn";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
import Navbar from "./pages/Modal";

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
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/accordion">
          <Accordion />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route path="/slider">
          <Slider />
        </Route>
        <Route path="/loremp">
          <Loremp />
        </Route>
        <Route path="/ColorGenerator">
          <ColorGenerator />
        </Route>
        <Route path="/GroceryBud">
          <GroceryBud />
        </Route>
        <Route path="/Navbar">
          <NavbarIn />
        </Route>
        <Route path="/modal">
          <Modal />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
