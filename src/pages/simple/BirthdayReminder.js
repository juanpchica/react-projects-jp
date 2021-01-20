import React, { useState, useEffect } from "react";

import { data } from "../../pages/data";
const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    console.log("component rendered");
  });
  return (
    <React.Fragment>
      <section className="container">
        <ul className="list-group mt-5">
          {people.map((person) => {
            return (
              <li className="list-group-item" key={person.id}>
                <h4>{person.name}</h4>
                <div className="flex">
                  <span className="mr-5">{person.age}</span>
                  <span className="mr-5">{person.birthdayDate}</span>
                  <span>{person.gender}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <button
          className="btn btn-success btn-large mt-5"
          type="button"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </React.Fragment>
  );
};

export default BirthdayReminder;
