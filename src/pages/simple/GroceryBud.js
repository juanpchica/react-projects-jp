import React, { useState } from "react";

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("works");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
    </section>
  );
};

export default GroceryBud;
