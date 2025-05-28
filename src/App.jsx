import TodoList from "./Components/TodoList"
import './App.css';
import { createTheme,ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./Context/TodoContext";
import {v4 as idNumb} from 'uuid'
import { useState } from 'react';


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
  
  return (
    <ThemeProvider theme={theme}>

    <div className="app" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh", color:"white", fontFamily:"fontTen"}}>
  
     <TodosContext.Provider value={{todos , setTodos}}>
    <TodoList/>
     </TodosContext.Provider>
      {/* <h1 className="" style={{fontFamily:"fontTen"}}>هالا مدريد</h1> */}
    </div>  

    </ThemeProvider>

  )
}

export default App
