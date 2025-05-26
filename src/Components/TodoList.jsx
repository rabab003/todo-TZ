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
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function TodoList() {
  return (
    <>
      <Container maxWidth="sm">
              <Card variant="outlined" sx={{ minWidth: 275 }} style={{color:"white"}}>
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

                       {/* <Grid Container display={'flex'}> 
                        <Grid style={{background:"green"}} xs={8} justifyContent="space-around" alignItems="center">
                          ggg
                        </Grid>
                        <Grid style={{background:"red"}}  xs={4}  justifyContent="space-around" alignItems="center">
                          ggg
                        </Grid>

                       </Grid> */}

                        <Grid container style={{ marginTop: "20px" }} spacing={2}>
                              <Grid
                                xs={8}
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                              >
                                <TextField
                                  style={{ width: "100%" }}
                                  id="outlined-basic"
                                  label="عنوان المهمة"
                                  variant="outlined"
                                />
                              </Grid>
                  
                              <Grid
                                xs={4}
                                display="flex"
                                justifyContent="space-around"
                                alignItems="center"
                              >
                                <Button
                                  style={{ width: "100%", height: "100%" }}
                                  variant="contained"
                                >
                                  إضافة
                                </Button>
                              </Grid>
                            </Grid>
          {/*== INPUT + ADD BUTTON ==*/}
                     </CardContent>
              </Card>
      </Container>
    </>
  );
}
