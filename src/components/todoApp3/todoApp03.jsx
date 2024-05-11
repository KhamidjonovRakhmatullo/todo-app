import React, { useState } from "react";
import {
  AddButton,
  InputAndButtonWrapper,
  InputBox,
  TodoApp03Box,
  TodoApp03Container,
  TodoTitle,
} from "../../styles/todoStyle03";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const TodoApp03Component = () => {
  const [text, setText] = useState("");
  const [box, setBox] = useState([]);

  const handleChange = (e) => {
    const InputData = e.target.value;
    //  console.log( InputData)
    setText(InputData);
  };

  function HandleClicked() {
    if (text !== "") {
      setBox((prevState) => [...prevState, text]);
      setText("");
      // console.log (setBox)
    }
  }

  function handleDeleted() {
    setBox([])
    alert ("Deleted")
  }

  return (
    <TodoApp03Container>
      <TodoApp03Box>
        <TodoTitle>To-Do List App</TodoTitle>
        <InputAndButtonWrapper>
          <TextField
            onChange={handleChange}
            value={text}
            id="outlined-multiline-flexible"
            label="Enter Task"
            size="small"
            color="info"
            multiline
            maxRows={4}
            fullWidth
            sx={{ backgroundColor: "#ffff", borderRadius: "8px" }}
          />
          <AddButton onClick={HandleClicked}>Add</AddButton>
        </InputAndButtonWrapper>

        <div style={{overflow: "scroll"}}>
          {box.map((value, key) => (
            <div key={key}>
              <InputBox>
                <div>{value}</div>
                <div style={{display: "flex", gap: "10px"}}>
                  {" "}
                  <Button variant="contained" color="success" size="small">
                    Edit
                  </Button>
                  <Button variant="contained" color="primary" size="small" onClick={handleDeleted}>
                    Delete
                  </Button>
                </div>
              </InputBox>
            </div>
          ))}
        </div>
      </TodoApp03Box>
    </TodoApp03Container>
  );
};

export default TodoApp03Component;
