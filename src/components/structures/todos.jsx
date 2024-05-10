import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const TodosComponent = () => {

  const [count, setCount] = useState(0);

  //click button and return +1
  const handleAddNumber = () => {
    setCount(count + 1);
  };
 
  const [data, setData] = useState([]);

  const counterTodoList = useCallback(() => {
    return new Array(count).fill("").map((_, index) => `Number ${index + 1}`);
  }, [count]);

  useEffect(() => {
    const newData = counterTodoList();
    console.log("one more render", newData);
    setData(newData);
  }, [counterTodoList]);

  return (
    <div style={{ border: "1px solid red", margin: "70px", padding: "30px" }}>
      TodosComponent
      <p>Number:{count} </p>
      <button onClick={handleAddNumber}>AddNumber</button>
      <div>
        :{" "}
        {data.map((todo) => (
          <div style={{ width: "100%" }} key={todo}>
            <div>{todo}</div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default TodosComponent;
