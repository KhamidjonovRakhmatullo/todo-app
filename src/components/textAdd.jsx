import React from "react";
import { useState } from "react";

const TextAddComponent = () => {
  const [text, setText] = useState("")
  const handleChange = (e) => {
    setText  (e.target.value)

  }

  const [malumot, setMalumot] = useState("")
  

  const resetInput =()=> {
    setText("")
    setMalumot("")
  }

  const handleSubmit = (e) => {
    e.preventDefautl()
     const event = {
      text: text,
      malumot: malumot
     }
     console.log (event)
     resetInput()
  }
   
  return (
    <div style={{ border: "1px solid green", margin: "60px", padding: "30px" }}>

      TextAddComponent
      <input type="text"  onChange={handleChange} value={text}/>
      <div>:{text}</div>

      AddEvent<input type="text"  onChange={(e) => setMalumot (e.target.value)} value={malumot}/>
      <li>{malumot}</li>
      <button onClick={resetInput}>clear</button>
      <button onSubmit={handleSubmit}>Add</button>

    </div>
  );
};

export default TextAddComponent;
