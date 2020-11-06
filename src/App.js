import React from 'react';
import './App.css';
import Album from './Components/Album';
import NavBar from "./Components/NavBar";
import {Switch, Route, Redirect} from "react-router-dom"
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
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Redirect to="/"/>
    </Switch>
     
    </>
    
  );
}

export default App;
