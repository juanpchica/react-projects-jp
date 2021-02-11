import React, { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editID, setEditID] = useState(null);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please fill out all fields", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, name: name };
          }
          return item;
        })
      );

      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "Value changed", "success");
    } else {
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), name: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearItems = function () {
    setList([]);
    showAlert(true, "All items removed", "danger");
  };

  const removeItem = (id) => {
    setList((list) => {
      const newList = list.filter((item) => item.id != id);
      return newList;
    });
    showAlert(true, "Item removed", "danger");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.name);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {alert.show && (
          <Alert action={alert} removeAlert={showAlert} list={list} />
        )}
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
          <List items={list} removeItem={removeItem} editItem={editItem} />
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
  const list = props.list;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={"alert alert-" + type} role="alert">
      {msg}
    </div>
  );
};

const List = ({ items, removeItem, editItem }) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => editItem(item.id)}
            >
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
