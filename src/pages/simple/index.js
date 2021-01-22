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
      </ul>
    </section>
  );
};

export default index;
