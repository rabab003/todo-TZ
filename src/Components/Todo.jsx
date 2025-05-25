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



export default function Todo() {
  return (
    <div>
           <Card className='todoCard' sx={{minWidth:275,  color:"white", marginTop:5}} variant="outlined">
                  <CardContent>
                    <Grid container spacing={1}>
                         <Grid  size={8}>
                       <Typography style={{textAlign:"left"}} variant='h5' gutterBottom>my tasks</Typography>
                       <Typography style={{textAlign:"left"}} variant='h7' gutterBottom>the details about tasks</Typography>
                            
                         </Grid>
                         <Grid display={'flex'} justifyContent={"space-around"} alignItems={"center"} size={4}>
                            {/* action buttons */}

                            <IconButton className='iconBtn' aria-label="delete" style={{color:"#8bc34a",border:"solid #8bc34a 3px "}}>
                               <CheckIcon />
                            </IconButton>
                            <IconButton className='iconBtn' aria-label="delete" style={{color:"blue",border:"solid blue 3px "}}>
                               <EditIcon />
                            </IconButton>
                            <IconButton className='iconBtn' aria-label="delete" style={{color:"red",border:"solid red 3px "}}>
                               <DeleteIcon />
                            </IconButton>                     
                         </Grid>
                    </Grid>
                  </CardContent>
            </Card>
    </div>
  )
}
