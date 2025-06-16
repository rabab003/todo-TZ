import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TodosContext } from "../Context/TodoContext";
import { useTodos } from "../Context/TodoContext";

import { useToast } from "../Context/ToastContext";

export default function Todo({ todo, showDelete, showUpdate }) {
  // const { todos, setTodos } = useContext(TodosContext);

  const { showHideToast } = useToast();
  const { todos, dispatch } = useTodos();

  function handleCheckClick() {
    dispatch({ type: "toggleCompleted", payload: todo });
    showHideToast("this task done ");
  }

  return (
    <div>
      <Card
        className="todoCard"
        sx={{ minWidth: 275, color: "white", marginTop: 5 }}
        variant="outlined"
      >
        <CardContent>
          <Grid container spacing={1}>
            <Grid size={8}>
              <Typography
                style={{
                  textAlign: "left",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
                variant="h5"
                gutterBottom
              >
                {todo.title}
              </Typography>
              <Typography
                style={{ textAlign: "right" }}
                variant="h7"
                gutterBottom
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              size={4}
            >
              <IconButton
                onClick={handleCheckClick}
                className="iconBtn"
                aria-label="check"
                style={{
                  background: todo.isCompleted ? "black" : "White",
                  color: todo.isCompleted ? "#8bc34a" : "White",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                onClick={() => showUpdate(todo)}
                className="iconBtn"
                aria-label="edit"
                style={{ color: "blue", border: "solid blue 3px" }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                className="iconBtn"
                aria-label="delete"
                style={{ color: "red", border: "solid red 3px" }}
                onClick={() => showDelete(todo)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
