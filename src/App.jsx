import TodoList from "./Components/TodoList"
import './App.css';
import { createTheme,ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./Context/TodoContext";
import {v4 as idNumb} from 'uuid'
import { useState } from 'react';
import MySnackBar from "./Components/MySnackBar";

import { ToastProvider } from "./Context/ToastContext";

const theme = createTheme({
    typography:{
      fontFamily:[ "fontTen"]
    }
})

const todosIni = [
  { 
    id:idNumb(),
    title: "task 1",
    details:"loremmmmmmmmmmmmm",
    isCompleted: false

  },
  { 
    id:idNumb(),
    title: "task 2",
    details:"loremmmmmmmmmmmmm",
    isCompleted: false

  },
  { 
    id:idNumb(),
    title: "task 3",
    details:"loremmmmmmmmmmmmm",
    isCompleted: false

  },
]


export default function App() {

    const [todos , setTodos] = useState(todosIni);
  
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>

    <div className="app" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh", color:"white", fontFamily:"fontTen"}}>

    
     <TodosContext.Provider value={{todos , setTodos}}>
        <TodoList/>
     </TodosContext.Provider>
    </div>  

      </ToastProvider>
    </ThemeProvider>
  )
}

