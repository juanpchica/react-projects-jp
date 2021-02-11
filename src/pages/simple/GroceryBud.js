import React, { useState } from "react";

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), name: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <input
          type="text"
          className="form-control"
          placeholder="e.g eggs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-default">
          {isEditing ? "Update" : "Submit"}
        </button>
      </form>

      <List list={list} />
    </section>
  );
};

const Alert = () => {
  return <section>alert</section>;
};

const List = (props) => {
  const list = props.list;

  return (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default GroceryBud;
