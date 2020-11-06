import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import { Drawer, 
        AppBar, 
        Toolbar,
        Typography,
        IconButton} from '@material-ui/core' 


import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const sidebar=()=> {
    setOpen(true);
  } 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={sidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{flexGrow:1}}>
            Photos
          </Typography>
          <NavLink  to="/search" style={{color:"white"}}>
            <IconButton color="inherit"><SearchIcon/></IconButton>
          
          </NavLink>
          
        </Toolbar>
      </AppBar>
      <Drawer
      acnhor="left" 
      open ={open} 
      onClose={() => setOpen(false)} 
      >
          <div style={{
              height: "100%",
              width: "250px",
              marginTop : "50px"
              }}>
          <p style={{marginLeft : "20px", }}> 
          This is my drawer</p>
          <hr/>
          <p style={{marginLeft : "20px",}}> 
          This is my drawer second line</p>

          <footer style={{
            marginTop:"400px", 
            backgroundColor:"black", 
            textAlign:"center",
            color:"white"

            }}>
             CopyRight 2020 | by DEMO
             <br/>
             Sid.All Rights Reserved
             </footer>
          </div>
      </Drawer>
    </div>
  );
}
