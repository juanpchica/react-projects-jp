import React, { useEffect, useState } from "react";

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: "Please fill out all fields",
        type: "danger",
      });
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), name: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearItems = function () {
    setList([]);
    showAlert(true, "All items removed", "success");
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert(show, msg, type);
  };

  const removeItem = (id) => {
    setList((list) => {
      const newList = list.filter((item) => item.id != id);
      return newList;
    });
    showAlert(true, "Item removed", "danger");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert action={alert} removeAlert={showAlert} />}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button
            type="button"
            className="btn btn-default"
            onClick={clearItems}
          >
            Clear all
          </button>
        </div>
      )}
    </section>
  );
};

const Alert = (props) => {
  const { show, msg, type } = props.action;
  const removeAlert = props.removeAlert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={"alert alert-" + type} role="alert">
      {msg}
    </div>
  );
};

const List = ({ items, removeItem }) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name}
            <button type="button" className="btn btn-success">
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GroceryBud;
