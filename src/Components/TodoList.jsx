import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';


export default function TodoList() {
  return (
    <>
      <Container maxWidth="sm">
              <Card variant="outlined" style={{color:"white"}}>
                  <CardContent>
                       <Typography variant='h4' gutterBottom>my tasks</Typography>
                       <Divider style={{color:"white"}} />

                       {/* filter button */}
                           <ToggleButtonGroup
                                  // value={alignment}
                                  exclusive
                                   aria-label="text alignment">
                                  <ToggleButton value="left">
                                    all
                                  </ToggleButton>
                                  <ToggleButton value="center">
                                    done
                                  </ToggleButton>
                                  <ToggleButton value="right">
                                    not yet
                                  </ToggleButton>
                           </ToggleButtonGroup>
                       {/* ====== filter button ======*/}
                       <Todo/>
                       <Typography variant="h5" component="div">
                       </Typography>
                       <Typography sx={{ color: '', mb: 1.5 }}>adjective</Typography>
                       <Typography variant="body2">
                         well meaning and kindly.
                         <br />
                         {'"a benevolent smile"'}
                       </Typography>
                     </CardContent>
              </Card>
      </Container>
    </>
  );
}
