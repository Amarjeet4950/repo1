import { IconButton, Paper, Toolbar ,Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions';
import BasicCard from './card';
export default function Home() {

  const dispatch = useDispatch();
  const items = ['it1' , 'it2' , 'it3']
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
            <Typography marginRight='10px'>logo</Typography>
            <input placeholder="Search" onChange/>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={dispatch(getPosts())}
          >
            <AccountCircleIcon/>
            </IconButton>
           
          </Toolbar>
        </AppBar>
        <Box m={12}>
          <Grid container spacing={2}>
            {
              items.map((itm)=>{
              return (
                <Grid item xs={3}>
                  <BasicCard imgurl={} name={}/>
                </Grid>
              )
              }
              )
            }
          </Grid>
        </Box>
        
      </Box>
        
    </div>
  );
}