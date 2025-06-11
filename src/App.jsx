import TodoList from "./Components/TodoList"
import './App.css';
import { createTheme,ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./Context/TodoContext";
import {v4 as idNumb} from 'uuid'
import { useState } from 'react';
import MySnackBar from "./Components/MySnackBar";

import {ToastContext} from "./Context/ToastContext"

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


function App() {

    const [todos , setTodos] = useState(todosIni);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    function showHideToast(message){
      setOpen(true)
      setMessage(message)

      setTimeout(() => {
        setOpen(false)
      }, 2000);
    }
  
  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{showHideToast}}>

    <div className="app" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh", color:"white", fontFamily:"fontTen"}}>
      <MySnackBar open={open} message={message}/>

     <TodosContext.Provider value={{todos , setTodos}}>
    <TodoList/>
     </TodosContext.Provider>
    </div>  

      </ToastContext.Provider>
    </ThemeProvider>
  )
}

export default App
