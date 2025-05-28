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

const open = false
export default function Todo({todo}) {


     const {todos , setTodos} = useContext(TodosContext);
     const[showDeleteDialog , setShowDeleteDialog] = useState(false)
  
    // event handlers
    function handelDeleteClick(){
      setShowDeleteDialog(true)
    }
    function handleClose(){
      setShowDeleteDialog(false)
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
        // onClose={handleClose}
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
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handelDeleteConfirm} style={{color:"red", background:"red"}} autoFocus>
            delete
          </Button>
        </DialogActions>
        </Dialog>
      {/*========== delete modal ==========*/}



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
                            <IconButton className='iconBtn' aria-label="delete" style={{color:"blue",border:"solid blue 3px "}}>
                               <EditIcon />
                            </IconButton>
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
