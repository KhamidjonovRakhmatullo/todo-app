import React, { useEffect, useState } from "react";
import { TextWrapper } from "../../styles/todoStyle01";

const CounterComponent = ({ counterTodoList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = counterTodoList();

    console.log ("one more render", newData)
    // console.log("new data", newData);
    setData(newData);
  }, [counterTodoList]);

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: 'start', border :"1px solid red",}}>
      Counter:{" "}
      {data.map((todo) => (
        <div style={{width:"100%"}} key={todo}>
          <TextWrapper>{todo}</TextWrapper>
        </div>
        
      ))}
    </div>
  );
};

export default CounterComponent;
