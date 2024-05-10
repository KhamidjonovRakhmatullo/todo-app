import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const WorkingApiData = () => {

  const [toDoList, setTodoList] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  // console.log(toDoList);
  return (
    <div style={{border: "1px solid black", margin: "40px", padding: "30px"}}>
       WorkingApiDataComponent

                <div>
        <h1>ToDo data list:</h1>
        {Array.isArray(toDoList) &&
          toDoList.map((todo) => <div key={todo.id}>{todo.title} </div>)}
      </div>

    </div>
  )
}

export default WorkingApiData