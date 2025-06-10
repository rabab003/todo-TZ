// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import Todo from './Todo';
// import { Grid } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { useState, useContext, useEffect , useMemo} from 'react';
// import { TodosContext } from '../Context/TodoContext';
// import {v4 as idNumb} from 'uuid'
 
// export default function TodoList() {

//   const {todos,setTodos} = useContext(TodosContext)
//   const[showDeleteDialog , setShowDeleteDialog] = useState(false)
//   const [titleInput , setTitleInput] = useState("")
//   const [displayedTodosType , setDisplayedTodosType]=useState("all")

   
//   const completedTodos =  useMemo(()=>{
//     return todos.filter((t)=>{
//     return t.isCompleted
//   })  
//   },[todos])
 
//    const notCompletedTodos = useMemo(()=>{
//     return todos.filter((t)=>{
//     return !t.isCompleted
//   })  
//    },[todos]) 
   
 
//   let todosToBeRendered = todos

//   if(displayedTodosType == "completed"){
//     todosToBeRendered = completedTodos
//   }else if(displayedTodosType == "non-completed"){
//     todosToBeRendered = notCompletedTodos
//   }else{
//     todosToBeRendered = todos
//   }


//   function handleAlignment(e){
//     console.log("hi")
//     setDisplayedTodosType(e.target.value)
//   }

//   useEffect(()=>{
//     console.log("useEffect is running")
//     const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
//     setTodos(storageTodos)
//   }, [])


//   // handler



//   function handelAddClick(){
//   const newTodo={
//     id:idNumb(),
//     title: titleInput,
//     details:"",
//     isCompleted: false
//   }

//   const updateTodos = [...todos , newTodo]
//   setTodos(updateTodos)
//   localStorage.setItem("todos", JSON.stringify(updateTodos))
   
//   setTitleInput("")

//   }


//   function openDeleteDialog(){
//     setShowDeleteDialog(true)

//   }


//     function handelDeleteConfirm(){
//       const updatedTodos = todos.filter((t)=>{
//         return t.id != todo.id
//       })
//       setTodos(updatedTodos)
//       localStorage.setItem("todos", JSON.stringify(updatedTodos))

// } 
  
//   const todosJsx = todosToBeRendered.map((t) =>{
//     return <Todo key={t.id} todo={t} openDeleteDialog={openDeleteDialog}/>
//   })

//             return (
//              <>

//             {/* delete modal */}
//             <Dialog
//               open={showDeleteDialog}
//               onClose={handleDeleteClose}
//               aria-labelledby="alert-dialog-title"
//               aria-describedby="alert-dialog-description"
//             >
//               <DialogTitle id="alert-dialog-title">
//                 {"Use Google's location service?"}
//               </DialogTitle>
//               <DialogContent>
//                 <DialogContentText id="alert-dialog-description">
//                   Let Google help apps determine location. This means sending anonymous
//                   location data to Google, even when no apps are running.
//                 </DialogContentText>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleDeleteClose}>close</Button>
//                 <Button onClick={handelDeleteConfirm} style={{color:"red", background:"red"}} autoFocus>
//                   delete
//                 </Button>
//               </DialogActions>
//             </Dialog>
//             {/*========== delete modal ==========*/}
             
             
//               {/* edit modal */}
//               <Dialog
//                 open={showUpdateDialog}
//                 onClose={handleUpdateClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//               >
//         <DialogTitle id="alert-dialog-title">
//         edit task        
//         </DialogTitle>
        
//         <DialogContent>
//           <TextField
//           value={updateTodo.title}
//           onChange={(e)=>{
//             setUpdateTodo({...updateTodo, title:e.target.value})
//           }}
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="text"
//             label=" task title"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//           value={updateTodo.details}
//           onChange={(e)=>{
//             setUpdateTodo({...updateTodo, details:e.target.value})
//           }}
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="text"
//             label=" task details"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleUpdateClose}>close</Button>
//           <Button onClick={handleUpdateConfirm} style={{color:"red", background:"red"}} autoFocus>
//             edit
//           </Button>
//         </DialogActions>

//               </Dialog>
//              {/*========== edit modal ==========*/}


//       <Container maxWidth="sm">
//               <Card variant="outlined" sx={{ minWidth: 275 }} style={{maxHeight:"80vh", overflowBlock:"scroll"}}>
//                   <CardContent>
//                        <Typography variant='h4' gutterBottom>my tasks</Typography>
//                        <Divider style={{color:"white"}} />

//                        {/* filter button */}
//                            <ToggleButtonGroup 
//                                   value={displayedTodosType}
//                                   onChange={handleAlignment}
//                                   exclusive
//                                    aria-label="text alignment">

//                                   <ToggleButton value="all" 
//                                   style={{fontFamily:"fontTen", fontWeight:'normal'}}>
//                                     all
//                                   </ToggleButton>
//                                   <ToggleButton value="done" 
//                                   style={{fontFamily:"fontTen", fontWeight:'normal'}}>
//                                     done
//                                   </ToggleButton>
//                                   <ToggleButton value="not-yet" 
//                                   style={{fontFamily:"fontTen", 
//                                     fontWeight:'normal'}} 
//                                    >
//                                     not yet
//                                   </ToggleButton>
                                  
