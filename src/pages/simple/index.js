import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/birthdayReminder">Birthday Reminder</Link>
        </li>
      </ul>
    </section>
  );
};

export default index;
