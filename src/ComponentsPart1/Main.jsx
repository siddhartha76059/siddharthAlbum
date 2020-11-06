import React from "react";
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar";
import SearchBarPage from "./SearchBarPage"
import ExAxios from "./ExAxios";

const Main =()=> {
    return (
        <>
        <Navbar/>
         <Switch>
            <Route  exact path="/abc" component={ExAxios}/>
            <Route  exact path="/search" component={SearchBarPage}/>
        </Switch>
        </>
    ); 
}

export default Main;
