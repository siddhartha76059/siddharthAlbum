import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <>



            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                <NavLink className="navbar-brand" to="#">E-Album</NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Login">Login <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/SignUp">SignUp</NavLink>
                        </li>
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/Album">Album</NavLink>
                        </li>
                    </ul>

                </div>
                </div>
            </nav>



        </>
    );
}

export default NavBar;