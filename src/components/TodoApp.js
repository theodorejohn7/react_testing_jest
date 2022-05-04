import { useState, useReducer } from "react";
import Todo from "./Todo";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const ACTION = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, createTodo(action.payload.name)];

    case ACTION.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function createTodo(name) {
  return {
    id: Date.now(),
    name: name,
    completed: false,
  };
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTION.ADD_TODO,
      payload: {
        name: name,
      },
    });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          variant="outlined"
          maxWidth="sm"
          sx={{
            p: 5,
            bgcolor: "info.main",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            boxShadow: 24,

            maxWidth: 650,
            borderRadius: 5,

            m: 1,
          }}
        >
          <Typography variant="h4" gutterBottom component="div">
            To-do List
          </Typography>

          <Typography  gutterBottom component="div">
            [Use Toggle button while we start working & Use Delete button while completing the to-do]
          </Typography>

          <Box
            sx={{
             
              "& > :not(style)": {
                m: 1,
                width: 650,
                height: 60,
 
              },
            }}
            alignItems="flex-end"
          >
            <Paper elevation={3}>
              <TextField
                sx={{
                  width: 600,
                }}
                id="filled-basic"
                label="Key-in your Todo activity"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Paper>

            {todos.map((todo) => (
              <Paper key={todo} elevation={3}>

                <Todo dispatch={dispatch} todo={todo} />
              </Paper>
            ))}
          </Box>
       
        </Card>
      </form>
    </>
  );
}
