import React, { useState, useEffect } from "react";

import { data } from "../../pages/data";
const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const [addUser, setAddUser] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [gender, setGender] = useState("");

  const deletePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  const addNewIntegrant = function (e) {
    e.preventDefault();
    if (name !== "") {
      setPeople((people) => {
        const newPeople = [
          ...people,
          {
            id: new Date().getTime().toString(),
            name,
            age,
            birthdayDate,
            gender,
          },
        ];
        return newPeople;
      });
      setName("");
      setAddUser(false);
    } else {
      alert("You should type a name first");
    }
  };

  useEffect(() => {
    console.log("component rendered");
  });

  return (
    <React.Fragment>
      <section className="container">
        <button
          type="button"
          className="btn btn-danger mt-5"
          onClick={() => setAddUser(!addUser)}
        >
          Add new integrant
        </button>
        {addUser && (
          <form>
            <div className="input-group mt-2 mb-2">
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-group mt-2 mb-2">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                id="age"
                className="form-control"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="input-group mt-2 mb-2">
              <label htmlFor="birthdayDate">Birthday Date</label>
              <input
                type="text"
                name="birthdayDate"
                id="birthdayDate"
                className="form-control"
                onChange={(e) => {
                  setBirthdayDate(e.target.value);
                }}
              />
            </div>
            <div className="input-group mt-2 mb-2">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                name="gender"
                id="gender"
                className="form-control"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
              onClick={addNewIntegrant}
            >
              Add
            </button>
          </form>
        )}
        <ul className="list-group mt-5">
          {people.map((person) => {
            const { id, name, age, birthdayDate, gender } = person;
            return (
              <li className="list-group-item" key={id}>
                <h4>{name}</h4>
                <div className="flex">
                  <span className="mr-5">{age}</span>
                  <span className="mr-5">{birthdayDate}</span>
                  <span className="mr-5">{gender}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePerson(id)}
                  >
                    Delete
                  </button>
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
