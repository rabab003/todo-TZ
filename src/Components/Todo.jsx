import React from 'react'
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import  {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';


// icons
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { TodosContext } from '../Context/TodoContext';
import { useContext ,useState} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const open = false
export default function Todo({todo}) {


     const {todos , setTodos} = useContext(TodosContext);
     const[showDeleteDialog , setShowDeleteDialog] = useState(false)
     const[showUpdateDialog , setShowUpdateDialog] = useState(false)
     const [updateTodo, setUpdateTodo] = useState({title: todo.title, details:todo.details})
  
    // event handlers
    function handelDeleteClick(){
      setShowDeleteDialog(true)
    }
    function handelUpdateClick(){
      setShowUpdateDialog(true)
    }
    function handleDeleteClose(){
      setShowDeleteDialog(false)
    }
    function handleUpdateClose(){
      setShowUpdateDialog(false)
    }

   function handleUpdateConfirm(){
const updatedTodos = todos.map((t)=>{
  if(t.id == todo.id){
    return{...t, title:updateTodo.title, details:updateTodo.details}
  }else{
    return t
  }
}) 
setTodos(updatedTodos)
setShowUpdateDialog(false)


  
   }


     function handelCheckClick(){
      console.log("clicked")
        const updatedTodos = todos.map((t)=>{
      if(t.id == todos.id){
        t.isCompleted = !t.isCompleted
      }
      return t;
    })
    setTodos(updatedTodos)

    } 

     function handelDeleteConfirm(){
      const updateTodos = todos.filter((t)=>{
        return t.id != todo.id
      })
      setTodos(updateTodos)

  
    } 

  return (
    <div>
      {/* delete modal */}
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>close</Button>
          <Button onClick={handelDeleteConfirm} style={{color:"red", background:"red"}} autoFocus>
            delete
          </Button>
        </DialogActions>
        </Dialog>
      {/*========== delete modal ==========*/}


      {/* edit modal */}
      <Dialog
        open={showUpdateDialog}
        onClose={handleUpdateClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        edit task        
        </DialogTitle>
        
        <DialogContent>
          <TextField
          value={updateTodo.title}
          onChange={(e)=>{
            setUpdateTodo({...updateTodo, title:e.target.value})
          }}
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label=" task title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={updateTodo.details}
          onChange={(e)=>{
            setUpdateTodo({...updateTodo, details:e.target.value})
          }}
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label=" task details"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>close</Button>
          <Button onClick={handleUpdateConfirm} style={{color:"red", background:"red"}} autoFocus>
            edit
          </Button>
        </DialogActions>

      </Dialog>
      {/*========== edit modal ==========*/}



        <Card className='todoCard' sx={{minWidth:275,  color:"white", marginTop:5}} variant="outlined">
                <CardContent>
                  <Grid container spacing={1}>
                     <Grid  size={8}>
                       <Typography style={{textAlign:"left"}} variant='h5' gutterBottom>{todo.title}</Typography>
                       <Typography style={{textAlign:"right"}} variant='h7' gutterBottom>{todo.details}</Typography>
                            
                         </Grid>
                         <Grid display={'flex'} justifyContent={"space-around"} alignItems={"center"} size={4}>
                            {/* action buttons */}
                            <IconButton 
                            onClick={()=>{
                              handelCheckClick()
                            }}
                            className='iconBtn'
                             aria-label="delete" 
                             style={{
                              background:todo.isCompleted ?"black": "White",
                              // color:"#8bc34a",
                              color:todo.isCompleted ? "#8bc34a": "White",
                              border:"solid #8bc34a 3px "
                              }}>
                            
                              <CheckIcon />
                            </IconButton>

                            {/* edit button */}
                            <IconButton 
                            onClick={handelUpdateClick}
                            className='iconBtn' 
                            aria-label="delete" 
                            style={{color:"blue",border:"solid blue 3px "}}>
                               <EditIcon />
                            </IconButton>
                            {/* ======= edit button ========*/}


                            <IconButton className='iconBtn' aria-label="delete" style={{color:"red",border:"solid red 3px "}}
                            onClick={handelDeleteClick}>
                               <DeleteIcon />
                            </IconButton>                     
                         </Grid>
                    </Grid>
          </CardContent>
        </Card>
    </div>
  )
}
