import TodoList from "./Components/TodoList"
import './App.css';
import { createTheme,ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    typography:{
      fontFamily:[ "fontTen"]
    }
})


function App() {

  return (
    <ThemeProvider theme={theme}>

    <div className="app" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh", color:"white"}}>
    <TodoList/>
      {/* <h1 className="" style={{fontFamily:"fontTen"}}>هالا مدريد</h1> */}
    </div>  

    </ThemeProvider>

  )
}

export default App
