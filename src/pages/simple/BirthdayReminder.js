import React from "react";
import { data } from "../../pages/data";
const BirthdayReminder = () => {
  return (
    <React.Fragment>
      <section className="container">
        <ul className="list-group mt-5">
          {data.map((person) => {
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
      </section>
    </React.Fragment>
  );
};

export default BirthdayReminder;
