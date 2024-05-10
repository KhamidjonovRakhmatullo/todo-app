import React, { useState } from "react";
import {
  TextBoxWrapper,
  TodoApp02Box,
  TodoBox,
  TodoBox02Container,
} from "../../styles/todoApp02";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoApp02Component = () => {
  ///return input
  const [event, setEvent] = useState("");
  const [box, setBox] = useState([]);

  const handleChange = (e) => {
    const dataValue = e.target.value;
    // console.log(dataValue);
    setEvent(dataValue);
  };

  //retun input when clicked button
  function handleAddText() {
    if (event !== "") {
      setBox((prevText) => [...prevText, event]);
      setEvent("");
    }
  }

  function handleClicked(){
    setBox([]);
  }

  return (
    <TodoBox02Container>
      <TodoApp02Box>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <TextField
            onChange={handleChange}
            value={event}
            id="outlined-multiline-flexible"
            label="Text...."
            size="small"
            multiline
            maxRows={4}
            fullWidth
            sx={{}}
          />
          <Button variant="contained" color="primary" onClick={handleAddText}>
            add
          </Button>
        </div>
        <TextBoxWrapper>
          {box.map((value, key) => (
            <div key={key}>
              <TodoBox>
                {value}
                <DeleteIcon
                  onClick={handleClicked}
                  style={{
                    padding: "8px",
                    backgroundColor: "#232377e9",
                    color: "white",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </TodoBox>
            </div>
          ))}
        </TextBoxWrapper>
      </TodoApp02Box>
    </TodoBox02Container>
  );
};

export default TodoApp02Component;
