import React from 'react'
import { useState } from 'react';

const UseStateChangesComponent = () => {
     
  const [active, setActive] = useState(true);

    const handleToggle = () => {
    setActive((prevState) => !prevState);
    console.log(active);
  };

  const colors = {
    color: active ? "blue" : "orange",
  };
  return (
    <div style={{border :"1px solid blue",margin: "60px", padding: "30px"}}>
        UseStateChangesComponent

        <p style={colors}> this is -active</p>

        <button onClick={handleToggle}>Toggle - setActive</button>

    </div>
  )
}

export default UseStateChangesComponent