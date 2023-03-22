import React from "react";
import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["New York", "London", "Dallas", "Little Rock", "Miami"];

  const handleClick = (e: MouseEvent) => {
    console.log(e)
  }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
