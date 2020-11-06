import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Album from './Components/Album';
import NavBar from "./Components/NavBar";
import {Switch, Route} from "react-router-dom"
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';


function App() {
  return (

    <>

    <NavBar/>
    <Switch>
      <Route exact path="/Album" component={Album} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
     
    </>
    
  );
}

export default App;
