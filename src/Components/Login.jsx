import React, { useState } from "react";
import InputBox from "./InputBox";


const Login = () => {
    const [user, setUser] = useState({
        gmail: "",
        password: "",
    });

    const changeInput = (event) => {
        const { value, name } = event.target;

        console.log(event.target.value);
        console.log(event.target.name);

        setUser((act) => {

            return {
                ...act,
                [name]: value,
            };
        })

    }

    const submitForm = (event) => {

        setUser(user);

    }


    return (
        <>

            <div className="my-5" >
                <h1 className="text-center">Sign In </h1>
                <p className="text-center">Don't share your credentials</p>
                <hr/>
                </div>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-6 col-md-3">
                            <form>

                                <InputBox type="email" className="form-control" placeholder="Enter Email" name="email" onChange={changeInput} value={user.gmail} />
                                <InputBox type="password" className="form-control" placeholder="Enter Password" name="password" onChange={changeInput} value={user.password} />
                                
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default Login;