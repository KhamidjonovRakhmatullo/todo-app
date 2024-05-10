import React, { useState } from "react";
import {
  TextWrapper,
  TodoContainer,
  TodoTitle,
  TodoWrapper,
} from "../../styles/todoStyle01";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoApp01Component = () => {
  ///road map of useEffect

  // useEffect(()=> {
  //   //the code that you want to run
  //    console.log ("show: ", count)
  //   //optional return function
  //   return()=>{
  //     console.log ("Clean up")
  //   }
  // }, [count])  //depency the array

  /////result count
  // const [count, setCount] = useState(0);

  // const counterTodoList = useCallback(() => {
  //   return new Array(count).fill("").map((_, index) => `Number ${index + 1}`);
  // }, [count]);

  //input text

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const dataValue = e.target.value;
    console.log(dataValue);
    setText(dataValue);
  };

  //input add array
  const [box, setBox] = useState([]);

  
  function handleAddText() {
    if (text !== "") {
      setBox((prevTexts) => [...prevTexts, text]);
      setText("");
    }
  }

  // reset all todos
  const resetInput = () => {
    setBox([]);
  };
  // reset a todo
  const resetBox = () => {
    setBox([]);
  };

  return (
    <TodoContainer>
      <TodoWrapper>
        <TodoTitle>Todo App</TodoTitle>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "10px",
          }}
        >
          <TextField
            onChange={handleChange}
            value={text}
            id="outlined-multiline-flexible"
            label="Add your new todo"
            size="small"
            multiline
            maxRows={4}
            fullWidth
            sx={{}}
          />
          <Button variant="contained" color="secondary" onClick={handleAddText}>
            {<AddIcon />}
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px 0px",
            overflow: "scroll",
          }}
        >
          {box.map((value, key) => (
            <TextWrapper key={key}>
              {value}
              <IconButton
                aria-label="delete"
                onClick={resetBox}
                sx={{ padding: "0px" }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </TextWrapper>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p>You have {box.length} pending tasks</p>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={resetInput}
          >
            Clear All
          </Button>
        </div>
      </TodoWrapper>
    </TodoContainer>
  );
};

export default TodoApp01Component;
