import React, { useState } from "react";

const GroceryBud = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [idItem, setIdItem] = useState(0);
  const addItem = (e, name) => {
    e.preventDefault();
    setIdItem(idItem++);
    setGroceryItems([...groceryItems, { id: idItem, name: name }]);
  };
  return (
    <section>
      <h1>Grocery Bud</h1>
      <Searcher addItem={addItem} />
      <List groceryItems={groceryItems} />
    </section>
  );
};

const Searcher = (props) => {
  const { addItem } = props;
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          addItem(e, name);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

const List = ({ groceryItems }) => {
  console.log(groceryItems);
  return (
    <ul>
      {groceryItems.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

export default GroceryBud;
