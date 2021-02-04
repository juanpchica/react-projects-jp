import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/birthdayReminder">Birthday Reminder</Link>
        </li>
        <li className="list-group-item">
          <Link to="/tours">Tours</Link>
        </li>
        <li className="list-group-item">
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="list-group-item">
          <Link to="/accordion">Accordion</Link>
        </li>
        <li className="list-group-item">
          <Link to="/menu">Menú</Link>
        </li>
        <li className="list-group-item">
          <Link to="/tabs">Tabs</Link>
        </li>
        <li className="list-group-item">
          <Link to="/Slider">Slider</Link>
        </li>
        <li className="list-group-item">
          <Link to="/loremp">Lorem Ipsum</Link>
        </li>
        <li className="list-group-item">
          <Link to="/ColorGenerator">Color Generator</Link>
        </li>
      </ul>
    </section>
  );
};

export default index;
