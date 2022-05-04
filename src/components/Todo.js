import React from "react";
import { ACTION } from "./TodoApp";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import SnoozeIcon from "@mui/icons-material/Snooze";
  /* eslint-disable */
function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "green" : "red", marginLeft: 20 }}>
        {todo.name}
      </span>

  
      <Button
        sx={{ m: 1.5 }}
        variant="outlined"
        startIcon={<SnoozeIcon />}
        type="button"
        onClick={() =>
          dispatch({
            type: ACTION.TOGGLE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Toggle
      </Button>

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={() =>
          dispatch({
            type: ACTION.DELETE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Delete
      </Button>
  
    </div>
  );
}

export default Todo;