//                            </ToggleButtonGroup>
//                        {/* ====== filter button ======*/}
//                        {todosJsx} 


//                         <Grid container style={{ marginTop: "20px" }} spacing={2}>
//                               <Grid
//                                 xs={8}
//                                 display="flex"
//                                 justifyContent="space-around"
//                                 alignItems="center"
//                               >
//                                 <TextField
//                                   style={{ width: "100%" }}
//                                   id="outlined-basic"
//                                   label="task title "
//                                   variant="outlined"
//                                   value={titleInput}
//                                   onChange={(e)=>{
//                                     setTitleInput(e.target.value)
//                                   }}
//                                 />
//                               </Grid>
                  
//                               <Grid
//                                 xs={4}
//                                 display="flex"
//                                 justifyContent="space-around"
//                                 alignItems="center"
//                               >
//                                 <Button
//                                   style={{ width: "100%", height: "100%" }}
//                                   variant="contained"
//                                   onClick={()=>{
//                                     handelAddClick()
//                                   }}
//                                   disabled={titleInput.length == 0}
//                                 >
//                                   add
//                                 </Button>
//                               </Grid>
//                         </Grid>
//           {/*== INPUT + ADD BUTTON ==*/}
//                   </CardContent>
//               </Card>
//       </Container>
//              </>
//   ) ;
// }



import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useContext, useEffect, useMemo } from 'react';
import { TodosContext } from '../Context/TodoContext';
import {v4 as idNumb} from 'uuid';

export default function TodoList() {
  const {todos, setTodos} = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [updateTodo, setUpdateTodo] = useState({title: "", details: ""});

  const completedTodos = useMemo(() => {
    return todos.filter((t) => t.isCompleted);
  }, [todos]);

  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => !t.isCompleted);
  }, [todos]);

  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  }

  function handleAlignment(e) {
    setDisplayedTodosType(e.target.value);
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storageTodos);
  }, []);

  function handelAddClick() {
    const newTodo = {
      id: idNumb(),
      title: titleInput,
      details: "",
      isCompleted: false
    };

    const updateTodos = [...todos, newTodo];
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTitleInput("");
  }

  function showDelete(todo) {
    setTodoToDelete(todo);
  }

  function showUpdate(todo) {
    setTodoToUpdate(todo);
    setUpdateTodo({title: todo.title, details: todo.details});
  }

  function handleDeleteClose() {
    setTodoToDelete(null);
  }

  function handleUpdateClose() {
    setTodoToUpdate(null);
  }

  function handelDeleteConfirm() {
    const updatedTodos = todos.filter((t) => t.id !== todoToDelete.id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodoToDelete(null);
  }

  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todoToUpdate.id) {
        return {...t, title: updateTodo.title, details: updateTodo.details};
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodoToUpdate(null);
  }

  const todosJsx = todosToBeRendered.map((t) => (
    <Todo key={t.id} todo={t} showDelete={showDelete} showUpdate={showUpdate} />
  ));

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={Boolean(todoToDelete)}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Cancel</Button>
          <Button onClick={handelDeleteConfirm} style={{color: "red"}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Update Dialog */}
      <Dialog
        open={Boolean(todoToUpdate)}
        onClose={handleUpdateClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            value={updateTodo.title}
            onChange={(e) => setUpdateTodo({...updateTodo, title: e.target.value})}
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="Task Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            value={updateTodo.details}
            onChange={(e) => setUpdateTodo({...updateTodo, details: e.target.value})}
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="Task Details"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Cancel</Button>
          <Button onClick={handleUpdateConfirm} style={{color: "green"}} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ minWidth: 275 }} style={{maxHeight: "80vh", overflowBlock: "scroll"}}>
          <CardContent>
            <Typography variant='h4' gutterBottom>my tasks</Typography>
            <Divider style={{color: "white"}} />

            {/* Filter Buttons */}
            <ToggleButtonGroup 
              value={displayedTodosType}
              onChange={handleAlignment}
              exclusive
              aria-label="text alignment"
            >
              <ToggleButton value="all" style={{fontFamily: "fontTen", fontWeight: 'normal'}}>
                all
              </ToggleButton>
              <ToggleButton value="done" style={{fontFamily: "fontTen", fontWeight: 'normal'}}>
                done
              </ToggleButton>
              <ToggleButton value="not-yet" style={{fontFamily: "fontTen", fontWeight: 'normal'}}>
                not yet
              </ToggleButton>
            </ToggleButtonGroup>

            {todosJsx}

            <Grid container style={{ marginTop: "20px" }} spacing={2}>
              <Grid xs={8} display="flex" justifyContent="space-around" alignItems="center">
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="task title"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                />
              </Grid>
              <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center">
                <Button
                  style={{ width: "100%", height: "100%" }}
                  variant="contained"
                  onClick={handelAddClick}
                  disabled={titleInput.length === 0}
                >
                  add
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}