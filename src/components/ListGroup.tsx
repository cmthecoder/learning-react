import { useState } from "react";

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  let items = ["New York", "London", "Dallas", "Little Rock", "Miami"];



  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
